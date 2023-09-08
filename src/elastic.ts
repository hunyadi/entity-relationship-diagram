/**
 * Entity Relationship Diagram (in TypeScript)
 * @author  Levente Hunyadi
 * @version 1.0
 * @remarks Copyright (C) 2022 Levente Hunyadi
 * @remarks Licensed under MIT, see https://opensource.org/licenses/MIT
 * @see     https://hunyadi.info.hu/
 **/

import { BooleanMatrix } from "./boolarray";
import { getOffsetRect } from "./htmlpos";
import { Point, Size, Vector } from "./geometry";

function withDefaults<T>() {
    return function <TDefaults extends Partial<T> & { [key: string]: any; }>(defs: TDefaults) {
        return function (p: Pick<T, Exclude<keyof T, keyof TDefaults>> & Partial<TDefaults>): T {
            let result: any = p;
            for (let k of Object.keys(defs)) {
                result[k] = result[k] || defs[k];
            }
            return result;
        };
    };
}

function clamp(num: number, min: number, max: number): number {
    return num <= min ? min : (num >= max ? max : num);
}

/** A function that returns if two elements are connected. */
type ConnectionCheckerFunction = (elem1: HTMLElement, elem2: HTMLElement) => boolean;

export declare interface ElasticLayoutOptions {
    /** Charge of a object, repulsive force exerted by the object, according to Coulomb's law. */
    readonly charge: number;
    /** Stiffness of the spring, attractive force exerted by the connection between objects, according to Hooke's Law. */
    readonly stiffness: number;
    /** Drag force, acts in opposite direction to object's velocity. */
    readonly drag: number;
    /** Gravitational force that pulls objects towards the center. */
    readonly gravity: number;
    /** Number of initial iterations. */
    readonly iterations: number;
}

/**
 * An object upon which forces act in a spring/charge system.
 */
class ElasticLayoutObject {
    force = new Vector(0, 0);
    velocity = new Vector(0, 0);
    position = new Vector(0, 0);
    size = new Size(0, 0);

    constructor(public element: HTMLElement) { }

    public get mass(): number {
        return 1;
    }
}

/**
 * Produces layout with the help of a spring/charge system.
 *
 * Springs exert an attractive force, pulling connected elements towards one another. Charges exert a repulsive force,
 * pushing elements away from one another. A gravitational force pulls objects towards the center. Drag slows down
 * objects that move at high speeds.
 */
export class ElasticLayout {
    private objects: ElasticLayoutObject[];
    private connectivity: BooleanMatrix;
    private lastTimestamp: DOMHighResTimeStamp = 0;
    private running: boolean = false;

    constructor(private options: ElasticLayoutOptions, private canvas: HTMLElement, elements: HTMLElement[], isConnectedFunc: ConnectionCheckerFunction) {
        withDefaults<ElasticLayoutOptions>()({
            charge: 1000,
            stiffness: 0.2,
            drag: 0.5,
            gravity: 2.0,
            iterations: 250,
        });

        this.objects = elements.map(element => new ElasticLayoutObject(element));

        this.connectivity = new BooleanMatrix(elements.length, elements.length);
        for (let [i, source] of this.objects.entries()) {
            for (let [j, target] of this.objects.entries()) {
                this.connectivity.set(i, j, isConnectedFunc(source.element, target.element));
            }
        }
    }

    private getCenterPosition(): Vector {
        const containerRect = this.canvas.getBoundingClientRect();
        return new Vector(containerRect.width / 2, containerRect.height / 2);
    }

    /**
     * Produces a list of objects that participate in elastic layout.
     */
    private getDynamicObjects(): ElasticLayoutObject[] {
        return this.objects.filter(obj => {
            return (obj.element.style.getPropertyPriority("left") != "important" && obj.element.style.getPropertyPriority("top") != "important");
        });
    }

    /**
     * Reads position information from HTML layout into internal data structures.
     */
    private loadPosition(objects: ElasticLayoutObject[]): void {
        const containerRect = this.canvas.getBoundingClientRect();
        const containerRef = new Point(containerRect.x, containerRect.y);

        objects.forEach(obj => {
            const rect = getOffsetRect(obj.element, containerRef);
            obj.position = Vector.from(rect.center);
            obj.size = new Size(rect.width, rect.height);
        });
    }

    /**
     * Sets position information in HTML layout based on data in internal data structures.
     */
    private savePosition(objects: ElasticLayoutObject[]): void {
        objects.forEach(obj => {
            // update position (unless an explicit value is forced with !important)
            obj.element.style.left = (obj.position.x - obj.size.width / 2) + "px";
            obj.element.style.top = (obj.position.y - obj.size.height / 2) + "px";

            obj.position.x = clamp(obj.position.x, -5000, 5000);
            obj.position.y = clamp(obj.position.y, -5000, 5000);
        });
    }

    private isConnected(source: ElasticLayoutObject, target: ElasticLayoutObject) {
        const sourceIndex = this.objects.indexOf(source);
        const targetIndex = this.objects.indexOf(target);
        return this.connectivity.get(sourceIndex, targetIndex);
    }

    initialize(): void {
        const center = this.getCenterPosition();
        const objects = this.getDynamicObjects();
        this.loadPosition(objects);

        this.step(center, objects, 0.1);
        for (let k = 0; k < this.options.iterations; ++k) {
            this.step(center, objects, 0.1);
        }
        this.reset(center, objects);
        this.savePosition(objects);
        this.running = false;

        this.start();
    }

    start(): void {
        this.running = true;
        this.lastTimestamp = performance.now();
        window.requestAnimationFrame(this.tick.bind(this));
    }

    stop(): void {
        this.running = false;
    }

    /**
     * Resets object velocity and forces, and re-centers objects in the viewport.
     * @param centerPos The central position of the viewport.
     * @param objects List of objects that participate in elastic layout.
     */
    private reset(centerPos: Vector, objects: ElasticLayoutObject[]): void {
        const mean = Vector.mean(objects.map(obj => obj.position));
        const offset = centerPos.minus(mean);
        objects.forEach(obj => {
            obj.position.add(offset);
            obj.velocity = new Vector(0, 0);
            obj.force = new Vector(0, 0);
        });
    }

    /**
     * Adjusts position of objects over time as various forces act on them.
     * @param centerPos The central position of the viewport towards which gravity pulls objects.
     * @param objects List of objects that participate in elastic layout.
     * @param elapsed A time delta that elapsed since the last invocation.
     */
    private step(centerPos: Vector, objects: ElasticLayoutObject[], elapsed: DOMHighResTimeStamp): void {
        objects.forEach(obj => {
            let offset = obj.velocity.times(elapsed);
            obj.position.add(offset);
        });
        objects.forEach(obj => {
            obj.velocity = obj.force.times(elapsed / obj.mass);
        });

        for (let i = 0; i < objects.length; ++i) {
            const source = objects[i]!;

            // attraction to center
            const centerDir = centerPos.minus(source.position).normalize();
            const centerForce = centerDir.times(this.options.gravity);
            source.force.add(centerForce);

            // drag force to dampen speed of fast-moving objects
            const dragForce = source.velocity.times(-this.options.drag);
            source.force.add(dragForce);

            for (let j = i + 1; j < objects.length; ++j) {
                const target = objects[j]!;

                const vector = target.position.minus(source.position);
                const distance = vector.magnitude();
                vector.normalize();

                // repulsive force between close items
                const repulsiveForce = vector.times((this.options.charge * this.options.charge) / (1.0 + distance * distance));
                source.force.add(repulsiveForce.reversed());
                target.force.add(repulsiveForce);

                // attractive force between connected items
                if (this.isConnected(source, target)) {
                    const attractiveForce = vector.times(this.options.stiffness * distance);
                    source.force.add(attractiveForce);
                    target.force.add(attractiveForce.reversed());
                }
            }
        }
    }

    /**
     * Invoked when an animation step is about to be painted.
     * @param timestamp The timestamp received for an animation frame event.
     */
    private tick(timestamp: DOMHighResTimeStamp) {
        let elapsed = (timestamp - this.lastTimestamp) / 1000;
        if (elapsed > 5.0) {
            elapsed = 5.0;
        }

        const center = this.getCenterPosition();
        const objects = this.getDynamicObjects();
        this.loadPosition(objects);
        while (elapsed > 0.1) {
            this.step(center, objects, 0.1);
            elapsed -= 0.1;
        }

        this.step(center, objects, elapsed);
        this.savePosition(objects);

        if (this.running) {
            this.lastTimestamp = timestamp;
            window.requestAnimationFrame(this.tick.bind(this));
        }
    }
}

/**
 * Entity Relationship Diagram (in TypeScript)
 * @author  Levente Hunyadi
 * @version 1.0
 * @remarks Copyright (C) 2022 Levente Hunyadi
 * @remarks Licensed under MIT, see https://opensource.org/licenses/MIT
 * @see     https://hunyadi.info.hu/
 **/

import { Arrow, Diagram, Movable } from './diagram';
import { getOffsetCenter, getOffsetPosition, getOffsetRect } from './htmldom';
import { Point, Vector } from './geometry';
import TabPanel from './tabpanel';

function withDefaults<T>() {
    return function <TDefaults extends Partial<T>>(defs: TDefaults) {
        return function (p: Pick<T, Exclude<keyof T, keyof TDefaults>> & Partial<TDefaults>): T {
            let result: any = p;
            for (let k of Object.keys(defs)) {
                result[k] = result[k] || defs[k];
            }
            return result;
        }
    }
}

declare interface Renderable {
    get element(): Element;
}

declare interface EntityProperty {
    readonly name: string;
    readonly type: string;
}

declare interface EntityDescriptor {
    readonly name: string;
    readonly properties: EntityProperty[];
}

class EntityElement implements Renderable {
    private elem: HTMLTableCellElement;

    constructor(private entity: Entity, propertyName: string) {
        this.elem = entity.element.querySelector(`td[data-property="${propertyName}"]`)!;
    }

    public get element(): HTMLElement {
        return this.elem;
    }

    public get parent(): Entity {
        return this.entity;
    }
}

declare interface PropertyAccessor {
    property(id: string): EntityElement;
}

/**
 * Represents an entity in an entity relationship diagram (ERD).
 */
export class Entity implements PropertyAccessor, Renderable {
    private elem: HTMLTableElement;

    constructor(private descriptor: EntityDescriptor) {
        this.elem = document.createElement('table');
        this.elem.classList.add("entity");
        const rows = descriptor.properties.map(property => {
            const propName = `<span class="entity-property-name">${property.name}</span>`;
            const propType = `<span class="entity-property-type">${property.type}</span>`;
            return `<tr><td data-property="${property.name}">${propName}: ${propType}</td></tr>`;
        });
        this.elem.innerHTML = `<thead><tr><th>${descriptor.name} <span class="toggle"></span></th></tr></thead><tbody>` + rows.join('') + '</tbody>';

        const toggle = this.elem.querySelector('thead>tr>th>span.toggle')!;
        const body = this.elem.querySelector('tbody')!;
        toggle.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            body.classList.toggle("hidden");
        });
    }

    public get name(): string {
        return this.descriptor.name;
    }

    public get element(): HTMLElement {
        return this.elem;
    }

    public get head(): HTMLElement {
        return this.elem.querySelector("thead")!;
    }

    property(id: string): EntityElement {
        return new EntityElement(this, id);
    }
}

export class EntityRelationship {
    constructor(public source: EntityElement, public target: EntityElement) { }
}

/** A function that returns if two elements are connected. */
type ConnectedFunction = (elem1: HTMLElement, elem2: HTMLElement) => boolean;

declare interface ElasticLayoutOptions {
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
    force: Vector = new Vector(0, 0);
    velocity: Vector = new Vector(0, 0);

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
class ElasticLayout {
    private objects: ElasticLayoutObject[];
    private lastTimestamp: DOMHighResTimeStamp = 0;
    private running: boolean = false;

    constructor(private options: ElasticLayoutOptions, private canvas: HTMLElement, elements: HTMLElement[], private isConnectedFunc: ConnectedFunction) {
        withDefaults<ElasticLayoutOptions>()({
            charge: 1000,
            stiffness: 0.2,
            drag: 0.5,
            gravity: 2.0,
            iterations: 250,
        });

        this.objects = elements.map(element => {
            return new ElasticLayoutObject(element);
        });
    }

    initialize(): void {
        this.step(0.1);
        for (let k = 0; k < this.options.iterations; ++k) {
            if (this.step(0.1)) {
                return;
            }
        }
        this.running = false;
    }

    start(): void {
        this.running = true;
        this.lastTimestamp = performance.now();
        window.requestAnimationFrame(this.tick.bind(this));
    }

    stop(): void {
        this.running = false;
    }

    private step(elapsed: DOMHighResTimeStamp): boolean {
        const containerRect = this.canvas.getBoundingClientRect();
        const containerRef = new Point(containerRect.x, containerRect.y);

        this.objects.forEach(obj => {
            let offset = obj.velocity.times(elapsed);

            const objPos = getOffsetPosition(obj.element, containerRef);
            obj.element.style.left = (objPos.x + offset.x) + 'px';
            obj.element.style.top = (objPos.y + offset.y) + 'px';
        });
        this.objects.forEach(obj => {
            obj.velocity = obj.force.times(elapsed / obj.mass);
        });

        const centerPos = new Vector(containerRect.width / 2, containerRect.height / 2);

        for (let i = 0; i < this.objects.length; ++i) {
            const source = this.objects[i]!;
            const sourcePos = Vector.from(getOffsetCenter(source.element, containerRef));

            // attraction to center
            const centerDir = centerPos.minus(sourcePos).normalize();
            const centerForce = centerDir.times(this.options.gravity);
            source.force.add(centerForce);

            // drag force to dampen speed of fast-moving objects
            const dragForce = source.velocity.times(-this.options.drag);
            source.force.add(dragForce);

            for (let j = i + 1; j < this.objects.length; ++j) {
                const target = this.objects[j]!;
                const targetPos = Vector.from(getOffsetCenter(target.element, containerRef));

                const vector = targetPos.minus(sourcePos);
                const distance = vector.magnitude();
                vector.normalize();

                // repulsive force between close items
                const repulsiveForce = vector.times((this.options.charge * this.options.charge) / (0.1 + distance * distance));
                source.force.add(repulsiveForce.reversed());
                target.force.add(repulsiveForce);

                // attractive force between connected items
                if (this.isConnectedFunc(source.element, target.element)) {
                    const attractiveForce = vector.times(this.options.stiffness * distance);
                    source.force.add(attractiveForce);
                    target.force.add(attractiveForce.reversed());
                }
            }
        }

        // check stop condition
        return this.objects.every(obj => {
            if (obj.velocity.magnitude() > 2.0) {
                return false;
            }

            const rect = getOffsetRect(obj.element, containerRef);
            return rect.left > 0 && rect.top > 0 &&
                rect.right < containerRect.width && rect.bottom < containerRect.height;
        })
    }

    private tick(timestamp: DOMHighResTimeStamp) {
        let elapsed = (timestamp - this.lastTimestamp) / 1000;
        while (elapsed > 0.1) {
            if (this.step(0.1)) {
                return;
            }
            elapsed -= 0.1;
        }

        if (!this.running || this.step(elapsed)) {
            return;
        }

        this.lastTimestamp = timestamp;
        window.requestAnimationFrame(this.tick.bind(this));
    }
}

declare interface EntityRelationshipData {
    entities: Entity[];
    relationships: EntityRelationship[];
}

class EntityDiagram {
    protected diagram: Diagram;

    constructor(elem: HTMLElement, protected data: EntityRelationshipData) {
        this.diagram = new Diagram(elem);
        elem.classList.add("diagram");
    }
}

export class ElasticEntityDiagram extends EntityDiagram {
    constructor(elem: HTMLElement, data: EntityRelationshipData, options: ElasticLayoutOptions) {
        super(elem, data);
        elem.classList.add("elastic");

        this.layout(options);
    }

    private layout(options: ElasticLayoutOptions): void {
        this.data.entities.forEach(entity => {
            this.diagram.addElement(entity.element);
            new Movable(entity.element);
        });
        this.data.relationships.forEach(relationship => {
            this.diagram.addConnector(new Arrow(relationship.source.element, relationship.target.element));
        });
        this.diagram.shuffle();

        let layout = new ElasticLayout(options,
            this.diagram.getHost(),
            this.data.entities.map(entity => { return entity.element }),
            (elem1, elem2) => { return this.diagram.isConnected(elem1, elem2) }
        );
        layout.initialize();
    }
}

export class NavigableEntityDiagram extends EntityDiagram {
    private selector: HTMLSelectElement;

    constructor(elem: HTMLElement, data: EntityRelationshipData) {
        super(elem, data);
        elem.classList.add("navigable");
        this.selector = this.diagram.getHost().querySelector("select")!;

        this.data.entities.forEach(entity => {
            entity.head.addEventListener("click", event => {
                event.preventDefault();
                this.show(entity);
            })

            const option = document.createElement("option");
            option.innerText = entity.name;
            this.selector.append(option);
        });
        this.selector.addEventListener("change", () => {
            const selected = this.data.entities.find(entity => {
                return entity.name == this.selector.value;
            });
            if (selected) {
                this.display(selected);
            }
        });
        if (this.data.entities.length > 0) {
            this.display(this.data.entities[0]!);
        }
    }

    show(entity: Entity): void {
        this.selector.value = entity.name;
        this.display(entity);
    }

    private display(entity: Entity): void {
        this.diagram.clear();

        const leftPanel = this.diagram.getHost().querySelector(".left")!;
        const centerPanel = this.diagram.getHost().querySelector(".center")!;
        const rightPanel = this.diagram.getHost().querySelector(".right")!;

        const visible = new Set<Entity>();

        centerPanel.append(entity.element);
        this.diagram.addElement(entity.element);

        // add entities to diagram connected by a relationship
        this.data.relationships.forEach(relationship => {
            let updated = false;
            if (relationship.source.parent == entity && relationship.target.parent == entity) {
                updated = true;
            } else if (relationship.target.parent == entity) {
                const e = relationship.source.parent;
                if (!visible.has(e)) {
                    leftPanel.append(e.element);
                    this.diagram.addElement(e.element);
                    visible.add(e);
                }
                updated = true;
            } else if (relationship.source.parent == entity) {
                const e = relationship.target.parent;
                if (!visible.has(e)) {
                    rightPanel.append(e.element);
                    this.diagram.addElement(e.element);
                    visible.add(e);
                }
                updated = true;
            }

            if (updated) {
                this.diagram.addConnector(new Arrow(relationship.source.element, relationship.target.element));
            }
        });
    }
}

export class EntityGraph {
    /** Maps entities to their neighbors. */
    private graph = new Map<Entity, Set<Entity>>();

    constructor(relationships: EntityRelationship[]) {
        relationships.forEach(relationship => {
            const source = relationship.source.parent;
            const target = relationship.target.parent;
            if (source !== target) {  // ignore loops to self
                let neighbors = this.graph.get(source);
                if (neighbors !== undefined) {
                    neighbors.add(target);  // ignore parallel edges to same node
                } else {
                    neighbors = new Set();
                    neighbors.add(target);  // ignore parallel edges to same node
                    this.graph.set(source, neighbors);
                }
            }
        });
    }

    shortestPath(source: Entity, target: Entity): Entity[] | undefined {
        const queue: Entity[] = [source];
        const predecessor = new Map<Entity, Entity>();
        const visited = new Set<Entity>();
        visited.add(source);

        while (queue.length > 0) {
            const u = queue.shift()!;
            const neighbors = this.graph.get(u);
            if (!neighbors) {
                continue;
            }

            for (const v of neighbors) {
                if (visited.has(v)) {
                    continue;
                }

                visited.add(v);
                if (v === target) {  // check if the path is complete
                    let path = [v];

                    // backtrack through the path
                    let p = u;
                    while (p !== source) {
                        path.push(p);
                        p = predecessor.get(p)!;
                    }
                    path.push(p);
                    path.reverse();
                    return path;
                }

                predecessor.set(v, u);
                queue.push(v);
            }
        }
        return undefined;
    }
}

declare interface EntityRelationshipFactory {
    createEntity(descriptor: EntityDescriptor): Entity;
    createRelationship(source: EntityElement, target: EntityElement): EntityRelationship;
    createElasticDiagram(elem: HTMLElement, data: EntityRelationshipData, options: ElasticLayoutOptions): ElasticEntityDiagram;
    createNavigableDiagram(elem: HTMLElement, data: EntityRelationshipData): NavigableEntityDiagram;
}

class EntityRelationshipFactoryImpl implements EntityRelationshipFactory {
    createEntity(descriptor: EntityDescriptor): Entity {
        return new Entity(descriptor);
    }

    createRelationship(source: EntityElement, target: EntityElement): EntityRelationship {
        return new EntityRelationship(source, target);
    }

    createElasticDiagram(elem: HTMLElement, data: EntityRelationshipData, options: ElasticLayoutOptions): ElasticEntityDiagram {
        return new ElasticEntityDiagram(elem, data, options);
    }

    createNavigableDiagram(elem: HTMLElement, data: EntityRelationshipData): NavigableEntityDiagram {
        return new NavigableEntityDiagram(elem, data);
    }
}

window['erd'] = new EntityRelationshipFactoryImpl();
window['TabPanel'] = TabPanel;

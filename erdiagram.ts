/** A point in 2-dimensional space. */
interface Coordinate {
    readonly x: number;
    readonly y: number;
}

class Point implements Coordinate {
    constructor(public x: number, public y: number) { }
}

class Vector implements Coordinate {
    constructor(public x: number, public y: number) { }

    static from(p: Coordinate): Vector {
        return new Vector(p.x, p.y);
    }

    /** The length of the vector. */
    magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /** A vector with equal length but opposite direction. */
    reversed(): Vector {
        return new Vector(-this.x, -this.y);
    }

    /** Returns the sum of two vectors. */
    plus(op: Readonly<Vector>): Vector {
        return new Vector(this.x + op.x, this.y + op.y);
    }

    /** Returns the difference of two vectors. */
    minus(op: Readonly<Vector>): Vector {
        return new Vector(this.x - op.x, this.y - op.y);
    }

    /** Returns a new vector with a magnitude multiplied by the given scalar. */
    times(scalar: number): Vector {
        return new Vector(this.x * scalar, this.y * scalar);
    }

    /** Normalizes a vector to a unit length. Mutates the original vector. */
    normalize(): Vector {
        const len = this.magnitude();
        this.x /= len;
        this.y /= len;
        return this;
    }

    /** Adds a vector to this vector. Mutates the original vector. */
    add(op: Readonly<Vector>): Vector {
        this.x += op.x;
        this.y += op.y;
        return this;
    }

    /** Subtracts a vector from this vector. Mutates the original vector. */
    subtract(op: Readonly<Vector>): Vector {
        this.x -= op.x;
        this.y -= op.y;
        return this;
    }

    /** Multiplies the magnitude of this vector by the given scalar. Mutates the original vector. */
    multiply(scalar: number): Vector {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }
}

class Rect {
    constructor(public left: number, public top: number, public right: number, public bottom: number) { }

    public get width(): number {
        return this.right - this.left;
    }

    public get height(): number {
        return this.bottom - this.top;
    }

    public get centerX(): number {
        return (this.left + this.right) / 2;
    }

    public get centerY(): number {
        return (this.top + this.bottom) / 2;
    }
}

/**
 * Checks if two nodes are in ancestor/descendant relationship.
 * @param ancestor The ancestor node.
 * @param node The potential descendant node.
 * @returns True if the node is a descendant of the ancestor node.
 */
function isDescendant(ancestor: Node, node: Node): boolean {
    return (node.compareDocumentPosition(ancestor) & Node.DOCUMENT_POSITION_CONTAINS) != 0;
}

class VisibilityChecker {
    private cache = new Map<HTMLElement, HTMLElement>();

    /**
     * Finds the first visible ancestor element of a child element, or returns a root element if none is found.
     * @param element The element whose first visible ancestor to seek.
     * @returns The first element in the hierarchy that is visible (i.e. CSS `display` is not `none`), or the root element.
     */
    getFirstVisibleAncestor(element: HTMLElement): HTMLElement {
        const ancestor = this.cache.get(element);
        if (ancestor) {
            return ancestor;
        }

        let e = element;
        while (e.offsetParent == null && e.parentElement != null) {
            e = e.parentElement;
        }
        this.cache.set(element, e);
        return e;
    }
}

/**
 * Transforms the position of an element to a reference coordinate system.
 * The reference coordinate system is specified relative to the viewport.
 * @param element The HTML element whose position to find.
 * @returns The position of the element w.r.t. the reference system.
 */
function getOffsetPosition(element: HTMLElement, ref: Point): Coordinate {
    const rect = element.getBoundingClientRect();
    return new Point(rect.x - ref.x, rect.y - ref.y);
}

function getOffsetCenter(element: HTMLElement, ref: Point): Coordinate {
    const rect = element.getBoundingClientRect();
    const midX = (rect.right + rect.left) / 2;
    const midY = (rect.bottom + rect.top) / 2;
    return new Point(midX - ref.x, midY - ref.y);
}

function getOffsetRect(element: HTMLElement, ref: Point): Rect {
    const rect = element.getBoundingClientRect();
    return new Rect(rect.left - ref.x, rect.top - ref.y, rect.right - ref.x, rect.bottom - ref.y);
}

function createSVGElement(typeName: string): SVGElement {
    return document.createElementNS('http://www.w3.org/2000/svg', typeName);
}

abstract class Shape {
    /**
     * Creates a shape in the diagram.
     * @param elem The SVG element associated with this shape.
     */
    constructor(protected elem: SVGElement) { }

    public get element(): SVGElement {
        return this.elem;
    }
}

abstract class Connector extends Shape {
    /**
     * Creates a connector that connects two HTML elements in the diagram.
     * @param elem The SVG element associated with this connector.
     * @param sourceElement The HTML element acting as the source endpoint.
     * @param targetElement The HTML element acting as the target endpoint.
     */
    constructor(elem: SVGElement, protected sourceElement: HTMLElement, protected targetElement: HTMLElement) {
        super(elem);
    }

    public get source(): HTMLElement {
        return this.sourceElement;
    }

    public get target(): HTMLElement {
        return this.targetElement;
    }

    /** Removes the connector from the DOM. */
    remove() {
        this.elem.remove();
    }

    /** Redraws the connector. */
    abstract draw(diagram: Diagram, checker: VisibilityChecker): void;
}

class Diagram {
    /** The host element that contains other elements between which connections can be made. */
    private host: HTMLDivElement;

    /** The SVG element that encapsulates connectors in a separate layer. */
    private svg: SVGSVGElement;

    /** Set of all connectors. */
    private connectors: Connector[] = [];

    /** Listens to source and target element size changes. */
    private resizeObserver: ResizeObserver;

    /** Listens to position changes. */
    private styleObserver: MutationObserver;

    /** Listens to removing elements from the diagram. */
    private childObserver: MutationObserver;

    readonly markerWidth: number = 10;
    readonly markerHeight: number = 7;

    /**
     * Creates a diagram.
     * @param svg 
     */
    constructor(private container: HTMLElement) {
        this.svg = createSVGElement('svg') as SVGSVGElement;
        this.svg.innerHTML = `<defs><marker id="arrowhead" markerWidth="${this.markerWidth}" markerHeight="${this.markerHeight}" refX="${this.markerWidth}" refY="${this.markerHeight / 2}" orient="auto"><polygon points="0 0, ${this.markerWidth} ${this.markerHeight / 2}, 0 ${this.markerHeight}" /></marker></defs>`;
        container.append(this.svg);
        this.host = document.createElement("div");
        container.append(this.host);

        this.resizeObserver = new ResizeObserver(entries => {
            const connectors = this.connectors.filter(connector => {
                for (let entry of entries) {
                    const element = entry.target;

                    if (connector.source == element || connector.target == element || connector.source.offsetParent == element || connector.target.offsetParent == element) {
                        return true;
                    }
                }
                return false;
            });

            // redraw a connector if one of its endpoint elements has changed size
            this.redraw(connectors);
        });

        this.styleObserver = new MutationObserver(mutationList => {
            mutationList.forEach(mutation => {
                switch (mutation.attributeName) {
                    case 'style':
                        const connectors = this.connectors.filter(connector => {
                            const element = mutation.target as HTMLElement;
                            return connector.source == element || connector.target == element ||
                                isDescendant(element, connector.source) || isDescendant(element, connector.target);
                        });

                        // redraw a connector if one of its endpoint elements has changed size
                        this.redraw(connectors);
                        break;
                }
            });
        });

        this.childObserver = new MutationObserver(mutationsList => {
            let unattachedConnectors: Set<Connector> = new Set();

            mutationsList.forEach(mutation => {
                mutation.removedNodes.forEach(node => {
                    this.connectors.forEach(connector => {
                        if (isDescendant(node, connector.source) || isDescendant(node, connector.target)) {
                            unattachedConnectors.add(connector);
                        }
                    });
                });
            });

            unattachedConnectors.forEach(connector => {
                connector.remove();
            });
            this.connectors = this.connectors.filter(connector => !unattachedConnectors.has(connector));
        });
        this.childObserver.observe(container, { subtree: true, childList: true });
    }

    isConnectedTo(source: HTMLElement, target: HTMLElement): boolean {
        return this.connectors.some(connector => {
            return (connector.source == source || isDescendant(source, connector.source)) &&
                (connector.target == target || isDescendant(target, connector.target));
        });
    }

    isConnected(elem1: HTMLElement, elem2: HTMLElement): boolean {
        return this.isConnectedTo(elem1, elem2) || this.isConnectedTo(elem2, elem1);
    }

    addElement(element: HTMLElement): void {
        if (!isDescendant(this.host, element)) {
            this.host.append(element);
        }
        new Movable(element);
    }

    addConnector(connector: Connector): void {
        this.connectors.push(connector);
        this.svg.appendChild(connector.element);

        // trigger redraw if endpoint element size changes
        this.resizeObserver.observe(connector.source);
        this.resizeObserver.observe(connector.target);

        // listen to events on closest positioned ancestor to handle left/top expressed as percentage
        if (connector.source.offsetParent) {
            this.resizeObserver.observe(connector.source.offsetParent);
        }
        if (connector.target.offsetParent) {
            this.resizeObserver.observe(connector.target.offsetParent);
        }

        // trigger redraw if endpoint element position changes
        this.styleObserver.observe(connector.source, { attributeFilter: ["style"] });
        this.styleObserver.observe(connector.target, { attributeFilter: ["style"] });

        // listen to events on positioned ancestors to handle case when element moves with its container
        this.getPositionedAncestors(connector.source).forEach(ancestor => {
            this.styleObserver.observe(ancestor, { attributeFilter: ["style"] });
        })
        this.getPositionedAncestors(connector.target).forEach(ancestor => {
            this.styleObserver.observe(ancestor, { attributeFilter: ["style"] });
        })
    }

    /**
     * Finds all positioned ancestors of a diagram element.
     * @param element The diagram element whose positioned ancestors to find.
     * @returns A list of positioned ancestors.
     */
    private getPositionedAncestors(element: HTMLElement): HTMLElement[] {
        let result: HTMLElement[] = [];
        let parent = element.offsetParent as HTMLElement | null;
        while (parent != null && parent != this.container) {
            result.push(parent);
            parent = parent.offsetParent as HTMLElement | null;
        }
        return result;
    }

    /**
     * Obtains the bounding box of an element w.r.t. the diagram coordinate system.
     * @param element The diagram element whose bounding box to find.
     * @returns The bounding box of the diagram element in local coordinates.
     */
    getBoundingRect(element: Element): Rect {
        const rect = element.getBoundingClientRect();
        const refRect = this.svg.getBoundingClientRect();
        return new Rect(
            rect.left - refRect.left,
            rect.top - refRect.top,
            rect.right - refRect.left,
            rect.bottom - refRect.top
        )
    }

    getHost(): HTMLElement {
        return this.host;
    }

    getChildren(): HTMLElement[] {
        return Array.from(this.host.children) as HTMLElement[]
    }

    shuffle(): void {
        this.getChildren().forEach(elem => {
            const outerWidth = this.host.offsetWidth;
            const outerHeight = this.host.offsetHeight;
            const childWidth = elem.offsetWidth;
            const childHeight = elem.offsetHeight;

            elem.style.left = (Math.random() * (outerWidth - childWidth)) + 'px';
            elem.style.top = (Math.random() * (outerHeight - childHeight)) + 'px';
        });
    }

    private redraw(connectors: Connector[]) {
        if (connectors.length > 0) {
            const checker = new VisibilityChecker();
            connectors.forEach(connector => {
                // redraw a connector if one of its endpoint elements has changed size
                connector.draw(this, checker);
            });
        }
    }
}

class Arrow extends Connector {
    public get path(): SVGPathElement {
        return this.elem as SVGPathElement;
    }

    constructor(source: HTMLElement, target: HTMLElement) {
        const path = createSVGElement('path') as SVGSVGElement;
        path.setAttribute('stroke', 'black');
        path.setAttribute('fill', 'transparent');
        path.setAttribute('marker-end', 'url(#arrowhead)');
        super(path, source, target);
    }

    draw(diagram: Diagram, checker: VisibilityChecker): void {
        let source: Element = checker.getFirstVisibleAncestor(this.source);
        let target: Element = checker.getFirstVisibleAncestor(this.target);

        if (source == target) {
            this.path.setAttribute('d', '');
            return;
        }

        const sourceRect = diagram.getBoundingRect(source);
        const targetRect = diagram.getBoundingRect(target);

        let sourceX: number = 0;
        let targetX: number = 0;
        let sourceY = (sourceRect.top + sourceRect.bottom) / 2;
        let targetY = (targetRect.top + targetRect.bottom) / 2;

        let sourcePt: Point;
        let sourceCtlPt: Point;
        let targetCtlPt: Point;
        let targetPt: Point;

        if (targetRect.left - sourceRect.right > 3 * diagram.markerWidth || sourceRect.left - targetRect.right > 3 * diagram.markerWidth) {
            if (sourceRect.right < targetRect.left) {
                // rightward pointing arrow
                sourceX = sourceRect.right;
                targetX = targetRect.left;
            } else {
                // leftward pointing arrow
                sourceX = sourceRect.left;
                targetX = targetRect.right;
            }

            sourcePt = new Point(sourceX, sourceY);
            targetPt = new Point(targetX, targetY);

            const midX = (sourcePt.x + targetPt.x) / 2;
            sourceCtlPt = new Point(midX, sourcePt.y);
            targetCtlPt = new Point(midX, targetPt.y);
        } else {
            let offsetX: number = 0;

            if (Math.abs(sourceRect.left - targetRect.left) < Math.abs(sourceRect.right - targetRect.right)) {
                sourceX = sourceRect.left;
                targetX = targetRect.left;
                offsetX = -(sourceRect.width + targetRect.width) / 2;
            } else {
                sourceX = sourceRect.right;
                targetX = targetRect.right;
                offsetX = (sourceRect.width + targetRect.width) / 2;
            }

            sourcePt = new Point(sourceX, sourceY);
            targetPt = new Point(targetX, targetY);

            sourceCtlPt = new Point(sourceX + offsetX, sourcePt.y);
            targetCtlPt = new Point(targetX + offsetX, targetPt.y);
        }

        const curve = `M${sourcePt.x} ${sourcePt.y} C${sourceCtlPt.x} ${sourceCtlPt.y} ${targetCtlPt.x} ${targetCtlPt.y} ${targetPt.x} ${targetPt.y}`;
        this.path.setAttribute('d', curve);
    }
}

/**
 * Permits an element to be moved with mouse drag.
 */
class Movable {
    private mousePos: Coordinate = new Point(0, 0);
    private elementPos: Coordinate = new Point(0, 0);

    private mouseMoveListener = (event: MouseEvent) => {
        event.preventDefault();
        const deltaX = event.clientX - this.mousePos.x;
        const deltaY = event.clientY - this.mousePos.y;
        this.element.style.left = (this.elementPos.x + deltaX) + 'px';
        this.element.style.top = (this.elementPos.y + deltaY) + 'px';
    };

    constructor(private element: HTMLElement) {
        element.addEventListener('mousedown', (event) => {
            this.mousePos = new Point(event.clientX, event.clientY);

            document.addEventListener('mouseup', () => {
                document.removeEventListener('mousemove', this.mouseMoveListener, true);
            }, { "capture": true, "once": true });
            document.addEventListener('mousemove', this.mouseMoveListener, true);

            const rect = element.offsetParent!.getBoundingClientRect();
            this.elementPos = getOffsetPosition(element, new Point(rect.left, rect.top));
        }, true);
    }
}

interface EntityProperty {
    readonly name: string;
    readonly type: string;
}

interface EntityDescriptor {
    readonly name: string;
    readonly properties: EntityProperty[];
}

/**
 * Represents an entity in an entity relationship diagram (ERD).
 */
class Entity {
    private elem: HTMLTableElement;

    constructor(descriptor: EntityDescriptor) {
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
            body.classList.toggle("hidden");
        });
    }

    public get element(): HTMLElement {
        return this.elem;
    }

    sub(id: string): HTMLElement {
        return this.elem.querySelector(`[data-property="${id}"]`)!;
    }
}

/** A function that returns if two elements are connected. */
type ConnectedFunction = (elem1: HTMLElement, elem2: HTMLElement) => boolean;

interface ForceLayoutOptions {
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

class ForceLayoutDefaultOptions implements ForceLayoutOptions {
    readonly charge: number = 1000;
    readonly stiffness: number = 0.2;
    readonly drag: number = 0.5;
    readonly gravity: number = 2.0;
    readonly iterations: number = 250;
}

/**
 * An object upon which forces act in a spring/charge system.
 */
class ForceLayoutObject {
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
class ForceLayout {
    private objects: ForceLayoutObject[];
    private lastTimestamp: DOMHighResTimeStamp = 0;

    constructor(private options: ForceLayoutOptions, private canvas: HTMLElement, elements: HTMLElement[], private isConnectedFunc: ConnectedFunction) {
        this.objects = elements.map(element => {
            return new ForceLayoutObject(element);
        });
    }

    start(): void {
        this.step(0.1);
        for (let k = 0; k < this.options.iterations; ++k) {
            if (this.step(0.1)) {
                return;
            }
        }

        this.lastTimestamp = performance.now();
        window.requestAnimationFrame(this.tick.bind(this));
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

        if (this.step(elapsed)) {
            return;
        }

        this.lastTimestamp = timestamp;
        window.requestAnimationFrame(this.tick.bind(this));
    }
}

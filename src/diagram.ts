/**
 * Entity Relationship Diagram (in TypeScript)
 * @author  Levente Hunyadi
 * @version 1.0
 * @remarks Copyright (C) 2022 Levente Hunyadi
 * @remarks Licensed under MIT, see https://opensource.org/licenses/MIT
 * @see     https://hunyadi.info.hu/
 **/

import { Point, Rect } from "./geometry";
import { createSVGElement, FirstVisibleAncestor } from "./htmldom";

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
    abstract draw(diagram: Diagram, checker: FirstVisibleAncestor): void;
}

/**
 * Produces a unique identifier.
 * @param len The number of random characters to generate.
 * @returns An alphanumeric sequence.
 */
function getUniqueIdentifier(len = 8) {
    const base = 36;
    return Array.from(
        { length: len },
        () => Math.floor(base * Math.random()).toString(base)
    ).join("")
}

export class Diagram {
    /** The host element that contains other elements between which connections can be made. */
    public host: HTMLDivElement;

    /** The SVG element that encapsulates connectors in a separate layer. */
    private svg: SVGSVGElement;

    /** Set of all elements. */
    private elements: HTMLElement[] = [];

    /** Set of all connectors. */
    private connectors: Connector[] = [];

    /** Listens to source and target element size changes. */
    private resizeObserver: ResizeObserver;

    /** Listens to position or visibility changes. */
    private styleObserver: MutationObserver;

    /** Listens to removing elements from the diagram. */
    private childObserver: MutationObserver;

    /** True if the diagram is to be redrawn in the next paint cycle. */
    private repainting: boolean = false;

    readonly markerId: string = getUniqueIdentifier();
    readonly markerWidth: number = 10;
    readonly markerHeight: number = 7;

    /**
     * Creates a diagram.
     * @param container The container element that is to wrap the item host layer and the drawing layer.
     */
    constructor(container: HTMLElement) {
        // grab current children of container element
        const fragment = document.createDocumentFragment();
        Array.from(container.children).forEach(child => {
            fragment.append(child);
        });

        // set up drawing layer for connectors
        this.svg = createSVGElement("svg") as SVGSVGElement;
        this.svg.innerHTML = '<defs>' +
            `<marker id="${this.markerId}" markerWidth="${this.markerWidth}" markerHeight="${this.markerHeight}" refX="${this.markerWidth}" refY="${this.markerHeight / 2}" orient="auto">` +
            `<polygon points="0 0, ${this.markerWidth} ${this.markerHeight / 2}, 0 ${this.markerHeight}" />` +
            '</marker>' +
            '</defs>';
        container.append(this.svg);

        // set up item host layer in which connectable elements reside
        this.host = document.createElement("div");
        this.host.append(fragment);
        container.append(this.host);

        // set up observers to monitor size, position and visibility changes
        const observer = new ResizeObserver(this.redraw.bind(this));
        observer.observe(this.host);

        this.resizeObserver = new ResizeObserver(this.redraw.bind(this));
        this.styleObserver = new MutationObserver(this.redraw.bind(this));

        // set up observer to monitor removing dangling connectors
        this.childObserver = new MutationObserver(mutationsList => {
            let unattachedConnectors: Set<Connector> = new Set();

            mutationsList.forEach(mutation => {
                mutation.removedNodes.forEach(node => {
                    this.connectors.forEach(connector => {
                        if (node.contains(connector.source) || node.contains(connector.target)) {
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

        this.clear();
    }

    /**
     * Checks if a source element (or one of its descendants) is connected to a target element (or one of its descendants).
     * Aware of connection directionality.
     * @param source The source element whose DOM subtree to check.
     * @param target The target element whose DOM subtree to check.
     * @returns True if the elements are connected at some level in the DOM hierarchy.
     */
    isConnectedTo(source: HTMLElement, target: HTMLElement): boolean {
        return this.connectors.some(connector => {
            return source.contains(connector.source) && target.contains(connector.target);
        });
    }

    /**
     * Checks if an element (or one of its descendants) is connected to another element (or one of its descendants).
     * Oblivious to connection directionality.
     * @param elem1 One of the elements whose DOM subtree to check.
     * @param elem2 One of the elements whose DOM subtree to check.
     * @returns True if the elements are connected at some level in the DOM hierarchy.
     */
    isConnected(elem1: HTMLElement, elem2: HTMLElement): boolean {
        return this.isConnectedTo(elem1, elem2) || this.isConnectedTo(elem2, elem1);
    }

    addElement(element: HTMLElement): void {
        this.elements.push(element);
        if (!this.host.contains(element)) {
            this.host.append(element);
        }
    }

    addConnector(connector: Connector): void {
        this.connectors.push(connector);
        this.svg.appendChild(connector.element);

        this.observeConnectorEndpoint(connector.source);
        this.observeConnectorEndpoint(connector.target);
    }

    removeConnector(connector: Connector): void {
        const connectors = this.connectors.filter(c => c !== connector);
        connector.remove();
        this.resizeObserver.disconnect();

        connectors.forEach(connector => {
            this.addConnector(connector);
        });
    }

    clear(): void {
        this.childObserver.disconnect();

        this.connectors.forEach(connector => {
            connector.remove();
        });
        this.resizeObserver.disconnect();
        this.connectors = [];

        this.elements.forEach(element => {
            element.remove();
        });
        this.elements = [];

        this.childObserver.observe(this.host, { subtree: true, childList: true });
        this.styleObserver.observe(this.host, { subtree: true, attributeFilter: ["class", "style"] });
    }

    private observeConnectorEndpoint(element: HTMLElement): void {
        // trigger redraw if endpoint element size changes
        this.resizeObserver.observe(element);

        // listen to events on closest positioned ancestor to handle left/top expressed as percentage
        if (element.offsetParent) {
            this.resizeObserver.observe(element.offsetParent);
        }
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
        );
    }

    shuffle(): void {
        Array.from(this.host.children).forEach(child => {
            const elem = child as HTMLElement;
            const outerWidth = this.host.offsetWidth;
            const outerHeight = this.host.offsetHeight;
            const childWidth = elem.offsetWidth;
            const childHeight = elem.offsetHeight;

            elem.style.left = (Math.random() * (outerWidth - childWidth)) + "px";
            elem.style.top = (Math.random() * (outerHeight - childHeight)) + "px";
        });
    }

    private redraw() {
        if (!this.repainting) {
            window.requestAnimationFrame(this.repaint.bind(this));
            this.repainting = true;
        }
    }

    private repaint() {
        if (this.connectors.length > 0) {
            const checker = new FirstVisibleAncestor();
            this.connectors.forEach(connector => {
                // redraw a connector if one of its endpoint elements has changed position or size
                connector.draw(this, checker);
            });
        }
        this.repainting = false;
    }
}

export class Arrow extends Connector {
    public get path(): SVGPathElement {
        return this.elem as SVGPathElement;
    }

    constructor(source: HTMLElement, target: HTMLElement) {
        const path = createSVGElement("path") as SVGSVGElement;
        path.setAttribute("stroke", "black");
        path.setAttribute("fill", "transparent");
        super(path, source, target);
    }

    draw(diagram: Diagram, checker: FirstVisibleAncestor): void {
        let source: Element = checker.get(this.source);
        let target: Element = checker.get(this.target);

        if (source == target) {
            this.path.removeAttribute("d");
            this.path.removeAttribute("marker-end");
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
        this.path.setAttribute("d", curve);
        this.path.setAttribute("marker-end", `url(#${diagram.markerId})`);
    }
}

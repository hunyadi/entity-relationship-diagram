/**
 * Entity Relationship Diagram (in TypeScript)
 * @author  Levente Hunyadi
 * @version 1.0
 * @remarks Copyright (C) 2022 Levente Hunyadi
 * @remarks Licensed under MIT, see https://opensource.org/licenses/MIT
 * @see     https://hunyadi.info.hu/
 **/

import { Point, Rect } from "./geometry";
import { createSVGElement, FirstVisibleAncestor, IsAncestorSelected } from "./htmldom";

abstract class Shape {
    /**
     * Creates a shape in the diagram.
     * @param elem The SVG element associated with this shape.
     */
    constructor(protected elem: SVGElement) { }

    get element(): SVGElement {
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

    get source(): HTMLElement {
        return this.sourceElement;
    }

    get target(): HTMLElement {
        return this.targetElement;
    }

    /** Removes the connector from the DOM. */
    remove() {
        this.elem.remove();
    }

    /** Redraws the connector. */
    abstract draw(diagram: DiagramCanvas, visibility: FirstVisibleAncestor, selected: IsAncestorSelected): void;
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
    ).join("");
}

const enum MarkerState {
    Regular = "regular",
    SourceSelected = "source-selected",
    TargetSelected = "target-selected",
}

export class DiagramCanvas {
    /** The container element that is to wrap the item host layer and the drawing layer. */
    public element: HTMLDivElement;

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

    readonly markerWidth: number = 10;
    readonly markerHeight: number = 7;
    readonly markers = new Map<MarkerState, string>();

    /**
     * Creates a diagram.
     * @param container The container element that is to wrap the item host layer and the drawing layer.
     */
    constructor(parent: HTMLElement) {
        const container = document.createElement("div");
        container.classList.add("diagram-canvas");

        // grab current children of container element
        const fragment = document.createDocumentFragment();
        for (let child of parent.children) {
            fragment.append(child);
        }

        // set up layer in which connections are drawn
        this.svg = createSVGElement("svg") as SVGSVGElement;
        this.initializeConnectorLayer();
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

        this.element = container;
        this.clear();
    }

    private initializeConnectorLayer(): void {
        this.markers.set(MarkerState.Regular, getUniqueIdentifier());
        this.markers.set(MarkerState.SourceSelected, getUniqueIdentifier());
        this.markers.set(MarkerState.TargetSelected, getUniqueIdentifier());

        const defs = createSVGElement("defs");
        const markerDefs: string[] = [];
        for (let [state, id] of this.markers.entries()) {
            const polygon = `<polygon fill="currentColor" points="0 0, ${this.markerWidth} ${this.markerHeight / 2}, 0 ${this.markerHeight}" />`;
            const marker = `<marker id="${id}" class="${state}" markerWidth="${this.markerWidth}" markerHeight="${this.markerHeight}" refX="${this.markerWidth}" refY="${this.markerHeight / 2}" orient="auto">${polygon}</marker>`;
            markerDefs.push(marker);
        }
        defs.innerHTML = markerDefs.join("");
        this.svg.append(defs);
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

        element.addEventListener("mousedown", () => {
            this.elements.forEach(e => {
                e.classList.remove("selected");
            });
            element.classList.add("selected");
        });
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

    /**
     * Randomizes the position of diagram elements.
     */
    shuffle(): void {
        for (let child of this.host.children) {
            const elem = child as HTMLElement;
            const outerWidth = this.host.offsetWidth;
            const outerHeight = this.host.offsetHeight;
            const childWidth = elem.offsetWidth;
            const childHeight = elem.offsetHeight;

            elem.style.left = (Math.random() * (outerWidth - childWidth)) + "px";
            elem.style.top = (Math.random() * (outerHeight - childHeight)) + "px";
        }
    }

    /**
     * Causes connections to be redrawn in the next paint cycle.
     */
    private redraw() {
        if (!this.repainting) {
            window.requestAnimationFrame(this.repaint.bind(this));
            this.repainting = true;
        }
    }

    /**
     * Causes connections to be redrawn as part of the current paint cycle.
     */
    private repaint() {
        if (this.connectors.length > 0) {
            const visibility = new FirstVisibleAncestor();
            const selected = new IsAncestorSelected("selected", this.host);
            this.connectors.forEach(connector => {
                // redraw a connector if one of its endpoint elements has changed position or size
                connector.draw(this, visibility, selected);
            });
        }
        this.repainting = false;
    }
}

export class Arrow extends Connector {
    get path(): SVGPathElement {
        return this.elem as SVGPathElement;
    }

    constructor(source: HTMLElement, target: HTMLElement) {
        const path = createSVGElement("path") as SVGSVGElement;
        path.setAttribute("stroke", "currentColor");
        path.setAttribute("fill", "transparent");
        super(path, source, target);
    }

    draw(diagram: DiagramCanvas, visibility: FirstVisibleAncestor, selected: IsAncestorSelected): void {
        let source: Element = visibility.get(this.source);
        let target: Element = visibility.get(this.target);

        const sourceSelected = this.path.classList.contains(MarkerState.SourceSelected);
        const targetSelected = this.path.classList.contains(MarkerState.TargetSelected);

        if (source == target) {
            this.path.classList.remove(MarkerState.SourceSelected);
            this.path.classList.remove(MarkerState.TargetSelected);
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

        let markerId = diagram.markers.get(MarkerState.Regular);
        if (selected.get(this.source)) {
            this.path.classList.add(MarkerState.SourceSelected);
            this.path.classList.remove(MarkerState.TargetSelected);
            markerId = diagram.markers.get(MarkerState.SourceSelected);

            // emulate CSS z-index; move SVG path to be the last child of its parent to stack over other SVG elements
            if (!sourceSelected) {
                this.path.parentNode!.appendChild(this.path);
            }
        } else if (selected.get(this.target)) {
            this.path.classList.remove(MarkerState.SourceSelected);
            this.path.classList.add(MarkerState.TargetSelected);
            markerId = diagram.markers.get(MarkerState.TargetSelected);

            // emulate CSS z-index; move SVG path to be the last child of its parent to stack over other SVG elements
            if (!targetSelected) {
                this.path.parentNode!.appendChild(this.path);
            }
        } else {
            this.path.classList.remove(MarkerState.SourceSelected);
            this.path.classList.remove(MarkerState.TargetSelected);
        }
        this.path.setAttribute("marker-end", `url(#${markerId})`);
    }
}

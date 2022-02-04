/**
 * Entity Relationship Diagram (in TypeScript)
 * @author  Levente Hunyadi
 * @version 1.0
 * @remarks Copyright (C) 2022 Levente Hunyadi
 * @remarks Licensed under MIT, see https://opensource.org/licenses/MIT
 * @see     https://hunyadi.info.hu/
 **/

import { Coordinate, Point, Rect } from "./geometry";
import { createSVGElement, isDescendant, VisibilityChecker } from "./htmldom";

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

export class Diagram {
    /** The host element that contains other elements between which connections can be made. */
    private host: HTMLDivElement;

    /** The SVG element that encapsulates connectors in a separate layer. */
    private svg: SVGSVGElement;

    /** Set of all elements. */
    private elements: HTMLElement[] = [];

    /** Set of all connectors. */
    private connectors: Connector[] = [];

    /** Listens to source and target element size changes. */
    private resizeObserver: ResizeObserver;

    /** Listens to position changes. */
    private styleObserver: MutationObserver;

    /** Listens to removing elements from the diagram. */
    private childObserver: MutationObserver;

    readonly markerId: string = Math.floor(Math.random() * Math.pow(36, 6)).toString(36);
    readonly markerWidth: number = 10;
    readonly markerHeight: number = 7;

    /**
     * Creates a diagram.
     * @param svg 
     */
    constructor(private container: HTMLElement) {
        const fragment = document.createDocumentFragment();
        Array.from(container.children).forEach(child => {
            fragment.append(child);
        })

        this.svg = createSVGElement('svg') as SVGSVGElement;
        this.svg.innerHTML = `<defs><marker id="${this.markerId}" markerWidth="${this.markerWidth}" markerHeight="${this.markerHeight}" refX="${this.markerWidth}" refY="${this.markerHeight / 2}" orient="auto"><polygon points="0 0, ${this.markerWidth} ${this.markerHeight / 2}, 0 ${this.markerHeight}" /></marker></defs>`;
        container.append(this.svg);
        this.host = document.createElement("div");
        container.append(this.host);
        this.host.append(fragment);

        const observer = new ResizeObserver(() => {
            this.redraw(this.connectors);
        });
        observer.observe(this.host);

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

        this.clear();
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
        this.elements.push(element);
        if (!isDescendant(this.host, element)) {
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
        this.styleObserver.disconnect();

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
        this.styleObserver.disconnect();
        this.connectors = [];

        this.elements.forEach(element => {
            element.remove();
        });
        this.elements = [];

        this.childObserver.observe(this.container, { subtree: true, childList: true });
    }

    private observeConnectorEndpoint(element: HTMLElement): void {
        // trigger redraw if endpoint element size changes
        this.resizeObserver.observe(element);

        // listen to events on closest positioned ancestor to handle left/top expressed as percentage
        if (element.offsetParent) {
            this.resizeObserver.observe(element.offsetParent);
        }

        // trigger redraw if endpoint element position changes
        this.styleObserver.observe(element, { attributeFilter: ["style"] });

        // listen to events on positioned ancestors to handle case when element moves with its container
        this.getPositionedAncestors(element).forEach(ancestor => {
            this.styleObserver.observe(ancestor, { attributeFilter: ["style"] });
        });
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

    shuffle(): void {
        Array.from(this.host.children).forEach(child => {
            const elem = child as HTMLElement;
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

export class Arrow extends Connector {
    public get path(): SVGPathElement {
        return this.elem as SVGPathElement;
    }

    constructor(source: HTMLElement, target: HTMLElement) {
        const path = createSVGElement('path') as SVGSVGElement;
        path.setAttribute('stroke', 'black');
        path.setAttribute('fill', 'transparent');
        super(path, source, target);
    }

    draw(diagram: Diagram, checker: VisibilityChecker): void {
        let source: Element = checker.getFirstVisibleAncestor(this.source);
        let target: Element = checker.getFirstVisibleAncestor(this.target);

        if (source == target) {
            this.path.removeAttribute('d');
            this.path.removeAttribute('marker-end');
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
        this.path.setAttribute('marker-end', `url(#${diagram.markerId})`);
    }
}

/**
 * Permits an element to be moved with mouse drag.
 */
export class Movable {
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

            this.elementPos = new Point(element.offsetLeft, element.offsetTop);
        }, true);
    }
}

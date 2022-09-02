/**
 * Entity Relationship Diagram (in TypeScript)
 * @author  Levente Hunyadi
 * @version 1.0
 * @remarks Copyright (C) 2022 Levente Hunyadi
 * @remarks Licensed under MIT, see https://opensource.org/licenses/MIT
 * @see     https://hunyadi.info.hu/
 **/

import { Point, Rect } from "./geometry";

interface ClientRectangleProvider {
    getBoundingClientRect(): DOMRect;
}

function createSVGElement(type: string): SVGElement {
    return document.createElementNS("http://www.w3.org/2000/svg", type);
}

class SVGBuilder {
    private container: HTMLElement;
    private viewport: Rect = new Rect(0, 0, 0, 0);
    private root: SVGSVGElement;
    private defs: SVGDefsElement;

    constructor(container: HTMLElement) {
        this.container = container;
        this.root = createSVGElement("svg") as SVGSVGElement;
        this.defs = createSVGElement("defs") as SVGDefsElement;
    }

    build(): SVGSVGElement {
        const r = this.container.getBoundingClientRect();
        this.viewport = new Rect(r.left, r.top, r.right, r.bottom);

        const svg = createSVGElement("svg") as SVGSVGElement;
        svg.setAttribute("viewBox", `0 0 ${this.viewport.width} ${this.viewport.height}`);

        Array.from(this.container.children).forEach(child => {
            this.root.append(...this.visit(child));
        });

        if (this.defs.childElementCount > 0) {
            svg.appendChild(this.defs);
        }

        // SVG export requires font properties to be declared for entire diagram
        const style = createSVGElement("style") as SVGStyleElement;
        const s = window.getComputedStyle(this.container);
        style.innerHTML = `text { font-family: ${s.fontFamily}; font-size: ${s.fontSize}; font-style: ${s.fontStyle}; font-variant: ${s.fontVariant}; font-weight: ${s.fontWeight}; }`;
        svg.append(style);

        svg.append(...this.root.children);

        this.root = createSVGElement("svg") as SVGSVGElement;
        this.defs = createSVGElement("defs") as SVGDefsElement;

        return svg;
    }

    private getPosition(element: ClientRectangleProvider): Point {
        const rect = element.getBoundingClientRect();
        return new Point(rect.left - this.viewport.left, rect.top - this.viewport.top);
    }

    private getPositionSize(element: ClientRectangleProvider): Rect {
        const rect = element.getBoundingClientRect();
        return new Rect(
            rect.left - this.viewport.left,
            rect.top - this.viewport.top,
            rect.right - this.viewport.left,
            rect.bottom - this.viewport.top
        );
    }

    private visitSVG(svg: SVGSVGElement): SVGElement {
        const group = createSVGElement("svg") as SVGSVGElement;
        Array.from(svg.children).forEach(child => {
            switch (child.tagName.toLowerCase()) {
                case "defs":
                    Array.from(child.children).forEach(child => {
                        this.defs.append(child.cloneNode(true));
                    });
                    break;
                default:
                    group.append(child.cloneNode(true));
            }
        });

        const position = this.getPosition(svg);
        group.setAttribute("x", `${position.x}`);
        group.setAttribute("y", `${position.y}`);
        return group;
    }

    private visitTable(table: HTMLTableElement): SVGElement {
        const rect = this.getPositionSize(table);
        const style = window.getComputedStyle(table);

        const group = createSVGElement("g") as SVGGElement;
        const svg = createSVGElement("rect") as SVGRectElement;
        svg.setAttribute("x", `${rect.left}`);
        svg.setAttribute("y", `${rect.top}`);
        svg.setAttribute("width", `${rect.width}`);
        svg.setAttribute("height", `${rect.height}`);
        svg.setAttribute("stroke", style.borderColor);
        svg.setAttribute("stroke-width", style.borderWidth);
        svg.setAttribute("fill", style.backgroundColor);
        group.append(svg);

        Array.from(table.rows).forEach(row => {
            group.append(this.visitTableRow(row));
        });

        return group;
    }

    private visitTableRow(row: HTMLTableRowElement): SVGElement {
        const rect = this.getPositionSize(row);
        const style = window.getComputedStyle(row);

        const group = createSVGElement("g") as SVGGElement;
        const svg = createSVGElement("rect") as SVGRectElement;
        svg.setAttribute("x", `${rect.left}`);
        svg.setAttribute("y", `${rect.top}`);
        svg.setAttribute("width", `${rect.width}`);
        svg.setAttribute("height", `${rect.height}`);
        svg.setAttribute("stroke", style.borderColor);
        svg.setAttribute("stroke-width", style.borderWidth);
        svg.setAttribute("fill", style.backgroundColor);
        group.append(svg);

        Array.from(row.cells).forEach(cell => {
            group.append(...this.visit(cell));
        });

        return group;
    }

    private visitText(node: Node): SVGElement {
        const range = document.createRange();
        range.selectNode(node);
        const rect = this.getPositionSize(range);

        // specify text base-point as position, not top-right corner
        const svg = createSVGElement("text") as SVGTextElement;
        svg.setAttribute("x", `${rect.left}`);
        svg.setAttribute("y", `${rect.bottom}`);

        svg.innerHTML = (node.nodeValue || "").trim();
        return svg;
    }

    private visitChildren(element: Element): SVGElement[] {
        const items: SVGElement[] = [];
        element.childNodes.forEach(child => {
            if (child.nodeType == Node.ELEMENT_NODE) {
                items.push(...this.visit(child as Element));
            } else if (child.nodeType == Node.TEXT_NODE && child.nodeValue) {
                items.push(this.visitText(child));
            }
        });
        return items;
    }

    private visit(element: Element): SVGElement[] {
        switch (element.tagName.toLowerCase()) {
            case "svg":
                return [this.visitSVG(element as SVGSVGElement)];
            case "table":
                return [this.visitTable(element as HTMLTableElement)];
            default:
                const el = element as HTMLElement;
                if (el.offsetParent) {
                    return this.visitChildren(element);
                } else {
                    return [];
                }
        }
    }
}

export function downloadSVG(svg: SVGSVGElement): void {
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const xml = '<?xml version="1.0" encoding="utf-8"?>' + source;

    // convert svg source to URI data scheme.
    const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(xml);

    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "diagram.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

export function toSVG(element: HTMLElement): SVGSVGElement {
    const builder = new SVGBuilder(element);
    return builder.build();
}

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

/**
 * Extracts the text content of a pseudo-element.
 * @param element The element whose pseudo-element to visit.
 * @param pseudo The pseudo-element whose text content to extract.
 * @returns The text content of the pseudo-element, if any.
 */
function getPseudoContent(element: HTMLElement, pseudo: ":before" | ":after"): string | undefined {
    const style = window.getComputedStyle(element, pseudo);
    const content = style.getPropertyValue("content");

    // check if it's a string literal like `"string"`
    const matches = /^"(.*)"$/.exec(content);
    if (matches) {
        return matches[1]!.replace('\\"', '"').replace("\\'", "'").replace("\\\\", "\\");
    }

    // usually corresponds to the special value `none`
    return undefined;
}

/**
 * Builds a block of CSS properties.
 * @param properties CSS properties as key-value pairs.
 * @returns A block of CSS code.
 */
function getCSSRuleString(properties: Record<string, string>): string {
    const items: string[] = [];
    for (let [key, value] of Object.entries(properties)) {
        items.push(`${key}:${value};`);
    }
    return items.join("");
}

/**
 * Returns a dictionary of CSS properties to apply to an object.
 * Does not apply a property if its value equals the reference value.
 * @param inline CSS properties as key-value pairs to apply.
 * @param reference Reference values for CSS properties.
 * @returns A dictionary of CSS properties.
 */
function getSVGStyleProperties(inline: CSSStyleDeclaration, reference?: CSSStyleDeclaration): Record<string, string> {
    const items = {};
    const properties = ["font-family", "font-size", "font-style", "font-variant", "font-weight"];
    for (let property of properties) {
        const value = inline.getPropertyValue(property);
        if (!reference || value != reference.getPropertyValue(property)) {
            items[property] = value;
        }
    }
    return items;
}

/**
 * Builds an SVG element that mimics an HTML element.
 */
class SVGBuilder {
    private container: HTMLElement;
    private viewport: Rect = new Rect(0, 0, 0, 0);
    private viewstyle: CSSStyleDeclaration;
    private root: SVGSVGElement;
    private defs: SVGDefsElement;

    /**
     * Initializes the builder to copy a container element.
     * @param container The HTML element whose appearance to mimic.
     */
    constructor(container: HTMLElement) {
        this.container = container;
        this.viewstyle = window.getComputedStyle(this.container);
        this.root = createSVGElement("svg") as SVGSVGElement;
        this.defs = createSVGElement("defs") as SVGDefsElement;
    }

    build(): SVGSVGElement {
        const r = this.container.getBoundingClientRect();
        this.viewport = new Rect(r.left, r.top, r.right, r.bottom);
        this.viewstyle = window.getComputedStyle(this.container);

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
        style.innerHTML = `text {${getCSSRuleString(getSVGStyleProperties(this.viewstyle))}}`;
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
                    // copy "defs" tag content to SVG element being built
                    Array.from(child.children).forEach(child => {
                        this.defs.append(child.cloneNode(true));
                    });
                    break;
                default:
                    // copy other SVG elements as-is
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

        // draw table border
        const svg = createSVGElement("rect") as SVGRectElement;
        svg.setAttribute("x", `${rect.left}`);
        svg.setAttribute("y", `${rect.top}`);
        svg.setAttribute("width", `${rect.width}`);
        svg.setAttribute("height", `${rect.height}`);
        svg.setAttribute("stroke", style.borderColor);
        svg.setAttribute("stroke-width", style.borderWidth);
        svg.setAttribute("fill", style.backgroundColor);
        group.append(svg);

        // draw table rows
        Array.from(table.rows).forEach(row => {
            group.append(this.visitTableRow(row));
        });

        return group;
    }

    private visitTableRow(row: HTMLTableRowElement): SVGElement {
        const rect = this.getPositionSize(row);
        const style = window.getComputedStyle(row);
        const group = createSVGElement("g") as SVGGElement;

        // draw table row border
        const svg = createSVGElement("rect") as SVGRectElement;
        svg.setAttribute("x", `${rect.left}`);
        svg.setAttribute("y", `${rect.top}`);
        svg.setAttribute("width", `${rect.width}`);
        svg.setAttribute("height", `${rect.height}`);
        svg.setAttribute("stroke", style.borderColor);
        svg.setAttribute("stroke-width", style.borderWidth);
        svg.setAttribute("fill", style.backgroundColor);
        group.append(svg);

        // draw table cells
        Array.from(row.cells).forEach(cell => {
            group.append(...this.visit(cell));
        });

        return group;
    }

    private createSVGText(text: string, rect: Rect, source: Element): SVGTextElement {
        const position = new Point(rect.left, 0.5 * (rect.top + rect.bottom));
        const svg = createSVGElement("text") as SVGTextElement;
        svg.setAttribute("x", `${position.x}`);
        svg.setAttribute("y", `${position.y}`);
        svg.setAttribute("dominant-baseline", "central");
        svg.setAttribute("style", getCSSRuleString(getSVGStyleProperties(window.getComputedStyle(source), this.viewstyle)));
        svg.innerHTML = text;
        return svg;
    }

    private visitText(node: Node, parent: Element): SVGElement {
        const range = document.createRange();
        range.selectNode(node);
        const rect = this.getPositionSize(range);
        const text = this.createSVGText((node.nodeValue || "").trim(), rect, parent);
        return text;
    }

    private visitElement(element: HTMLElement): SVGElement[] {
        if (!element.offsetParent) {
            return [];
        }

        const items: SVGElement[] = [];
        const rect = this.getPositionSize(element);

        const before = getPseudoContent(element, ":before");
        if (before) {
            items.push(this.createSVGText(before, rect, element));
        }
        items.push(...this.visitChildren(element));
        const after = getPseudoContent(element, ":after");
        if (after) {
            items.push(this.createSVGText(after, rect, element));
        }

        return items;
    }

    private visitChildren(element: Element): SVGElement[] {
        const items: SVGElement[] = [];
        element.childNodes.forEach(child => {
            if (child.nodeType == Node.ELEMENT_NODE) {
                items.push(...this.visit(child as Element));
            } else if (child.nodeType == Node.TEXT_NODE && child.nodeValue) {
                items.push(this.visitText(child, element));
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
                return this.visitElement(element as HTMLElement);
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

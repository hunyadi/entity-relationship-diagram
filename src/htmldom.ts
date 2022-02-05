/**
 * Entity Relationship Diagram (in TypeScript)
 * @author  Levente Hunyadi
 * @version 1.0
 * @remarks Copyright (C) 2022 Levente Hunyadi
 * @remarks Licensed under MIT, see https://opensource.org/licenses/MIT
 * @see     https://hunyadi.info.hu/
 **/

import { Coordinate, Point, Rect } from "./geometry";

/**
 * Checks if two nodes are in ancestor/descendant relationship.
 * @param ancestor The ancestor node.
 * @param node The potential descendant node.
 * @returns True if the node is a descendant of the ancestor node.
 */
export function isDescendant(ancestor: Node, node: Node): boolean {
    return (node.compareDocumentPosition(ancestor) & Node.DOCUMENT_POSITION_CONTAINS) != 0;
}

export class VisibilityChecker {
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
export function getOffsetPosition(element: HTMLElement, ref: Point): Coordinate {
    const rect = element.getBoundingClientRect();
    return new Point(rect.x - ref.x, rect.y - ref.y);
}

export function getOffsetCenter(element: HTMLElement, ref: Point): Coordinate {
    const rect = element.getBoundingClientRect();
    const midX = (rect.right + rect.left) / 2;
    const midY = (rect.bottom + rect.top) / 2;
    return new Point(midX - ref.x, midY - ref.y);
}

export function getOffsetRect(element: HTMLElement, ref: Point): Rect {
    const rect = element.getBoundingClientRect();
    return new Rect(rect.left - ref.x, rect.top - ref.y, rect.right - ref.x, rect.bottom - ref.y);
}

/**
 * Finds all positioned ancestors of a diagram element.
 * @param element The diagram element whose positioned ancestors to find.
 * @returns A list of positioned ancestors.
 */
export function getPositionedAncestors(element: HTMLElement, root: HTMLElement): HTMLElement[] {
    let result: HTMLElement[] = [];
    let parent = element.offsetParent as HTMLElement | null;
    while (parent != null && parent != root) {
        result.push(parent);
        parent = parent.offsetParent as HTMLElement | null;
    }
    return result;
}

export function createSVGElement(typeName: string): SVGElement {
    return document.createElementNS("http://www.w3.org/2000/svg", typeName);
}

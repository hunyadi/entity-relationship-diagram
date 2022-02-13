/**
 * Entity Relationship Diagram (in TypeScript)
 * @author  Levente Hunyadi
 * @version 1.0
 * @remarks Copyright (C) 2022 Levente Hunyadi
 * @remarks Licensed under MIT, see https://opensource.org/licenses/MIT
 * @see     https://hunyadi.info.hu/
 **/

import { Point, Rect } from "./geometry";

type ComputeFunction<KeyType, ValueType> = (item: KeyType) => ValueType;

class Memoizer<KeyType, ValueType> {
    protected cache = new Map<KeyType, ValueType>();

    constructor(private compute: ComputeFunction<KeyType, ValueType>) { }

    get(item: KeyType): ValueType {
        let match = this.cache.get(item);
        if (match === undefined) {
            match = this.compute(item);
            this.cache.set(item, match);
        }
        return match;
    }
}

/**
 * Finds the first visible ancestor element of a child element, or returns a root element if none is found.
 * 
 * Takes the element whose first visible ancestor to seek and returns the first element in the hierarchy that
 * is visible (i.e. CSS `display` is not `none`), or the root element.
 */
export class FirstVisibleAncestor extends Memoizer<HTMLElement, HTMLElement> {
    constructor() {
        super((e: HTMLElement) => {
            while (e.offsetParent == null && e.parentElement != null) {
                e = e.parentElement;
            }
            return e;
        });
    }
}

export class IsAncestorSelected extends Memoizer<HTMLElement, boolean> {
    constructor(diagram: HTMLElement) {
        super((e: HTMLElement) => {
            while (e != diagram && !e.classList.contains("selected")) {
                e = e.parentElement as HTMLElement;
            }

            // has no selected ancestor if reached diagram root element
            return (e != diagram);
        });
    }
}

/**
 * Transforms the position of an element to a reference coordinate system.
 * The reference coordinate system is specified relative to the viewport.
 * @param element The HTML element whose position to find.
 * @returns The position and size of the element w.r.t. the reference system.
 */
export function getOffsetRect(element: HTMLElement, ref: Point): Rect {
    const rect = element.getBoundingClientRect();
    return new Rect(rect.left - ref.x, rect.top - ref.y, rect.right - ref.x, rect.bottom - ref.y);
}

export function createSVGElement(type: string): SVGElement {
    return document.createElementNS("http://www.w3.org/2000/svg", type);
}

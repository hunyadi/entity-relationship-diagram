/**
 * Entity Relationship Diagram (in TypeScript)
 * @author  Levente Hunyadi
 * @version 1.0
 * @remarks Copyright (C) 2022 Levente Hunyadi
 * @remarks Licensed under MIT, see https://opensource.org/licenses/MIT
 * @see     https://hunyadi.info.hu/
 **/

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

/**
 * Determines if an element or any of its ancestors have the specified CSS class.
 */
export class IsAncestorSelected extends Memoizer<HTMLElement, boolean> {
    /**
     * Creates a memoizer for the ancestor CSS class checker.
     * @param className The CSS class name to look for.
     * @param root A root element to restrict the search to.
     */
    constructor(className: string, root: Element) {
        super((e: Element) => {
            while (e != root && !e.classList.contains(className)) {
                e = e.parentElement as Element;
            }

            // has no selected ancestor if reached diagram root element
            return (e != root);
        });
    }
}

export function createSVGElement(type: string): SVGElement {
    return document.createElementNS("http://www.w3.org/2000/svg", type);
}

/**
 * Entity Relationship Diagram (in TypeScript)
 * @author  Levente Hunyadi
 * @version 1.0
 * @remarks Copyright (C) 2022 Levente Hunyadi
 * @remarks Licensed under MIT, see https://opensource.org/licenses/MIT
 * @see     https://hunyadi.info.hu/
 **/

import { Coordinate, Rect } from "./geometry";

/**
 * Transforms the position of an element to a reference coordinate system.
 * The reference coordinate system is specified relative to the viewport.
 * @param element The HTML element whose position to find.
 * @returns The position and size of the element w.r.t. the reference system.
 */
export function getOffsetRect(element: HTMLElement, ref: Coordinate): Rect {
    const rect = element.getBoundingClientRect();
    return new Rect(rect.left - ref.x, rect.top - ref.y, rect.right - ref.x, rect.bottom - ref.y);
}

export function setPosition(element: HTMLElement, pos: Coordinate, important: boolean): void {
    let cssLeft, cssTop;
    if (isPercentageAligned(element)) {
        const offsetParent = element.offsetParent as HTMLElement;
        const width = offsetParent.offsetWidth;
        const height = offsetParent.offsetHeight;
        cssLeft = (100 * pos.x / width) + "%";
        cssTop = (100 * pos.y / height) + "%";
    } else {
        cssLeft = pos.x + "px";
        cssTop = pos.y + "px";
    }
    const priority = important ? "important" : "";
    const style = element.style;
    style.setProperty("left", cssLeft, priority);
    style.setProperty("top", cssTop, priority);
    style.removeProperty("right");
    style.removeProperty("bottom");
}

function isPercentageAligned(element: HTMLElement): boolean {
    const style = element.style;
    const isHorz = isCSSPercentage(style.getPropertyValue("left")) || isCSSPercentage(style.getPropertyValue("right"));
    const isVert = isCSSPercentage(style.getPropertyValue("top")) || isCSSPercentage(style.getPropertyValue("bottom"));
    return isHorz && isVert;
}

function isCSSPercentage(value: string) {
    return value.match("^-?[0-9][.0-9]*%$") !== null;
}

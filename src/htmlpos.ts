/**
 * Entity Relationship Diagram (in TypeScript)
 * @author  Levente Hunyadi
 * @version 1.0
 * @remarks Copyright (C) 2022 Levente Hunyadi
 * @remarks Licensed under MIT, see https://opensource.org/licenses/MIT
 * @see     https://hunyadi.info.hu/
 **/

import { Point, Rect } from "./geometry";

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

export function isPercentageAligned(element: HTMLElement): boolean {
    const style = element.style;
    const isHorz = isCSSPercentage(style.getPropertyValue("left")) || isCSSPercentage(style.getPropertyValue("right"));
    const isVert = isCSSPercentage(style.getPropertyValue("top")) || isCSSPercentage(style.getPropertyValue("bottom"));
    return isHorz && isVert;
}

function isCSSPercentage(value: string) {
    return value.match("^-?[0-9][.0-9]*%$") !== null;
}

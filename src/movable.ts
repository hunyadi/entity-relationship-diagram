/**
 * Entity Relationship Diagram (in TypeScript)
 * @author  Levente Hunyadi
 * @version 1.0
 * @remarks Copyright (C) 2022 Levente Hunyadi
 * @remarks Licensed under MIT, see https://opensource.org/licenses/MIT
 * @see     https://hunyadi.info.hu/
 **/

import { Coordinate, Point } from "./geometry";

/**
* Permits an element to be moved with mouse drag.
*
* The left and top style attributes of the dragged element are set with !important to ensure it's not repositioned
* while the action is taking place.
*/
export class Movable {
    private mousePos: Coordinate = new Point(0, 0);
    private elementPos: Coordinate = new Point(0, 0);
    private percentageParent: HTMLElement | null = null;

    private mouseMoveListener = (event: MouseEvent) => {
        event.preventDefault();
        const deltaX = event.clientX - this.mousePos.x;
        const deltaY = event.clientY - this.mousePos.y;
        const left = this.elementPos.x + deltaX;
        const top = this.elementPos.y + deltaY;
        this.move(left, top, true);
    };

    constructor(private element: HTMLElement) {
        element.addEventListener("mousedown", event => {
            this.mousePos = new Point(event.clientX, event.clientY);

            document.addEventListener("mouseup", event => {
                document.removeEventListener("mousemove", this.mouseMoveListener, true);

                const deltaX = event.clientX - this.mousePos.x;
                const deltaY = event.clientY - this.mousePos.y;
                const left = this.elementPos.x + deltaX;
                const top = this.elementPos.y + deltaY;
                this.move(left, top, false);
            }, { "capture": true, "once": true });
            document.addEventListener("mousemove", this.mouseMoveListener, true);

            this.elementPos = new Point(element.offsetLeft, element.offsetTop);
            if (this.isPercentageAligned()) {
                this.percentageParent = this.element.offsetParent as HTMLElement;
            } else {
                this.percentageParent = null;
            }
        }, true);
    }

    private move(left: number, top: number, important: boolean): void {
        let cssLeft, cssTop;
        if (this.percentageParent) {
            const width = this.percentageParent.offsetWidth;
            const height = this.percentageParent.offsetHeight;
            cssLeft = (100 * left / width) + "%";
            cssTop = (100 * top / height) + "%";
        } else {
            cssLeft = left + "px";
            cssTop = top + "px";
        }
        const priority = important ? "important" : "";
        const style = this.element.style;
        style.setProperty("left", cssLeft, priority);
        style.setProperty("top", cssTop, priority);
        style.removeProperty("right");
        style.removeProperty("bottom");
    }

    private isPercentageAligned(): boolean {
        const style = this.element.style;
        const isHorz = isCSSPercentage(style.getPropertyValue("left")) || isCSSPercentage(style.getPropertyValue("right"));
        const isVert = isCSSPercentage(style.getPropertyValue("top")) || isCSSPercentage(style.getPropertyValue("bottom"));
        return isHorz && isVert;
    }
}

function isCSSPercentage(value: string) {
    return value.match("^-?[0-9][.0-9]*%$") !== null;
}

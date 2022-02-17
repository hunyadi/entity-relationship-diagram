/**
 * Entity Relationship Diagram (in TypeScript)
 * @author  Levente Hunyadi
 * @version 1.0
 * @remarks Copyright (C) 2022 Levente Hunyadi
 * @remarks Licensed under MIT, see https://opensource.org/licenses/MIT
 * @see     https://hunyadi.info.hu/
 **/

import { Vector } from "./geometry";
import { setPosition } from "./htmlpos";

/**
* Permits an element to be zoomed with mouse wheel.
*/
export default class Zoomable {
    private static readonly zoomLevels = [0.1, 0.25, 0.33, 0.50, 0.67, 0.75, 0.8, 0.9, 1.0, 1.1, 1.25, 1.50, 1.75, 2.0, 2.5, 3.0, 4.0, 5.0];
    private zoomIndex = Zoomable.zoomLevels.indexOf(1.0);

    /**
     * Makes an HTML element zoom in and out with mouse wheel actions.
     * @param captureElement The element which captures mouse wheel events.
     * @param relatedElement The element which the zoom effect is applied to.
     */
    constructor(captureElement: HTMLElement, relatedElement: Element) {
        captureElement.addEventListener("wheel", event => {
            event.preventDefault();
            event.stopPropagation();

            // calculate target zoom level
            const prevZoom = Zoomable.zoomLevels[this.zoomIndex]!;
            if (event.deltaY > 0 && this.zoomIndex > 0) {
                this.zoomIndex -= 1;
            } else if (event.deltaY < 0 && this.zoomIndex < Zoomable.zoomLevels.length - 1) {
                this.zoomIndex += 1;
            }
            const nextZoom = Zoomable.zoomLevels[this.zoomIndex]!;
            const magnify = nextZoom / prevZoom;

            // reposition elements
            const offset = new Vector(event.pageX, event.pageY);
            const rect = captureElement.getBoundingClientRect();
            const origin = new Vector(rect.left, rect.top);
            offset.subtract(origin);
            Array.from(relatedElement.children).forEach(e => {
                const elem = e as HTMLElement;
                const pos = new Vector(elem.offsetLeft, elem.offsetTop);
                pos.subtract(offset).multiply(magnify).add(offset);
                setPosition(elem, pos, false);
            });
        });
    }
}

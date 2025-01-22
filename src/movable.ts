/**
 * Entity Relationship Diagram (in TypeScript)
 * @author  Levente Hunyadi
 * @version 1.0
 * @remarks Copyright (C) 2022-2024 Levente Hunyadi
 * @remarks Licensed under MIT, see https://opensource.org/licenses/MIT
 * @see     https://github.com/hunyadi/entity-relationship-diagram/
 **/

import { Vector } from "./geometry";
import { setPosition } from "./htmlpos";

/**
* Allows an element to be moved with mouse drag.
*
* The left and top style attributes of the dragged element are set with !important to ensure it's not repositioned
* while the action is taking place.
*/
abstract class Positionable {
    protected mousePos = new Vector(0, 0);

    private mouseMoveListener = (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        document.getSelection()?.empty();
        this.update(event, true);
    };

    /**
     * Marks an element to be draggable with the mouse.
     * @param relatedElement The element whose position is updated.
     */
    constructor(captureElement: HTMLElement, protected relatedElement: HTMLElement) {
        captureElement.addEventListener("mousedown", event => {
            if (event.target != captureElement) {
                // do not start drag action when event is triggered on a descendant element
                return;
            }

            this.mousePos = new Vector(event.clientX, event.clientY);
            this.capture();

            document.addEventListener("mouseup", event => {
                document.removeEventListener("mousemove", this.mouseMoveListener, true);
                this.update(event, false);
            }, { "once": true });
            document.addEventListener("mousemove", this.mouseMoveListener, true);
        });
    }

    protected abstract capture(): void;
    protected abstract update(event: MouseEvent, important: boolean): void;
}

/**
* Allows a single element to be moved with mouse drag.
 */
export class Movable extends Positionable {
    private elementPos = new Vector(0, 0);

    protected capture(): void {
        this.elementPos = new Vector(this.relatedElement.offsetLeft, this.relatedElement.offsetTop);
    }

    protected update(event: MouseEvent, important: boolean): void {
        const delta = new Vector(event.clientX, event.clientY).minus(this.mousePos);
        const pos = this.elementPos.plus(delta);
        setPosition(this.relatedElement, pos, important);
    }
}

/**
* Allows a set of elements that share a parent to be moved with mouse drag.
 */
export class Pannable extends Positionable {
    private positions = new Map<HTMLElement, Vector>();

    protected capture(): void {
        for (let e of this.relatedElement.children) {
            const elem = e as HTMLElement;
            this.positions.set(elem, new Vector(elem.offsetLeft, elem.offsetTop));
        }
    }

    protected update(event: MouseEvent, important: boolean) {
        const delta = new Vector(event.clientX, event.clientY).minus(this.mousePos);
        for (let e of this.relatedElement.children) {
            const elem = e as HTMLElement;
            const pos = this.positions.get(elem)!.plus(delta);
            setPosition(elem, pos, important);
        }
    }
}

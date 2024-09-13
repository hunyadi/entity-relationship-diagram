/**
 * Entity Relationship Diagram (in TypeScript)
 * @author  Levente Hunyadi
 * @version 1.0
 * @remarks Copyright (C) 2022-2024 Levente Hunyadi
 * @remarks Licensed under MIT, see https://opensource.org/licenses/MIT
 * @see     https://github.com/hunyadi/entity-relationship-diagram/
 **/

export class Toolbar {
    private elem: HTMLElement;

    public get element(): HTMLElement {
        return this.elem;
    }

    constructor() {
        const elem = document.createElement("div");
        elem.classList.add("toolbar");
        this.elem = elem;
    }

    add(name: string, title: string, action: () => void): void {
        const button = document.createElement("button");
        button.classList.add("toolbar-button");
        button.type = "button";
        button.title = title;
        const icon = document.createElement("i");
        icon.classList.add(name);
        button.append(icon);
        button.addEventListener("click", action);
        this.elem.append(button);
    }
}

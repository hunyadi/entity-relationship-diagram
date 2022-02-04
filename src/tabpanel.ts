/**
 * Entity Relationship Diagram (in TypeScript)
 * @author  Levente Hunyadi
 * @version 1.0
 * @remarks Copyright (C) 2022 Levente Hunyadi
 * @remarks Licensed under MIT, see https://opensource.org/licenses/MIT
 * @see     https://hunyadi.info.hu/
 **/

export default class TabPanel {
    private view: HTMLElement;

    constructor(panel: HTMLElement) {
        this.view = panel.querySelector(".tab-view")!;

        const selector = panel.querySelector(".tab-selector")!;
        Array.from(selector.children).forEach(child => {
            child.addEventListener("click", event => {
                const selected = event.target as HTMLElement;
                this.activate(selected.dataset["tab"]);
            })
        });
    }

    activate(tag: string | undefined) {
        Array.from(this.view.children).forEach(child => {
            child.classList.remove("tab-active");
        });
        const pane = this.view.querySelector('[data-tab="' + tag + '"]');
        if (pane) {
            pane.classList.add("tab-active");
        }
    }
}

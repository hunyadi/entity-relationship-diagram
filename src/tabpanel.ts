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
    private selector: HTMLElement;

    constructor(panel: HTMLElement) {
        this.view = panel.querySelector(".tab-view")!;

        this.selector = panel.querySelector(".tab-selector")!;
        Array.from(this.selector.children).forEach(child => {
            child.addEventListener("click", event => {
                const selected = event.target as HTMLElement;
                this.activateByName(selected.dataset["tab"]);
            });
        });
        this.activateByIndex(0);
    }

    activateByIndex(index: number) {
        this.deactivateTabs();
        const tab = this.selector.children[index];
        const view = this.view.children[index];
        this.activateTab(tab, view);
    }

    activateByName(tag: string | undefined) {
        this.deactivateTabs();
        const tab = this.selector.querySelector('[data-tab="' + tag + '"]');
        const view = this.view.querySelector('[data-tab="' + tag + '"]');
        this.activateTab(tab, view);
    }

    private activateTab(tab: Element | null | undefined, view: Element | null | undefined) {
        if (tab) {
            tab.classList.add("tab-active");
        }
        if (view) {
            view.classList.add("tab-active");
        }
    }

    private deactivateTabs() {
        Array.from(this.selector.children).forEach(child => {
            child.classList.remove("tab-active");
        });
        Array.from(this.view.children).forEach(child => {
            child.classList.remove("tab-active");
        });
    }
}

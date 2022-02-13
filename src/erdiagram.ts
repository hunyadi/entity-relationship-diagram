/**
 * Entity Relationship Diagram (in TypeScript)
 * @author  Levente Hunyadi
 * @version 1.0
 * @remarks Copyright (C) 2022 Levente Hunyadi
 * @remarks Licensed under MIT, see https://opensource.org/licenses/MIT
 * @see     https://hunyadi.info.hu/
 **/

import { Arrow, Diagram } from "./diagram";
import { ElasticLayout, ElasticLayoutOptions } from "./elastic";
import { Movable } from "./movable";
import { SpectralLayout } from "./spectral";
import TabPanel from "./tabpanel";


declare interface EntityPropertyFeatures {
    readonly type: string;
}

declare interface PropertyDictionary {
    readonly [key: string]: EntityPropertyFeatures;
}

declare interface EntityFeatures {
    readonly properties: PropertyDictionary;
}

declare interface EntityDictionary {
    readonly [key: string]: EntityFeatures;
}

declare interface EntityPropertyAccess {
    readonly entity: string;
    readonly property: string;
}

declare interface EntityRelationship {
    readonly source: EntityPropertyAccess;
    readonly target: EntityPropertyAccess;
}

declare interface EntityRelationshipData {
    entities: EntityDictionary;
    relationships: EntityRelationship[];
}

interface Renderable {
    get element(): Element;
}

class EntityPropertyElement implements Renderable {
    private elem: HTMLTableCellElement;

    constructor(private entity: EntityElement, propertyName: string) {
        this.elem = entity.element.querySelector(`td[data-property="${propertyName}"]`)!;
    }

    public get element(): HTMLElement {
        return this.elem;
    }

    public get parent(): EntityElement {
        return this.entity;
    }
}

/**
 * Represents an entity in an entity relationship diagram (ERD).
 */
class EntityElement implements Renderable {
    private elem: HTMLTableElement;

    constructor(public name: string, properties: PropertyDictionary) {
        this.elem = document.createElement("table");
        this.elem.classList.add("entity");

        // generate HTML DOM representation of entity
        const rows: string[] = [];
        for (const [name, prop] of Object.entries(properties)) {
            const propName = `<span class="entity-property-name">${name}</span>`;
            const propType = `<span class="entity-property-type">${prop.type}</span>`;
            rows.push(`<tr><td data-property="${name}">${propName}: ${propType}</td></tr>`);
        }
        this.elem.innerHTML = `<thead><tr><th><span class="entity-name">${this.name}</span> <span class="toggle"></span></th></tr></thead><tbody>` + rows.join("") + "</tbody>";

        this.toggler.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.compact(!this.toggler.classList.contains("collapsed"));
        });
    }

    public get element(): HTMLElement {
        return this.elem;
    }

    private get head(): HTMLElement {
        return this.elem.querySelector("thead")!;
    }

    private get body(): HTMLElement {
        return this.elem.querySelector("tbody")!;
    }

    private get toggler(): HTMLElement {
        return this.elem.querySelector("thead>tr>th>span.toggle")!;
    }

    get heading(): HTMLElement {
        return this.head.querySelector("span.entity-name")!;
    }

    compact(state: boolean) {
        this.body.classList.toggle("hidden", state);
        this.toggler.classList.toggle("collapsed", state);
    }

    property(id: string): EntityPropertyElement {
        return new EntityPropertyElement(this, id);
    }
}

class EntityRelationshipElement {
    constructor(public source: EntityPropertyElement, public target: EntityPropertyElement) { }
}

class EntityDiagram {
    protected diagram: Diagram;
    protected entities = new Map<string, EntityElement>();
    protected relationships: EntityRelationshipElement[] = [];

    constructor(elem: HTMLElement, data: EntityRelationshipData) {
        this.validate(data);

        for (const [name, descriptor] of Object.entries(data.entities)) {
            const entity = new EntityElement(name, descriptor.properties);
            this.entities.set(name, entity);
        }

        data.relationships.forEach(relationship => {
            const sourceEntity = this.entities.get(relationship.source.entity)!;
            const sourceProperty = sourceEntity.property(relationship.source.property);
            const targetEntity = this.entities.get(relationship.target.entity)!;
            const targetProperty = targetEntity.property(relationship.target.property);
            this.relationships.push(new EntityRelationshipElement(sourceProperty, targetProperty));
        });

        this.diagram = new Diagram(elem);
        elem.classList.add("diagram");
    }

    validate(data: EntityRelationshipData) {
        data.relationships.forEach(relationship => {
            const sourceEntity = data.entities[relationship.source.entity];
            const targetEntity = data.entities[relationship.target.entity];
            if (!sourceEntity || !targetEntity) {
                EntityDiagram.error(relationship, "entity", sourceEntity, targetEntity);
            }

            const sourceProperty = sourceEntity.properties[relationship.source.property];
            const targetProperty = targetEntity.properties[relationship.target.property];
            if (!sourceProperty || !targetProperty) {
                EntityDiagram.error(relationship, "property", sourceProperty, targetProperty);
            }
        });
    }

    private static error(relationship: EntityRelationship, kind: string, source: object | undefined, target: object | undefined): never {
        let origin;
        if (!source) {
            origin = "source";
        } else if (!target) {
            origin = "target";
        }
        const context = `${relationship.source.entity}.${relationship.source.property} -> ${relationship.target.entity}.${relationship.target.property}`;
        throw TypeError(`${origin} ${kind} not found for relationship [${context}]`);
    }
}

class ElasticEntityDiagram extends EntityDiagram {
    constructor(elem: HTMLElement, data: EntityRelationshipData, options: ElasticLayoutOptions) {
        super(elem, data);
        elem.classList.add("canvaslike");
        elem.classList.add("elastic");

        this.layout(options);
    }

    private layout(options: ElasticLayoutOptions): void {
        this.entities.forEach(entity => {
            entity.compact(true);
            this.diagram.addElement(entity.element);
            new Movable(entity.element);
        });
        this.relationships.forEach(relationship => {
            this.diagram.addConnector(new Arrow(relationship.source.element, relationship.target.element));
        });

        // perform an initial layout
        const elements = Array.from(this.entities.values()).map(entity => { return entity.element; });
        const edges = this.relationships.map(relationship => {
            return { source: relationship.source.parent.element, target: relationship.target.parent.element };
        });

        const spectralLayout = new SpectralLayout(elements, edges);
        const points = spectralLayout.calculate();

        for (let [k, element] of elements.entries()) {
            element.style.left = 100 * points[k]!.x + "%";
            element.style.top = 100 * points[k]!.y + "%";
        }

        // refine initial layout
        let elasticLayout = new ElasticLayout(
            options,
            this.diagram.host,
            elements,
            (elem1, elem2) => { return this.diagram.isConnected(elem1, elem2); }
        );
        elasticLayout.initialize();
    }
}

class NavigableEntityDiagram extends EntityDiagram {
    private selector: HTMLSelectElement;

    constructor(elem: HTMLElement, data: EntityRelationshipData) {
        super(elem, data);
        elem.classList.add("navigable");
        this.selector = this.diagram.host.querySelector("select")!;

        this.entities.forEach(entity => {
            entity.compact(false);
            entity.heading.addEventListener("click", event => {
                event.preventDefault();
                this.show(entity);
            });

            const option = document.createElement("option");
            option.innerText = entity.name;
            this.selector.append(option);
        });
        this.selector.addEventListener("change", () => {
            const selected = this.entities.get(this.selector.value);
            if (selected) {
                this.display(selected);
            }
        });
        if (this.entities.size > 0) {
            this.display(this.entities.values().next().value);
        }
    }

    show(entity: EntityElement): void {
        this.selector.value = entity.name;
        this.display(entity);
    }

    private display(entity: EntityElement): void {
        this.diagram.clear();

        const leftPanel = this.diagram.host.querySelector(".left")!;
        const centerPanel = this.diagram.host.querySelector(".center")!;
        const rightPanel = this.diagram.host.querySelector(".right")!;

        const visible = new Set<EntityElement>();

        centerPanel.append(entity.element);
        this.diagram.addElement(entity.element);

        // add entities to diagram connected by a relationship
        this.relationships.forEach(relationship => {
            let updated = false;
            if (relationship.source.parent == entity && relationship.target.parent == entity) {
                updated = true;
            } else if (relationship.target.parent == entity) {
                const e = relationship.source.parent;
                if (!visible.has(e)) {
                    leftPanel.append(e.element);
                    this.diagram.addElement(e.element);
                    visible.add(e);
                }
                updated = true;
            } else if (relationship.source.parent == entity) {
                const e = relationship.target.parent;
                if (!visible.has(e)) {
                    rightPanel.append(e.element);
                    this.diagram.addElement(e.element);
                    visible.add(e);
                }
                updated = true;
            }

            if (updated) {
                this.diagram.addConnector(new Arrow(relationship.source.element, relationship.target.element));
            }
        });
    }
}

class SpectralEntityDiagram extends EntityDiagram {
    constructor(elem: HTMLElement, data: EntityRelationshipData) {
        super(elem, data);
        elem.classList.add("canvaslike");
        elem.classList.add("spectral");

        this.entities.forEach(entity => {
            entity.compact(true);
            this.diagram.addElement(entity.element);
            new Movable(entity.element);
        });

        this.relationships.forEach(relationship => {
            this.diagram.addConnector(new Arrow(relationship.source.element, relationship.target.element));
        });

        const nodes = Array.from(this.entities.values());
        const edges = this.relationships.map(relationship => {
            return { source: relationship.source.parent, target: relationship.target.parent };
        });

        const layout = new SpectralLayout(nodes, edges);
        const points = layout.calculate();

        nodes.forEach((entity, index) => {
            const element = entity.element;
            const x = points[index]!.x;
            const y = points[index]!.y;
            element.style.left = (80 * x + 10) + "%";
            element.style.top = (80 * y + 10) + "%";
        });
    }
}

/**
 * An interface that prevents name mangling for factory functions when TypeScript code is fed to the Closure Compiler.
 */
declare interface EntityRelationshipFactory {
    createElasticDiagram(elem: HTMLElement, data: EntityRelationshipData, options: ElasticLayoutOptions): ElasticEntityDiagram;
    createNavigableDiagram(elem: HTMLElement, data: EntityRelationshipData): NavigableEntityDiagram;
    createSpectralDiagram(elem: HTMLElement, data: EntityRelationshipData): SpectralEntityDiagram;
}

/**
 * The concrete implementation of the factory function interface.
 */
class EntityRelationshipFactoryImpl implements EntityRelationshipFactory {
    createElasticDiagram(elem: HTMLElement, data: EntityRelationshipData, options: ElasticLayoutOptions): ElasticEntityDiagram {
        return new ElasticEntityDiagram(elem, data, options);
    }

    createNavigableDiagram(elem: HTMLElement, data: EntityRelationshipData): NavigableEntityDiagram {
        return new NavigableEntityDiagram(elem, data);
    }

    createSpectralDiagram(elem: HTMLElement, data: EntityRelationshipData): SpectralEntityDiagram {
        return new SpectralEntityDiagram(elem, data);
    }
}

// export symbols to caller domain (necessary in Closure Compiler context)
window["erd"] = new EntityRelationshipFactoryImpl();
window["TabPanel"] = TabPanel;

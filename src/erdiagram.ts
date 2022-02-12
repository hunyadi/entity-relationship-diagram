/**
 * Entity Relationship Diagram (in TypeScript)
 * @author  Levente Hunyadi
 * @version 1.0
 * @remarks Copyright (C) 2022 Levente Hunyadi
 * @remarks Licensed under MIT, see https://opensource.org/licenses/MIT
 * @see     https://hunyadi.info.hu/
 **/

import { Arrow, Diagram, Movable } from "./diagram";
import { ElasticLayout, ElasticLayoutOptions } from "./elastic";
import { SpectralLayout } from "./spectral";
import TabPanel from "./tabpanel";


declare interface Renderable {
    get element(): Element;
}

declare interface EntityProperty {
    readonly name: string;
    readonly type: string;
}

declare interface EntityDescriptor {
    readonly name: string;
    readonly properties: EntityProperty[];
}

class EntityElement implements Renderable {
    private elem: HTMLTableCellElement;

    constructor(private entity: Entity, propertyName: string) {
        this.elem = entity.element.querySelector(`td[data-property="${propertyName}"]`)!;
    }

    public get element(): HTMLElement {
        return this.elem;
    }

    public get parent(): Entity {
        return this.entity;
    }
}

declare interface PropertyAccessor {
    property(id: string): EntityElement;
}

/**
 * Represents an entity in an entity relationship diagram (ERD).
 */
export class Entity implements PropertyAccessor, Renderable {
    private elem: HTMLTableElement;

    constructor(private descriptor: EntityDescriptor) {
        this.elem = document.createElement("table");
        this.elem.classList.add("entity");
        const rows = descriptor.properties.map(property => {
            const propName = `<span class="entity-property-name">${property.name}</span>`;
            const propType = `<span class="entity-property-type">${property.type}</span>`;
            return `<tr><td data-property="${property.name}">${propName}: ${propType}</td></tr>`;
        });
        this.elem.innerHTML = `<thead><tr><th>${descriptor.name} <span class="toggle"></span></th></tr></thead><tbody>` + rows.join("") + "</tbody>";

        const toggle = this.elem.querySelector("thead>tr>th>span.toggle")!;
        const body = this.elem.querySelector("tbody")!;
        toggle.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            body.classList.toggle("hidden");
        });
    }

    public get name(): string {
        return this.descriptor.name;
    }

    public get element(): HTMLElement {
        return this.elem;
    }

    public get head(): HTMLElement {
        return this.elem.querySelector("thead")!;
    }

    property(id: string): EntityElement {
        return new EntityElement(this, id);
    }
}

export class EntityRelationship {
    constructor(public source: EntityElement, public target: EntityElement) { }
}

declare interface EntityRelationshipData {
    entities: Entity[];
    relationships: EntityRelationship[];
}

class EntityDiagram {
    protected diagram: Diagram;

    constructor(elem: HTMLElement, protected data: EntityRelationshipData) {
        this.diagram = new Diagram(elem);
        elem.classList.add("diagram");
    }
}

class ElasticEntityDiagram extends EntityDiagram {
    constructor(elem: HTMLElement, data: EntityRelationshipData, options: ElasticLayoutOptions) {
        super(elem, data);
        elem.classList.add("elastic");

        this.layout(options);
    }

    private layout(options: ElasticLayoutOptions): void {
        this.data.entities.forEach(entity => {
            this.diagram.addElement(entity.element);
            new Movable(entity.element);
        });
        this.data.relationships.forEach(relationship => {
            this.diagram.addConnector(new Arrow(relationship.source.element, relationship.target.element));
        });
        this.diagram.shuffle();

        const elements = this.data.entities.map(entity => { return entity.element; });
        const edges = this.data.relationships.map(relationship => {
            return { source: relationship.source.parent.element, target: relationship.target.parent.element };
        });

        const spectralLayout = new SpectralLayout(elements, edges);
        const points = spectralLayout.calculate();

        for (let [k, element] of elements.entries()) {
            element.style.left = 100 * points[k]!.x + "%";
            element.style.top = 100 * points[k]!.y + "%";
        }

        let elasticLayout = new ElasticLayout(
            options,
            this.diagram.getHost(),
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
        this.selector = this.diagram.getHost().querySelector("select")!;

        this.data.entities.forEach(entity => {
            entity.head.addEventListener("click", event => {
                event.preventDefault();
                this.show(entity);
            });

            const option = document.createElement("option");
            option.innerText = entity.name;
            this.selector.append(option);
        });
        this.selector.addEventListener("change", () => {
            const selected = this.data.entities.find(entity => {
                return entity.name == this.selector.value;
            });
            if (selected) {
                this.display(selected);
            }
        });
        if (this.data.entities.length > 0) {
            this.display(this.data.entities[0]!);
        }
    }

    show(entity: Entity): void {
        this.selector.value = entity.name;
        this.display(entity);
    }

    private display(entity: Entity): void {
        this.diagram.clear();

        const leftPanel = this.diagram.getHost().querySelector(".left")!;
        const centerPanel = this.diagram.getHost().querySelector(".center")!;
        const rightPanel = this.diagram.getHost().querySelector(".right")!;

        const visible = new Set<Entity>();

        centerPanel.append(entity.element);
        this.diagram.addElement(entity.element);

        // add entities to diagram connected by a relationship
        this.data.relationships.forEach(relationship => {
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
        elem.classList.add("spectral");

        this.data.entities.forEach(entity => {
            this.diagram.addElement(entity.element);
            new Movable(entity.element);
        });

        this.data.relationships.forEach(relationship => {
            this.diagram.addConnector(new Arrow(relationship.source.element, relationship.target.element));
        });

        const edges = this.data.relationships.map(relationship => {
            return { source: relationship.source.parent, target: relationship.target.parent };
        });

        const layout = new SpectralLayout(this.data.entities, edges);
        const points = layout.calculate();

        for (let [k, entity] of this.data.entities.entries()) {
            const element = entity.element;
            element.style.left = 100 * points[k]!.x + "%";
            element.style.top = 100 * points[k]!.y + "%";
        }
    }
}

export class EntityGraph {
    /** Maps entities to their neighbors. */
    private graph = new Map<Entity, Set<Entity>>();

    constructor(relationships: EntityRelationship[]) {
        relationships.forEach(relationship => {
            const source = relationship.source.parent;
            const target = relationship.target.parent;
            if (source !== target) {  // ignore loops to self
                let neighbors = this.graph.get(source);
                if (neighbors !== undefined) {
                    neighbors.add(target);  // ignore parallel edges to same node
                } else {
                    neighbors = new Set();
                    neighbors.add(target);  // ignore parallel edges to same node
                    this.graph.set(source, neighbors);
                }
            }
        });
    }

    shortestPath(source: Entity, target: Entity): Entity[] | undefined {
        const queue: Entity[] = [source];
        const predecessor = new Map<Entity, Entity>();
        const visited = new Set<Entity>();
        visited.add(source);

        while (queue.length > 0) {
            const u = queue.shift()!;
            const neighbors = this.graph.get(u);
            if (!neighbors) {
                continue;
            }

            for (const v of neighbors) {
                if (visited.has(v)) {
                    continue;
                }

                visited.add(v);
                if (v === target) {  // check if the path is complete
                    let path = [v];

                    // backtrack through the path
                    let p = u;
                    while (p !== source) {
                        path.push(p);
                        p = predecessor.get(p)!;
                    }
                    path.push(p);
                    path.reverse();
                    return path;
                }

                predecessor.set(v, u);
                queue.push(v);
            }
        }
        return undefined;
    }
}

/**
 * An interface that prevents name mangling for factory functions when TypeScript code is fed to the Closure Compiler.
 */
declare interface EntityRelationshipFactory {
    createEntity(descriptor: EntityDescriptor): Entity;
    createRelationship(source: EntityElement, target: EntityElement): EntityRelationship;
    createElasticDiagram(elem: HTMLElement, data: EntityRelationshipData, options: ElasticLayoutOptions): ElasticEntityDiagram;
    createNavigableDiagram(elem: HTMLElement, data: EntityRelationshipData): NavigableEntityDiagram;
    createSpectralDiagram(elem: HTMLElement, data: EntityRelationshipData): SpectralEntityDiagram;
}

/**
 * The concrete implementation of the factory function interface.
 */
class EntityRelationshipFactoryImpl implements EntityRelationshipFactory {
    createEntity(descriptor: EntityDescriptor): Entity {
        return new Entity(descriptor);
    }

    createRelationship(source: EntityElement, target: EntityElement): EntityRelationship {
        return new EntityRelationship(source, target);
    }

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

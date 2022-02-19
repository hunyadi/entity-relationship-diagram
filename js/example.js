function getSimpleSetup() {
    return {
        entities: {
            "City": {
                properties: {
                    "id": { type: "int" },
                    "name": { type: "string" },
                },
                keys: {
                    primary: "id",
                },
            },
            "Address": {
                properties: {
                    "id": { type: "bigint" },
                    "zip": { type: "decimal(4)" },
                    "city_id": { type: "int" },
                    "street": { type: "string" },
                    "number": { type: "decimal" },
                },
                keys: {
                    primary: "id",
                },
            },
            "Person": {
                properties: {
                    "id": { type: "bigint" },
                    "family_name": { type: "string" },
                    "given_name": { type: "string" },
                    "perm_address_id": { type: "bigint" },
                    "temp_address_id": { type: "bigint" },
                    "manager_id": { type: "bigint" },
                },
                keys: {
                    primary: "id",
                },
            },
        },
        relationships: [
            {
                source: { entity: "Address", property: "city_id" },
                target: { entity: "City", property: "id" },
            },
            {
                source: { entity: "Person", property: "perm_address_id" },
                target: { entity: "Address", property: "id" },
            },
            {
                source: { entity: "Person", property: "temp_address_id" },
                target: { entity: "Address", property: "id" },
            },
            {
                source: { entity: "Person", property: "manager_id" },
                target: { entity: "Person", property: "id" },
            },
        ],
    };
}

function getComplexSetup() {
    const count = 20;

    const entities = {};
    for (let i = 0; i < count; ++i) {
        const count = 26 * (0.5 + 0.5 * Math.random());
        let props = {};
        for (let j = 0; j < count; ++j) {
            props[String.fromCharCode("a".charCodeAt(0) + j)] = {
                type: "type" + (j % 5 + 1)
            };
        }
        const k = Math.floor(count * Math.random());
        entities["entity" + i] = {
            properties: props,
            keys: {
                primary: String.fromCharCode("a".charCodeAt(0) + k),
            },
        };
    }

    const relationships = [];
    for (const sourceName of Object.keys(entities)) {
        for (const targetName of Object.keys(entities)) {
            if (Math.random() > 0.9) {
                relationships.push({
                    source: { entity: sourceName, property: "a" },
                    target: { entity: targetName, property: "b" },
                });
            }
        }
    }

    return { entities, relationships };
}

function displayElasticDiagram(setup) {
    diagram = erd.createElasticDiagram(document.getElementById("elastic-diagram"), setup, {
        charge: 1000,
        stiffness: 0.2,
        drag: 0.5,
        gravity: 2.0,
        iterations: 500,
    });
}

function displayNavigableDiagram(setup) {
    diagram = erd.createNavigableDiagram(document.getElementById("navigable-diagram"), setup);
}

function displaySpectralDiagram(setup) {
    diagram = erd.createSpectralDiagram(document.getElementById("spectral-diagram"), setup);
}

document.addEventListener("DOMContentLoaded", () => {
    const setup = getComplexSetup();
    displayElasticDiagram(setup);
    displayNavigableDiagram(setup);
    displaySpectralDiagram(setup);
    new TabPanel(document.getElementById("tab-panel"));
});

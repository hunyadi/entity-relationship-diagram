/** Randomizes the order of elements in an array using the Durstenfeld version of the Fisher-Yates shuffle. */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

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

    function getPropertyType(seed) {
        const innerType = "type" + (seed % 5 + 1);
        if (seed % 4 == 0) {
            return innerType;
        } else if (seed % 4 == 1) {
            return {
                "item": innerType,
            }
        } else if (seed % 4 == 2) {
            return {
                "element": innerType,
            }
        } else if (seed % 4 == 3) {
            return {
                "key": innerType,
                "value": innerType,
            }
        }
    }

    const entities = {};
    for (let i = 0; i < count; ++i) {
        const count = 26 * (0.5 + 0.5 * Math.random());
        let props = {};
        for (let j = 0; j < count; ++j) {
            props[String.fromCharCode("a".charCodeAt(0) + j)] = {
                type: getPropertyType(j)
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

    function getRelationship(sourceName, targetName) {
        return {
            source: { entity: sourceName, property: "a" },
            target: { entity: targetName, property: "b" },
        };
    }

    const relationships = [];
    const entityArray = Object.keys(entities);
    shuffle(entityArray);
    for (let i = 0; i < entityArray.length - 1; ++i) {
        const sourceName = entityArray[i];

        // ensure entity has at least one connection (to make the graph fully connected)
        relationships.push(getRelationship(sourceName, entityArray[i + 1]));

        for (let j = i + 2; j < entityArray.length; ++j) {
            if (Math.random() > 0.9) {
                relationships.push(getRelationship(sourceName, entityArray[j]));
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

window.addEventListener("load", () => {
    displayNavigableDiagram(EntityRelationshipGraph);
    displaySpectralDiagram(EntityRelationshipGraph);
    new TabPanel(document.getElementById("tab-panel"));
});

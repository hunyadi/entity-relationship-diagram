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
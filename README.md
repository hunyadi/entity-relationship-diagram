# Entity relationship diagram

An HTML5 entity relationship diagram with entities as HTML elements and relationships as SVG Beziér curves. Items are arranged on a drawing canvas with a force-based or a spectral layout.

## Usage

1. Create named entities with properties.
2. Define relationships between entity properties.
2. Create a diagram, passing entities and relationships.
5. Use force-based or spectral layout to arrange entities on the canvas.

Refer to the [demo page](https://hunyadi.github.io/entity-relationship-diagram/index.html) and the corresponding [source code](index.html) for a full example.

## Background

### Entities and relationships

Entities and relationships are declared using a simple descriptor language. When they are passed to a diagram instance, entities are wrapped in a class instantiated with a name, and a list of properties. They correspond to an HTML `<table>` element in which each property becomes a table row. Likewise, a new connector object (visualized with a Bézier curve) is instantiated for each relationship.

### Diagram layers and behavior

The diagram is a container element with two layers. The *drawing layer* hosts standard HTML elements, whereas the *connection layer* is implemented as an SVG element in which Bézier curves are drawn. Both layers are positioned elements, and the coordinate systems of the two are aligned with each other.

When objects are added to the diagram, they are added as descendants of the *drawing layer*. When connections are added, they are put on the *connection layer*.

Objects and connections are kept in sync by means of a series of observers, such as [mutation observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) and [resize observer](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver). Whenever an object changes position or size, the connectors are adjusted to match the new position and/or size. If one end of a connection becomes invisible (CSS `display` set to `none`), the connector will move to the closest visible ancestor element. If an object is deleted, any associated connections are also deleted.

Objects on the drawing layer are draggable. When the mouse button is depressed, the position of the object follows the cursor, updating the object's local coordinates. The object's position is set in pixels or percentages (w.r.t. to the so-called *offset parent*), depending on how they were originally defined.

Each connection on the connection layer is a Bézier curve (SVG `path`), with endpoints virtually attached to the HTML elements on the drawing layer. Endpoints and control points of the path are updated when position or size of the endpoint HTML elements change. Connectors attach to the left and right edges of objects, and a simple algorithm aims to minimize the path length. Connections can link objects in the same hierarchy (e.g. a self-referencing SQL table).

### Layout algorithms

The diagram supports two main layout algorithms: *force-based layout* and *spectral layout* to arrange elements on the drawing layer.

#### Force-based layout

Force-based layout is a simplified physics simulation with forces, velocities and positions. Parameters of the simulation include:
* Charge of an object, controls the repulsive force exerted by the object, according to [Coulomb's law](https://en.wikipedia.org/wiki/Coulomb%27s_law).
* Stiffness of the spring, controls the attractive force exerted by the connection between two objects, according to [Hooke's Law](https://en.wikipedia.org/wiki/Hooke%27s_law).
* Drag force, which acts in opposite direction to the object's velocity, to slow down fast-moving objects.
* Gravitational force that pulls objects towards the center of the diagram.

When the force-based layout is initialized, it performs a few initial iterations before a visual simulation begins. The simulation ends when all objects are within the visual viewport of the diagram, and they are nearly at rest. Simulation is done with the help of [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame).

#### Spectral layout

Spectral layout is based on the idea that coordinates obtained from eigenvectors of the graph [Laplacian matrix](https://en.wikipedia.org/wiki/Laplacian_matrix) provide a good (aesthetically pleasing) distribution of nodes across the plane. It works well for dense graphs, and can provide an initial layout for other algorithms.

The graph Laplacian is calculated as the difference of the degree matrix and the adjacency matrix. The layout algorithm computes the eigenvalues and corresponding eigenvectors of the Laplacian matrix, and takes the eigenvectors that belong to the smallest and second-smallest nonzero eigenvalues. Positions of nodes on the plane are set as the coordinates of these eigenvectors.

Eigenvalues and eigenvectors of the real symmetric graph Laplacian matrix are calculated with the [Jacobi eigenvalue algorithm](https://en.wikipedia.org/wiki/Jacobi_eigenvalue_algorithm). See [a live demonstration](http://www.math.u-szeged.hu/~nagyg/Oktatas/INF/DiagonalizationJacobi.html) of how the algorithm works.

The layout algorithm can produce nodes that are too close to one another. As a post-processing step, co-located nodes are identified and their separation is increased. To make space for separating co-located nodes, nodes in the graph are pushed outwards in a radial direction.

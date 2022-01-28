# Entity relationship diagram

An HTML5 entity relationship diagram with entities as HTML elements and relationships as SVG Beziér curves. Items are arranged on a drawing canvas with a force-based layout.

## Usage

1. Create named entities with properties.
2. Create a diagram.
3. Add entities to the diagram.
4. Add connections to the diagram based on entity relationships.
5. Use force-based layout to arrange entities on the canvas.

Refer to the [demo page](index.html) for a full example.

## Background

Entities are instances of a wrapper class, instantiated with a name, and a list of properties. They correspond to an HTML `<table>` element in which each property becomes a table row.

The diagram is a container element with two layers. The *drawing layer* hosts standard HTML elements, whereas the *connection layer* is implemented as an SVG element in which Bézier curves are drawn. Both layers are positioned elements, and the coordinate systems of the two are aligned with each other.

When objects are added to the diagram, they are added as descendants of the *drawing layer*. When connections are added, they are put on the *connection layer*.

Objects and connections are kept in sync by means of a series of observers, such as [mutation observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) and [resize observer](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver). Whenever an object changes position or size, the connectors are adjusted to match the new position and/or size. If one end of a connection becomes invisible (CSS `display` set to `none`), the connector will move to the closest visible ancestor element. If an object is deleted, any associated connections are also deleted.

Objects on the drawing layer are draggable. When the mouse button is depressed, the position of the object follows the cursor, updating the object's local coordinates.

Each connection on the connection layer is a Bézier curve (SVG `path`), with endpoints virtually attached to the HTML elements on the drawing layer. Endpoints and control points of the path are updated when position or size of the endpoint HTML elements change. Connectors attach to the left and right edges of objects, and a simple algorithm aims to minimize the path length. Connections can link objects in the same hierarchy (e.g. a self-referencing SQL table).

The diagram uses *force-based layout* to arrange elements on the drawing layer, which is a simplified physics simulation with forces, velocities and positions. Parameters of the simulation include:
* Charge of an object, controls the repulsive force exerted by the object, according to [Coulomb's law](https://en.wikipedia.org/wiki/Coulomb%27s_law).
* Stiffness of the spring, controls the attractive force exerted by the connection between two objects, according to [Hooke's Law](https://en.wikipedia.org/wiki/Hooke%27s_law).
* Drag force, which acts in opposite direction to the object's velocity.
* Gravitational force that pulls objects towards the center of the diagram.

When the force-based layout is initialized, it performs a few initial iterations before a visual simulation begins. The simulation ends when all objects are within the visual viewport of the diagram, and they are nearly at rest. Simulation is done with the help of [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame).

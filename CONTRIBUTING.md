# Entity relationship diagram

An HTML5 entity relationship diagram with entities as HTML elements and relationships as SVG Beziér curves. Items are arranged on a drawing canvas with a force-based or a spectral layout.

## Clone from repository

Clone the project from the [source repository](https://github.com/hunyadi/entity-relationship-diagram):

```sh
git clone https://github.com/hunyadi/entity-relationship-diagram.git
```

## Build from source

Install `webpack` and TypeScript dependencies:

```sh
$ npm install webpack webpack-cli ts-loader --save-dev
```

Build the project with `webpack`:

```sh
$ npx webpack --config webpack.config.js
```

## Create a package

Run the following commands to publish the package to [npm](https://www.npmjs.com/package/entity-relationship-diagram):

```sh
$ npm login
$ npm publish --access public
```

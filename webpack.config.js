const path = require("path");
const webpack = require("webpack")

module.exports = {
  mode: "production",
  entry: {
    main: "./src/erdiagram.ts",
  },
  output: {
    path: path.resolve(__dirname, './js'),
    filename: "erdiagram.min.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      raw: true,
      banner: [
        "/**",
        " * Entity Relationship Diagram (in TypeScript)",
        " * @author  Levente Hunyadi",
        " * @version 1.0",
        " * @remarks Copyright (C) 2022-2024 Levente Hunyadi",
        " * @remarks Licensed under MIT, see https://opensource.org/licenses/MIT",
        " * @see     https://github.com/hunyadi/entity-relationship-diagram/",
        " **/"
      ].join("\n"),
      stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT,
    })
  ]
};

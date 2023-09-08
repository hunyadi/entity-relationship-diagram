const path = require('path');

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
  }
};

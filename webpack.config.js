import path from "node:path";
import { fileURLToPath } from "node:url";
import webpack from "webpack";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: "production",
    entry: {
        main: "./src/erdiagram.ts",
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "erdiagram.min.js",
        library: {
            name: 'erd',
            type: 'window',
            export: 'erd',
        }
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    compilerOptions: {
                        noEmit: false
                    }
                }
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

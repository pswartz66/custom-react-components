import babel from "rollup-plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

import packageJSON from "./package.json";
const input = "./src/index.js";

export default [
    // CommonJS
    {
        input, // required field in rollup docs
        output: {
            file: packageJSON.main,
            format: "cjs" // required field in rollup docs
        },
        plugins: [
            babel({
                exclude: "node_modules/**"
            }),
            external(),
            resolve(),
            commonjs()
        ]
    }
];
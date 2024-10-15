
// - Imports - //

import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';
import { terser } from 'rollup-plugin-terser'; // See terser options here: https://github.com/terser/terser#minify-options
import copy from 'rollup-plugin-copy';


// - Config - //

// // Mode.
// const devMode = (process.env.NODE_ENV === 'development');
// console.log(`${ devMode ? 'development' : 'production' } mode bundle`);

export default [


    // - Declarations (+ delete dts folder) - //

    {
        input: 'dist/dts/index.d.ts',
        output: {
          file: 'dist/js.d.ts',
          format: 'es',
        },
        plugins: [
            dts(),
            del({ targets: 'dist/dts*', hook: 'buildEnd' }),
        ],
    },
    {
        input: 'dist/core/dts/index_core.d.ts',
        output: {
          file: 'dist/core.d.ts',
          format: 'es',
        },
        plugins: [
            dts(),
            // Note. Needs to run copy plugin for each. Othewise only the first one seems to work (at least with transform).
            // .. The default typing.
            copy({
                targets: [{
                    src: "dist/dts/ts/index.d.ts",
                    dest: "dist",
                    rename: "dom-types.d.ts",
                    transform: (contents, filename) => contents.toString().replace(' from "./index_"', ' from "./"')
                }]
            }),
            // .. Only methods typing.
            copy({
                targets: [{
                    src: "dist/js.d.ts",
                    dest: "dist",
                    transform: (contents, filename) => {
                        let str = contents.toString();
                        const i = str.indexOf("declare function");
                        const iStart = str.slice(0, i).lastIndexOf("\n\n");
                        // Note. We do this manually. If changes JS side, should re-verify.
                        const importsStr = 'import { AnyString, CSSProperties, ClassNameInput, DOMCleanProps, DOMDiffProps, DOMTags, DOMUncleanProps, FalseLike } from "./core";\n';
                        str = importsStr + str.slice(iStart).trim().replace(/\nexport {.*};/, "").replaceAll("declare function", "export declare function");
                        return str;
                    }
                }]
            }),
            // .. Only camelCase typing.
            copy({
                targets: [{
                    src: "dist/camelCase/dts/Attributes_camelCase.d.ts",
                    dest: "dist",
                    rename: "camelCase.d.ts",
                    transform: (contents, filename) => contents.toString().replace(' from "./index_base"', ' from "./core"').replace("\nexport {}", 'export * from "./core"')
                }]
            }),
            // .. Only native typing.
            copy({
                targets: [{
                    src: "dist/native/dts/Attributes_native.d.ts",
                    dest: "dist",
                    rename: "native.d.ts",
                    transform: (contents, filename) => contents.toString().replace(' from "./index_base"', ' from "./core"').replace("\nexport {}", 'export * from "./core"')
                }]
            }),
            // Delete folders.
            del({ targets: ['dist/core*', 'dist/camelCase', 'dist/camelCase/*', 'dist/native', 'dist/native/*', 'dist/dts*'], hook: 'buildEnd' }),
        ],
    },


    // - ES Module - //

    {
        input: 'dist/index.js',
        output: {
            file: 'dist/dom-types.module.js',
            format: 'es',
        },
        plugins: [
            terser({
                ecma: 2015,
                mangle: false,
                compress: {
                    module: true,
                    keep_fnames: true,
                    keep_fargs: true,
                    keep_classnames: true,
                    // unsafe_arrows: true,
                },
                output: { quote_style: 1 }
            }),
        ],
    },


    // - CJS - //

    {
        input: 'dist/index.js',
        output: {
            file: 'dist/dom-types.js',
            format: 'cjs',
            exports: "auto"
        },
        plugins: [
            terser({
                ecma: 2015,
                mangle: false,
                compress: {
                    module: true,
                    keep_fnames: true,
                    keep_fargs: true,
                    keep_classnames: true,
                    // unsafe_arrows: true,
                },
                output: { quote_style: 1 }
            }),
            
    //     ],
    // },
    //
    //
    // // - Delete - //
    //
    // // Delete the extras.
    // {
    //     input: 'dist/dom-types.module.js',
    //     plugins: [

            del({ targets: ['dist/ts*', 'dist/js', 'dist/js/*', 'dist/index.js'], hook: 'buildEnd' })
        ]
    },

];

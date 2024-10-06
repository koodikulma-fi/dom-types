
// - Imports - //

import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';
import { terser } from 'rollup-plugin-terser'; // See terser options here: https://github.com/terser/terser#minify-options


// - Config - //

// // Mode.
// const devMode = (process.env.NODE_ENV === 'development');
// console.log(`${ devMode ? 'development' : 'production' } mode bundle`);

export default [


    // - Declarations (+ delete dts folder) - //

    {
        input: 'dist/dts/index.d.ts',
        output: {
          file: 'dist/dom-types.d.ts',
          format: 'es',
        },
        plugins: [
            dts(),
            del({ targets: 'dist/dts*', hook: 'buildEnd' }),
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

            del({ targets: ['dist/ts*', 'dist/js*', 'dist/index.js'], hook: 'buildEnd' })
        ]
    },

];

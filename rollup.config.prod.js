const path = require('path');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const json = require('rollup-plugin-json');
const vue = require('rollup-plugin-vue');
const postcss = require('rollup-plugin-postcss');
const { terser } = require('rollup-plugin-terser');

const inputPath = path.resolve(__dirname, './src/index.js');
const outputUmdPath = path.resolve(__dirname, './dist/better.datav.min.js');
const outputEsPath = path.resolve(__dirname, './dist/better.datav.es.min.js');

module.exports = {
    input: inputPath,
    output: [{
        file: outputUmdPath,
        format: 'umd',
        name: 'betterDatav',
        globals: {
            vue: 'vue'
        }
    }, {
        file: outputEsPath,
        format: 'cjs',
        globals: {
            vue: 'vue'
        }
    }],
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true,
            plugins: [
                ['@babel/transform-runtime', {
                    regenerator: true
                }]
            ]
        }),
        json(),
        json(),
        vue(),
        postcss({
            plugins: []
        }),
        terser()
    ],
    external: ['vue']
};

const babel = require('rollup-plugin-babel');
const { uglify } = require('rollup-plugin-uglify');

const plugins = [
  babel({
    runtimeHelpers: true,
    externalHelpers: true,
    babelrc: false,
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
        }
      ],
    ],
    plugins: [
      // helpers
      '@babel/plugin-external-helpers',
      // transform
      ["@babel/plugin-transform-classes", {
        "loose": true
      }],
      '@babel/plugin-transform-regenerator',
      ["@babel/plugin-transform-runtime", {
        "helpers": true,
        "regenerator": true,
      }]
    ],
  }),
  uglify(),
];

module.exports = plugins;
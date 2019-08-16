process.env.NODE_ENV = 'production';

const { resolve } = require('path');
const fg = require('fast-glob');
const plugins = require('./rollup.plugins');

const filePath = resolve(__dirname, 'src', '**/*.js');
const entries = fg.sync(filePath);

const config = entries.map(entry => {
  return {
    input: entry,
    output: {
      file: entry.replace('src', 'dist'),
      format: 'cjs',
      sourcemap: false,
    },
    plugins,
  };
});

export default config;
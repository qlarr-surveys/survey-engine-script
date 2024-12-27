import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.js',  // Your entry point
  output: [
    {
      file: 'dist/survey-engine-script.min.js',  // UMD format, minified
      format: 'umd',
      name: 'EMScript',
      plugins: [terser()],
    }
  ],
  plugins: [
    resolve(),  // Resolves node_modules
    babel({ babelHelpers: 'bundled' }),  // Transpiles with Babel
  ]
};


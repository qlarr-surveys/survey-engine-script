import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.js',  // Your entry point
  output: [
    {
      // Self-contained UMD bundle (global `EMScript`). This is the artifact the
      // survey-engine (JVM/iOS/browser) loads as a resource and evals directly,
      // so its filename and global name must not change.
      file: 'dist/survey-engine-script.min.js',
      format: 'umd',
      name: 'EMScript',
      plugins: [terser()],
    },
    {
      // ESM build for JS consumers using `import { validateCode }`.
      file: 'dist/survey-engine-script.esm.mjs',
      format: 'es',
    }
  ],
  plugins: [
    resolve(),  // Resolves node_modules
    babel({ babelHelpers: 'bundled' }),  // Transpiles with Babel
  ]
};


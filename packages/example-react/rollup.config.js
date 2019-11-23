// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { terser } from "rollup-plugin-terser";

export default {
  external: ['react', 'react-dom'],
  
  input: 'dist/index.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    name: 'ExampleReact',
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    },
  },
  plugins: [
    resolve(),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    //terser()
  ]
};
import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";

const input = [
  './src/asyncEnumerable.ts',
  './src/internal/collections.ts',
  './src/dispatcher.ts',
  './src/disposable.ts',
  './src/enumerable.ts',
  './src/internal/env.ts',
  './src/flowable.ts',
  './src/functions.ts',
  './src/io.ts',
  './src/internal/keyedQueue.ts',
  './src/internal/multimaps.ts',
  './src/node.ts',
  './src/observable.ts',
  './src/option.ts',
  './src/internal/queues.ts',
  './src/react.ts',
  './src/readonlyArray.ts',
  './src/readonlyObjectMap.ts',
  './src/relativeURI.ts',
  './src/runnable.ts',
  './src/scheduler.ts',
  './src/sequence.ts',
  './src/stateStore.ts',
  './src/streamable.ts',
];

const output = {
  dir: './build',
};

const typescriptConfig = {
  tsconfig: 'tsconfig.base.json',
};

export default [
  {
    treeshake: false,
    input,
    output: {
      ...output,
      chunkFileNames: '[name]-[hash].mjs',
      entryFileNames: '[name].mjs',
      format: 'esm',
    },
    plugins: [
      typescript(typescriptConfig)
    ],
  },
  {
    treeshake: false,
    input,
    output: {
      ...output,
      chunkFileNames: '[name]-[hash].js',
      entryFileNames: '[name].js',
      format: 'cjs',
    },
    plugins: [
      typescript(typescriptConfig)
    ],
  },
  {
    input,
    output,
    plugins: [dts()],
  },
]
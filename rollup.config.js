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

const types = [
  './types/asyncEnumerable.d.ts',
  './types/internal/collections.d.ts',
  './types/dispatcher.d.ts',
  './types/disposable.d.ts',
  './types/enumerable.d.ts',
  './types/internal/env.d.ts',
  './types/flowable.d.ts',
  './types/functions.d.ts',
  './types/io.d.ts',
  './types/internal/keyedQueue.d.ts',
  './types/internal/multimaps.d.ts',
  './types/node.d.ts',
  './types/observable.d.ts',
  './types/option.d.ts',
  './types/internal/queues.d.ts',
  './types/react.d.ts',
  './types/readonlyArray.d.ts',
  './types/readonlyObjectMap.d.ts',
  './types/relativeURI.d.ts',
  './types/runnable.d.ts',
  './types/scheduler.d.ts',
  './types/sequence.d.ts',
  './types/stateStore.d.ts',
  './types/streamable.d.ts',
];

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
    input: types,
    output: {
      ...output,
      format: 'esm',
    },
    plugins: [dts()],
  },
]
import {
  TContainerOf,
  concat,
  concatAll,
  distinctUntilChanged,
  fromArray,
  fromArrayT,
  generate,
  keep,
  map,
  repeat,
  scan,
  skipFirst,
  takeFirst,
  takeLast,
  takeWhile,
  toRunnable,
  zipT,
} from "../sequence";
import { describe } from "../testing";
import { createZippableTests } from "./enumerable.test";
import { createRunnableTests } from "./runnable.test";

export const tests = describe(
  "sequence",
  createRunnableTests({
    TContainerOf,
    fromArray,
    concat,
    concatAll,
    distinctUntilChanged,
    generate,
    keep,
    map,
    repeat,
    scan,
    skipFirst,
    takeFirst,
    takeLast,
    takeWhile,
    toRunnable,
  }),
  createZippableTests({ ...fromArrayT, generate, map, toRunnable, ...zipT }),
);

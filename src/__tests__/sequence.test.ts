import {
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
  type,
  zipT,
} from "../sequence";
import { describe } from "../testing";
import { createZippableTests } from "./enumerable.test";
import { createRunnableTests } from "./runnable.test";

export const tests = describe(
  "sequence",
  createRunnableTests({
    type,
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

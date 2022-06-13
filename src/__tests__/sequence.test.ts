import { describe } from "../testing";
import { createRunnableTests } from "./runnable.test";

import {
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
} from "../sequence";

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
);

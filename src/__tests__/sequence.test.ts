import {
  concat,
  concatAll,
  distinctUntilChanged,
  fromArray,
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
} from "../sequence";
import { describe } from "../testing";
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
);

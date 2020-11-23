import { createMonadTests } from "./monad.test";
import {
  concat,
  concatMap,
  distinctUntilChanged,
  empty,
  endWith,
  fromArray,
  fromValue,
  generate,
  keep,
  map,
  mapTo,
  repeat,
  scan,
  skipFirst,
  startWith,
  takeFirst,
  takeLast,
  takeWhile,
  toRunnable,
} from "./sequence";
import { describe } from "./testing";

const Sequence = {
  concat,
  concatMap,
  distinctUntilChanged,
  empty,
  endWith,
  fromArray,
  fromValue,
  generate,

  keep,
  map,
  mapTo,
  repeat,
  scan,
  skipFirst,
  startWith,
  takeFirst,
  takeLast,
  takeWhile,
  toRunnable,
};

export const tests = describe("sequence", createMonadTests(Sequence));

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
} from "../sequence";
import { describe } from "../testing";
import { createMonadTests } from "./monad.test";

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

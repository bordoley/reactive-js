import * as Enumerable from "../Enumerable.js";
import * as Observable from "../Observable.js";
import {
  describe,
  expectArrayEquals,
  test,
  testModule,
} from "../__internal__/testing.js";
import { pipe, pipeLazy } from "../functions.js";

testModule(
  "Enumerable",
  describe(
    "concatAll",
    test(
      "concats the input containers in order",
      pipeLazy(
        [
          pipe([1, 2, 3], Observable.fromReadonlyArray()),
          pipe([4, 5, 6], Observable.fromReadonlyArray()),
        ],
        Observable.fromReadonlyArray(),
        Enumerable.concatAll(),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5, 6]),
      ),
    ),
  ),
  describe(
    "concatMap",
    test(
      "maps each value to a container and flattens",
      pipeLazy(
        [0, 1],
        Observable.fromReadonlyArray(),
        Enumerable.concatMap(
          pipeLazy([1, 2, 3], Observable.fromReadonlyArray()),
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),
  ),
);

((_: Enumerable.Signature) => {})(Enumerable);

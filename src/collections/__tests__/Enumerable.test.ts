import {
  describe,
  expectArrayEquals,
  test,
  testModule,
} from "../../__internal__/testing.js";
import { pipe, pipeLazy } from "../../functions.js";

import * as Enumerable from "../Enumerable.js";
import * as ReadonlyArray from "../ReadonlyArray.js";

testModule(
  "Enumerable",
  describe(
    "concatAll",
    test(
      "concats the input containers in order",
      pipeLazy(
        [
          pipe([1, 2, 3], ReadonlyArray.values()),
          pipe([4, 5, 6], ReadonlyArray.values()),
        ],

        ReadonlyArray.values(),
        Enumerable.concatAll(),
        Enumerable.toReadonlyArray(),
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
        ReadonlyArray.values(),
        Enumerable.concatMap(pipeLazy([1, 2, 3], ReadonlyArray.values())),
        Enumerable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),
  ),
);

((_: Enumerable.Signature) => {})(Enumerable);

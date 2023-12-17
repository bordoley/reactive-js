import {
  describe,
  expectArrayEquals,
  expectEquals,
  test,
  testModule,
} from "../../__internal__/testing.js";
import { PureComputationModule } from "../../computations.js";
import PureComputationModuleTests from "../../computations/__tests__/fixtures/PureComputationModuleTests.js";
import {
  arrayEquality,
  increment,
  pipe,
  pipeLazy,
  returns,
  tuple,
} from "../../functions.js";

import * as Enumerable from "../Enumerable.js";
import * as ReadonlyArray from "../ReadonlyArray.js";

testModule(
  "Enumerable",
  PureComputationModuleTests(
    Enumerable as PureComputationModule<Enumerable.Type>,
    Enumerable.toReadonlyArray,
  ),
  describe(
    "Iterable",
    PureComputationModuleTests(
      Enumerable as PureComputationModule<Enumerable.Type>,
      returns(Array.from),
    ),
  ),
  describe(
    "concat",
    test(
      "concats the input containers in order",
      pipeLazy(
        Enumerable.concat(
          pipe([1, 2, 3], ReadonlyArray.values()),
          pipe([4, 5, 6], ReadonlyArray.values()),
        ),
        Enumerable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5, 6]),
      ),
    ),
  ),
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
    "concatMany",
    test(
      "with empty input",
      pipeLazy(
        Enumerable.concatMany<number>([]),
        Enumerable.toReadonlyArray(),
        expectArrayEquals<number>([]),
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
  describe(
    "concatWith",
    test(
      "concats the input containers in order",
      pipeLazy(
        pipe([1, 2, 3], ReadonlyArray.values()),
        Enumerable.concatWith(pipe([4, 5, 6], ReadonlyArray.values())),
        Enumerable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5, 6]),
      ),
    ),
  ),
  describe(
    "reduce",
    test(
      "sum up the first 5 numbers",
      pipeLazy(
        Enumerable.generate(increment, returns(0)),
        Enumerable.takeFirst({ count: 5 }),
        Enumerable.reduce<number, number>((x, y) => x + y, returns(0)),
        expectEquals(15),
      ),
    ),
  ),
  describe(
    "repeat",
    test(
      "repeat the source 3 times",
      pipeLazy(
        Enumerable.generate(increment, returns(0)),
        Enumerable.takeFirst({ count: 2 }),
        Enumerable.repeat(3),
        Enumerable.toReadonlyArray(),
        expectArrayEquals([1, 2, 1, 2, 1, 2]),
      ),
    ),
    test(
      "with predicate",
      pipeLazy(
        Enumerable.generate(increment, returns(0)),
        Enumerable.takeFirst({ count: 2 }),
        Enumerable.repeat(x => x < 3),
        Enumerable.toReadonlyArray(),
        expectArrayEquals([1, 2, 1, 2, 1, 2]),
      ),
    ),
    test(
      "repeat forever",
      pipeLazy(
        Enumerable.generate(increment, returns(0)),
        Enumerable.takeFirst({ count: 2 }),
        Enumerable.repeat(),
        Enumerable.takeFirst({ count: 6 }),
        Enumerable.toReadonlyArray(),
        expectArrayEquals([1, 2, 1, 2, 1, 2]),
      ),
    ),
    test(
      "with array source",
      pipeLazy(
        [1],
        Enumerable.fromReadonlyArray(),
        Enumerable.repeat(3),
        Enumerable.toReadonlyArray(),
        expectArrayEquals([1, 1, 1]),
      ),
    ),
  ),
  describe(
    "zip",
    test(
      "when all inputs are the same length",
      pipeLazy(
        Enumerable.zip(
          pipe([1, 2, 3, 4, 5], ReadonlyArray.values()),
          pipe([5, 4, 3, 2, 1], ReadonlyArray.values()),
        ),
        Enumerable.toReadonlyArray(),
        expectArrayEquals(
          [tuple(1, 5), tuple(2, 4), tuple(3, 3), tuple(4, 2), tuple(5, 1)],
          { valuesEquality: arrayEquality() },
        ),
      ),
    ),
    test(
      "when inputs are different length",
      pipeLazy(
        Enumerable.zip(
          pipe([1, 2, 3], ReadonlyArray.values()),
          pipe([5, 4, 3, 2, 1], ReadonlyArray.values()),
          pipe([1, 2, 3, 4], ReadonlyArray.values()),
        ),
        Enumerable.toReadonlyArray(),
        expectArrayEquals([tuple(1, 5, 1), tuple(2, 4, 2), tuple(3, 3, 3)], {
          valuesEquality: arrayEquality(),
        }),
      ),
    ),
  ),
  describe(
    "zipWith",
    test(
      "when all inputs are the same length",
      pipeLazy(
        [1, 2, 3, 4, 5],
        ReadonlyArray.values(),
        Enumerable.zipWith(pipe([5, 4, 3, 2, 1], ReadonlyArray.values())),
        Enumerable.toReadonlyArray(),
        expectArrayEquals(
          [tuple(1, 5), tuple(2, 4), tuple(3, 3), tuple(4, 2), tuple(5, 1)],
          { valuesEquality: arrayEquality() },
        ),
      ),
    ),
    test(
      "when inputs are different length",
      pipeLazy(
        [1, 2, 3],
        ReadonlyArray.values(),
        Enumerable.zipWith(
          pipe([5, 4, 3, 2, 1], ReadonlyArray.values()),
          pipe([1, 2, 3, 4], ReadonlyArray.values()),
        ),
        Enumerable.toReadonlyArray(),
        expectArrayEquals([tuple(1, 5, 1), tuple(2, 4, 2), tuple(3, 3, 3)], {
          valuesEquality: arrayEquality(),
        }),
      ),
    ),
  ),
);

((_: Enumerable.Signature) => {})(Enumerable);

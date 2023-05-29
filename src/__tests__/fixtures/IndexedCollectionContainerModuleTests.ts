import * as Observable from "../../Observable.js";
import {
  describe,
  expectArrayEquals,
  test,
} from "../../__internal__/testing.js";
import { increment, none, pipeLazy, returns } from "../../functions.js";
import {
  IndexedCollectionContainerModule,
  IndexedContainer,
} from "../../types.js";
import CollectionContainerModuleTests from "./CollectionContainerModuleTests.js";

const IndexedCollectionContainerModuleTests = <C extends IndexedContainer>(
  m: IndexedCollectionContainerModule<C>,
) => [
  ...CollectionContainerModuleTests(m, <T>() => m.fromReadonlyArray<T>()),
  describe(
    "IndexedCollectionContainerModuleTests",

    describe(
      "fromEnumerable",
      test(
        "from generating enumerable",

        pipeLazy(
          Observable.generate<number>(increment, returns(-1)),
          Observable.takeFirst<number>({ count: 5 }),
          m.fromEnumerable(),
          m.toReadonlyArray<number>(),
          expectArrayEquals([0, 1, 2, 3, 4]),
        ),
      ),
    ),
    describe(
      "fromFactory",
      test(
        "it produces the factory result",

        pipeLazy(
          () => 1,
          m.fromFactory<number>(),
          m.toReadonlyArray(),
          expectArrayEquals([1]),
        ),
      ),
    ),
    describe(
      "fromOptional",
      test(
        "when none",

        pipeLazy(
          none,
          m.fromOptional(),
          m.toReadonlyArray<never>(),
          expectArrayEquals([]),
        ),
      ),
      test(
        "when some",

        pipeLazy(
          1,
          m.fromOptional(),
          m.toReadonlyArray<number>(),
          expectArrayEquals([1]),
        ),
      ),
    ),
    describe(
      "fromReadonlyArray",
      test(
        "negative count with start index",

        pipeLazy(
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          m.fromReadonlyArray({ count: -3, start: 4 }),
          m.toReadonlyArray(),
          expectArrayEquals([5, 4, 3]),
        ),
      ),
      test(
        "positive count with start index",
        pipeLazy(
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          m.fromReadonlyArray({ count: 3, start: 4 }),
          m.toReadonlyArray(),
          expectArrayEquals([5, 6, 7]),
        ),
      ),
      test(
        "negative count exceeding bounds with start index",
        pipeLazy(
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          m.fromReadonlyArray({ count: -100, start: 3 }),
          m.toReadonlyArray(),
          expectArrayEquals([4, 3, 2, 1]),
        ),
      ),
      test(
        "positive count exceeding bounds with start index",
        pipeLazy(
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          m.fromReadonlyArray({ count: 100, start: 7 }),
          m.toReadonlyArray(),
          expectArrayEquals([8, 9]),
        ),
      ),
      test(
        "negative count without start index",
        pipeLazy(
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          m.fromReadonlyArray({ count: -3 }),
          m.toReadonlyArray(),
          expectArrayEquals([9, 8, 7]),
        ),
      ),
      test(
        "positive count without start index",
        pipeLazy(
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          m.fromReadonlyArray({ count: 3 }),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
    ),
    describe(
      "fromValue",
      test(
        "it produces the value",
        pipeLazy(
          none,
          m.fromValue(),
          m.toReadonlyArray(),
          expectArrayEquals([none]),
        ),
      ),
    ),
  ),
];

export default IndexedCollectionContainerModuleTests;

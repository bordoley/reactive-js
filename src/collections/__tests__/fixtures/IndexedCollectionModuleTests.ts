import {
  describe,
  expectArrayEquals,
  test,
} from "../../../__internal__/testing.js";
import {
  IndexedCollectionModule,
  KeyedCollection,
  KeyedCollectionOf,
} from "../../../collections.js";
import { Function1, pipeLazy } from "../../../functions.js";
import * as Enumerable from "../../Enumerable.js";
import * as Indexed from "../../Indexed.js";

const IndexedCollectionModuleTests = <C extends KeyedCollection<number>>(
  m: IndexedCollectionModule<C>,
  fromReadonlyArray: <T>() => Function1<
    ReadonlyArray<T>,
    KeyedCollectionOf<C, T, number>
  >,
) =>
  describe(
    "IndexedCollectionModule",
    describe(
      "entries",
      test(
        "starting at index greater than 0",
        pipeLazy(
          [1, 2, 3, 4],
          fromReadonlyArray(),
          m.entries({ start: 1 }),
          Enumerable.map(([_k, v]) => v),
          Enumerable.toReadonlyArray(),
          expectArrayEquals([2, 3, 4]),
        ),
      ),
      test(
        "starting at index greater than 0 with count",
        pipeLazy(
          [1, 2, 3, 4],
          fromReadonlyArray(),
          m.entries({ start: 1, count: 2 }),
          Enumerable.map(([_k, v]) => v),
          Enumerable.toReadonlyArray(),
          expectArrayEquals([2, 3]),
        ),
      ),
      test(
        "starting at index greater than 0 with count exceeding the length",
        pipeLazy(
          [1, 2, 3, 4],
          fromReadonlyArray(),
          m.entries({ start: 1, count: 10 }),
          Enumerable.map(([_k, v]) => v),
          Enumerable.toReadonlyArray(),
          expectArrayEquals([2, 3, 4]),
        ),
      ),
      test(
        "negative count",
        pipeLazy(
          [1, 2, 3, 4],
          fromReadonlyArray(),
          m.entries({ count: -2 }),
          Enumerable.map(([_k, v]) => v),
          Enumerable.toReadonlyArray(),
          expectArrayEquals([4, 3]),
        ),
      ),
      test(
        "starting at index greater than 0 with negative count",
        pipeLazy(
          [1, 2, 3, 4],
          fromReadonlyArray(),
          m.entries({ start: 2, count: -2 }),
          Enumerable.map(([_k, v]) => v),
          Enumerable.toReadonlyArray(),
          expectArrayEquals([3, 2]),
        ),
      ),
    ),
    describe(
      "values",
      test(
        "starting at index greater than 0",
        pipeLazy(
          [1, 2, 3, 4],
          fromReadonlyArray(),
          m.values({ start: 1 }),
          Enumerable.toReadonlyArray(),
          expectArrayEquals([2, 3, 4]),
        ),
      ),
      test(
        "starting at index greater than 0 with count",
        pipeLazy(
          [1, 2, 3, 4],
          fromReadonlyArray(),
          m.values({ start: 1, count: 2 }),
          Enumerable.toReadonlyArray(),
          expectArrayEquals([2, 3]),
        ),
      ),
      test(
        "starting at index greater than 0 with count exceeding the length",
        pipeLazy(
          [1, 2, 3, 4],
          fromReadonlyArray(),
          m.values({ start: 1, count: 10 }),
          Enumerable.toReadonlyArray(),
          expectArrayEquals([2, 3, 4]),
        ),
      ),
      test(
        "negative count",
        pipeLazy(
          [1, 2, 3, 4],
          fromReadonlyArray(),
          m.values({ count: -2 }),
          Enumerable.toReadonlyArray(),
          expectArrayEquals([4, 3]),
        ),
      ),
      test(
        "starting at index greater than 0 with negative count",
        pipeLazy(
          [1, 2, 3, 4],
          fromReadonlyArray(),
          m.values({ start: 2, count: -2 }),
          Enumerable.toReadonlyArray(),
          expectArrayEquals([3, 2]),
        ),
      ),
    ),
    describe(
      "toIndexed",
      test(
        "starting at index greater than 0",
        pipeLazy(
          [1, 2, 3, 4],
          fromReadonlyArray(),
          m.toIndexed({ start: 1 }),
          Indexed.toReadonlyArray(),
          expectArrayEquals([2, 3, 4]),
        ),
      ),
      test(
        "starting at index greater than 0 with count",
        pipeLazy(
          [1, 2, 3, 4],
          fromReadonlyArray(),
          m.toIndexed({ start: 1, count: 2 }),
          Indexed.toReadonlyArray(),
          expectArrayEquals([2, 3]),
        ),
      ),
      test(
        "starting at index greater than 0 with count exceeding the length",
        pipeLazy(
          [1, 2, 3, 4],
          fromReadonlyArray(),
          m.toIndexed({ start: 1, count: 10 }),
          Indexed.toReadonlyArray(),
          expectArrayEquals([2, 3, 4]),
        ),
      ),
      test(
        "negative count",
        pipeLazy(
          [1, 2, 3, 4],
          fromReadonlyArray(),
          m.toIndexed({ count: -2 }),
          Indexed.toReadonlyArray(),
          expectArrayEquals([4, 3]),
        ),
      ),
      test(
        "starting at index greater than 0 with negative count",
        pipeLazy(
          [1, 2, 3, 4],
          fromReadonlyArray(),
          m.toIndexed({ start: 2, count: -2 }),
          Indexed.toReadonlyArray(),
          expectArrayEquals([3, 2]),
        ),
      ),
      test(
        "iterating",
        pipeLazy(
          [1, 2, 3, 4],
          fromReadonlyArray(),
          m.toIndexed({ start: 2, count: -2 }),
          Enumerable.toReadonlyArray(),
          expectArrayEquals([3, 2]),
        ),
      ),
    ),
    describe(
      "toReadonlyArray",
      test(
        "starting at index greater than 0",
        pipeLazy(
          [1, 2, 3, 4],
          fromReadonlyArray(),
          m.toReadonlyArray({ start: 1 }),
          expectArrayEquals([2, 3, 4]),
        ),
      ),
      test(
        "starting at index greater than 0 with count",
        pipeLazy(
          [1, 2, 3, 4],
          fromReadonlyArray(),
          m.toReadonlyArray({ start: 1, count: 2 }),
          expectArrayEquals([2, 3]),
        ),
      ),
      test(
        "starting at index greater than 0 with count exceeding the length",
        pipeLazy(
          [1, 2, 3, 4],
          fromReadonlyArray(),
          m.toReadonlyArray({ start: 1, count: 10 }),
          expectArrayEquals([2, 3, 4]),
        ),
      ),
      test(
        "negative count",
        pipeLazy(
          [1, 2, 3, 4],
          fromReadonlyArray(),
          m.toReadonlyArray({ count: -2 }),
          expectArrayEquals([4, 3]),
        ),
      ),
      test(
        "starting at index greater than 0 with negative count",
        pipeLazy(
          [1, 2, 3, 4],
          fromReadonlyArray(),
          m.toReadonlyArray({ start: 2, count: -2 }),
          expectArrayEquals([3, 2]),
        ),
      ),
    ),
  );

export default IndexedCollectionModuleTests;

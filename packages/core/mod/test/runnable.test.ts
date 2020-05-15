import {
  compute,
  concat,
  contains,
  distinctUntilChanged,
  first,
  fromArray,
  fromIterable,
  empty,
  flatMap,
  forEach,
  keep,
  map,
  noneSatisfy,
  fromValue,
  repeat,
  scan,
  skipFirst,
  startWith,
  takeFirst,
  takeLast,
  toArray,
  generate,
  endWith,
  takeWhile,
  everySatisfy,
} from "../lib/runnable.ts";
import {
  pipe,
  returns,
  alwaysFalse,
  alwaysTrue,
  increment,
  sum,
  defer,
} from "../lib/functions.ts";
import {
  test,
  describe,
  expectNone,
  expectEquals,
  expectArrayEquals,
  mockFn,
  expectToHaveBeenCalledTimes,
  expectTrue,
  expectFalse,
} from "../lib/internal/testing.ts";

export const tests = describe(
  "runnable",
  test(
    "concat",
    defer(
      concat(empty(), fromArray()([1, 2, 3]), empty(), fromArray()([4, 5, 6])),
      toArray,
      expectArrayEquals([1, 2, 3, 4, 5, 6]),
    ),
  ),
  describe(
    "contains",
    test("source is empty", defer(empty<number>(), contains(1), expectFalse)),
    test(
      "source contains value",
      defer(generate(increment, returns<number>(0)), contains(1), expectTrue),
    ),
    test(
      "source does not contain value",
      defer([2, 3, 4], fromArray(), contains(1), expectFalse),
    ),
  ),
  describe(
    "distinctUntilChanged",
    test(
      "when source has duplicates in order",
      defer(
        [1, 2, 2, 2, 2, 3, 3, 3, 4],
        fromArray(),
        distinctUntilChanged(),
        toArray,
        expectArrayEquals([1, 2, 3, 4]),
      ),
    ),
    test(
      "when source is empty",
      defer(
        [],
        fromArray(),
        distinctUntilChanged(),
        toArray,
        expectArrayEquals([]),
      ),
    ),
  ),

  test(
    "endWith",
    defer(
      [1, 2, 3],
      fromArray(),
      endWith(4),
      toArray,
      expectArrayEquals([1, 2, 3, 4]),
    ),
  ),
  describe(
    "everySatisfy",
    test(
      "source is empty",
      defer(empty(), everySatisfy(alwaysFalse), expectTrue),
    ),
    test(
      "source values pass predicate",
      defer([1, 2, 3], fromArray(), everySatisfy(alwaysTrue), expectTrue),
    ),
    test(
      "source values fail predicate",
      defer([1, 2, 3], fromArray(), everySatisfy(alwaysFalse), expectFalse),
    ),
  ),
  describe(
    "first",
    test(
      "when enumerable is not empty",
      defer(returns(1), compute, first, expectEquals(1)),
    ),
    test("when enumerable is empty", defer(empty(), first, expectNone)),
  ),
  test(
    "flatMap",
    defer(
      0,
      fromValue,
      flatMap(_ => fromArray()([1, 2, 3])),
      toArray,
      expectArrayEquals([1, 2, 3]),
    ),
  ),
  test("forEach", () => {
    const fn = mockFn();

    pipe([1, 2, 3], fromIterable, forEach(fn));
    pipe(fn, expectToHaveBeenCalledTimes(3));
  }),
  test(
    "keep",
    defer(
      [4, 8, 10, 7],
      fromArray(),
      keep(x => x > 5),
      toArray,
      expectArrayEquals([8, 10, 7]),
    ),
  ),
  test(
    "map",
    defer(
      [1, 2, 3],
      fromArray(),
      map(increment),
      toArray,
      expectArrayEquals([2, 3, 4]),
    ),
  ),
  describe(
    "noneSatisfy",
    test(
      "source is empty",
      defer(empty(), noneSatisfy(alwaysFalse), expectTrue),
    ),
    test(
      "source values pass predicate",
      defer([1, 2, 3], fromArray(), noneSatisfy(alwaysTrue), expectFalse),
    ),
    test(
      "source values fail predicate",
      defer([1, 2, 3], fromArray(), noneSatisfy(alwaysFalse), expectTrue),
    ),
  ),
  describe(
    "repeat",
    test(
      "when always repeating",
      defer(
        [1, 2, 3],
        fromArray(),
        repeat(),
        takeFirst(6),
        toArray,
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),
    test(
      "when repeating a finite amount of times.",
      defer(
        [1, 2, 3],
        fromArray(),
        repeat(3),
        toArray,
        expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
      ),
    ),
    test(
      "when repeating with a predicate",
      defer(
        [1, 2, 3],
        fromArray(),
        repeat(x => x < 1),
        toArray,
        expectArrayEquals([1, 2, 3]),
      ),
    ),
  ),

  test(
    "scan",
    defer(
      [1, 1, 1],
      fromArray(),
      scan(sum, returns(0)),
      toArray,
      expectArrayEquals([1, 2, 3]),
    ),
  ),
  describe(
    "skipFirst",
    test(
      "when skipped source has additional elements",
      defer(
        [1, 2, 3],
        fromArray(),
        skipFirst(2),
        toArray,
        expectArrayEquals([3]),
      ),
    ),
    test(
      "when all elements are skipped",
      defer(
        [1, 2, 3],
        fromArray(),
        skipFirst(4),
        toArray,
        expectArrayEquals([]),
      ),
    ),
  ),
  test(
    "startWith",
    defer(
      [1, 2, 3],
      fromArray(),
      startWith(0),
      toArray,
      expectArrayEquals([0, 1, 2, 3]),
    ),
  ),
  describe(
    "takeFirst",
    test(
      "when taking fewer than the total number of elements in the source",
      defer(
        generate<number>(increment, returns(0)),
        takeFirst(3),
        toArray,
        expectArrayEquals([1, 2, 3]),
      ),
    ),
    test(
      "when taking more than all the items produced by the source",
      defer(1, fromValue, takeFirst(3), toArray, expectArrayEquals([1])),
    ),
  ),
  test(
    "takeLast",
    defer(
      [1, 2, 3, 4, 5],
      fromArray(),
      takeLast(3),
      toArray,
      expectArrayEquals([3, 4, 5]),
    ),
  ),
  describe(
    "takeWhile",
    test("exclusive", () => {
      pipe(
        generate<number>(increment, returns(0)),
        takeWhile(x => x < 4),
        toArray,
        expectArrayEquals([1, 2, 3]),
      );
      pipe(
        [1, 2, 3],
        fromArray(),
        takeWhile(alwaysTrue),
        toArray,
        expectArrayEquals([1, 2, 3]),
      );
      pipe(empty(), takeWhile(alwaysTrue), toArray, expectArrayEquals([]));
    }),

    test(
      "inclusive",
      defer(
        generate<number>(increment, returns(0)),
        takeWhile(x => x < 4, { inclusive: true }),
        toArray,
        expectArrayEquals([1, 2, 3, 4]),
      ),
    ),
  ),
);

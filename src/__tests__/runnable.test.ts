import {
  alwaysFalse,
  alwaysTrue,
  defer,
  increment,
  pipe,
  returns,
  incrementBy,
  sum,
} from "../functions";
import {
  concat,
  concatAll,
  contains,
  everySatisfy,
  first,
  forEach,
  fromArray,
  fromArrayT,
  generate,
  noneSatisfy,
  ToRunnable,
  toArray,
  RunnableLike,
  keepT,
  distinctUntilChanged,
  map,
  repeat,
  scan,
  skipFirst,
  takeFirst,
  takeLast,
  takeWhile,
  toRunnable,
} from "../runnable";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectFalse,
  expectNone,
  expectToHaveBeenCalledTimes,
  expectTrue,
  mockFn,
  test,
} from "../testing";

import {
  ContainerLike,
  Concat,
  ConcatAll,
  DistinctUntilChanged,
  FromArray,
  Generate,
  Keep,
  Map,
  Repeat,
  Scan,
  SkipFirst,
  TakeFirst,
  TakeLast,
  TakeWhile,
  compute,
  concatMap,
  empty,
  endWith,
  fromValue,
  ignoreElements,
  mapTo,
  startWith,
} from "../container";

export const createRunnableTests = <C extends ContainerLike>(
  m: Concat<C> &
    ConcatAll<C, {}> &
    DistinctUntilChanged<C> &
    FromArray<C> &
    Generate<C> &
    Keep<C> &
    Map<C> &
    Repeat<C> &
    Scan<C> &
    SkipFirst<C> &
    TakeFirst<C> &
    TakeLast<C> &
    TakeWhile<C> &
    ToRunnable<C>,
) =>
  describe(
    "RunnableContainer",
    test(
      "concat",
      defer(
        m.concat(
          empty(m),
          m.fromArray()([1, 2, 3]),
          empty(m),
          m.fromArray()([4, 5, 6]),
        ),
        m.toRunnable(),
        toArray(),
        expectArrayEquals([1, 2, 3, 4, 5, 6]),
      ),
    ),

    describe(
      "distinctUntilChanged",
      test(
        "when source has duplicates in order",
        defer(
          [1, 2, 2, 2, 2, 3, 3, 3, 4],
          m.fromArray(),
          m.distinctUntilChanged(),
          m.toRunnable(),
          toArray(),
          expectArrayEquals([1, 2, 3, 4]),
        ),
      ),
      test(
        "when source is empty",
        defer(
          [],
          m.fromArray(),
          m.distinctUntilChanged(),
          m.toRunnable(),
          toArray(),
          expectArrayEquals([]),
        ),
      ),
    ),

    test(
      "endWith",
      defer(
        [1, 2, 3],
        m.fromArray(),
        endWith(m, 4),
        m.toRunnable(),
        toArray(),
        expectArrayEquals([1, 2, 3, 4]),
      ),
    ),
    test(
      "concatMap",
      defer(
        0,
        fromValue(m),
        concatMap(m, (_: any) => m.fromArray()([1, 2, 3])),
        m.toRunnable(),
        toArray(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
    test(
      "keep",
      defer(
        [4, 8, 10, 7],
        m.fromArray(),
        m.keep((x: any) => x > 5),
        m.toRunnable(),
        toArray(),
        expectArrayEquals([8, 10, 7]),
      ),
    ),
    test(
      "map",
      defer(
        [1, 2, 3],
        m.fromArray(),
        m.map(increment),
        m.toRunnable(),
        toArray(),
        expectArrayEquals([2, 3, 4]),
      ),
    ),
    test(
      "mapTo",
      defer(
        [1, 2, 3],
        m.fromArray(),
        mapTo(m, 2),
        m.toRunnable(),
        toArray(),
        expectArrayEquals([2, 2, 2]),
      ),
    ),
    describe(
      "repeat",
      test(
        "when always repeating",
        defer(
          [1, 2, 3],
          m.fromArray(),
          m.repeat(),
          m.takeFirst({ count: 6 }),
          m.toRunnable(),
          toArray(),
          expectArrayEquals([1, 2, 3, 1, 2, 3]),
        ),
      ),

      test(
        "when repeating a finite amount of times.",
        defer(
          [1, 2, 3],
          m.fromArray(),
          m.repeat(3),
          m.toRunnable(),
          toArray(),
          expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
        ),
      ),
      test(
        "when repeating with a predicate",
        defer(
          [1, 2, 3],
          m.fromArray(),
          m.repeat((x: any) => x < 1),
          m.toRunnable(),
          toArray(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
    ),

    test(
      "scan",
      defer(
        [1, 1, 1],
        m.fromArray(),
        m.scan(sum, returns(0)),
        m.toRunnable(),
        toArray(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
    describe(
      "skipFirst",
      test(
        "when skipped source has additional elements",
        defer(
          [1, 2, 3],
          m.fromArray(),
          m.skipFirst({ count: 2 }),
          m.toRunnable(),
          toArray(),
          expectArrayEquals([3]),
        ),
      ),
      test(
        "when all elements are skipped",
        defer(
          [1, 2, 3],
          m.fromArray(),
          m.skipFirst({ count: 4 }),
          m.toRunnable(),
          toArray(),
          expectArrayEquals([]),
        ),
      ),
    ),

    test(
      "startWith",
      defer(
        [1, 2, 3],
        m.fromArray(),
        startWith(m, 0),
        m.toRunnable(),
        toArray(),
        expectArrayEquals([0, 1, 2, 3]),
      ),
    ),

    describe(
      "takeFirst",
      test(
        "when taking fewer than the total number of elements in the source",
        defer(
          m.generate(increment, returns(0)),
          m.takeFirst({ count: 3 }),
          m.toRunnable(),
          toArray(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
      test(
        "when taking more than all the items produced by the source",
        defer(
          1,
          fromValue(m),
          m.takeFirst({ count: 3 }),
          m.toRunnable(),
          toArray(),
          expectArrayEquals([1]),
        ),
      ),
    ),
    test(
      "takeLast",
      defer(
        [1, 2, 3, 4, 5],
        m.fromArray(),
        m.takeLast({ count: 3 }),
        m.toRunnable(),
        toArray(),
        expectArrayEquals([3, 4, 5]),
      ),
    ),
    describe(
      "takeWhile",
      test("exclusive", () => {
        pipe(
          m.generate(increment, returns(0)),
          m.takeWhile((x: any) => x < 4),
          m.toRunnable(),
          toArray(),
          expectArrayEquals([1, 2, 3]),
        );
        pipe(
          [1, 2, 3],
          m.fromArray(),
          m.takeWhile(alwaysTrue),
          m.toRunnable(),
          toArray(),
          expectArrayEquals([1, 2, 3]),
        );
        pipe(
          empty(m),
          m.takeWhile(alwaysTrue),
          m.toRunnable(),
          toArray(),
          expectArrayEquals([]),
        );
      }),

      test(
        "inclusive",
        defer(
          m.generate(increment, returns(0)),
          m.takeWhile((x: any) => x < 4, { inclusive: true }),
          m.toRunnable(),
          toArray(),
          expectArrayEquals([1, 2, 3, 4]),
        ),
      ),
    ),
    test(
      "lift",
      defer(
        m.generate(increment, returns(0)),
        m.map((x: any) => x * 2),
        m.takeFirst({ count: 3 }),
        concatMap(m, (count: any) =>
          pipe(m.generate(incrementBy(1), returns(0)), m.takeFirst({ count })),
        ),
        m.toRunnable(),
        toArray(),
        expectArrayEquals([1, 2, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6]),
      ),
    ),
    test(
      "ignoreElements",
      defer(
        [1, 2, 3],
        m.fromArray(),
        ignoreElements(m),
        endWith(m, 4),
        m.toRunnable(),
        toArray(),
        expectArrayEquals([4]),
      ),
    ),
  );

export const tests = describe(
  "runnable",
  describe(
    "contains",
    test(
      "source is empty",
      defer(
        empty<RunnableLike<unknown>, number>({ fromArray }),
        contains(1),
        expectFalse,
      ),
    ),
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
    "everySatisfy",
    test(
      "source is empty",
      defer(
        empty<RunnableLike<unknown>, number>({ fromArray }),
        everySatisfy(alwaysFalse),
        expectTrue,
      ),
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
      defer(
        returns(1),
        compute<RunnableLike<unknown>, number>({ fromArray, map }),
        first,
        expectEquals(1),
      ),
    ),
    test(
      "when enumerable is empty",
      defer(
        empty<RunnableLike<unknown>, number>({ fromArray }),
        first,
        expectNone,
      ),
    ),
  ),
  test("forEach", () => {
    const fn = mockFn();

    pipe([1, 2, 3], fromArray(), forEach(fn));
    pipe(fn, expectToHaveBeenCalledTimes(3));
  }),
  describe(
    "noneSatisfy",
    test(
      "source is empty",
      defer(
        empty<RunnableLike<unknown>, number>({ fromArray }),
        noneSatisfy(alwaysFalse),
        expectTrue,
      ),
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
  createRunnableTests({
    ...fromArrayT,
    ...keepT,
    concat,
    concatAll,
    distinctUntilChanged,
    generate,
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

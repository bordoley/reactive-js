import {
  Concat,
  ConcatAll,
  ContainerLike,
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
  contains,
  empty,
  endWith,
  fromValue,
  ignoreElements,
  mapTo,
  noneSatisfy,
  startWith,
} from "../container";
import {
  alwaysFalse,
  alwaysTrue,
  increment,
  incrementBy,
  pipe,
  pipeLazy,
  returns,
  sum,
} from "../functions";
import {
  RunnableLike,
  ToRunnable,
  concat,
  concatAll,
  distinctUntilChanged,
  everySatisfy,
  everySatisfyT,
  first,
  forEach,
  fromArray,
  fromArrayT,
  generate,
  keepT,
  map,
  repeat,
  scan,
  skipFirst,
  someSatisfyT,
  takeFirst,
  takeLast,
  takeWhile,
  toArray,
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

export const createRunnableTests = <C extends ContainerLike>(
  m: Concat<C> &
    ConcatAll<C, Record<string, never>> &
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
      pipeLazy(
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

    test(
      "endWith",
      pipeLazy(
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
      pipeLazy(
        0,
        fromValue(m),
        concatMap(m, pipeLazy([1, 2, 3], m.fromArray())),
        m.toRunnable(),
        toArray(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
    test(
      "keep",
      pipeLazy(
        [4, 8, 10, 7],
        m.fromArray(),
        m.keep(x => x > 5),
        m.toRunnable(),
        toArray(),
        expectArrayEquals([8, 10, 7]),
      ),
    ),
    test(
      "map",
      pipeLazy(
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
      pipeLazy(
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
        pipeLazy(
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
        pipeLazy(
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
        pipeLazy(
          [1, 2, 3],
          m.fromArray(),
          m.repeat(x => x < 1),
          m.toRunnable(),
          toArray(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
    ),

    test(
      "scan",
      pipeLazy(
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
        pipeLazy(
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
        pipeLazy(
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
      pipeLazy(
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
        pipeLazy(
          m.generate(increment, returns(0)),
          m.takeFirst({ count: 3 }),
          m.toRunnable(),
          toArray(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
      test(
        "when taking more than all the items produced by the source",
        pipeLazy(
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
      pipeLazy(
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
          m.takeWhile(x => x < 4),
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
        pipeLazy(
          m.generate(increment, returns(0)),
          m.takeWhile(x => x < 4, { inclusive: true }),
          m.toRunnable(),
          toArray(),
          expectArrayEquals([1, 2, 3, 4]),
        ),
      ),
    ),
    test(
      "lift",
      pipeLazy(
        m.generate(increment, returns(0)),
        m.map(x => x * 2),
        m.takeFirst({ count: 3 }),
        concatMap(m, count =>
          pipe(m.generate(incrementBy(1), returns(0)), m.takeFirst({ count })),
        ),
        m.toRunnable(),
        toArray(),
        expectArrayEquals([1, 2, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6]),
      ),
    ),
    test(
      "ignoreElements",
      pipeLazy(
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
      pipeLazy(
        empty<RunnableLike<unknown>, number>({ fromArray }),
        contains(someSatisfyT, 1),
        first(),
        expectFalse,
      ),
    ),
    test(
      "source contains value",
      pipeLazy(
        generate(increment, returns<number>(0)),
        contains(someSatisfyT, 1),
        first(),
        expectTrue,
      ),
    ),
    test(
      "source does not contain value",
      pipeLazy(
        [2, 3, 4],
        fromArray(),
        contains(someSatisfyT, 1),
        first(),
        expectFalse,
      ),
    ),
  ),

  describe(
    "everySatisfy",
    test(
      "source is empty",
      pipeLazy(
        empty<RunnableLike<unknown>, number>({ fromArray }),
        everySatisfy(alwaysFalse),
        first(),
        expectTrue,
      ),
    ),
    test(
      "source values pass predicate",
      pipeLazy(
        [1, 2, 3],
        fromArray(),
        everySatisfy(alwaysTrue),
        first(),
        expectTrue,
      ),
    ),
    test(
      "source values fail predicate",
      pipeLazy(
        [1, 2, 3],
        fromArray(),
        everySatisfy(alwaysFalse),
        first(),
        expectFalse,
      ),
    ),
  ),
  describe(
    "first",
    test(
      "when enumerable is not empty",
      pipeLazy(
        returns(1),
        compute<RunnableLike<unknown>, number>({ fromArray, map }),
        first(),
        expectEquals(1),
      ),
    ),
    test(
      "when enumerable is empty",
      pipeLazy(
        empty<RunnableLike<unknown>, number>({ fromArray }),
        first(),
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
      pipeLazy(
        empty<RunnableLike<unknown>, number>({ fromArray }),
        noneSatisfy(everySatisfyT, alwaysFalse),
        first(),
        expectTrue,
      ),
    ),
    test(
      "source values pass predicate",
      pipeLazy(
        [1, 2, 3],
        fromArray(),
        noneSatisfy(everySatisfyT, alwaysTrue),
        first(),
        expectFalse,
      ),
    ),
    test(
      "source values fail predicate",
      pipeLazy(
        [1, 2, 3],
        fromArray(),
        noneSatisfy(everySatisfyT, alwaysFalse),
        first(),
        expectTrue,
      ),
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

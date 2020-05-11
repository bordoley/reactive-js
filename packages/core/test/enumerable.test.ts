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
  toIterable,
  generate,
  endWith,
  takeWhile,
  zipWith,
  everySatisfy,
} from "../src/enumerable";
import {
  pipe,
  returns,
  alwaysFalse,
  alwaysTrue,
  increment,
  sum,
} from "../src/functions";
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
} from "../src/internal/testing";

export const tests = describe(
  "enumerable",
  test("concat", () =>
    pipe(
      concat(empty(), fromArray([1, 2, 3]), empty(), fromArray([4, 5, 6])),
      toArray,
      expectArrayEquals([1, 2, 3, 4, 5, 6]),
    )),
  describe(
    "contains",
    test("source is empty", () =>
      pipe(empty<number>(), contains(1), expectFalse)),
    test("source contains value", () =>
      pipe(generate(increment, returns<number>(0)), contains(1), expectTrue)),
    test("source does not contain value", () =>
      pipe([2, 3, 4], fromArray, contains(1), expectFalse)),
  ),
  test("distinctUntilChanged", () => {
    pipe(
      [1, 2, 2, 2, 2, 3, 3, 3, 4],
      fromArray,
      distinctUntilChanged(),
      toArray,
      expectArrayEquals([1, 2, 3, 4]),
    );
    pipe([], fromArray, distinctUntilChanged(), toArray, expectArrayEquals([]));
  }),
  test("endWith", () =>
    pipe(
      [1, 2, 3],
      fromArray,
      endWith(4),
      toArray,
      expectArrayEquals([1, 2, 3, 4]),
    )),
  describe(
    "everySatisfy",
    test("source is empty", () =>
      pipe(empty(), everySatisfy(alwaysFalse), expectTrue)),
    test("source values pass predicate", () =>
      pipe([1, 2, 3], fromArray, everySatisfy(alwaysTrue), expectTrue)),
    test("source values fail predicate", () =>
      pipe([1, 2, 3], fromArray, everySatisfy(alwaysFalse), expectFalse)),
  ),
  describe(
    "first",
    test("when enumerable is not empty", () =>
      pipe(returns(1), compute, first, expectEquals(1))),
    test("when enumerable is empty", () => pipe(empty(), first, expectNone)),
  ),
  test("flatMap", () =>
    pipe(
      0,
      fromValue,
      flatMap(_ => fromArray([1, 2, 3])),
      toArray,
      expectArrayEquals([1, 2, 3]),
    )),
  test("forEach", () => {
    const fn = mockFn();

    pipe([1, 2, 3], fromIterable, forEach(fn));
    pipe(fn, expectToHaveBeenCalledTimes(3));
  }),
  test("keep", () =>
    pipe(
      [4, 8, 10, 7],
      fromArray,
      keep(x => x > 5),
      toArray,
      expectArrayEquals([8, 10, 7]),
    )),
  test("map", () =>
    pipe(
      [1, 2, 3],
      fromArray,
      map(increment),
      toArray,
      expectArrayEquals([2, 3, 4]),
    )),
  describe(
    "noneSatisfy",
    test("source is empty", () =>
      pipe(empty(), noneSatisfy(alwaysFalse), expectTrue)),
    test("source values pass predicate", () =>
      pipe([1, 2, 3], fromArray, noneSatisfy(alwaysTrue), expectFalse)),
    test("source values fail predicate", () =>
      pipe([1, 2, 3], fromArray, noneSatisfy(alwaysFalse), expectTrue)),
  ),
  test("repeat", () => {
    pipe(
      [1, 2, 3],
      fromArray,
      repeat(),
      takeFirst(6),
      toArray,
      expectArrayEquals([1, 2, 3, 1, 2, 3]),
    );
    pipe(
      [1, 2, 3],
      fromArray,
      repeat(3),
      toArray,
      expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
    );
    pipe(
      [1, 2, 3],
      fromArray,
      repeat(x => x < 1),
      toArray,
      expectArrayEquals([1, 2, 3]),
    );
  }),
  test("scan", () =>
    pipe(
      [1, 1, 1],
      fromArray,
      scan(sum, returns(0)),
      toArray,
      expectArrayEquals([1, 2, 3]),
    )),
  test("skipFirst", () => {
    pipe([1, 2, 3], fromArray, skipFirst(2), toArray, expectArrayEquals([3]));
    pipe([1, 2, 3], fromArray, skipFirst(4), toArray, expectArrayEquals([]));
  }),
  test("startWith", () =>
    pipe(
      [1, 2, 3],
      fromArray,
      startWith(0),
      toArray,
      expectArrayEquals([0, 1, 2, 3]),
    )),
  test("takeFirst", () => {
    pipe(
      generate<number>(increment, returns(0)),
      takeFirst(3),
      toArray,
      expectArrayEquals([1, 2, 3]),
    );
    pipe(1, fromValue, takeFirst(3), toArray, expectArrayEquals([1]));
  }),
  test("takeLast", () =>
    pipe(
      [1, 2, 3, 4, 5],
      fromArray,
      takeLast(3),
      toArray,
      expectArrayEquals([3, 4, 5]),
    )),
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
        fromArray,
        takeWhile(alwaysTrue),
        toArray,
        expectArrayEquals([1, 2, 3]),
      );
      pipe(empty(), takeWhile(alwaysTrue), toArray, expectArrayEquals([]));
    }),
    test("inclusive", () => {
      pipe(
        generate<number>(increment, returns(0)),
        takeWhile(x => x < 4, { inclusive: true }),
        toArray,
        expectArrayEquals([1, 2, 3, 4]),
      );
    }),
  ),
  test("toIterable", () =>
    pipe(
      [1, 2, 3],
      fromArray,
      toIterable,
      fromIterable,
      toArray,
      expectArrayEquals([1, 2, 3]),
    )),
  test("zip", () =>
    pipe(
      [1, 2, 3],
      fromArray,
      zipWith(fromArray([1, 2, 3, 4, 5]), sum),
      toArray,
      expectArrayEquals([2, 4, 6]),
    )),
);

import {
  pipe,
  returns,
  alwaysFalse,
  alwaysTrue,
  increment,
  sum,
  defer,
  incrementBy,
} from "../lib/functions";
import {
  test,
  describe,
  expectArrayEquals,
  mockFn,
  expectToHaveBeenCalledTimes,
  expectTrue,
  expectFalse,
} from "../lib/internal/testing";

export const createMonadTests = (m: any) => describe(
  "monadic functions",
  test(
    "concat",
    defer(
      m.concat(m.empty(), m.fromArray()([1, 2, 3]), m.empty(), m.fromArray()([4, 5, 6])),
      m.toArray(),
      expectArrayEquals([1, 2, 3, 4, 5, 6]),
    ),
  ),
  describe(
    "contains",
    test("source is empty", defer(m.empty(), m.contains(1), expectFalse)),
    test(
      "source contains value",
      defer(m.generate(increment, returns(0)), m.contains(1), expectTrue),
    ),
    test(
      "source does not contain value",
      defer([2, 3, 4], m.fromArray(), m.contains(1), expectFalse),
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
        m.toArray(),
        expectArrayEquals([1, 2, 3, 4]),
      ),
    ),
    test(
      "when source is empty",
      defer(
        [],
        m.fromArray(),
        m.distinctUntilChanged(),
        m.toArray(),
        expectArrayEquals([]),
      ),
    ),
  ),

  test(
    "endWith",
    defer(
      [1, 2, 3],
      m.fromArray(),
      m.endWith(4),
      m.toArray(),
      expectArrayEquals([1, 2, 3, 4]),
    ),
  ),
  describe(
    "everySatisfy",
    test(
      "source is empty",
      defer(m.empty(), m.everySatisfy(alwaysFalse), expectTrue),
    ),
    test(
      "source values pass predicate",
      defer([1, 2, 3], m.fromArray(), m.everySatisfy(alwaysTrue), expectTrue),
    ),
    test(
      "source values fail predicate",
      defer([1, 2, 3], m.fromArray(), m.everySatisfy(alwaysFalse), expectFalse),
    ),
  ),
  test(
    "concatMap",
    defer(
      0,
      m.fromValue(),
      m.concatMap((_: any) => m.fromArray()([1, 2, 3])),
      m.toArray(),
      expectArrayEquals([1, 2, 3]),
    ),
  ),
  test("forEach", () => {
    const fn = mockFn();

    pipe([1, 2, 3], m.fromIterable, m.forEach(fn));
    pipe(fn, expectToHaveBeenCalledTimes(3));
  }),
  test(
    "keep",
    defer(
      [4, 8, 10, 7],
      m.fromArray(),
      m.keep((x: any) => x > 5),
      m.toArray(),
      expectArrayEquals([8, 10, 7]),
    ),
  ),
  test(
    "map",
    defer(
      [1, 2, 3],
      m.fromArray(),
      m.map(increment),
      m.toArray(),
      expectArrayEquals([2, 3, 4]),
    ),
  ),
  describe(
    "noneSatisfy",
    test(
      "source is empty",
      defer(m.empty(), m.noneSatisfy(alwaysFalse), expectTrue),
    ),
    test(
      "source values pass predicate",
      defer([1, 2, 3], m.fromArray(), m.noneSatisfy(alwaysTrue), expectFalse),
    ),
    test(
      "source values fail predicate",
      defer([1, 2, 3], m.fromArray(),m. noneSatisfy(alwaysFalse), expectTrue),
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
        m.takeFirst(6),
        m.toArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),

    test(
      "when repeating a finite amount of times.",
      defer(
        [1, 2, 3],
        m.fromArray(),
        m.repeat(3),
        m.toArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
      ),
    ),
    test(
      "when repeating with a predicate",
      defer(
        [1, 2, 3],
        m.fromArray(),
        m.repeat((x: any) => x < 1),
        m.toArray(),
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
      m.toArray(),
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
        m.skipFirst(2),
        m.toArray(),
        expectArrayEquals([3]),
      ),
    ),
    test(
      "when all elements are skipped",
      defer(
        [1, 2, 3],
        m.fromArray(),
        m.skipFirst(4),
        m.toArray(),
        expectArrayEquals([]),
      ),
    ),
  ),

  test(
    "startWith",
    defer(
      [1, 2, 3],
      m.fromArray(),
      m.startWith(0),
      m.toArray(),
      expectArrayEquals([0, 1, 2, 3]),
    ),
  ),

  describe(
    "takeFirst",
    test(
      "when taking fewer than the total number of elements in the source",
      defer(
        m.generate(increment, returns(0)),
        m.takeFirst(3),
        m.toArray(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
    test(
      "when taking more than all the items produced by the source",
      defer(1, m.fromValue(), m.takeFirst(3), m.toArray(), expectArrayEquals([1])),
    ),
  ),
  test(
    "takeLast",
    defer(
      [1, 2, 3, 4, 5],
      m.fromArray(),
      m.takeLast(3),
      m.toArray(),
      expectArrayEquals([3, 4, 5]),
    ),
  ),
  describe(
    "takeWhile",
    test("exclusive", () => {
      pipe(
        m.generate(increment, returns(0)),
        m.takeWhile((x: any) => x < 4),
        m.toArray(),
        expectArrayEquals([1, 2, 3]),
      );
      pipe(
        [1, 2, 3],
        m.fromArray(),
        m.takeWhile(alwaysTrue),
        m.toArray(),
        expectArrayEquals([1, 2, 3]),
      );
      pipe(m.empty(), m.takeWhile(alwaysTrue), m.toArray(), expectArrayEquals([]));
    }),

    test(
      "inclusive",
      defer(
        m.generate(increment, returns(0)),
        m.takeWhile((x: any) => x < 4, { inclusive: true }),
        m.toArray(),
        expectArrayEquals([1, 2, 3, 4]),
      ),
    ),
  ),
  test(
    "lift",
    defer(
      m.generate(increment, returns(0)),
      m.map((x: any) => x * 2),
      m.takeFirst(3),
      m.concatMap((x: any) =>
        pipe(m.generate(incrementBy(1), returns(0)), m.takeFirst(x)),
      ),
      m.toArray(),
      expectArrayEquals([1, 2, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6]),
    ),
  ),
);

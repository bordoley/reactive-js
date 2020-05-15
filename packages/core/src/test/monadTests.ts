import {
  pipe,
  returns,
  alwaysTrue,
  increment,
  sum,
  defer,
  incrementBy,
} from "../lib/functions";
import { test, describe, expectArrayEquals } from "../lib/internal/testing";

import { toArray } from "../lib/runnable";

export const createMonadTests = (m: any) =>
  describe(
    "monadic functions",
    test(
      "concat",
      defer(
        m.concat(
          m.empty(),
          m.fromArray()([1, 2, 3]),
          m.empty(),
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
        m.endWith(4),
        m.toRunnable(),
        toArray(),
        expectArrayEquals([1, 2, 3, 4]),
      ),
    ),
    test(
      "concatMap",
      defer(
        0,
        m.fromValue(),
        m.concatMap((_: any) => m.fromArray()([1, 2, 3])),
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
        m.mapTo(2),
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
          m.takeFirst(6),
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
          m.skipFirst(2),
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
          m.skipFirst(4),
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
        m.startWith(0),
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
          m.takeFirst(3),
          m.toRunnable(),
          toArray(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
      test(
        "when taking more than all the items produced by the source",
        defer(
          1,
          m.fromValue(),
          m.takeFirst(3),
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
        m.takeLast(3),
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
          m.empty(),
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
        m.takeFirst(3),
        m.concatMap((x: any) =>
          pipe(m.generate(incrementBy(1), returns(0)), m.takeFirst(x)),
        ),
        m.toRunnable(),
        toArray(),
        expectArrayEquals([1, 2, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6]),
      ),
    ),
  );

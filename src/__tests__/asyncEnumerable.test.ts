import { consume, consumeAsync, done, notify } from "../asyncEnumerable";
import { fromValue } from "../container";
import { defer, pipe, returns } from "../functions";
import { fromArrayT, toRunnable } from "../observable";
import { last } from "../runnable";
import { fromIterable } from "../streamable";
import { describe, expectEquals, test } from "../testing";

export const tests = describe(
  "async-enumerable",
  test("consume", () => {
    const enumerable = fromIterable<number>()([1, 2, 3, 4, 5, 6]);

    pipe(
      enumerable,
      consume((acc, next) => notify(acc + next), returns<number>(0)),
      toRunnable(),
      last(),
      expectEquals(21),
    );

    pipe(
      enumerable,
      consume(
        (acc, next) => (acc > 0 ? done(acc + next) : notify(acc + next)),
        returns<number>(0),
      ),
      toRunnable(),
      last(),
      expectEquals(3),
    );
  }),

  describe(
    "consumeAsync",
    test(
      "when the consumer early terminates",
      defer(
        [1, 2, 3, 4, 5, 6],
        fromIterable(),
        consumeAsync(
          (acc, next) =>
            fromValue(fromArrayT)(
              acc > 0 ? done(acc + next) : notify(acc + next),
            ),
          returns<number>(0),
        ),
        toRunnable(),
        last(),
        expectEquals(3),
      ),
    ),
    test(
      "when the consumer never terminates",
      defer(
        [1, 2, 3, 4, 5, 6],
        fromIterable(),
        consumeAsync(
          (acc, next) => pipe(acc + next, notify, fromValue(fromArrayT)),
          returns<number>(0),
        ),
        toRunnable(),
        last(),
        expectEquals(21),
      ),
    ),
  ),
);

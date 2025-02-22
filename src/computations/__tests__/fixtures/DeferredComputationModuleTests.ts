import {
  describe,
  expectArrayEquals,
  expectToThrowError,
  test,
} from "../../../__internal__/testing.js";
import {
  Computation,
  DeferredComputationModule,
  SynchronousComputationModule,
} from "../../../computations.js";
import {
  alwaysTrue,
  increment,
  lessThan,
  pipe,
  pipeLazy,
  returns,
} from "../../../functions.js";

const DeferredComputationModuleTests = <C extends Computation>(
  m: DeferredComputationModule<C> & SynchronousComputationModule<C>,
) =>
  describe(
    "DeferredComputationModule",
    describe(
      "fromIterable",
      test(
        "with array",
        pipeLazy(
          [1, 2, 3],
          m.fromIterable(),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
    ),
    describe(
      "generate",
      test(
        "with count",
        pipeLazy(
          m.generate(increment, returns(0), { count: 10 }),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        ),
      ),
    ),
    describe(
      "fromReadonlyArray",
      test(
        "starting at index greater than 0",
        pipeLazy(
          [1, 2, 3, 4],
          m.fromReadonlyArray({ start: 1 }),
          m.toReadonlyArray(),
          expectArrayEquals([2, 3, 4]),
        ),
      ),
      test(
        "starting at index greater than 0 with count",
        pipeLazy(
          [1, 2, 3, 4],
          m.fromReadonlyArray({ start: 1, count: 2 }),
          m.toReadonlyArray(),
          expectArrayEquals([2, 3]),
        ),
      ),
      test(
        "starting at index greater than 0 with count exceeding the length",
        pipeLazy(
          [1, 2, 3, 4],
          m.fromReadonlyArray({ start: 1, count: 10 }),
          m.toReadonlyArray(),
          expectArrayEquals([2, 3, 4]),
        ),
      ),
      test(
        "negative count",
        pipeLazy(
          [1, 2, 3, 4],
          m.fromReadonlyArray({ count: -2 }),
          m.toReadonlyArray(),
          expectArrayEquals([4, 3]),
        ),
      ),
      test(
        "starting at index greater than 0 with negative count",
        pipeLazy(
          [1, 2, 3, 4],
          m.fromReadonlyArray({ start: 2, count: -2 }),
          m.toReadonlyArray(),
          expectArrayEquals([3, 2]),
        ),
      ),
    ),
    describe(
      "concat",
      test(
        "concats the input containers in order",
        pipeLazy(
          m.concat(
            pipe([1, 2, 3], m.fromReadonlyArray()),
            pipe([4, 5, 6], m.fromReadonlyArray()),
          ),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3, 4, 5, 6]),
        ),
      ),
      test(
        "only consume partial number of events",
        pipeLazy(
          m.concat(
            pipe([1, 2, 3], m.fromReadonlyArray()),
            pipe([4, 5, 6], m.fromReadonlyArray()),
            pipe([7, 8, 8], m.fromReadonlyArray()),
          ),
          m.takeFirst({ count: 5 }),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3, 4, 5]),
        ),
      ),
    ),
    describe(
      "concatAll",
      test(
        "concating inner sources",
        pipeLazy(
          [
            pipe([1, 2, 3], m.fromReadonlyArray()),
            pipe([4, 5, 6], m.fromReadonlyArray()),
          ],
          m.fromReadonlyArray(),
          m.concatAll<number>(),
          m.toReadonlyArray<number>(),
          expectArrayEquals([1, 2, 3, 4, 5, 6]),
        ),
      ),
      test(
        "only consume partial number of events",
        pipeLazy(
          [
            pipe([1, 2, 3], m.fromReadonlyArray()),
            pipe([4, 5, 6], m.fromReadonlyArray()),
            pipe([7, 8, 9], m.fromReadonlyArray()),
          ],
          m.fromReadonlyArray(),
          m.concatAll<number>(),
          m.takeFirst({ count: 5 }),
          m.toReadonlyArray<number>(),
          expectArrayEquals([1, 2, 3, 4, 5]),
        ),
      ),
    ),
    describe(
      "concatMap",
      test(
        "maps each value to a container and flattens",
        pipeLazy(
          [0, 1],
          m.fromReadonlyArray(),
          m.concatMap(pipeLazy([1, 2, 3], m.fromReadonlyArray())),
          m.toReadonlyArray<number>(),
          expectArrayEquals([1, 2, 3, 1, 2, 3]),
        ),
      ),
    ),
    describe(
      "concatWith",
      test(
        "concats two containers together",
        pipeLazy(
          [0, 1],
          m.fromReadonlyArray(),
          m.concatWith(pipe([2, 3, 4], m.fromReadonlyArray())),
          m.toReadonlyArray(),
          expectArrayEquals([0, 1, 2, 3, 4]),
        ),
      ),
    ),
    describe(
      "takeFirst",
      test(
        "with default count",
        pipeLazy(
          [1, 2, 3, 4, 5],
          m.fromReadonlyArray(),
          m.takeFirst(),
          m.toReadonlyArray(),
          expectArrayEquals([1]),
        ),
      ),
      test(
        "when taking fewer than the total number of elements in the source",
        pipeLazy(
          [1, 2, 3, 4, 5],
          m.fromReadonlyArray(),
          m.takeFirst({ count: 3 }),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
      test(
        "when taking more than all the items produced by the source",
        pipeLazy(
          [1, 2],
          m.fromReadonlyArray(),
          m.takeFirst({ count: 3 }),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2]),
        ),
      ),
      test(
        "from iterable source",
        pipeLazy(
          [1, 2, 3, 4],
          m.fromIterable(),
          m.takeFirst({ count: 2 }),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2]),
        ),
      ),
      test(
        "when source is empty",
        pipeLazy(
          [],
          m.fromReadonlyArray(),
          m.takeFirst({ count: 3 }),
          m.toReadonlyArray(),
          expectArrayEquals([]),
        ),
      ),
      test(
        "with default count",
        pipeLazy(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.takeFirst(),
          m.toReadonlyArray(),
          expectArrayEquals([1]),
        ),
      ),
      test(
        "when count is 0",
        pipeLazy(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.takeFirst({ count: 0 }),
          m.toReadonlyArray(),
          expectArrayEquals([] as number[]),
        ),
      ),
    ),
    describe(
      "takeWhile",
      test("exclusive", () => {
        pipe(
          [1, 2, 3, 4, 5],
          m.fromReadonlyArray(),
          m.takeWhile(lessThan(4)),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3]),
        );

        pipe(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.takeWhile<number>(alwaysTrue),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3]),
        );

        pipe(
          [],
          m.fromReadonlyArray(),
          m.takeWhile<number>(alwaysTrue),
          m.toReadonlyArray(),
          expectArrayEquals([] as number[]),
        );
      }),
      test(
        "inclusive",
        pipeLazy(
          [1, 2, 3, 4, 5, 6],
          m.fromReadonlyArray(),
          m.takeWhile(lessThan(4), { inclusive: true }),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3, 4]),
        ),
      ),
      test("when predicate throws", () => {
        const err = new Error();
        const predicate = (_: unknown): boolean => {
          throw err;
        };

        pipe(
          pipeLazy(
            [1, 1],
            m.fromReadonlyArray(),
            m.takeWhile(predicate),
            m.toReadonlyArray(),
          ),
          expectToThrowError(err),
        );
      }),
    ),
  );

export default DeferredComputationModuleTests;

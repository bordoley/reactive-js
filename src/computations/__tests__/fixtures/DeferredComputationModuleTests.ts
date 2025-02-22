import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectFalse,
  expectToThrow,
  expectToThrowError,
  expectTrue,
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
  none,
  pipe,
  pipeLazy,
  raise,
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
      "fromValue",
      test(
        "with array",
        pipeLazy(1, m.fromValue(), m.toReadonlyArray(), expectArrayEquals([1])),
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
      "endWith",
      test(
        "appends the additional values to the end of the container",
        pipeLazy(
          [0, 1],
          m.fromReadonlyArray(),
          m.endWith(2, 3, 4),
          m.toReadonlyArray(),
          expectArrayEquals([0, 1, 2, 3, 4]),
        ),
      ),
    ),
    describe(
      "repeat",
      test(
        "when repeating forever.",
        pipeLazy(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.repeat<number>(),
          m.takeFirst<number>({ count: 8 }),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2]),
        ),
      ),
      test(
        "when repeating a finite amount of times.",
        pipeLazy(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.repeat<number>(3),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
        ),
      ),
      test(
        "when repeating with a predicate",
        pipeLazy(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.repeat<number>(lessThan(1)),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
      test("when the repeat function throws", () => {
        const err = new Error();
        pipe(
          pipeLazy(
            [1, 1],
            m.fromReadonlyArray(),
            m.repeat(_ => {
              throw err;
            }),
            m.toReadonlyArray(),
          ),
          expectToThrowError(err),
        );
      }),
    ),
    describe(
      "retry",
      test(
        "retrys the container on an exception",
        pipeLazy(
          m.concat(m.generate(increment, returns(0), { count: 3 }), m.throws()),
          m.retry(alwaysTrue),
          m.takeFirst<number>({ count: 6 }),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3, 1, 2, 3]),
        ),
      ),
      test(
        "retrys with the default predicate",
        pipeLazy(
          m.concat(m.generate(increment, returns(0), { count: 3 }), m.throws()),
          m.retry(),
          m.takeFirst<number>({ count: 6 }),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3, 1, 2, 3]),
        ),
      ),
      test(
        "when source and the retry predicate throw",
        pipeLazy(
          pipeLazy(m.throws(), m.retry(raise), m.toReadonlyArray()),
          expectToThrow,
        ),
      ),

      test(
        "retrys only twice",
        pipeLazy(
          m.concat(m.generate(increment, returns(0), { count: 3 }), m.throws()),
          m.retry((count, _) => count < 2),
          m.takeFirst<number>({ count: 10 }),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3, 1, 2, 3]),
        ),
      ),
    ),
    describe(
      "startWith",
      test(
        "appends the additional values to the start of the container",
        pipeLazy(
          [0, 1],
          m.fromReadonlyArray(),
          m.startWith(2, 3, 4),
          m.toReadonlyArray(),
          expectArrayEquals([2, 3, 4, 0, 1]),
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
    describe(
      "throwIfEmpty",
      test("when source is empty", () => {
        const error = new Error();
        pipe(
          pipeLazy(
            [],
            m.fromReadonlyArray(),
            m.throwIfEmpty(() => error),
            m.toReadonlyArray(),
          ),
          expectToThrowError(error),
        );
      }),
      test("when factory throw", () => {
        const error = new Error();
        pipe(
          pipeLazy(
            [],
            m.fromReadonlyArray(),
            m.throwIfEmpty(() => {
              throw error;
            }),
            m.toReadonlyArray(),
          ),
          expectToThrowError(error),
        );
      }),
      test(
        "when source is not empty",
        pipeLazy(
          [1],
          m.fromReadonlyArray(),
          m.throwIfEmpty(returns(none)),
          m.toReadonlyArray<number>(),
          expectArrayEquals([1]),
        ),
      ),
    ),
    describe(
      "throws",
      test("when raise function returns an value", () => {
        const e1 = "e1";

        try {
          pipe(m.throws({ raise: () => e1 }), m.toReadonlyArray());
          expectFalse(true);
        } catch (e) {
          expectTrue(e instanceof Error);
          pipe((e as Error).message, expectEquals(e1));
        }
      }),
      test("when raise function throws an exception", () => {
        const e1 = new Error();

        try {
          pipe(
            m.throws({
              raise: () => {
                throw e1;
              },
            }),
            m.toReadonlyArray(),
          );
          expectFalse(true);
        } catch (e) {
          expectTrue(e instanceof Error);
          pipe(e, expectEquals<unknown>(e1));
        }
      }),
      test("when raise function returns an exception", () => {
        const e1 = new Error();

        try {
          pipe(m.throws({ raise: () => e1 }), m.toReadonlyArray());
          expectFalse(true);
        } catch (e) {
          expectTrue(e instanceof Error);
          pipe(e, expectEquals<unknown>(e1));
        }
      }),
    ),
  );

export default DeferredComputationModuleTests;

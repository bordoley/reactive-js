import { Array_push } from "../../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectToThrowAsync,
  expectToThrowErrorAsync,
  testAsync,
} from "../../../__internal__/testing.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import {
  ComputationModule,
  ComputationType,
  ComputationTypeOf,
  Computation_deferredWithSideEffectsOfT,
  Computation_multicastOfT,
  Computation_pureDeferredOfT,
  Computation_pureSynchronousOfT,
  Computation_synchronousWithSideEffectsOfT,
  DeferredComputationOf,
  DeferredComputationWithSideEffects,
  PureDeferredComputation,
  PureSynchronousDeferredComputation,
  SequentialComputationModule,
  SynchronousDeferredComputationWithSideEffects,
} from "../../../computations.js";
import {
  Optional,
  alwaysTrue,
  ignore,
  lessThan,
  none,
  pipe,
  pipeAsync,
  pipeLazy,
  pipeLazyAsync,
  raise,
  returns,
} from "../../../functions.js";
import { increment } from "../../../math.js";
import * as Computation from "../../Computation.js";
import * as ComputationTest from "./helpers/ComputationTest.js";
import ComputationOperatorWithSideEffectsTests from "./operators/ComputationOperatorWithSideEffectsTests.js";
import HigherOrderComputationOperatorTests from "./operators/HigherOrderComputationOperatorTests.js";
import StatefulSynchronousComputationOperatorTests from "./operators/StatefulSynchronousComputationOperatorTests.js";
import StatelessComputationOperatorTests from "./operators/StatelessComputationOperatorTests.js";

const SequentialComputationModuleTests = <
  TComputationType extends ComputationType,
>(
  m: SequentialComputationModule<TComputationType> &
    ComputationModule<TComputationType>,
  computations: ComputationTypeOf<TComputationType>,
) => {
  const {
    [Computation_pureSynchronousOfT]: pureSynchronousOfT,
    [Computation_synchronousWithSideEffectsOfT]: synchronousWithSideEffectsOfT,
    [Computation_pureDeferredOfT]: pureDeferredOfT,
    [Computation_deferredWithSideEffectsOfT]: deferredWithSideEffectsOfT,
  } = computations;
  return describe(
    "SequentialComputationModule",
    describe(
      "catchError",
      HigherOrderComputationOperatorTests(
        computations,
        pureSynchronousOfT &&
          m.catchError(_ => pureSynchronousOfT, {
            innerType: PureSynchronousDeferredComputation,
          }),
        synchronousWithSideEffectsOfT &&
          m.catchError(_ => synchronousWithSideEffectsOfT, {
            innerType: SynchronousDeferredComputationWithSideEffects,
          }),
        pureDeferredOfT &&
          m.catchError(_ => pureDeferredOfT, {
            innerType: PureDeferredComputation,
          }),
        deferredWithSideEffectsOfT &&
          m.catchError(_ => deferredWithSideEffectsOfT, {
            innerType: DeferredComputationWithSideEffects,
          }),
      ),
      StatefulSynchronousComputationOperatorTests(
        computations,
        m.catchError(_ => console.log()),
      ),
      testAsync("when the source throws", async () => {
        const e1 = "e1";
        let result: Optional<string> = none;
        await pipeAsync(
          m.raise<number>({ raise: () => e1 }),
          m.catchError<number>((e: Error) => {
            result = e.message;
          }),
          m.toReadonlyArrayAsync(),
        );

        pipe(result, expectEquals<Optional<string>>(e1));
      }),
      testAsync("when the error handler throws an error", async () => {
        const e1 = "e1";
        const e2 = "e2";

        let result: Optional<unknown> = none;

        await pipeAsync(
          m.raise<number>({ raise: () => e1 }),
          m.catchError<number>(_ => {
            throw e2;
          }),
          m.catchError<number>(e => {
            result = e.cause;
          }),
          m.toReadonlyArrayAsync(),
        );

        pipe(
          result as ReadonlyArray<Error>,
          ReadonlyArray.map(x => x.message),
          expectArrayEquals(["e2", "e1"]),
        );
      }),
      testAsync(
        "when error handler returns a computation",
        pipeLazyAsync(
          [1, 2, 3],
          m.fromReadonlyArray<number>(),
          Computation.concatWith(m)<number>(m.raise()),
          m.catchError(pipeLazy([4, 5, 6], m.fromReadonlyArray())),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3, 4, 5, 6]),
        ),
      ),
    ),
    describe(
      "concatAll",
      HigherOrderComputationOperatorTests(
        computations,
        m.concatAll({
          innerType: PureSynchronousDeferredComputation,
        }),
        m.concatAll({
          innerType: SynchronousDeferredComputationWithSideEffects,
        }),
        m.concatAll({
          innerType: PureDeferredComputation,
        }),
        m.concatAll({
          innerType: DeferredComputationWithSideEffects,
        }),
      ),
      testAsync(
        "concating inner sources",
        pipeLazyAsync(
          [
            pipe([1, 2, 3], m.fromReadonlyArray()),
            pipe([4, 5, 6], m.fromReadonlyArray()),
          ],
          m.fromReadonlyArray(),
          m.concatAll<number>(),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3, 4, 5, 6]),
        ),
      ),
      testAsync(
        "only consume partial number of events",
        pipeLazyAsync(
          [
            pipe([1, 2, 3], m.fromReadonlyArray()),
            pipe([4, 5, 6], m.fromReadonlyArray()),
            pipe([7, 8, 9], m.fromReadonlyArray()),
          ],
          m.fromReadonlyArray(),
          m.concatAll<number>(),
          m.takeFirst<number>({ count: 5 }),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3, 4, 5]),
        ),
      ),
    ),
    describe(
      "concat",
      testAsync(
        "concats the input containers in order",
        pipeLazyAsync(
          m.concat<number>(
            pipe([1, 2, 3], m.fromReadonlyArray()),
            pipe([4, 5, 6], m.fromReadonlyArray()),
          ),
          m.toReadonlyArrayAsync(),
          expectArrayEquals([1, 2, 3, 4, 5, 6]),
        ),
      ),
      testAsync(
        "only consume partial number of events",
        pipeLazyAsync(
          m.concat<number>(
            pipe([1, 2, 3], m.fromReadonlyArray()),
            pipe([4, 5, 6], m.fromReadonlyArray()),
            pipe([7, 8, 8], m.fromReadonlyArray()),
          ),
          m.takeFirst<number>({ count: 5 }),
          m.toReadonlyArrayAsync(),
          expectArrayEquals([1, 2, 3, 4, 5]),
        ),
      ),
      pureSynchronousOfT &&
        ComputationTest.isPureSynchronous(
          m.concat(pureSynchronousOfT, pureSynchronousOfT),
        ),
      synchronousWithSideEffectsOfT &&
        pureSynchronousOfT &&
        ComputationTest.isSynchronousWithSideEffects(
          m.concat(synchronousWithSideEffectsOfT, pureSynchronousOfT),
        ),
      deferredWithSideEffectsOfT &&
        pureSynchronousOfT &&
        ComputationTest.isDeferredWithSideEffects(
          m.concat<any>(
            deferredWithSideEffectsOfT as DeferredComputationOf<
              TComputationType,
              any
            >,
            pureSynchronousOfT as DeferredComputationOf<TComputationType, any>,
          ),
        ),
    ),
    describe(
      "encodeUtf8",
      StatefulSynchronousComputationOperatorTests(computations, m.encodeUtf8()),
      testAsync("encoding ascii", async () => {
        const str = "abcdefghijklmnsopqrstuvwxyz";

        const textDecoder = new TextDecoder();

        const result = await pipeAsync(
          [str],
          m.fromReadonlyArray(),
          m.encodeUtf8(),
          m.map<Uint8Array<ArrayBufferLike>, string>(x =>
            textDecoder.decode(x),
          ),
          m.toReadonlyArrayAsync(),
        );

        pipe(result.join(), expectEquals(str));
      }),
    ),
    describe(
      "forEach",
      ComputationOperatorWithSideEffectsTests(computations, m.forEach(ignore)),
      testAsync("invokes the effect for each notified value", async () => {
        const result: number[] = [];

        await pipeAsync(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.forEach((x: number) => {
            result[Array_push](x + 10);
          }),
          m.toReadonlyArrayAsync(),
        ),
          pipe(result, expectArrayEquals([11, 12, 13]));
      }),
      testAsync("when the effect function throws", async () => {
        const err = new Error();
        await pipeAsync(
          pipeLazy(
            [1, 1],
            m.fromReadonlyArray(),
            m.forEach(_ => {
              throw err;
            }),
            m.toReadonlyArrayAsync(),
          ),
          expectToThrowErrorAsync(err),
        );
      }),
    ),
    describe(
      "repeat",
      StatelessComputationOperatorTests(
        {
          ...computations,
          // Repeat does not support multicasted input
          [Computation_multicastOfT]: none,
        },
        m.repeat(),
      ),
      testAsync(
        "when repeating forever.",
        pipeLazyAsync(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.repeat<number>(),
          m.takeFirst<number>({ count: 8 }),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2]),
        ),
      ),
      testAsync(
        "when repeating a finite amount of times.",
        pipeLazyAsync(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.repeat<number>(3),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
        ),
      ),
      testAsync(
        "when repeating with a predicate",
        pipeLazyAsync(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.repeat<number>(lessThan(1)),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
      testAsync("when the repeat function throws", async () => {
        const err = new Error();
        await pipeAsync(
          pipeLazy(
            [1, 1],
            m.fromReadonlyArray(),
            m.repeat(_ => {
              throw err;
            }),
            m.toReadonlyArrayAsync(),
          ),
          expectToThrowErrorAsync(err),
        );
      }),
    ),
    describe(
      "retry",
      StatelessComputationOperatorTests(
        {
          ...computations,
          // Repeat does not support multicasted input
          [Computation_multicastOfT]: none,
        },
        m.retry(),
      ),
      testAsync(
        "retrys the container on an exception",
        pipeLazyAsync(
          m.concat<number>(
            pipe(
              Computation.generate(m)(increment, returns(0)),
              m.takeFirst({ count: 3 }),
            ),
            m.raise<number>(),
          ),
          m.retry<number>(alwaysTrue),
          m.takeFirst<number>({ count: 6 }),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3, 1, 2, 3]),
        ),
      ),
      testAsync(
        "retrys with the default predicate",
        pipeLazyAsync(
          m.concat<number>(
            pipe(
              Computation.generate(m)(increment, returns(0)),
              m.takeFirst({ count: 3 }),
            ),
            m.raise(),
          ),
          m.retry<number>(),
          m.takeFirst<number>({ count: 6 }),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3, 1, 2, 3]),
        ),
      ),
      testAsync(
        "when source and the retry predicate throw",
        pipeLazyAsync(
          pipeLazyAsync(m.raise(), m.retry(raise), m.toReadonlyArrayAsync()),
          expectToThrowAsync,
        ),
      ),
      testAsync(
        "retrys only twice",
        pipeLazyAsync(
          m.concat<number>(
            pipe(
              Computation.generate(m)(increment, returns(0)),
              m.takeFirst({ count: 3 }),
            ),
            m.raise(),
          ),
          m.retry<number>((count, _) => count < 2),
          m.takeFirst<number>({ count: 10 }),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3, 1, 2, 3]),
        ),
      ),
    ),
    describe(
      "scan",
      StatefulSynchronousComputationOperatorTests(
        computations,
        m.scan(increment, returns(0)),
      ),
      testAsync(
        "sums all the values in the array emitting intermediate values.",
        pipeLazyAsync(
          [1, 1, 1],
          m.fromReadonlyArray(),
          m.scan<number, number>((a, b) => a + b, returns(0)),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
      testAsync("throws when the scan function throws", async () => {
        const err = new Error();
        const scanner = <T>(_acc: T, _next: T): T => {
          throw err;
        };

        await pipeAsync(
          pipeLazy(
            [1, 1],
            m.fromReadonlyArray(),
            m.scan(scanner, returns(0)),
            m.toReadonlyArrayAsync(),
          ),
          expectToThrowErrorAsync(err),
        );
      }),
      testAsync("throws when the initial value function throws", async () => {
        const err = new Error();
        const initialValue = (): number => {
          throw err;
        };

        await pipeAsync(
          pipeLazy(
            [1, 1],
            m.fromReadonlyArray(),
            m.scan<number, number>((a, b) => a + b, initialValue),
            m.toReadonlyArrayAsync<number>(),
          ),
          expectToThrowErrorAsync(err),
        );
      }),
    ),
    describe(
      "takeFirst",
      StatefulSynchronousComputationOperatorTests(computations, m.takeFirst()),
      testAsync(
        "with default count",
        pipeLazyAsync(
          [1, 2, 3, 4, 5],
          m.fromReadonlyArray(),
          m.takeFirst<number>(),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1]),
        ),
      ),
      testAsync(
        "when taking fewer than the total number of elements in the source",
        pipeLazyAsync(
          [1, 2, 3, 4, 5],
          m.fromReadonlyArray(),
          m.takeFirst<number>({ count: 3 }),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
      testAsync(
        "when taking more than all the items produced by the source",
        pipeLazyAsync(
          [1, 2],
          m.fromReadonlyArray(),
          m.takeFirst<number>({ count: 3 }),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2]),
        ),
      ),
      testAsync(
        "from iterable source",
        pipeLazyAsync(
          [1, 2, 3, 4],
          Computation.fromIterable<TComputationType, number>(m),
          m.takeFirst<number>({ count: 2 }),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2]),
        ),
      ),
      testAsync(
        "when source is empty",
        pipeLazyAsync(
          [],
          m.fromReadonlyArray(),
          m.takeFirst<number>({ count: 3 }),
          m.toReadonlyArrayAsync(),
          expectArrayEquals<number>([]),
        ),
      ),
      testAsync(
        "with default count",
        pipeLazyAsync(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.takeFirst<number>(),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1]),
        ),
      ),
      testAsync(
        "when count is 0",
        pipeLazyAsync(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.takeFirst<number>({ count: 0 }),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([] as number[]),
        ),
      ),
    ),
    describe(
      "takeWhile",
      StatefulSynchronousComputationOperatorTests(
        computations,
        m.takeWhile(alwaysTrue),
      ),
      testAsync("exclusive", async () => {
        await pipeAsync(
          [1, 2, 3, 4, 5],
          m.fromReadonlyArray(),
          m.takeWhile(lessThan(4)),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3]),
        );

        await pipeAsync(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.takeWhile<number>(alwaysTrue),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3]),
        );

        await pipeAsync(
          [],
          m.fromReadonlyArray(),
          m.takeWhile<number>(alwaysTrue),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([] as number[]),
        );
      }),
      testAsync(
        "inclusive",
        pipeLazyAsync(
          [1, 2, 3, 4, 5, 6],
          m.fromReadonlyArray(),
          m.takeWhile(lessThan(4), { inclusive: true }),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3, 4]),
        ),
      ),
      testAsync("when predicate throws", async () => {
        const err = new Error();
        const predicate = (_: unknown): boolean => {
          throw err;
        };

        await pipeAsync(
          pipeLazy(
            [1, 1],
            m.fromReadonlyArray(),
            m.takeWhile(predicate),
            m.toReadonlyArrayAsync(),
          ),
          expectToThrowErrorAsync(err),
        );
      }),
    ),
    describe(
      "throwIfEmpty",
      StatefulSynchronousComputationOperatorTests(
        computations,
        m.throwIfEmpty(() => new Error()),
      ),
      testAsync("when source is empty", async () => {
        const error = new Error();
        await pipe(
          pipeLazy(
            [],
            m.fromReadonlyArray(),
            m.throwIfEmpty(() => error),
            m.toReadonlyArrayAsync(),
          ),
          expectToThrowErrorAsync(error),
        );
      }),
      testAsync("when factory throw", async () => {
        const error = new Error();
        await pipe(
          pipeLazy(
            [],
            m.fromReadonlyArray(),
            m.throwIfEmpty(() => {
              throw error;
            }),
            m.toReadonlyArrayAsync(),
          ),
          expectToThrowErrorAsync(error),
        );
      }),
      testAsync(
        "when source is not empty",
        pipeLazyAsync(
          [1],
          m.fromReadonlyArray(),
          m.throwIfEmpty<number>(returns(none)),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1]),
        ),
      ),
    ),
  );
};

export default SequentialComputationModuleTests;

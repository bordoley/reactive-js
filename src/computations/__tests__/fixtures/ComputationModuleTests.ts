import {
  describe,
  expectArrayEquals,
  expectToThrowAsync,
  expectToThrowErrorAsync,
  testAsync,
} from "../../../__internal__/testing.js";
import {
  ComputationModule,
  ComputationOf,
  ComputationType,
  Computation_deferredWithSideEffectsOfT,
  Computation_multicastOfT,
  Computation_pureDeferredOfT,
  Computation_pureSynchronousOfT,
  Computation_synchronousWithSideEffectsOfT,
  DeferredComputationWithSideEffectsOf,
  MulticastComputationOf,
  PureDeferredComputationOf,
  PureSynchronousComputationOf,
  SynchronousComputationWithSideEffectsOf,
} from "../../../computations.js";
import {
  Function1,
  alwaysTrue,
  greaterThan,
  identity,
  increment,
  newInstance,
  none,
  pipeAsync,
  pipeLazy,
  pipeLazyAsync,
  returns,
} from "../../../functions.js";
import StatelessComputationOperatorTests from "./operators/StatelessComputationOperatorTests.js";

const ComputationModuleTests = <TComputation extends ComputationType>(
  m: ComputationModule<TComputation> & {
    fromReadonlyArray: <T>() => Function1<
      ReadonlyArray<T>,
      ComputationOf<TComputation, T>
    >;
    toReadonlyArrayAsync: <T>() => Function1<
      ComputationOf<TComputation, T>,
      Promise<ReadonlyArray<T>>
    >;
  },
  computationType: {
    readonly [Computation_pureSynchronousOfT]?: PureSynchronousComputationOf<
      TComputation,
      unknown
    >;
    readonly [Computation_synchronousWithSideEffectsOfT]?: SynchronousComputationWithSideEffectsOf<
      TComputation,
      unknown
    >;
    readonly [Computation_pureDeferredOfT]?: PureDeferredComputationOf<
      TComputation,
      unknown
    >;
    readonly [Computation_deferredWithSideEffectsOfT]?: DeferredComputationWithSideEffectsOf<
      TComputation,
      unknown
    >;
    readonly [Computation_multicastOfT]?: MulticastComputationOf<
      TComputation,
      unknown
    >;
  },
) =>
  describe(
    "ComputationModule",
    describe(
      "fromIterable",
      testAsync(
        "with array",
        pipeLazyAsync(
          [1, 2, 3],
          m.fromIterable<number>(),
          m.toReadonlyArrayAsync(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
      testAsync(
        "when the iterable throws",
        pipeLazyAsync(
          pipeLazy(
            (function* Generator() {
              throw newInstance(Error);
            })(),
            m.fromIterable(),
            m.toReadonlyArrayAsync(),
          ),
          expectToThrowAsync,
        ),
      ),
    ),
    describe(
      "fromReadonlyArray",
      testAsync(
        "starting at index greater than 0",
        pipeLazyAsync(
          [1, 2, 3, 4],
          m.fromReadonlyArray({ start: 1 }),
          m.toReadonlyArrayAsync(),
          expectArrayEquals([2, 3, 4]),
        ),
      ),
      testAsync(
        "starting at index greater than 0 with count",
        pipeLazyAsync(
          [1, 2, 3, 4],
          m.fromReadonlyArray({ start: 1, count: 2 }),
          m.toReadonlyArrayAsync(),
          expectArrayEquals([2, 3]),
        ),
      ),
      testAsync(
        "starting at index greater than 0 with count exceeding the length",
        pipeLazyAsync(
          [1, 2, 3, 4],
          m.fromReadonlyArray({ start: 1, count: 10 }),
          m.toReadonlyArrayAsync(),
          expectArrayEquals([2, 3, 4]),
        ),
      ),
      testAsync(
        "negative count",
        pipeLazyAsync(
          [1, 2, 3, 4],
          m.fromReadonlyArray({ count: -2 }),
          m.toReadonlyArrayAsync(),
          expectArrayEquals([4, 3]),
        ),
      ),
      testAsync(
        "starting at index greater than 0 with negative count",
        pipeLazyAsync(
          [1, 2, 3, 4],
          m.fromReadonlyArray({ start: 2, count: -2 }),
          m.toReadonlyArrayAsync(),
          expectArrayEquals([3, 2]),
        ),
      ),
    ),
    describe(
      "fromValue",
      testAsync(
        "with array",
        pipeLazyAsync(
          1,
          m.fromValue(),
          m.toReadonlyArrayAsync(),
          expectArrayEquals([1]),
        ),
      ),
    ),
    describe(
      "generate",
      testAsync(
        "with count",
        pipeLazyAsync(
          none,
          // Need to delay instantiating the generate function until
          // after the pipe is invoked because multicast computation
          // types are hot and start producing values immediately
          () => m.generate(increment, returns(0), { count: 10 }),
          m.toReadonlyArrayAsync(),
          expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        ),
      ),
    ),
    describe(
      "keep",
      StatelessComputationOperatorTests(computationType, m.keep(alwaysTrue)),
      testAsync(
        "keeps only values greater than 5",
        pipeLazyAsync(
          [4, 8, 10, 7],
          m.fromReadonlyArray(),
          m.keep(greaterThan(5)),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([8, 10, 7]),
        ),
      ),
      testAsync("when predicate throws", async () => {
        const err = new Error();
        const predicate = <T>(_a: T): boolean => {
          throw err;
        };

        await pipeAsync(
          pipeLazy(
            [1, 1],
            m.fromReadonlyArray(),
            m.keep(predicate),
            m.toReadonlyArrayAsync(),
          ),
          expectToThrowErrorAsync(err),
        );
      }),
    ),
    describe(
      "map",
      StatelessComputationOperatorTests(computationType, m.map(identity)),
      testAsync(
        "maps every value",
        pipeLazyAsync(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.map(increment),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([2, 3, 4]),
        ),
      ),
      testAsync("when selector throws", async () => {
        const err = new Error();
        const selector = <T>(_a: T): boolean => {
          throw err;
        };

        await pipeAsync(
          pipeLazy(
            [1, 1],
            m.fromReadonlyArray(),
            m.map(selector),
            m.toReadonlyArrayAsync(),
          ),

          expectToThrowErrorAsync(err),
        );
      }),
    ),
  );

export default ComputationModuleTests;

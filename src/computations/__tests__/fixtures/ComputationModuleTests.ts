import {
  describe,
  expectArrayEquals,
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
  pipeAsync,
  pipeLazy,
  pipeLazyAsync,
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

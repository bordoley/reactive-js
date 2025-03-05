import {
  describe,
  expectArrayEquals,
  expectToThrowError,
  test,
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
  pipe,
  pipeLazy,
} from "../../../functions.js";
import StatelessComputationOperatorTests from "./StatelessComputationOperatorTests.js";

const ComputationModuleTests = <TComputation extends ComputationType>(
  m: ComputationModule<TComputation> & {
    fromReadonlyArray: <T>() => Function1<
      ReadonlyArray<T>,
      ComputationOf<TComputation, T>
    >;
    toReadonlyArray: <T>() => Function1<
      ComputationOf<TComputation, T>,
      ReadonlyArray<T>
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
      ...StatelessComputationOperatorTests(computationType, m.keep(alwaysTrue))
        .tests,
      test(
        "keeps only values greater than 5",
        pipeLazy(
          [4, 8, 10, 7],
          m.fromReadonlyArray(),
          m.keep(greaterThan(5)),
          m.toReadonlyArray<number>(),
          expectArrayEquals([8, 10, 7]),
        ),
      ),
      test("when predicate throws", () => {
        const err = new Error();
        const predicate = <T>(_a: T): boolean => {
          throw err;
        };

        pipe(
          pipeLazy(
            [1, 1],
            m.fromReadonlyArray(),
            m.keep(predicate),
            m.toReadonlyArray(),
          ),

          expectToThrowError(err),
        );
      }),
    ),
    describe(
      "map",
      ...StatelessComputationOperatorTests(computationType, m.map(identity))
        .tests,
      test(
        "maps every value",
        pipeLazy(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.map(increment),
          m.toReadonlyArray<number>(),
          expectArrayEquals([2, 3, 4]),
        ),
      ),
      test("when selector throws", () => {
        const err = new Error();
        const selector = <T>(_a: T): boolean => {
          throw err;
        };

        pipe(
          pipeLazy(
            [1, 1],
            m.fromReadonlyArray(),
            m.map(selector),
            m.toReadonlyArray(),
          ),

          expectToThrowError(err),
        );
      }),
    ),
  );

export default ComputationModuleTests;

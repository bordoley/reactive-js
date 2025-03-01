import {
  describe,
  expectArrayEquals,
  test,
} from "../../../__internal__/testing.js";
import {
  Computation,
  ComputationModule,
  ComputationOf,
  DeferredComputationLike,
  DeferredComputationModule,
  InteractiveComputationLike,
  InteractiveComputationModule,
} from "../../../computations.js";
import { Function1, pipeLazy } from "../../../functions.js";

const InteractiveComputationModuleTests = <
  Type extends DeferredComputationLike & InteractiveComputationLike,
  TComputation extends Computation,
>(
  m: InteractiveComputationModule<Type, TComputation> &
    DeferredComputationModule<Type, TComputation> &
    ComputationModule<Type, TComputation> & {
      fromReadonlyArray: <T>() => Function1<
        ReadonlyArray<T>,
        ComputationOf<Type, TComputation, T>
      >;
      toReadonlyArray: <T>() => Function1<
        ComputationOf<Type, TComputation, T>,
        ReadonlyArray<T>
      >;
    },
) =>
  describe(
    "InteractiveComputationModule",
    describe(
      "zip",
      test(
        "different length iterables",
        pipeLazy(
          m.zip(
            m.fromReadonlyArray<number>()([0, 1, 2, 3, 4]),
            m.fromReadonlyArray<number>()([0, 1, 2]),
            m.fromReadonlyArray<number>()([0, 1, 2, 3]),
          ),
          m.concatMap(m.fromReadonlyArray()),
          m.toReadonlyArray(),
          expectArrayEquals([0, 0, 0, 1, 1, 1, 2, 2, 2]),
        ),
      ),
      test(
        "with empty iterable",
        pipeLazy(
          m.zip(
            m.fromReadonlyArray<number>()([0, 1, 2, 3, 4]),
            m.fromReadonlyArray<number>()([]),
            m.fromReadonlyArray<number>()([0, 1, 2, 3]),
          ),
          m.concatMap(m.fromReadonlyArray()),
          m.toReadonlyArray(),
          expectArrayEquals<number>([]),
        ),
      ),
    ),
  );

export default InteractiveComputationModuleTests;

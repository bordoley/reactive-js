import { Array_push } from "../../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
  expectToThrowError,
  test,
} from "../../../__internal__/testing.js";
import {
  Computation,
  ComputationLike,
  ComputationWithSideEffectsLike,
  ComputationWithSideEffectsModule,
  DeferredComputationModule,
  SynchronousComputationModule,
} from "../../../computations.js";
import { pipe, pipeLazy } from "../../../functions.js";

const ComputationWithSideEffectsModuleTests = <
  Type extends ComputationLike,
  C extends Computation<Type>,
  TypeWithSideEffects extends ComputationWithSideEffectsLike & Type,
  CWithSideEffects extends Computation<TypeWithSideEffects> & C,
>(
  m: DeferredComputationModule<Type, C> &
    SynchronousComputationModule<Type, C> &
    ComputationWithSideEffectsModule<
      Type,
      C,
      TypeWithSideEffects,
      CWithSideEffects
    >,
) =>
  describe(
    "ComputationWithSideEffectsModule",
    describe(
      "forEach",
      test("invokes the effect for each notified value", () => {
        const result: number[] = [];

        pipe(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.forEach((x: number) => {
            result[Array_push](x + 10);
          }),
          m.toReadonlyArray(),
        ),
          pipe(result, expectArrayEquals([11, 12, 13]));
      }),
      test("when the effect function throws", () => {
        const err = new Error();
        pipe(
          pipeLazy(
            [1, 1],
            m.fromReadonlyArray(),
            m.forEach(_ => {
              throw err;
            }),
            m.toReadonlyArray(),
          ),
          expectToThrowError(err),
        );
      }),
    ),
  );

export default ComputationWithSideEffectsModuleTests;

import {
  describe,
  expectArrayEquals,
  expectToThrowError,
  test,
} from "../../../__internal__/testing.js";
import {
  Computation,
  ComputationLike,
  ComputationOf,
  StatelessComputationModule,
} from "../../../computations.js";
import {
  Function1,
  greaterThan,
  increment,
  pipe,
  pipeLazy,
} from "../../../functions.js";

const StatelessComputationModuleTests = <
  Type extends ComputationLike,
  TComputation extends Computation<Type>,
>(
  m: StatelessComputationModule<Type, TComputation> & {
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
    "StatelessComputationModule",
    describe(
      "keep",
      test(
        "keeps only values greater than 5",
        pipeLazy(
          [4, 8, 10, 7],
          m.fromReadonlyArray(),
          m.keep(greaterThan(5)),
          m.toReadonlyArray(),
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
      test(
        "maps every value",

        pipeLazy(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.map(increment),
          m.toReadonlyArray(),
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

export default StatelessComputationModuleTests;

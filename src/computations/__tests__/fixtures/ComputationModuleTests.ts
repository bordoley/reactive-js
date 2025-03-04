import {
  describe,
  expectArrayEquals,
  expectToThrowError,
  test,
} from "../../../__internal__/testing.js";
import {
  ComputationBaseOf,
  ComputationModule,
  ComputationType,
} from "../../../computations.js";
import {
  Function1,
  greaterThan,
  increment,
  pipe,
  pipeLazy,
} from "../../../functions.js";

const ComputationModuleTests = <TComputation extends ComputationType>(
  m: ComputationModule<TComputation> & {
    fromReadonlyArray: <T>() => Function1<
      ReadonlyArray<T>,
      ComputationBaseOf<TComputation, T>
    >;
    toReadonlyArray: <T>() => Function1<
      ComputationBaseOf<TComputation, T>,
      ReadonlyArray<T>
    >;
  },
) =>
  describe(
    "ComputationModule",
    describe(
      "keep",
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

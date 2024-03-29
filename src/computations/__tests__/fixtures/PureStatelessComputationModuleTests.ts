import {
  describe,
  expectArrayEquals,
  expectToThrowError,
  test,
} from "../../../__internal__/testing.js";
import {
  Computation,
  ComputationOf,
  PureStatelessComputationModule,
} from "../../../computations.js";
import {
  Function1,
  greaterThan,
  increment,
  pipe,
  pipeLazy,
} from "../../../functions.js";

const PureStatelessComputationModuleTests = <C extends Computation>(
  m: PureStatelessComputationModule<C>,
  fromReadonlyArray: <T>() => Function1<ReadonlyArray<T>, ComputationOf<C, T>>,
  toReadonlyArray: <T>() => Function1<ComputationOf<C, T>, ReadonlyArray<T>>,
) =>
  describe(
    "PureStatelessComputationModule",
    describe(
      "keep",
      test(
        "keeps only values greater than 5",
        pipeLazy(
          [4, 8, 10, 7],
          fromReadonlyArray(),
          m.keep(greaterThan(5)),
          toReadonlyArray(),
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
            fromReadonlyArray(),
            m.keep(predicate),
            toReadonlyArray(),
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
          fromReadonlyArray(),
          m.map(increment),
          toReadonlyArray(),
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
            fromReadonlyArray(),
            m.map(selector),
            toReadonlyArray(),
          ),

          expectToThrowError(err),
        );
      }),
    ),
  );

export default PureStatelessComputationModuleTests;

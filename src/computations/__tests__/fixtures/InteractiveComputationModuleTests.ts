import {
  describe,
  expectArrayEquals,
  testAsync,
} from "../../../__internal__/testing.js";
import {
  ComputationModule,
  InteractiveComputationModule,
  PickComputationModule,
} from "../../../computations.js";
import {
  Tuple3,
  arrayEquality,
  pipeLazyAsync,
  tuple,
} from "../../../functions.js";
import * as Computation from "../../Computation.js";

const InteractiveComputationModuleTests = <
  TComputationModule extends ComputationModule &
    PickComputationModule<InteractiveComputationModule, "zip">,
>(
  m: TComputationModule,
) =>
  describe(
    "InteractiveComputationModuleTests",

    describe(
      "zip",
      testAsync(
        "different length iterables",
        pipeLazyAsync(
          m.zip(
            Computation.fromReadonlyArray(m)()([0, 1, 2, 3, 4]),
            Computation.fromReadonlyArray(m)()([0, 1, 2]),
            Computation.fromReadonlyArray(m)()([0, 1, 2, 3]),
          ),
          Computation.toReadonlyArrayAsync(m)(),
          expectArrayEquals<Tuple3<number, number, number>>(
            [tuple(0, 0, 0), tuple(1, 1, 1), tuple(2, 2, 2)],
            {
              valuesEquality: arrayEquality(),
            },
          ),
        ),
      ),
      testAsync(
        "with empty iterable",
        pipeLazyAsync(
          m.zip(
            Computation.fromReadonlyArray(m)()([0, 1, 2, 3, 4]),
            Computation.fromReadonlyArray(m)()([]),
            Computation.fromReadonlyArray(m)()([0, 1, 2, 3]),
          ),
          Computation.toReadonlyArrayAsync(m)(),
          expectArrayEquals<Tuple3<number, number, number>>([], {
            valuesEquality: arrayEquality(),
          }),
        ),
      ),
    ),
  );

export default InteractiveComputationModuleTests;

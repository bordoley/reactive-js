import {
  describe,
  expectArrayEquals,
  testAsync,
} from "../../../__internal__/testing.js";
import {
  ComputationModule,
  ComputationType,
  InteractiveComputationModule,
  SequentialComputationModule,
} from "../../../computations.js";
import { pipeLazyAsync } from "../../../functions.js";
import * as Computation from "../../Computation.js";

const InteractiveComputationModuleTests = <
  TComputationType extends ComputationType,
>(
  m: InteractiveComputationModule<TComputationType> &
    SequentialComputationModule<TComputationType> &
    ComputationModule<TComputationType>,
) =>
  describe(
    "InteractiveComputationModule",
    describe(
      "zip",
      testAsync(
        "different length iterables",
        pipeLazyAsync(
          m.zip(
            m.fromReadonlyArray<number>()([0, 1, 2, 3, 4]),
            m.fromReadonlyArray<number>()([0, 1, 2]),
            m.fromReadonlyArray<number>()([0, 1, 2, 3]),
          ),
          Computation.concatMap(m)(m.fromReadonlyArray<number>()),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([0, 0, 0, 1, 1, 1, 2, 2, 2]),
        ),
      ),
      testAsync(
        "with empty iterable",
        pipeLazyAsync(
          m.zip(
            m.fromReadonlyArray<number>()([0, 1, 2, 3, 4]),
            m.fromReadonlyArray<number>()([]),
            m.fromReadonlyArray<number>()([0, 1, 2, 3]),
          ),
          Computation.concatMap(m)(m.fromReadonlyArray<number>()),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals<number>([]),
        ),
      ),
    ),
  );

export default InteractiveComputationModuleTests;

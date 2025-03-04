import {
  describe,
  expectArrayEquals,
  test,
} from "../../../__internal__/testing.js";
import {
  ComputationType,
  InteractiveComputationModule,
} from "../../../computations.js";
import { pipeLazy } from "../../../functions.js";
import * as ComputationM from "../../Computation.js";

const InteractiveComputationModuleTests = <
  TComputation extends ComputationType,
>(
  m: InteractiveComputationModule<TComputation>,
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
          ComputationM.concatMap(m)(m.fromReadonlyArray<number>()),
          m.toReadonlyArray<number>(),
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
          ComputationM.concatMap(m)(m.fromReadonlyArray<number>()),
          m.toReadonlyArray<number>(),
          expectArrayEquals<number>([]),
        ),
      ),
    ),
  );

export default InteractiveComputationModuleTests;

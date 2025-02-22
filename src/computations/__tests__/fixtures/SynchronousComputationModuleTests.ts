import { describe, expectEquals, test } from "../../../__internal__/testing.js";
import {
  Computation,
  DeferredComputationModule,
  SynchronousComputationModule,
} from "../../../computations.js";
import { pipeLazy, returns } from "../../../functions.js";

const SynchronousComputationModuleTests = <C extends Computation>(
  m: DeferredComputationModule<C> & SynchronousComputationModule<C>,
) =>
  describe(
    "SynchronousComputationModule",
    describe(
      "reduce",
      test(
        "summing all values from delayed source",
        pipeLazy(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.reduce<number, number>((acc, next) => acc + next, returns(0)),
          expectEquals(6),
        ),
      ),
    ),
  );

export default SynchronousComputationModuleTests;

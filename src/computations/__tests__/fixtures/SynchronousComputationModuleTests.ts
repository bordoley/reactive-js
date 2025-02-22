import {
  describe,
  expectArrayEquals,
  expectEquals,
  test,
} from "../../../__internal__/testing.js";
import {
  Computation,
  DeferredComputationModule,
  SynchronousComputationModule,
} from "../../../computations.js";
import { Optional, increment, pipeLazy, returns } from "../../../functions.js";
import * as Deferable from "../../Deferable.js";

const SynchronousComputationModuleTests = <C extends Computation>(
  m: DeferredComputationModule<C> & SynchronousComputationModule<C>,
) =>
  describe(
    "SynchronousComputationModule",
    describe(
      "last",
      test(
        "returns the last value in the computation",
        pipeLazy(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.last(),
          expectEquals<Optional<number>>(3),
        ),
      ),
    ),
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
    describe(
      "toDeferable",
      test(
        "when deferable sinkcompletes early",
        pipeLazy(
          m.generate(increment, returns(0)),
          m.toDeferable(),
          Deferable.takeFirst({ count: 3 }),
          Deferable.toReadonlyArray(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
    ),
  );

export default SynchronousComputationModuleTests;

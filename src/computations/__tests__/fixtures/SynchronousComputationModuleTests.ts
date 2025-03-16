import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectIsNone,
  test,
} from "../../../__internal__/testing.js";
import {
  ComputationModule,
  ComputationType,
  DeferredComputationModule,
  SynchronousComputationModule,
} from "../../../computations.js";
import { Optional, pipe, pipeLazy, returns } from "../../../functions.js";
import { increment } from "../../../math.js";
import * as Computation from "../../Computation.js";
import * as Runnable from "../../Runnable.js";
import * as ComputationTest from "./helpers/ComputationTest.js";

const SynchronousComputationModuleTests = <
  TComputationType extends ComputationType,
>(
  m: SynchronousComputationModule<TComputationType> &
    DeferredComputationModule<TComputationType> &
    ComputationModule<TComputationType>,
) => {
  return describe(
    "SynchronousComputationModule",
    describe("empty", ComputationTest.isPureSynchronous(m.empty())),
    describe(
      "first",
      test(
        "returns the first value in the computation",
        pipeLazy(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.first(),
          expectEquals<Optional<number>>(1),
        ),
      ),
      test(
        "returns the none when computation is empty",
        pipeLazy([], m.fromReadonlyArray(), m.first(), expectIsNone),
      ),
    ),
    describe(
      "fromReadonlyArray",
      ComputationTest.isPureSynchronous(pipe([], m.fromReadonlyArray())),
    ),
    describe(
      "fromValue",
      ComputationTest.isPureSynchronous(pipe("a", m.fromValue())),
    ),
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
    describe("raise", ComputationTest.isPureSynchronous(m.raise())),
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
      "toRunnable",
      test(
        "when deferable sinkcompletes early",
        pipeLazy(
          Computation.generate(m)(increment, returns(0)),
          m.toRunnable(),
          Runnable.takeFirst({ count: 3 }),
          Runnable.toReadonlyArray<number>(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
    ),
  );
};

export default SynchronousComputationModuleTests;

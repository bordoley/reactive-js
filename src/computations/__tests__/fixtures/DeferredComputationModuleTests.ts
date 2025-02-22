import {
  describe,
  expectArrayEquals,
  test,
} from "../../../__internal__/testing.js";
import {
  Computation,
  DeferredComputationModule,
  SynchronousComputationModule,
} from "../../../computations.js";
import { increment, pipeLazy, returns } from "../../../functions.js";

const DeferredComputationModuleTests = <C extends Computation>(
  m: DeferredComputationModule<C> & SynchronousComputationModule<C>,
) =>
  describe(
    "DeferredComputationModule",
    describe(
      "fromIterable",
      test(
        "with array",
        pipeLazy(
          [1, 2, 3],
          m.fromIterable(),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
    ),
    describe(
      "generate",
      test(
        "with count",
        pipeLazy(
          m.generate(increment, returns(0), { count: 10 }),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        ),
      ),
    ),
    describe(
      "fromReadonlyArray",
      test(
        "starting at index greater than 0",
        pipeLazy(
          [1, 2, 3, 4],
          m.fromReadonlyArray({ start: 1 }),
          m.toReadonlyArray(),
          expectArrayEquals([2, 3, 4]),
        ),
      ),
      test(
        "starting at index greater than 0 with count",
        pipeLazy(
          [1, 2, 3, 4],
          m.fromReadonlyArray({ start: 1, count: 2 }),
          m.toReadonlyArray(),
          expectArrayEquals([2, 3]),
        ),
      ),
      test(
        "starting at index greater than 0 with count exceeding the length",
        pipeLazy(
          [1, 2, 3, 4],
          m.fromReadonlyArray({ start: 1, count: 10 }),
          m.toReadonlyArray(),
          expectArrayEquals([2, 3, 4]),
        ),
      ),
      test(
        "negative count",
        pipeLazy(
          [1, 2, 3, 4],
          m.fromReadonlyArray({ count: -2 }),
          m.toReadonlyArray(),
          expectArrayEquals([4, 3]),
        ),
      ),
      test(
        "starting at index greater than 0 with negative count",
        pipeLazy(
          [1, 2, 3, 4],
          m.fromReadonlyArray({ start: 2, count: -2 }),
          m.toReadonlyArray(),
          expectArrayEquals([3, 2]),
        ),
      ),
    ),
  );

export default DeferredComputationModuleTests;

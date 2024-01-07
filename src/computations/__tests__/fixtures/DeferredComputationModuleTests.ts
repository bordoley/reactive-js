import {
  describe,
  expectArrayEquals,
  test,
} from "../../../__internal__/testing.js";
import {
  Computation,
  ComputationOf,
  DeferredComputationModule,
} from "../../../computations.js";
import { Function1, pipeLazy } from "../../../functions.js";

const DeferredComputationModuleTests = <C extends Computation>(
  m: DeferredComputationModule<C>,
  toReadonlyArray: <T>() => Function1<ComputationOf<C, T>, ReadonlyArray<T>>,
) =>
  describe(
    "DeferredComputationModule",
    describe(
      "fromReadonlyArray",
      test(
        "starting at index greater than 0",
        pipeLazy(
          [1, 2, 3, 4],
          m.fromReadonlyArray({ start: 1 }),
          toReadonlyArray(),
          expectArrayEquals([2, 3, 4]),
        ),
      ),
      test(
        "starting at index greater than 0 with count",
        pipeLazy(
          [1, 2, 3, 4],
          m.fromReadonlyArray({ start: 1, count: 2 }),
          toReadonlyArray(),
          expectArrayEquals([2, 3]),
        ),
      ),
      test(
        "starting at index greater than 0 with count exceeding the length",
        pipeLazy(
          [1, 2, 3, 4],
          m.fromReadonlyArray({ start: 1, count: 10 }),
          toReadonlyArray(),
          expectArrayEquals([2, 3, 4]),
        ),
      ),
      test(
        "negative count",
        pipeLazy(
          [1, 2, 3, 4],
          m.fromReadonlyArray({ count: -2 }),
          toReadonlyArray(),
          expectArrayEquals([4, 3]),
        ),
      ),
      test(
        "starting at index greater than 0 with negative count",
        pipeLazy(
          [1, 2, 3, 4],
          m.fromReadonlyArray({ start: 2, count: -2 }),
          toReadonlyArray(),
          expectArrayEquals([3, 2]),
        ),
      ),
    ),
  );

export default DeferredComputationModuleTests;

import {
  describe,
  expectArrayEquals,
  testAsync,
} from "../../../__internal__/testing.js";
import {
  ComputationModule,
  SequentialReactiveComputationModule,
} from "../../../computations.js";
import { pipeLazyAsync } from "../../../functions.js";
import * as Computation from "../../Computation.js";

const SequentialReactiveComputationModuleTests = <
  TComputationModule extends ComputationModule &
    Pick<SequentialReactiveComputationModule, "takeLast">,
>(
  m: TComputationModule,
) =>
  describe(
    "SequentialReactiveComputationModule",
    describe(
      "takeLast",
      testAsync(
        "with default count",
        pipeLazyAsync(
          [1, 2, 3, 4, 5],
          Computation.fromReadonlyArray(m)(),
          m.takeLast<number>(),
          Computation.toReadonlyArrayAsync(m)<number>(),
          expectArrayEquals([5]),
        ),
      ),
      testAsync(
        "when count is 0",
        pipeLazyAsync(
          [1, 2, 3, 4, 5],
          Computation.fromReadonlyArray(m)(),
          // Some implementations special case this
          m.takeLast<number>({ count: 0 }),
          Computation.toReadonlyArrayAsync(m)<number>(),
          expectArrayEquals([] as number[]),
        ),
      ),
      testAsync(
        "when count is less than the total number of elements",
        pipeLazyAsync(
          [1, 2, 3, 4, 5],
          Computation.fromReadonlyArray(m)(),
          m.takeLast<number>({ count: 3 }),
          Computation.toReadonlyArrayAsync(m)<number>(),
          expectArrayEquals([3, 4, 5]),
        ),
      ),
      testAsync(
        "when count is greater than the total number of elements",
        pipeLazyAsync(
          [1, 2, 3, 4, 5],
          Computation.fromReadonlyArray(m)(),
          m.takeLast<number>({ count: 10 }),
          Computation.toReadonlyArrayAsync(m)<number>(),
          expectArrayEquals([1, 2, 3, 4, 5]),
        ),
      ),
      testAsync(
        "with default count",
        pipeLazyAsync(
          [1, 2, 3, 4, 5],
          Computation.fromReadonlyArray(m)(),
          m.takeLast<number>(),
          Computation.toReadonlyArrayAsync(m)<number>(),
          expectArrayEquals([5]),
        ),
      ),
    ),
  );

export default SequentialReactiveComputationModuleTests;

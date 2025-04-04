import { describe } from "../../../__internal__/testing.js";
import {
  ComputationModule,
  ComputationTypeLike,
  DeferredReactiveComputationModule,
} from "../../../computations.js";

const DeferredReactiveComputationModuleTests = <
  TComputationType extends ComputationTypeLike,
>(
  _m: ComputationModule<TComputationType> &
    DeferredReactiveComputationModule<TComputationType>,
) =>
  describe(
    "DeferredReactiveComputationModule",
    /*
    describe(
      "switchAll",
      testAsync(
        "with empty source",
        pipeLazyAsync(
          [],
          Computation.fromReadonlyArray(m)(),
          m.switchAll<number>(),
          EventSource.toReadonlyArrayAsync<number>(),
          expectArrayEquals([] as readonly number[]),
        ),
      ) 
      testAsync(
        "only produce the last observable",
        pipeLazyAsync(
          [1, 2, 3],
          Computation.fromReadonlyArray(m)(),
          m.map(x => pipe([x, x, x], Computation.fromReadonlyArray(m)())),
          m.switchAll(PureDeferredComputation),
          EventSource.toReadonlyArrayAsync<number>(),
          expectArrayEquals([3, 3, 3]),
        ),
      ),
    ),*/
  );

export default DeferredReactiveComputationModuleTests;

import {
  describe,
  expectArrayEquals,
  testAsync,
} from "../../../__internal__/testing.js";
import {
  ComputationModule,
  ComputationTypeLike,
  DeferredReactiveComputationModule,
} from "../../../computations.js";
import { pipeLazyAsync } from "../../../functions.js";
import * as AsyncIterable from "../../AsyncIterable.js";
import * as Computation from "../../Computation.js";
import * as EventSource from "../../EventSource.js";

const DeferredReactiveComputationModuleTests = <
  TComputationType extends ComputationTypeLike,
>(
  m: ComputationModule<TComputationType> &
    DeferredReactiveComputationModule<TComputationType>,
) =>
  describe(
    "DeferredReactiveComputationModule",
    describe(
      "toAsyncIterable",
      testAsync(
        "converting to an async iterable and back to a producer to iterate the data",
        pipeLazyAsync(
          [1, 2, 2, 2, 2, 3, 3, 3, 4],
          Computation.fromReadonlyArray(m),
          m.toAsyncIterable<number>(),
          AsyncIterable.toProducer<number>(),
          EventSource.toReadonlyArrayAsync(),
          expectArrayEquals<number>([1, 2, 2, 2, 2, 3, 3, 3, 4]),
        ),
      ),
    ),
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

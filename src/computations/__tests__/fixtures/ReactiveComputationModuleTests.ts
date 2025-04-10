import {
  describe,
  expectArrayEquals,
  testAsync,
} from "../../../__internal__/testing.js";
import {
  ComputationModule,
  ComputationTypeLike,
  ConcurrentReactiveComputationModule,
  ReactiveComputationModule,
} from "../../../computations.js";
import { pipeLazyAsync } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import * as EventSource from "../../EventSource.js";
import * as Observable from "../../Observable.js";

const ObservableModule =
  Computation.makeModule<Observable.Signature>(Observable);

const ReactiveComputationModuleTests = <
  TComputationType extends ComputationTypeLike,
>(
  m: ComputationModule<TComputationType> &
    ConcurrentReactiveComputationModule<TComputationType> &
    ReactiveComputationModule<TComputationType>,
) =>
  describe(
    "ReactiveComputationModuleTests",
    describe(
      "fromObservable",
      testAsync(
        "publishes all the values produced by the observable",
        pipeLazyAsync(
          [1, 2, 3],
          Computation.fromReadonlyArray(ObservableModule),
          m.fromObservable<number>(),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
    ),
  );

export default ReactiveComputationModuleTests;

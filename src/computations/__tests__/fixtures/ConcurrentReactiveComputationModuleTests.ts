import {
  describe,
  expectArrayEquals,
  testAsync,
} from "../../../__internal__/testing.js";
import {
  ComputationModule,
  ComputationTypeLike,
  ConcurrentReactiveComputationModule,
  PickComputationModule,
  SourceComputationModule,
} from "../../../computations.js";
import { pipeLazyAsync } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import * as Observable from "../../Observable.js";
import * as Source from "../../Source.js";

const ObservableModule =
  Computation.makeModule<Observable.Computation>()(Observable);

const ConcurrentReactiveComputationModuleTests = <
  TComputationType extends ComputationTypeLike,
>(
  m: ComputationModule<TComputationType> &
    SourceComputationModule<TComputationType> &
    PickComputationModule<
      ConcurrentReactiveComputationModule<TComputationType>,
      "combineLatest" | "merge" | "takeUntil" | "withLatestFrom"
    >,
) =>
  describe(
    "ConcurrentReactiveComputationModuleTests",
    describe(
      "fromObservable",
      testAsync(
        "publishes all the values produced by the observable",
        pipeLazyAsync(
          [1, 2, 3],
          Computation.fromReadonlyArray(ObservableModule)(),
          m.fromObservable<number>(),
          m.toProducer(),
          Source.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
    ),
  );

export default ConcurrentReactiveComputationModuleTests;

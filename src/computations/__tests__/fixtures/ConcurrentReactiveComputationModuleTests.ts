import {
  describe,
  expectArrayEquals,
  testAsync,
} from "../../../__internal__/testing.js";
import {
  ComputationModule,
  ConcurrentReactiveComputationModule,
  PickComputationModule,
} from "../../../computations.js";
import { pipeLazyAsync } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import * as Observable from "../../Observable.js";

const ObservableModule =
  Computation.makeModule<Observable.Computation>()(Observable);

const ConcurrentReactiveComputationModuleTests = <
  TComputationModule extends ComputationModule &
    PickComputationModule<
      ConcurrentReactiveComputationModule,
      "fromObservable" | "takeUntil" | "withLatestFrom"
    >,
>(
  m: TComputationModule,
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
          m.fromObservable(),
          Computation.toReadonlyArrayAsync(m)<number>(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
    ),
  );

export default ConcurrentReactiveComputationModuleTests;

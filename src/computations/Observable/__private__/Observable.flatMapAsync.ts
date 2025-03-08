import * as Computation from "../../../computations/Computation.js";
import { DeferredComputationWithSideEffects } from "../../../computations.js";
import { AsyncFunction2, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_concatAll from "./Observable.concatAll.js";
import Observable_fromAsyncFactory from "./Observable.fromAsyncFactory.js";
import Observable_map from "./Observable.map.js";

const ObservableModule = {
  map: Observable_map,
  concatAll: Observable_concatAll,
};

const Observable_flatMapAsync: Observable.Signature["flatMapAsync"] = <TA, TB>(
  f: AsyncFunction2<TA, AbortSignal, TB>,
) => {
  const mapper = (a: TA) =>
    pipe(
      (abortSignal: AbortSignal) => f(a, abortSignal),
      Observable_fromAsyncFactory(),
    );

  return Computation.concatMap(ObservableModule)(mapper, {
    innerType: DeferredComputationWithSideEffects,
  });
};

export default Observable_flatMapAsync;

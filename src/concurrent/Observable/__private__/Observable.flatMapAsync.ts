import * as Computation from "../../../computations/Computation.js";
import {
  ComputationLike_isPure,
  DeferredComputationModule,
} from "../../../computations.js";
import { DeferredObservableLike } from "../../../concurrent.js";
import { Function2, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_concatAll from "./Observable.concatAll.js";
import Observable_fromAsyncFactory from "./Observable.fromAsyncFactory.js";
import Observable_map from "./Observable.map.js";

const Observable_flatMapAsync: Observable.Signature["flatMapAsync"] = <TA, TB>(
  f: Function2<TA, AbortSignal, Promise<TB>>,
) => {
  const mapper = (a: TA) =>
    pipe(
      (abortSignal: AbortSignal) => f(a, abortSignal),
      Observable_fromAsyncFactory(),
    );

  return Computation.concatMap({
    map: Observable_map as unknown as DeferredComputationModule<
      Observable.ObservableComputationFor<DeferredObservableLike>
    >["map"],
    concatAll: Observable_concatAll as unknown as DeferredComputationModule<
      Observable.ObservableComputationFor<DeferredObservableLike>
    >["concatAll"],
  })(mapper, {
    innerType: {
      [ComputationLike_isPure]: false,
    },
  });
};

export default Observable_flatMapAsync;

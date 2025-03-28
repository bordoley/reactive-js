import { ObservableLike } from "../../../computations.js";
import { identity } from "../../../functions.js";
import { BackpressureStrategy } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import { liftedSinkToObserverWithBackPressure } from "./Observable.lift.js";

const Observable_withBackpressure: Observable.Signature["withBackpressure"] = (<
    T,
  >(config: {
    capacity: number;
    backpressureStrategy: BackpressureStrategy;
  }) =>
  (source: ObservableLike<T>): ObservableLike<T> =>
    DeferredSource.createLifted(
      source,
      identity,
      liftedSinkToObserverWithBackPressure(config),
      source,
    )) as Observable.Signature["withBackpressure"];

export default Observable_withBackpressure;

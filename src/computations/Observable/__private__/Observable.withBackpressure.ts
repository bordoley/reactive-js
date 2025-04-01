import {
  ObservableLike,
  ReactiveSourceLike_subscribe,
} from "../../../computations.js";
import { bindMethod, identity } from "../../../functions.js";
import { BackpressureStrategy } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
import { liftedSinkToObserverWithBackPressure } from "./Observable.lift.js";

const Observable_withBackpressure: Observable.Signature["withBackpressure"] = (<
    T,
  >(config: {
    capacity: number;
    backpressureStrategy: BackpressureStrategy;
  }) =>
  (source: ObservableLike<T>): ObservableLike<T> => {
    const lifted = DeferredReactiveSource.createLifted(
      source,
      identity,
      liftedSinkToObserverWithBackPressure(config),
      source,
    );

    // Ensures that upstream callers don't lift away the backpressure.
    return DeferredReactiveSource.create(
      bindMethod(lifted, ReactiveSourceLike_subscribe),
      source,
    );
  }) as Observable.Signature["withBackpressure"];

export default Observable_withBackpressure;

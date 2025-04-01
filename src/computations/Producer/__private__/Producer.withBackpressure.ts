import {
  ProducerLike,
  ReactiveSourceLike_subscribe,
} from "../../../computations.js";
import { bindMethod, identity } from "../../../functions.js";
import { BackpressureStrategy, ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
import { liftedSinkToConsumerWithBackPressure } from "./Producer.lift.js";

const Producer_withBackpressure: Producer.Signature["withBackpressure"] = (<
    T,
  >(config: {
    capacity: number;
    backpressureStrategy: BackpressureStrategy;
  }) =>
  (source: ProducerLike<T>) => {
    const lifted = DeferredReactiveSource.createLifted(
      source,
      identity,
      liftedSinkToConsumerWithBackPressure(config),
      source,
    );

    // Ensures that upstream callers don't lift away the backpressure.
    return DeferredReactiveSource.create<T, ConsumerLike<T>>(
      bindMethod(lifted, ReactiveSourceLike_subscribe),
      source,
    );
  }) as Producer.Signature["withBackpressure"];

export default Producer_withBackpressure;

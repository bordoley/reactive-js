import {
  EventSourceLike_subscribe,
  ProducerLike,
} from "../../../computations.js";
import { bindMethod, identity } from "../../../functions.js";
import { BackpressureStrategy, ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import { liftedSinkToConsumerWithBackPressure } from "./Producer.lift.js";

const Producer_withBackpressure: Producer.Signature["withBackpressure"] = (<
    T,
  >(config: {
    capacity: number;
    backpressureStrategy: BackpressureStrategy;
  }) =>
  (source: ProducerLike<T>) => {
    const lifted = DeferredEventSource.createLifted(
      source,
      identity,
      liftedSinkToConsumerWithBackPressure(config),
      source,
    );

    // Ensures that upstream callers don't lift away the backpressure.
    return DeferredEventSource.create<T, ConsumerLike<T>>(
      bindMethod(lifted, EventSourceLike_subscribe),
      source,
    );
  }) as Producer.Signature["withBackpressure"];

export default Producer_withBackpressure;

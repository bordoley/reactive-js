import { ProducerLike, SourceLike_subscribe } from "../../../computations.js";
import { bindMethod, identity } from "../../../functions.js";
import { BackpressureStrategy, ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import { liftedSinkToConsumerWithBackPressure } from "./Producer.lift.js";

const Producer_withBackpressure: Producer.Signature["withBackpressure"] = (<
    T,
  >(config: {
    capacity: number;
    backpressureStrategy: BackpressureStrategy;
  }) =>
  (source: ProducerLike<T>) => {
    const lifted = DeferredSource.createLifted(
      source,
      identity,
      liftedSinkToConsumerWithBackPressure(config),
      source,
    );

    // Ensures that upstream callers don't lift away the backpressure.
    return DeferredSource.create<T, ConsumerLike<T>>(
      bindMethod(lifted, SourceLike_subscribe),
      source,
    );
  }) as Producer.Signature["withBackpressure"];

export default Producer_withBackpressure;

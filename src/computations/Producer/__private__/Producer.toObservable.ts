import {
  EventSourceLike_subscribe,
  ProducerLike,
} from "../../../computations.js";
import { BackpressureStrategy, ObserverLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as ConsumerObservable from "../../__internal__/ConsumerObservable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";

const Producer_toObservable: Producer.Signature["toObservable"] = (<
    T,
  >(config?: {
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
  }) =>
  (producer: ProducerLike<T>) =>
    DeferredEventSource.create<T, ObserverLike<T>>(observer => {
      const consumer = ConsumerObservable.create(config);
      consumer[EventSourceLike_subscribe](observer);
      producer[EventSourceLike_subscribe](consumer);
    }, producer)) as Producer.Signature["toObservable"];

export default Producer_toObservable;

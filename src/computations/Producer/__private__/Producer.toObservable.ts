import {
  EventSourceLike_subscribe,
  ProducerLike,
} from "../../../computations.js";
import { BackpressureStrategy, ObserverLike } from "../../../utils.js";
import * as ConsumerObservable from "../../__internal__/ConsumerObservable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";

const Producer_toObservable =
  <T>(config?: {
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
  }) =>
  (producer: ProducerLike<T>) =>
    DeferredEventSource.create<T, ObserverLike<T>>(observer => {
      const consumer = ConsumerObservable.create(config);
      consumer[EventSourceLike_subscribe](observer);
      producer[EventSourceLike_subscribe](consumer);
    }, producer);

export default Producer_toObservable;

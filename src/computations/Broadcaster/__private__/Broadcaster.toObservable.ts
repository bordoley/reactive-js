import {
  BroadcasterLike,
  EventSourceLike_subscribe,
} from "../../../computations.js";
import { BackpressureStrategy, ObserverLike } from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as ConsumerObservable from "../../__internal__/ConsumerObservable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";

const Broadcaster_toObservable: Broadcaster.Signature["toObservable"] = (<
    T,
  >(config?: {
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
  }) =>
  (Broadcaster: BroadcasterLike<T>) =>
    DeferredEventSource.create<T, ObserverLike<T>>(observer => {
      const consumer = ConsumerObservable.create(config);
      consumer[EventSourceLike_subscribe](observer);
      Broadcaster[EventSourceLike_subscribe](consumer);
    }, Broadcaster)) as Broadcaster.Signature["toObservable"];

export default Broadcaster_toObservable;

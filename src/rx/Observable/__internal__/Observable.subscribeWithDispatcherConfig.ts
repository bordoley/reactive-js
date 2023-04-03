import { Function1 } from "../../../functions.js";
import {
  DispatcherLike,
  DispatcherLike_scheduler,
  ObservableLike,
} from "../../../rx.js";
import {
  BufferLike_capacity,
  DisposableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Observable_subscribeWithCapacityAndBackpressureStrategy from "./Observable.subscribeWithCapacityAndBackpressureStrategy.js";

const Observable_subscribeWithDispatcherConfig: <T>(
  dispatcher: DispatcherLike,
) => Function1<ObservableLike<T>, DisposableLike> = dispatcher =>
  Observable_subscribeWithCapacityAndBackpressureStrategy(
    dispatcher[DispatcherLike_scheduler],
    dispatcher[BufferLike_capacity],
    dispatcher[QueueableLike_backpressureStrategy],
  );

export default Observable_subscribeWithDispatcherConfig;

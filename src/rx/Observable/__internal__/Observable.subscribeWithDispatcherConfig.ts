import { Function1 } from "../../../functions.js";
import {
  DispatcherLike,
  DispatcherLike_scheduler,
  ObservableLike,
} from "../../../rx.js";
import {
  DisposableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
} from "../../../util.js";
import Observable_subscribeWithCapacityAndBackpressureStrategy from "./Observable.subscribeWithCapacityAndBackpressureStrategy.js";

const Observable_subscribeWithDispatcherConfig: <T>(
  dispatcher: DispatcherLike,
) => Function1<ObservableLike<T>, DisposableLike> = dispatcher =>
  Observable_subscribeWithCapacityAndBackpressureStrategy(
    dispatcher[DispatcherLike_scheduler],
    dispatcher[QueueableLike_capacity],
    dispatcher[QueueableLike_backpressureStrategy],
  );

export default Observable_subscribeWithDispatcherConfig;

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Observable_subscribeWithCapacityAndBackpressureStrategy from "./Observable.subscribeWithCapacityAndBackpressureStrategy.js";

const Observable_subscribe: <T>(
  scheduler: SchedulerLike,
  options?: {
    backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    capacity?: number;
  },
) => Function1<ObservableLike<T>, DisposableLike> = (scheduler, options) =>
  Observable_subscribeWithCapacityAndBackpressureStrategy(
    scheduler,
    options?.capacity ?? MAX_SAFE_INTEGER,
    options?.backpressureStrategy ?? "overflow",
  );

export default Observable_subscribe;

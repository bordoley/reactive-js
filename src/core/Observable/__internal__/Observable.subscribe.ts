import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import {
  BufferLike_capacity,
  DisposableLike,
  ObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../../core.js";
import { Function1 } from "../../../functions.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

const Observable_subscribe: <T>(
  scheduler: SchedulerLike,
  options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  },
) => Function1<ObservableLike<T>, DisposableLike> = (scheduler, options) =>
  Observable_subscribeWithConfig(scheduler, {
    [BufferLike_capacity]: options?.capacity ?? MAX_SAFE_INTEGER,
    [QueueableLike_backpressureStrategy]:
      options?.backpressureStrategy ?? "overflow",
  });

export default Observable_subscribe;

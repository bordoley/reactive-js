import { Function1, pipe } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  BufferLike_capacity,
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Observer_create from "../../Observer/__internal__/Observer.create.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";

const Observable_subscribeWithConfig =
  <T>(
    scheduler: SchedulerLike,
    config: {
      [BufferLike_capacity]: number;
      [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ): Function1<ObservableLike<T>, DisposableLike> =>
  observable =>
    pipe(Observer_create(scheduler, config), Observer_sourceFrom(observable));

export default Observable_subscribeWithConfig;

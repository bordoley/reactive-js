import {
  BufferLike_capacity,
  DisposableLike,
  ObservableLike,
  ObservableLike_observe,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../../core.js";
import { Function1 } from "../../../functions.js";
import Observer_create from "../../Observer/__internal__/Observer.create.js";

const Observable_subscribeWithConfig =
  <T>(
    scheduler: SchedulerLike,
    config: {
      [BufferLike_capacity]: number;
      [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ): Function1<ObservableLike<T>, DisposableLike> =>
  observable => {
    const observer = Observer_create(scheduler, config);
    observable[ObservableLike_observe](observer);
    return observer;
  };

export default Observable_subscribeWithConfig;

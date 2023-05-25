import Observer_create from "../../Observer/__internal__/Observer.create.js";
import {
  BufferLike_capacity,
  ObservableBaseLike,
  ObservableLike_observe,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../types.js";

const Observable_subscribeWithConfig =
  (
    scheduler: SchedulerLike,
    config: {
      [BufferLike_capacity]: number;
      [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ) =>
  (observable: ObservableBaseLike) => {
    const observer = Observer_create(scheduler, config);
    observable[ObservableLike_observe](observer);
    return observer;
  };

export default Observable_subscribeWithConfig;

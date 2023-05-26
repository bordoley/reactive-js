import Observer_create from "../../Observer/__internal__/Observer.create.js";
import {
  ObservableBaseLike,
  ObservableLike_observe,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  SchedulerLike,
} from "../../types.js";

const Observable_subscribeWithConfig =
  (
    scheduler: SchedulerLike,
    config: Pick<
      QueueableLike,
      typeof QueueableLike_capacity | typeof QueueableLike_backpressureStrategy
    >,
  ) =>
  (observable: ObservableBaseLike) => {
    const observer = Observer_create(scheduler, config);
    observable[ObservableLike_observe](observer);
    return observer;
  };

export default Observable_subscribeWithConfig;

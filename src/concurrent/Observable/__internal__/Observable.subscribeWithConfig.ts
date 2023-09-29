import {
  SchedulerLike,
  ObservableLike_observe,
  ObservableLike,
} from "../../../concurrent.js";
import {
  QueueableLike,
  QueueableLike_capacity,
  QueueableLike_backpressureStrategy,
} from "../../../utils.js";
import Observer_create from "../../Observer/__internal__/Observer.create.js";

const Observable_subscribeWithConfig =
  (
    scheduler: SchedulerLike,
    config: Pick<
      QueueableLike,
      typeof QueueableLike_capacity | typeof QueueableLike_backpressureStrategy
    >,
  ) =>
  (observable: ObservableLike) => {
    const observer = Observer_create(scheduler, config);
    observable[ObservableLike_observe](observer);
    return observer;
  };

export default Observable_subscribeWithConfig;

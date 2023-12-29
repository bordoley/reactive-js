import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import {
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
  SchedulerLike,
} from "../../../concurrent.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
} from "../../../utils.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";

const Observer_create: <T>(
  scheduler: SchedulerLike,
  config: Pick<
    QueueableLike,
    typeof QueueableLike_capacity | typeof QueueableLike_backpressureStrategy
  >,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  return createInstanceFactory(
    mix(
      include(DisposableMixin, ObserverMixin<T>()),
      function SubscribeObserver(
        instance: unknown,
        scheduler: SchedulerLike,
        config: Pick<
          QueueableLike,
          | typeof QueueableLike_capacity
          | typeof QueueableLike_backpressureStrategy
        >,
      ): ObserverLike<T> {
        init(DisposableMixin, instance);
        init(ObserverMixin(), instance, scheduler, config);

        return instance;
      },
    ),
  );
})();

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

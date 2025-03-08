import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import {
  ObservableLike,
  ObservableLike_observe,
} from "../../../computations.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import ObserverMixin from "../../../utils/__mixins__/ObserverMixin.js";
import {
  DisposableContainerLike_add,
  ObserverLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  SchedulerLike,
} from "../../../utils.js";

const createObserver: <T>(
  scheduler: SchedulerLike,
  config: Pick<
    QueueableLike,
    typeof QueueableLike_capacity | typeof QueueableLike_backpressureStrategy
  >,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  return mixInstanceFactory(
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
    const observer = createObserver(scheduler, config);
    scheduler[DisposableContainerLike_add](observer);
    observable[ObservableLike_observe](observer);
    return observer;
  };

export default Observable_subscribeWithConfig;

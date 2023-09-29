import {
  createInstanceFactory,
  mix,
  include,
  init,
  props,
} from "../../../__internal__/mixins.js";
import { SchedulerLike, ObserverLike } from "../../../concurrent.js";
import {
  QueueableLike,
  QueueableLike_capacity,
  QueueableLike_backpressureStrategy,
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
      props({}),
      {},
    ),
  );
})();

export default Observer_create;

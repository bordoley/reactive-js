import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  ObserverLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  SchedulerLike,
} from "../../types.js";
import Observer_mixin from "./Observer.mixin.js";

const Observer_create: <T>(
  scheduler: SchedulerLike,
  config: Pick<
    QueueableLike,
    typeof QueueableLike_capacity | typeof QueueableLike_backpressureStrategy
  >,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  return createInstanceFactory(
    mix(
      include(Disposable_mixin, Observer_mixin<T>()),
      function SubscribeObserver(
        instance: unknown,
        scheduler: SchedulerLike,
        config: Pick<
          QueueableLike,
          | typeof QueueableLike_capacity
          | typeof QueueableLike_backpressureStrategy
        >,
      ): ObserverLike<T> {
        init(Disposable_mixin, instance);
        init(Observer_mixin(), instance, scheduler, config);

        return instance;
      },
      props({}),
      {},
    ),
  );
})();

export default Observer_create;

import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  BufferLike_capacity,
  ObserverLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../types.js";
import Observer_mixin from "./Observer.mixin.js";

const Observer_create: <T>(
  scheduler: SchedulerLike,
  config: {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [BufferLike_capacity]: number;
  },
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  return createInstanceFactory(
    mix(
      include(Disposable_mixin, Observer_mixin<T>()),
      function DelegatingObserver(
        instance: unknown,
        scheduler: SchedulerLike,
        config: {
          readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
          readonly [BufferLike_capacity]: number;
        },
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

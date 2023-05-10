import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import {
  BufferLike_capacity,
  ObserverLike,
  ObserverLike_notify,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../types.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";

const Observer_createBackpressureObserver: <T>(
  delegate: ObserverLike<T>,
  config: {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [BufferLike_capacity]: number;
  },
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(
        Observer_delegatingMixin<T>(),
        Disposable_delegatingMixin,
        Delegating_mixin(),
      ),
      function EnqueueObserver(
        instance: Pick<ObserverLike<T>, typeof ObserverLike_notify>,
        delegate: ObserverLike<T>,
        config: {
          readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
          readonly [BufferLike_capacity]: number;
        },
      ): ObserverLike<T> {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Observer_delegatingMixin<T>(), instance, delegate, config);
        init(Delegating_mixin(), instance, delegate);

        return instance;
      },
      props({}),
      {
        [ObserverLike_notify](this: DelegatingLike<ObserverLike<T>>, next: T) {
          this[DelegatingLike_delegate][ObserverLike_notify](next);
        },
      },
    ),
  ))();

export default Observer_createBackpressureObserver;

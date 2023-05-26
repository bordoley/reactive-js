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
  ObserverLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  SinkLike_notify,
} from "../../types.js";
import Observer_mixin from "./Observer.mixin.js";

const Observer_createBackpressureObserver: <T>(
  delegate: ObserverLike<T>,
  config: Pick<
    QueueableLike,
    typeof QueueableLike_capacity | typeof QueueableLike_backpressureStrategy
  >,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(
        Observer_mixin<T>(),
        Disposable_delegatingMixin,
        Delegating_mixin(),
      ),
      function EnqueueObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify>,
        delegate: ObserverLike<T>,
        config: Pick<
          QueueableLike,
          | typeof QueueableLike_capacity
          | typeof QueueableLike_backpressureStrategy
        >,
      ): ObserverLike<T> {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Observer_mixin<T>(), instance, delegate, config);
        init(Delegating_mixin(), instance, delegate);

        return instance;
      },
      props({}),
      {
        [SinkLike_notify](this: DelegatingLike<ObserverLike<T>>, next: T) {
          this[DelegatingLike_delegate][SinkLike_notify](next);
        },
      },
    ),
  ))();

export default Observer_createBackpressureObserver;

import {
  createInstanceFactory,
  mix,
  include,
  init,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../rx.js";
import {
  QueueableLike,
  QueueableLike_capacity,
  QueueableLike_backpressureStrategy,
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
} from "../../../utils.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";

const Observer_createBackpressureObserver: <T>(
  delegate: ObserverLike<T>,
  config: Pick<
    QueueableLike,
    typeof QueueableLike_capacity | typeof QueueableLike_backpressureStrategy
  >,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(ObserverMixin<T>(), DelegatingDisposableMixin<ObserverLike<T>>()),
      function EnqueueObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify>,
        delegate: ObserverLike<T>,
        config: Pick<
          QueueableLike,
          | typeof QueueableLike_capacity
          | typeof QueueableLike_backpressureStrategy
        >,
      ): ObserverLike<T> {
        init(DelegatingDisposableMixin<ObserverLike<T>>(), instance, delegate);
        init(ObserverMixin<T>(), instance, delegate, config);

        return instance;
      },
      props({}),
      {
        [SinkLike_notify](
          this: DelegatingDisposableLike<ObserverLike<T>>,
          next: T,
        ) {
          this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
        },
      },
    ),
  ))();

export default Observer_createBackpressureObserver;

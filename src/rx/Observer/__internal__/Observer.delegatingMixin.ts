import {
  Mixin2,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { returns } from "../../../functions.js";
import { ObserverLike, ObserverLike_notify } from "../../../rx.js";
import Scheduler_delegatingMixin from "../../../scheduling/Scheduler/__internal__/Scheduler.delegatingMixin.js";
import {
  BufferLike_capacity,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_baseMixin from "./Observer.baseMixin.js";

type TObserverDelegatingMixin<T> = Omit<
  ObserverLike<T>,
  typeof ObserverLike_notify
>;

const Observer_delegatingMixin: <T>() => Mixin2<
  TObserverDelegatingMixin<T>,
  ObserverLike,
  {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [BufferLike_capacity]: number;
  }
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix(
      include(
        Observer_baseMixin(),
        Scheduler_delegatingMixin,
        Disposable_delegatingMixin(),
      ),
      function ObserverMixin(
        instance: unknown,
        delegate: ObserverLike,
        config: {
          readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
          readonly [BufferLike_capacity]: number;
        },
      ): TObserverDelegatingMixin<T> {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(Scheduler_delegatingMixin, instance, delegate);
        init(Observer_baseMixin<T>(), instance, config);

        return instance;
      },
      props({}),
      {},
    ),
  ))();

export default Observer_delegatingMixin;

import Scheduler_delegatingMixin from "../../Scheduler/__internal__/Scheduler.delegatingMixin.js";
import {
  Mixin2,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { Function3, returns } from "../../functions.js";
import {
  BufferLike_capacity,
  DisposableLike,
  ObserverLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SinkLike_notify,
} from "../../types.js";
import Observer_baseMixin from "./Observer.baseMixin.js";

type TObserverDelegatingMixin<T> = Omit<
  ObserverLike<T>,
  typeof SinkLike_notify
>;

const Observer_delegatingMixin: <T>() => Mixin2<
  TObserverDelegatingMixin<T>,
  ObserverLike,
  {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [BufferLike_capacity]: number;
  },
  DisposableLike
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix<
      Function3<
        DisposableLike,
        ObserverLike,
        {
          readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
          readonly [BufferLike_capacity]: number;
        },
        TObserverDelegatingMixin<T>
      >,
      object,
      object,
      DisposableLike
    >(
      include(Observer_baseMixin(), Scheduler_delegatingMixin),
      function ObserverMixin(
        instance: DisposableLike,
        delegate: ObserverLike,
        config: {
          readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
          readonly [BufferLike_capacity]: number;
        },
      ): TObserverDelegatingMixin<T> {
        init(Scheduler_delegatingMixin, instance, delegate);
        init(Observer_baseMixin<T>(), instance, config);

        return instance;
      },
      props({}),
      {},
    ),
  ))();

export default Observer_delegatingMixin;

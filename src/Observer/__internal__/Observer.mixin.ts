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
  SchedulerLike,
  SinkLike_notify,
} from "../../types.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_baseMixin from "./Observer.baseMixin.js";

const Observer_mixin: <T>() => Mixin2<
  ObserverLike<T>,
  SchedulerLike,
  {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [BufferLike_capacity]: number;
  },
  DisposableLike
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix<
      Function3<
        DisposableLike & Pick<ObserverLike<T>, typeof SinkLike_notify>,
        ObserverLike,
        {
          readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
          readonly [BufferLike_capacity]: number;
        },
        ObserverLike<T>
      >,
      object,
      Pick<ObserverLike<T>, typeof SinkLike_notify>,
      DisposableLike
    >(
      include(Observer_baseMixin(), Scheduler_delegatingMixin),
      function ObserverMixin(
        instance: DisposableLike &
          Pick<ObserverLike<T>, typeof SinkLike_notify>,
        scheduler: SchedulerLike,
        config: {
          readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
          readonly [BufferLike_capacity]: number;
        },
      ): ObserverLike<T> {
        init(Scheduler_delegatingMixin, instance, scheduler);
        init(Observer_baseMixin<T>(), instance, config);

        return instance;
      },
      props({}),
      {
        [SinkLike_notify](this: ObserverLike, _: T) {
          Observer_assertState(this);
        },
      },
    ),
  ))();

export default Observer_mixin;

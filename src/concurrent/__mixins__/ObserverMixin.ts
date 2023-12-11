import {
  Mixin2,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { ObserverLike, SchedulerLike } from "../../concurrent.js";
import { SinkLike_notify } from "../../events.js";
import { Function3, returns } from "../../functions.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
} from "../../utils.js";
import DelegatingSchedulerMixin from "./DelegatingSchedulerMixin.js";
import Observer_baseMixin from "./ObserverBaseMixin.js";

const ObserverMixin: <T>() => Mixin2<
  ObserverLike<T>,
  SchedulerLike,
  {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [QueueableLike_capacity]: number;
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
          readonly [QueueableLike_capacity]: number;
        },
        ObserverLike<T>
      >,
      object,
      Pick<ObserverLike<T>, typeof SinkLike_notify>,
      DisposableLike
    >(
      include(Observer_baseMixin(), DelegatingSchedulerMixin),
      function ObserverMixin(
        instance: DisposableLike &
          Pick<ObserverLike<T>, typeof SinkLike_notify>,
        scheduler: SchedulerLike,
        config: Pick<
          QueueableLike,
          | typeof QueueableLike_capacity
          | typeof QueueableLike_backpressureStrategy
        >,
      ): ObserverLike<T> {
        init(DelegatingSchedulerMixin, instance, scheduler);
        init(Observer_baseMixin<T>(), instance, config);

        return instance;
      },
      props({}),
      {
        [SinkLike_notify](this: ObserverLike, _: T) {},
      },
    ),
  ))();

export default ObserverMixin;

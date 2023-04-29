import {
  Mixin2,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { returns } from "../../../functions.js";
import { ObserverLike, ObserverLike_notify } from "../../../rx.js";
import {
  BufferLike_capacity,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../../util.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Scheduler_delegatingMixin from "../../../util/Scheduler/__internal__/Scheduler.delegatingMixin.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_baseMixin from "./Observer.baseMixin.js";

const Observer_mixin: <T>() => Mixin2<
  ObserverLike<T>,
  SchedulerLike,
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
        Disposable_mixin,
      ),
      function ObserverMixin(
        instance: Pick<ObserverLike, typeof ObserverLike_notify>,
        scheduler: SchedulerLike,
        config: {
          readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
          readonly [BufferLike_capacity]: number;
        },
      ): ObserverLike<T> {
        init(Disposable_mixin, instance);
        init(Scheduler_delegatingMixin, instance, scheduler);
        init(Observer_baseMixin<T>(), instance, config);

        return instance;
      },
      props({}),
      {
        [ObserverLike_notify](this: ObserverLike, _: T) {
          Observer_assertState(this);
        },
      },
    ),
  ))();

export default Observer_mixin;

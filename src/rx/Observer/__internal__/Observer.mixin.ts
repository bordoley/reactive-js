import {
  Mixin2,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { __ObserverMixin_scheduler } from "../../../__internal__/symbols.js";
import { none, pipe, returns, unsafeCast } from "../../../functions.js";
import { ObserverLike, ObserverLike_notify } from "../../../rx.js";
import {
  SchedulerLike,
  SchedulerLike_now,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../../scheduling.js";
import Scheduler_delegatingMixin from "../../../scheduling/Scheduler/__internal__/Scheduler.delegatingMixin.js";
import {
  ContinuationLike,
  ContinuationLike_continuationScheduler,
  ContinuationSchedulerLike_schedule,
  PrioritySchedulerImplementationLike,
  PrioritySchedulerImplementationLike_runContinuation,
  PrioritySchedulerImplementationLike_shouldYield,
} from "../../../scheduling/Scheduler/__internal__/Scheduler.mixin.js";
import {
  BufferLike_capacity,
  DisposableLike_isDisposed,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_baseMixin from "./Observer.baseMixin.js";

const Observer_mixin: <T>() => Mixin2<
  ObserverLike<T>,
  SchedulerLike,
  {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [BufferLike_capacity]: number;
  }
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [__ObserverMixin_scheduler]: SchedulerLike;
  };

  return returns(
    mix(
      include(
        Observer_baseMixin(),
        Scheduler_delegatingMixin,
        Disposable_mixin,
      ),
      function ObserverMixin(
        instance: TProperties &
          Pick<
            ObserverLike,
            typeof SchedulerLike_now | typeof ObserverLike_notify
          >,
        scheduler: SchedulerLike,
        config: {
          readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
          readonly [BufferLike_capacity]: number;
        },
      ): ObserverLike<T> {
        init(Disposable_mixin, instance);
        init(Scheduler_delegatingMixin, instance, scheduler);
        init(Observer_baseMixin<T>(), instance, config);

        instance[__ObserverMixin_scheduler] = scheduler;
        pipe(scheduler, Disposable_addIgnoringChildErrors(instance));

        return instance;
      },
      props<TProperties>({
        [__ObserverMixin_scheduler]: none,
      }),
      {
        get [SchedulerLike_now]() {
          unsafeCast<TProperties>(this);
          return this[__ObserverMixin_scheduler][SchedulerLike_now];
        },

        get [PrioritySchedulerImplementationLike_shouldYield]() {
          unsafeCast<TProperties>(this);
          return this[__ObserverMixin_scheduler][
            SchedulerLike_shouldYield
          ];
        },

        [ContinuationSchedulerLike_schedule](
          this: PrioritySchedulerImplementationLike & TProperties,
          continuation: ContinuationLike,
          delay: number,
        ) {
          pipe(this, Disposable_addIgnoringChildErrors(continuation));

          if (continuation[DisposableLike_isDisposed]) {
            return;
          }

          continuation[ContinuationLike_continuationScheduler] = this;

          pipe(
            this[__ObserverMixin_scheduler][SchedulerLike_schedule](
              () => {
                this[PrioritySchedulerImplementationLike_runContinuation](
                  continuation,
                );
              },
              { delay },
            ),
            Disposable_addTo(continuation),
          );
        },

        [ObserverLike_notify](this: ObserverLike, _: T) {
          Observer_assertState(this);
        },
      },
    ),
  );
})();

export default Observer_mixin;

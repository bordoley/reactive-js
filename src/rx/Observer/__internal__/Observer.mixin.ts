import {
  Mixin2,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverMixin_scheduler } from "../../../__internal__/symbols.js";
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
import Observer_baseMixin from "./Observer.baseMixin.js";

export { ObserverMixin_scheduler };

export type TObserverMixin<
  T,
  TScheduler extends SchedulerLike = SchedulerLike,
> = Omit<ObserverLike<T>, typeof ObserverLike_notify> & {
  [ObserverMixin_scheduler]: TScheduler;
};

const Observer_mixin: <
  T,
  TScheduler extends SchedulerLike = SchedulerLike,
>() => Mixin2<
  TObserverMixin<T, TScheduler>,
  TScheduler,
  {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [BufferLike_capacity]: number;
  }
> = /*@__PURE__*/ (<T, TScheduler extends SchedulerLike = SchedulerLike>() => {
  type TProperties = {
    [ObserverMixin_scheduler]: TScheduler;
  };

  return returns(
    mix(
      include(
        Observer_baseMixin(),
        Scheduler_delegatingMixin,
        Disposable_mixin,
      ),
      function ObserverMixin(
        instance: TProperties & Pick<SchedulerLike, typeof SchedulerLike_now>,
        scheduler: TScheduler,
        config: {
          readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
          readonly [BufferLike_capacity]: number;
        },
      ): TObserverMixin<T, TScheduler> {
        init(Disposable_mixin, instance);
        init(Scheduler_delegatingMixin, instance, scheduler);
        init(Observer_baseMixin<T>(), instance, config);

        instance[ObserverMixin_scheduler] = scheduler;
        pipe(scheduler, Disposable_addIgnoringChildErrors(instance));

        return instance;
      },
      props<TProperties>({
        [ObserverMixin_scheduler]: none,
      }),
      {
        get [SchedulerLike_now]() {
          unsafeCast<TProperties>(this);
          return this[ObserverMixin_scheduler][SchedulerLike_now];
        },

        get [PrioritySchedulerImplementationLike_shouldYield]() {
          unsafeCast<TProperties>(this);
          return this[ObserverMixin_scheduler][SchedulerLike_shouldYield];
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
            this[ObserverMixin_scheduler][SchedulerLike_schedule](
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
      },
    ),
  );
})();

export default Observer_mixin;

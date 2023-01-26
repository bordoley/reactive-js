import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Function1, none, partial, pipe, unsafeCast } from "../../../functions";
import {
  ContinuationLike,
  PrioritySchedulerLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../../scheduling";
import { DisposableLike } from "../../../util";
import Disposable_addIgnoringChildErrors from "../../../util/__internal__/Disposable/Disposable.addIgnoringChildErrors";
import Disposable_isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import { getDelay } from "../Scheduler.options";
import Scheduler_getCurrentTime from "../Scheduler/Scheduler.getCurrentTime";
import Scheduler_isInContinuation from "../Scheduler/Scheduler.isInContinuation";
import Scheduler_requestYield from "../Scheduler/Scheduler.requestYield";
import Scheduler_shouldYield from "../Scheduler/Scheduler.shouldYield";

type TProperties = {
  readonly priorityScheduler: PrioritySchedulerLike;
  readonly priority: number;
};

const createSchedulerInstance = /*@__PURE__*/ createInstanceFactory(
  mix(
    include(Disposable_mixin),
    function PrioritySchedulerDelegatingScheduler(
      instance: Pick<
        SchedulerLike,
        | typeof SchedulerLike_inContinuation
        | typeof SchedulerLike_now
        | typeof SchedulerLike_shouldYield
        | typeof SchedulerLike_requestYield
        | typeof SchedulerLike_schedule
      > &
        Mutable<TProperties>,
      scheduler: PrioritySchedulerLike,
      priority: number,
    ): SchedulerLike {
      init(Disposable_mixin, instance);

      instance.priorityScheduler = scheduler;
      instance.priority = priority;

      return instance;
    },
    props<TProperties>({
      priorityScheduler: none,
      priority: 0,
    }),
    {
      get [SchedulerLike_inContinuation]() {
        unsafeCast<TProperties>(this);
        return Scheduler_isInContinuation(this.priorityScheduler);
      },
      get [SchedulerLike_now]() {
        unsafeCast<TProperties>(this);
        return Scheduler_getCurrentTime(this.priorityScheduler);
      },
      get [SchedulerLike_shouldYield]() {
        unsafeCast<TProperties>(this);
        return Scheduler_shouldYield(this.priorityScheduler);
      },
      [SchedulerLike_requestYield](this: TProperties): void {
        Scheduler_requestYield(this.priorityScheduler);
      },
      [SchedulerLike_schedule](
        this: TProperties & DisposableLike,
        continuation: ContinuationLike,
        options?: { readonly delay?: number },
      ) {
        const delay = getDelay(options);

        pipe(this, Disposable_addIgnoringChildErrors(continuation));

        if (!Disposable_isDisposed(continuation)) {
          this.priorityScheduler[SchedulerLike_schedule](continuation, {
            priority: this.priority,
            delay,
          });
        }
      },
    },
  ),
);

const PriorityScheduler_toScheduler = (
  priority: number,
): Function1<PrioritySchedulerLike, SchedulerLike> =>
  pipe(createSchedulerInstance, partial(priority));

export default PriorityScheduler_toScheduler;

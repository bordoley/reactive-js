import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { getDelay } from "../../../__internal__/scheduling/SchedulerLike.options";
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
import DisposableLike__addIgnoringChildErrors from "../../../util/__internal__/DisposableLike/DisposableLike.addIgnoringChildErrors";
import DisposableLike__isDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import SchedulerLike__getCurrentTime from "../SchedulerLike/SchedulerLike.getCurrentTime";
import SchedulerLike__isInContinuation from "../SchedulerLike/SchedulerLike.isInContinuation";
import SchedulerLike__requestYield from "../SchedulerLike/SchedulerLike.requestYield";
import SchedulerLike__shouldYield from "../SchedulerLike/SchedulerLike.shouldYield";

type TProperties = {
  readonly priorityScheduler: PrioritySchedulerLike;
  readonly priority: number;
};

const createSchedulerInstance = /*@__PURE__*/ createInstanceFactory(
  mix(
    include(DisposableLike__mixin),
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
      init(DisposableLike__mixin, instance);

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
        return SchedulerLike__isInContinuation(this.priorityScheduler);
      },
      get [SchedulerLike_now]() {
        unsafeCast<TProperties>(this);
        return SchedulerLike__getCurrentTime(this.priorityScheduler);
      },
      get [SchedulerLike_shouldYield]() {
        unsafeCast<TProperties>(this);
        return SchedulerLike__shouldYield(this.priorityScheduler);
      },
      [SchedulerLike_requestYield](this: TProperties): void {
        SchedulerLike__requestYield(this.priorityScheduler);
      },
      [SchedulerLike_schedule](
        this: TProperties & DisposableLike,
        continuation: ContinuationLike,
        options?: { readonly delay?: number },
      ) {
        const delay = getDelay(options);

        pipe(this, DisposableLike__addIgnoringChildErrors(continuation));

        if (!DisposableLike__isDisposed(continuation)) {
          this.priorityScheduler[SchedulerLike_schedule](continuation, {
            priority: this.priority,
            delay,
          });
        }
      },
    },
  ),
);

const PrioritySchedulerLike__toScheduler = (
  priority: number,
): Function1<PrioritySchedulerLike, SchedulerLike> =>
  pipe(createSchedulerInstance, partial(priority));

export default PrioritySchedulerLike__toScheduler;

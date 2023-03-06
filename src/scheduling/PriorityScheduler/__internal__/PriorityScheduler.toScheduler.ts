import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  Function1,
  none,
  partial,
  pipe,
  unsafeCast,
} from "../../../functions.js";
import {
  ContinuationLike,
  PrioritySchedulerLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../../scheduling.js";
import { DisposableLike, DisposableLike_isDisposed } from "../../../util.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Scheduler_getCurrentTime from "../../Scheduler/__internal__/Scheduler.getCurrentTime.js";
import Scheduler_isInContinuation from "../../Scheduler/__internal__/Scheduler.isInContinuation.js";
import Scheduler_requestYield from "../../Scheduler/__internal__/Scheduler.requestYield.js";
import Scheduler_shouldYield from "../../Scheduler/__internal__/Scheduler.shouldYield.js";
import { getDelay } from "../../__internal__/Scheduler.options.js";

const PrioritySchedulerDelegatingScheduler_priorityScheduler = Symbol(
  "PrioritySchedulerDelegatingScheduler_priorityScheduler",
);
const PrioritySchedulerDelegatingScheduler_priority = Symbol(
  "PrioritySchedulerDelegatingScheduler_priority",
);

type TProperties = {
  readonly [PrioritySchedulerDelegatingScheduler_priorityScheduler]: PrioritySchedulerLike;
  readonly [PrioritySchedulerDelegatingScheduler_priority]: number;
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

      instance[PrioritySchedulerDelegatingScheduler_priorityScheduler] =
        scheduler;
      instance[PrioritySchedulerDelegatingScheduler_priority] = priority;

      return instance;
    },
    props<TProperties>({
      [PrioritySchedulerDelegatingScheduler_priorityScheduler]: none,
      [PrioritySchedulerDelegatingScheduler_priority]: 0,
    }),
    {
      get [SchedulerLike_inContinuation]() {
        unsafeCast<TProperties>(this);
        return Scheduler_isInContinuation(
          this[PrioritySchedulerDelegatingScheduler_priorityScheduler],
        );
      },
      get [SchedulerLike_now]() {
        unsafeCast<TProperties>(this);
        return Scheduler_getCurrentTime(
          this[PrioritySchedulerDelegatingScheduler_priorityScheduler],
        );
      },
      get [SchedulerLike_shouldYield]() {
        unsafeCast<TProperties>(this);
        return Scheduler_shouldYield(
          this[PrioritySchedulerDelegatingScheduler_priorityScheduler],
        );
      },
      [SchedulerLike_requestYield](this: TProperties): void {
        Scheduler_requestYield(
          this[PrioritySchedulerDelegatingScheduler_priorityScheduler],
        );
      },
      [SchedulerLike_schedule](
        this: TProperties & DisposableLike,
        continuation: ContinuationLike,
        options?: { readonly delay?: number },
      ) {
        const delay = getDelay(options);

        pipe(this, Disposable_addIgnoringChildErrors(continuation));

        if (!continuation[DisposableLike_isDisposed]) {
          this[PrioritySchedulerDelegatingScheduler_priorityScheduler][
            SchedulerLike_schedule
          ](continuation, {
            priority: this[PrioritySchedulerDelegatingScheduler_priority],
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

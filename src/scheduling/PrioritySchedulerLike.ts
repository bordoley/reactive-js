import { getDelay } from "../__internal__/__internal__optionParsing";
import { disposableMixin } from "../__internal__/util/__internal__Disposables";
import {
  __extends,
  clazz,
  createInstanceFactory,
  init,
} from "../__internal__/util/__internal__Objects";
import { Function1, none, partial, pipe, unsafeCast } from "../functions";
import {
  PrioritySchedulerLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../scheduling";
import { ContinuationLike, DisposableLike } from "../util";
import { addIgnoringChildErrors, isDisposed } from "../util/DisposableLike";
import {
  getCurrentTime,
  isInContinuation,
  requestYield,
  shouldYield,
} from "./SchedulerLike";

/**
 * Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
export const toScheduler = /*@__PURE__*/ (() => {
  type TProperties = {
    priorityScheduler: PrioritySchedulerLike;
    priority: number;
  };

  const createSchedulerInstance = createInstanceFactory(
    clazz(
      __extends(disposableMixin),
      function PrioritySchedulerDelegatingScheduler(
        instance: Pick<
          SchedulerLike,
          | typeof SchedulerLike_inContinuation
          | typeof SchedulerLike_now
          | typeof SchedulerLike_shouldYield
          | typeof SchedulerLike_requestYield
          | typeof SchedulerLike_schedule
        >,
        scheduler: PrioritySchedulerLike,
        priority: number,
      ): SchedulerLike {
        init(disposableMixin, instance);
        unsafeCast<TProperties>(instance);

        instance.priorityScheduler = scheduler;
        instance.priority = priority;

        return instance;
      },
      {
        priorityScheduler: none,
        priority: 0,
      },
      {
        get [SchedulerLike_inContinuation]() {
          unsafeCast<TProperties>(this);
          return isInContinuation(this.priorityScheduler);
        },
        get [SchedulerLike_now]() {
          unsafeCast<TProperties>(this);
          return getCurrentTime(this.priorityScheduler);
        },
        get [SchedulerLike_shouldYield]() {
          unsafeCast<TProperties>(this);
          return shouldYield(this.priorityScheduler);
        },
        [SchedulerLike_requestYield](this: TProperties): void {
          requestYield(this.priorityScheduler);
        },
        [SchedulerLike_schedule](
          this: TProperties & DisposableLike,
          continuation: ContinuationLike,
          options?: { readonly delay?: number },
        ) {
          const delay = getDelay(options);

          pipe(this, addIgnoringChildErrors(continuation));

          if (!isDisposed(continuation)) {
            this.priorityScheduler[SchedulerLike_schedule](continuation, {
              priority: this.priority,
              delay,
            });
          }
        },
      },
    ),
  );

  return (priority: number): Function1<PrioritySchedulerLike, SchedulerLike> =>
    pipe(createSchedulerInstance, partial(priority));
})();

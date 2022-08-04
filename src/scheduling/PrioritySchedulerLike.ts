import { getDelay } from "../__internal__/optionalArgs";
import { disposableMixin } from "../__internal__/util/DisposableLikeMixins";
import {
  PropertyTypeOf,
  __extends,
  clazz,
  createObjectFactory,
  init,
} from "../__internal__/util/Object";
import { Function1, none, partial, pipe } from "../functions";
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
  type TProperties = PropertyTypeOf<[typeof disposableMixin]> & {
    priorityScheduler: PrioritySchedulerLike;
    priority: number;
  };

  const createSchedulerInstance = pipe(
    clazz(
      __extends(disposableMixin),
      function PrioritySchedulerDelegatingScheduler(
        this: TProperties & SchedulerLike,
        scheduler: PrioritySchedulerLike,
        priority: number,
      ) {
        init(disposableMixin, this);
        this.priorityScheduler = scheduler;
        this.priority = priority;

        return this;
      },
      {
        priorityScheduler: none,
        priority: 0,
      },
      {
        get [SchedulerLike_inContinuation]() {
          const self = this as unknown as TProperties;
          return isInContinuation(self.priorityScheduler);
        },
        get [SchedulerLike_now]() {
          const self = this as unknown as TProperties;
          return getCurrentTime(self.priorityScheduler);
        },
        get [SchedulerLike_shouldYield]() {
          const self = this as unknown as TProperties;
          return shouldYield(self.priorityScheduler);
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
    createObjectFactory<SchedulerLike, PrioritySchedulerLike, number>(),
  );

  return (priority: number): Function1<PrioritySchedulerLike, SchedulerLike> =>
    pipe(createSchedulerInstance, partial(priority));
})();

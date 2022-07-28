import { getDelay } from "../__internal__/optionalArgs";
import { prototype as disposablePrototype } from "../__internal__/util/Disposable";
import {
  Object_init,
  Object_properties,
  PropertyTypeOf,
  createObjectFactory,
  init,
  mixWith,
} from "../__internal__/util/Object";
import { Function1, none, pipe } from "../functions";
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
  type TProperties = PropertyTypeOf<[typeof disposablePrototype]> & {
    priorityScheduler: PrioritySchedulerLike;
    priority: number;
  };

  const createInstance = pipe(
    {
      [Object_properties]: {
        priorityScheduler: none,
        priority: 0,
      },
      [Object_init](
        this: TProperties,
        scheduler: PrioritySchedulerLike,
        priority: number,
      ) {
        init(disposablePrototype, this);
        this.priorityScheduler = scheduler;
        this.priority = priority;
      },
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
    mixWith(disposablePrototype),
    createObjectFactory<
      SchedulerLike,
      TProperties,
      PrioritySchedulerLike,
      number
    >(),
  );

  return (priority: number): Function1<PrioritySchedulerLike, SchedulerLike> =>
    priorityScheduler =>
      createInstance(priorityScheduler, priority);
})();

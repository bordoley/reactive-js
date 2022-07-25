import { getDelay } from "../__internal__/optionalArgs";
import {
  properties as disposableProperties,
  prototype as disposablePrototype,
} from "../__internal__/util/Disposable";
import {
  Object_init,
  createObjectFactory,
  init,
} from "../__internal__/util/Object";
import { Function1, pipe } from "../functions";
import {
  ContinuationLike,
  PrioritySchedulerLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../scheduling";
import { DisposableLike } from "../util";
import { addIgnoringChildErrors, isDisposed } from "../util/DisposableLike";
import { none } from "../util/Option";
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
  const properties = {
    ...disposableProperties,
    priorityScheduler: none as unknown as PrioritySchedulerLike,
    priority: 0,
  };

  const prototype = {
    ...disposablePrototype,
    [Object_init](
      this: typeof properties,
      scheduler: PrioritySchedulerLike,
      priority: number,
    ) {
      init(disposablePrototype, this);
      this.priorityScheduler = scheduler;
      this.priority = priority;
    },
    get [SchedulerLike_inContinuation]() {
      const self = this as unknown as typeof properties;
      return isInContinuation(self.priorityScheduler);
    },

    get [SchedulerLike_now]() {
      const self = this as unknown as typeof properties;
      return getCurrentTime(self.priorityScheduler);
    },

    get [SchedulerLike_shouldYield]() {
      const self = this as unknown as typeof properties;
      return shouldYield(self.priorityScheduler);
    },

    [SchedulerLike_requestYield](): void {
      const self = this as unknown as typeof properties;
      requestYield(self.priorityScheduler);
    },

    [SchedulerLike_schedule](
      this: typeof properties & DisposableLike,
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
  };

  const createInstance = createObjectFactory<
    typeof prototype,
    typeof properties,
    PrioritySchedulerLike,
    number
  >(prototype, properties);

  return (priority: number): Function1<PrioritySchedulerLike, SchedulerLike> =>
    priorityScheduler =>
      createInstance(priorityScheduler, priority);
})();

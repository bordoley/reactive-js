import { getDelay } from "../__internal__/optionalArgs";
import {
  init as disposableInit,
  properties as disposableProperties,
  prototype as disposablePrototype,
} from "../__internal__/util/Disposable";
import { createObjectFactory } from "../__internal__/util/Object";
import {
  DisposableLike,
  addIgnoringChildErrors,
  isDisposed,
} from "../util/DisposableLike";
import { none } from "../util/Option";
import { Function1, pipe } from "../util/functions";
import { ContinuationLike } from "./ContinuationLike";
import {
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  getCurrentTime,
  isInContinuation,
  requestYield,
  shouldYield,
} from "./SchedulerLike";

export type PrioritySchedulerOptions = {
  readonly priority: number;
  readonly delay?: number;
};

/**
 * A scheduler which schedules work according to it's priority.
 *
 * @noInheritDoc
 */
export interface PrioritySchedulerLike extends DisposableLike {
  readonly [SchedulerLike_inContinuation]: boolean;
  readonly [SchedulerLike_now]: number;
  readonly [SchedulerLike_shouldYield]: boolean;

  /**
   * Request the scheduler to yield.
   */
  [SchedulerLike_requestYield](): void;

  [SchedulerLike_schedule](
    continuation: ContinuationLike,
    options: PrioritySchedulerOptions,
  ): void;
}

const properties = {
  ...disposableProperties,
  priorityScheduler: none as unknown as PrioritySchedulerLike,
  priority: 0,
};

const prototype = {
  ...disposablePrototype,
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

const createInstance = /*@__PURE__*/ createObjectFactory(prototype, properties);

/**
 * Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
export const toScheduler =
  (priority: number): Function1<PrioritySchedulerLike, SchedulerLike> =>
  priorityScheduler => {
    const instance = createInstance();
    disposableInit(instance);
    instance.priority = priority;
    instance.priorityScheduler = priorityScheduler;
    return instance;
  };

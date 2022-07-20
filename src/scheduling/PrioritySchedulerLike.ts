import { getDelay } from "../__internal__/optionalArgs";
import {
  DisposableMixin,
  DisposableMixin_disposables,
  mixinDisposable,
} from "../__internal__/util/disposables";
import {
  DisposableLike,
  DisposableLike_error,
  DisposableLike_isDisposed,
  DisposableOrTeardown,
  addIgnoringChildErrors,
  addToIgnoringChildErrors,
  isDisposed,
} from "../util/DisposableLike";
import { none } from "../util/Option";
import { Function1, instanceFactory, pipe } from "../util/functions";
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

const schedulerWithPriorityFactory = /*@__PURE__*/ (() => {
  class SchedulerWithPriority implements DisposableMixin {
    [DisposableLike_error] = none;
    [DisposableLike_isDisposed] = false;
    readonly [DisposableMixin_disposables] = new Set<DisposableOrTeardown>();

    constructor(
      private readonly priorityScheduler: PrioritySchedulerLike,
      private readonly priority: number,
    ) {}

    get [SchedulerLike_inContinuation]() {
      return isInContinuation(this.priorityScheduler);
    }

    get [SchedulerLike_now]() {
      return getCurrentTime(this.priorityScheduler);
    }

    get [SchedulerLike_shouldYield]() {
      return shouldYield(this.priorityScheduler);
    }

    [SchedulerLike_requestYield](): void {
      requestYield(this.priorityScheduler);
    }

    [SchedulerLike_schedule](
      this: this & DisposableLike,
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
    }
  }

  return pipe(
    SchedulerWithPriority,
    mixinDisposable<SchedulerWithPriority, PrioritySchedulerLike, number>(),
    instanceFactory<SchedulerLike, PrioritySchedulerLike, number>(),
  );
})();

/**
 * Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
export const toScheduler =
  (priority: number): Function1<PrioritySchedulerLike, SchedulerLike> =>
  priorityScheduler =>
    pipe(
      schedulerWithPriorityFactory(priorityScheduler, priority),
      addToIgnoringChildErrors<SchedulerLike>(priorityScheduler),
    );

import { MAX_SAFE_INTEGER } from "../../__internal__/env";
import {
  EnumeratorMixin,
  EnumeratorMixin_current,
  EnumeratorMixin_hasCurrent,
  MutableEnumeratorLike,
  mixinEnumerator,
} from "../../__internal__/ix/enumerators";
import { getDelay } from "../../__internal__/optionalArgs";
import { runContinuation } from "../../__internal__/scheduling";
import {
  DisposableMixin,
  DisposableMixin_disposables,
  mixinDisposable,
} from "../../__internal__/util/disposables";
import { EnumeratorLike_current } from "../../ix/EnumeratorLike";
import { InteractiveSourceLike_move } from "../../ix/InteractiveSourceLike";
import {
  DisposableLike,
  DisposableLike_error,
  DisposableLike_isDisposed,
  DisposableOrTeardown,
  addIgnoringChildErrors,
  dispose,
  isDisposed,
} from "../../util/DisposableLike";
import { isSome, none } from "../../util/Option";
import { instanceFactory, pipe } from "../../util/functions";
import { ContinuationLike } from "../ContinuationLike";
import {
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  VirtualTimeSchedulerLike,
  getCurrentTime,
} from "../SchedulerLike";
import { QueueLike, createPriorityQueue } from "./queue";

type VirtualTask = {
  readonly continuation: ContinuationLike;
  dueTime: number;
  id: number;
};

const comparator = (a: VirtualTask, b: VirtualTask) => {
  let diff = 0;
  diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
  diff = diff !== 0 ? diff : a.id - b.id;
  return diff;
};

const virtualTimeSchedulerFactory = /*@__PURE__*/ (() => {
  class VirtualTimeScheduler implements EnumeratorMixin<void>, DisposableMixin {
    [DisposableLike_error] = none;
    [DisposableLike_isDisposed] = false;
    readonly [DisposableMixin_disposables] = new Set<DisposableOrTeardown>();

    [EnumeratorMixin_current] = none;
    [EnumeratorMixin_hasCurrent] = false;

    [SchedulerLike_inContinuation] = false;
    [SchedulerLike_now] = 0;

    private microTaskTicks = 0;
    private taskIDCount = 0;
    private yieldRequested = false;
    private readonly taskQueue: QueueLike<VirtualTask> =
      createPriorityQueue(comparator);

    constructor(
      private readonly maxMicroTaskTicks: number = MAX_SAFE_INTEGER,
    ) {}

    get [SchedulerLike_shouldYield]() {
      const { yieldRequested, [SchedulerLike_inContinuation]: inContinuation } =
        this;

      if (inContinuation) {
        this.microTaskTicks++;
        this.yieldRequested = false;
      }

      return (
        inContinuation &&
        (yieldRequested || this.microTaskTicks >= this.maxMicroTaskTicks)
      );
    }

    [InteractiveSourceLike_move](
      this: this & MutableEnumeratorLike<void>,
    ): void {
      const taskQueue = this.taskQueue;

      if (!isDisposed(this)) {
        const task = taskQueue.pop();

        if (isSome(task)) {
          const { dueTime, continuation } = task;

          this.microTaskTicks = 0;
          this[SchedulerLike_now] = dueTime;
          this[EnumeratorLike_current] = none;

          pipe(this, runContinuation(continuation));
        } else {
          pipe(this, dispose());
        }
      }
    }

    [SchedulerLike_requestYield](): void {
      this.yieldRequested = true;
    }

    [SchedulerLike_schedule](
      this: this & DisposableLike,
      continuation: ContinuationLike,
      options?: { readonly delay?: number },
    ) {
      const delay = getDelay(options);

      pipe(this, addIgnoringChildErrors(continuation));

      if (!isDisposed(continuation)) {
        this.taskQueue.push({
          id: this.taskIDCount++,
          dueTime: getCurrentTime(this) + delay,
          continuation,
        });
      }
    }
  }
  return pipe(
    VirtualTimeScheduler,
    mixinDisposable<VirtualTimeScheduler, number>(),
    mixinEnumerator<VirtualTimeScheduler & DisposableLike, number, void>(),
    instanceFactory<VirtualTimeSchedulerLike, number>(),
  );
})();

/**
 * Creates a new virtual time scheduler instance.
 *
 * @param maxMicroTaskTicks The max number of times
 * shouldYield should return false before returning true. Useful
 * for testing cooperative multitasking.
 */
export const createVirtualTimeScheduler = (
  options: { readonly maxMicroTaskTicks?: number } = {},
): VirtualTimeSchedulerLike => {
  const { maxMicroTaskTicks = MAX_SAFE_INTEGER } = options;
  return pipe(maxMicroTaskTicks, virtualTimeSchedulerFactory);
};

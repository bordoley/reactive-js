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
import { MutableRefLike_current } from "../../__internal__/util/MutableRefLike";
import {
  DisposableMixin,
  DisposableMixin_disposables,
  SerialDisposableLike,
  SerialDisposableMixin,
  SerialDisposableMixin_current,
  mixinDisposable,
} from "../../__internal__/util/disposables";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  getCurrent,
  hasCurrent,
} from "../../ix/EnumeratorLike";
import {
  InteractiveSourceLike_move,
  move,
} from "../../ix/InteractiveSourceLike";
import {
  DisposableLike,
  DisposableLike_error,
  DisposableLike_isDisposed,
  DisposableOrTeardown,
  addIgnoringChildErrors,
  disposed,
  isDisposed,
} from "../../util/DisposableLike";
import { Option, isNone, isSome, none } from "../../util/Option";
import {
  PauseableLike,
  PauseableLike_pause,
  PauseableLike_resume,
} from "../../util/PauseableLike";
import { Function1, instanceFactory, max, pipe } from "../../util/functions";
import { ContinuationLike } from "../ContinuationLike";
import { PrioritySchedulerLike } from "../PrioritySchedulerLike";
import {
  PauseableSchedulerLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  __yield,
  getCurrentTime,
  isInContinuation,
  schedule,
  shouldYield,
} from "../SchedulerLike";
import { QueueLike, createPriorityQueue } from "./queue";

const delayedComparator = (a: QueueTask, b: QueueTask) => {
  let diff = 0;
  diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
  diff = diff !== 0 ? diff : a.taskID - b.taskID;
  return diff;
};

const taskComparator = (a: QueueTask, b: QueueTask) => {
  let diff = 0;
  diff = diff !== 0 ? diff : a.priority - b.priority;
  diff = diff !== 0 ? diff : a.taskID - b.taskID;
  return diff;
};

export type QueueTask = {
  readonly continuation: ContinuationLike;
  dueTime: number;
  readonly priority: number;
  taskID: number;
};

export type PrioritySchedulerOptions = {
  readonly priority: number;
  readonly delay?: number;
};

export type QueueSchedulerOptions = {
  readonly priority?: number;
  readonly delay?: number;
};

/**
 * A scheduler which schedules work according to it's priority.
 *
 * @noInheritDoc
 */
export interface QueueSchedulerLike extends DisposableLike, PauseableLike {
  readonly [SchedulerLike_inContinuation]: boolean;
  readonly [SchedulerLike_now]: number;
  readonly [SchedulerLike_shouldYield]: boolean;

  /**
   * Request the scheduler to yield.
   */
  [SchedulerLike_requestYield](): void;

  [SchedulerLike_schedule](
    continuation: ContinuationLike,
    options?: QueueSchedulerOptions,
  ): void;
}

const queueSchedulerFactory: Function1<SchedulerLike, QueueSchedulerLike> =
  /*@__PURE__*/ (() => {
    const peek = (scheduler: QueueScheduler): Option<QueueTask> => {
      const { delayed, queue } = scheduler;
      const now = getCurrentTime(scheduler.host);

      while (true) {
        const task = delayed.peek();

        if (isNone(task)) {
          break;
        }

        const taskIsDispose = isDisposed(task.continuation);
        if (task.dueTime > now && !taskIsDispose) {
          break;
        }

        delayed.pop();

        if (!taskIsDispose) {
          queue.push(task);
        }
      }

      let task: Option<QueueTask> = none;
      while (true) {
        task = queue.peek();

        if (isNone(task)) {
          break;
        }

        if (!isDisposed(task.continuation)) {
          break;
        }

        queue.pop();
      }

      return task ?? delayed.peek();
    };

    const priorityShouldYield = (
      self: QueueScheduler & EnumeratorLike<QueueTask>,
      next: QueueTask,
    ): boolean => {
      const { [EnumeratorLike_current]: current } = self;

      return (
        current !== next &&
        next.dueTime <= getCurrentTime(self) &&
        next.priority > current.priority
      );
    };

    const scheduleOnHost = (self: QueueScheduler & SerialDisposableLike) => {
      const task = peek(self);

      const continuationActive =
        !isDisposed(self[MutableRefLike_current]) &&
        isSome(task) &&
        self.dueTime <= task.dueTime;

      if (isNone(task) || continuationActive || self.isPaused) {
        return;
      }

      const dueTime = task.dueTime;
      const delay = max(dueTime - getCurrentTime(self), 0);
      self.dueTime = dueTime;

      self[MutableRefLike_current] = pipe(
        self.host,
        schedule(self.hostContinuation, { delay }),
      );
    };

    class QueueScheduler
      implements
        EnumeratorMixin<QueueTask>,
        DisposableMixin,
        SerialDisposableMixin
    {
      [DisposableLike_error] = none;
      [DisposableLike_isDisposed] = false;
      readonly [DisposableMixin_disposables] = new Set<DisposableOrTeardown>();

      [EnumeratorMixin_current] = none;
      [EnumeratorMixin_hasCurrent] = false;

      [SchedulerLike_inContinuation] = false;

      [SerialDisposableMixin_current] = none;

      readonly delayed: QueueLike<QueueTask> =
        createPriorityQueue(delayedComparator);
      readonly queue: QueueLike<QueueTask> =
        createPriorityQueue(taskComparator);
      isPaused = false;

      dueTime = 0;
      private taskIDCounter = 0;
      private yieldRequested = false;

      readonly hostContinuation = () => {
        for (
          let task = peek(this);
          isSome(task) && !isDisposed(this);
          task = peek(this)
        ) {
          const { continuation, dueTime } = task;
          const delay = max(dueTime - getCurrentTime(this), 0);

          if (delay === 0) {
            move(this);
            pipe(this, runContinuation(continuation));
          } else {
            this.dueTime = getCurrentTime(this) + delay;
          }
          __yield({ delay });
        }
      };

      constructor(readonly host: SchedulerLike) {}

      get [SchedulerLike_now](): number {
        return getCurrentTime(this.host);
      }

      get [SchedulerLike_shouldYield](): boolean {
        const {
          [SchedulerLike_inContinuation]: inContinuation,
          yieldRequested,
        } = this;
        if (inContinuation) {
          this.yieldRequested = false;
        }

        const next = peek(this);

        const self = this as this & EnumeratorLike<QueueTask>;

        return (
          inContinuation &&
          (yieldRequested ||
            isDisposed(this) ||
            !hasCurrent(self) ||
            this.isPaused ||
            (isSome(next) ? priorityShouldYield(self, next) : false) ||
            shouldYield(this.host))
        );
      }

      [InteractiveSourceLike_move](
        this: this & MutableEnumeratorLike<QueueTask>,
      ): boolean {
        // First fast forward through any disposed tasks.
        peek(this);
        const task = this.queue.pop();

        if (isSome(task)) {
          this[EnumeratorLike_current] = task;
        }

        return hasCurrent(this);
      }

      [SchedulerLike_requestYield](): void {
        this.yieldRequested = true;
      }

      [PauseableLike_pause](this: this & SerialDisposableLike) {
        this.isPaused = true;
        this[MutableRefLike_current] = disposed;
      }

      [PauseableLike_resume](this: this & SerialDisposableLike) {
        this.isPaused = false;
        scheduleOnHost(this);
      }

      [SchedulerLike_schedule](
        this: this &
          SchedulerLike &
          EnumeratorLike<QueueTask> &
          SerialDisposableLike,
        continuation: ContinuationLike,
        options?: QueueSchedulerOptions,
      ) {
        const delay = getDelay(options);
        const { priority } = options ?? {};
        pipe(this, addIgnoringChildErrors(continuation));

        if (!isDisposed(continuation)) {
          const { [SchedulerLike_now]: now } = this;
          const dueTime = max(now + delay, now);

          const task =
            isInContinuation(this) &&
            hasCurrent(this) &&
            getCurrent(this).continuation === continuation &&
            delay <= 0
              ? getCurrent(this)
              : {
                  taskID: this.taskIDCounter++,
                  continuation,
                  dueTime,
                  priority: isSome(priority)
                    ? max(priority as number, 0)
                    : MAX_SAFE_INTEGER,
                };

          const { delayed, queue } = this;
          const targetQueue = dueTime > now ? delayed : queue;
          targetQueue.push(task);

          scheduleOnHost(this);
        }
      }
    }
    return pipe(
      QueueScheduler,
      mixinDisposable<QueueScheduler, SchedulerLike>(),
      mixinEnumerator<
        QueueScheduler & DisposableLike,
        SchedulerLike,
        QueueTask
      >(),
      instanceFactory<QueueSchedulerLike, SchedulerLike>(),
    );
  })();

export const createPauseableScheduler: Function1<
  SchedulerLike,
  PauseableSchedulerLike
> = queueSchedulerFactory;

export const createPriorityScheduler: Function1<
  SchedulerLike,
  PrioritySchedulerLike
> = queueSchedulerFactory;

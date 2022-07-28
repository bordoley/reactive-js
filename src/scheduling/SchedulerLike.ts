import { MAX_SAFE_INTEGER } from "../__internal__/env";
import { getDelay } from "../__internal__/optionalArgs";
import {
  QueueLike,
  createPriorityQueue,
} from "../__internal__/scheduling/queue";
import {
  getCurrentTime,
  isInContinuation,
} from "../__internal__/schedulingInternal";
import { prototype as disposablePrototype } from "../__internal__/util/Disposable";
import {
  DisposableRefLike,
  prototype as disposableRefPrototype,
} from "../__internal__/util/DisposableRefLike";
import {
  MutableEnumeratorLike,
  prototype as enumeratorPrototype,
} from "../__internal__/util/Enumerator";
import { MutableRefLike_current } from "../__internal__/util/MutableRefLike";
import {
  Object_init,
  Object_properties,
  PropertyTypeOf,
  anyProperty,
  createObjectFactory,
  init,
  mixWith,
} from "../__internal__/util/Object";
import {
  Function1,
  Function2,
  Option,
  SideEffect,
  isNone,
  isSome,
  max,
  newInstanceWith,
  none,
  pipe,
  raise,
} from "../functions";
import {
  PauseableSchedulerLike,
  PrioritySchedulerLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../scheduling";
import {
  ContinuationLike,
  ContinuationLike_run,
  DisposableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  Error,
  PauseableLike,
  PauseableLike_pause,
  PauseableLike_resume,
  SourceLike_move,
  disposed,
} from "../util";
import { run } from "../util/ContinuationLike";
import {
  addIgnoringChildErrors,
  dispose,
  isDisposed,
} from "../util/DisposableLike";
import { getCurrent, hasCurrent } from "../util/EnumeratorLike";
import { move } from "../util/SourceLike";

export {
  isInContinuation,
  getCurrentTime,
} from "../__internal__/schedulingInternal";

export const requestYield = (scheduler: {
  [SchedulerLike_requestYield](): void;
}): void => scheduler[SchedulerLike_requestYield]();

export const shouldYield = (scheduler: {
  [SchedulerLike_shouldYield]: boolean;
}): boolean => scheduler[SchedulerLike_shouldYield];

const isYieldError = (e: unknown): e is YieldError => e instanceof YieldError;

class YieldError {
  constructor(readonly delay: number) {}
}

let currentScheduler: Option<SchedulerLike> = none;

const createContinuation: Function2<
  SchedulerLike,
  SideEffect,
  ContinuationLike
> = /*@__PURE__*/ (() => {
  type TProperties = PropertyTypeOf<[typeof disposablePrototype]> & {
    scheduler: SchedulerLike;
    f: SideEffect;
  };

  return pipe(
    {
      [Object_properties]: {
        scheduler: anyProperty,
        f: anyProperty,
      },
      [Object_init](
        this: TProperties,
        scheduler: SchedulerLike,
        f: SideEffect,
      ) {
        init(disposablePrototype, this);
        this.scheduler = scheduler;
        this.f = f;
      },
      [ContinuationLike_run](this: TProperties & ContinuationLike) {
        if (!isDisposed(this)) {
          let error: Option<Error> = none;
          let yieldError: Option<YieldError> = none;

          const { scheduler } = this;
          const oldCurrentScheduler = currentScheduler;
          currentScheduler = scheduler;
          try {
            this.f();
          } catch (cause) {
            if (isYieldError(cause)) {
              yieldError = cause;
            } else {
              error = { cause };
            }
          }
          currentScheduler = oldCurrentScheduler;

          if (isSome(yieldError)) {
            pipe(scheduler, schedule(this, yieldError));
          } else {
            pipe(this, dispose(error));
          }
        }
      },
    },
    mixWith(disposablePrototype),
    createObjectFactory<
      ContinuationLike,
      TProperties,
      SchedulerLike,
      SideEffect
    >(),
  );
})();

export const __yield = (options?: { delay?: number }) => {
  const delay = getDelay(options);

  const scheduler = isNone(currentScheduler)
    ? raise<SchedulerLike>(
        "__yield effect may only be invoked from within a SchedulerContinuation",
      )
    : currentScheduler;

  if (delay > 0 || shouldYield(scheduler)) {
    pipe(YieldError, newInstanceWith(delay), raise);
  }
};

export const schedule =
  (
    f: SideEffect | ContinuationLike,
    options?: { readonly delay?: number },
  ): Function1<SchedulerLike, DisposableLike> =>
  scheduler => {
    const continuation =
      typeof f === "function" ? createContinuation(scheduler, f) : f;
    scheduler[SchedulerLike_schedule](continuation, options);
    return continuation;
  };

type QueueSchedulerOptions = {
  readonly priority?: number;
  readonly delay?: number;
};

interface QueueSchedulerLike extends DisposableLike, PauseableLike {
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

const createQueueScheduler: Function1<SchedulerLike, QueueSchedulerLike> =
  /*@__PURE__*/ (() => {
    type QueueTask = {
      readonly continuation: ContinuationLike;
      dueTime: number;
      readonly priority: number;
      taskID: number;
    };

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

    const peek = (self: TProperties): Option<QueueTask> => {
      const { delayed, queue } = self;
      const now = getCurrentTime(self.host);

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
      self: TProperties & EnumeratorLike<QueueTask>,
      next: QueueTask,
    ): boolean => {
      const { [EnumeratorLike_current]: current } = self;

      return (
        current !== next &&
        next.dueTime <= getCurrentTime(self.host) &&
        next.priority > current.priority
      );
    };

    const scheduleOnHost = (
      self: TProperties & DisposableRefLike & EnumeratorLike,
    ) => {
      const task = peek(self);

      const continuationActive =
        !isDisposed(self[MutableRefLike_current]) &&
        isSome(task) &&
        self.dueTime <= task.dueTime;

      if (isNone(task) || continuationActive || self.isPaused) {
        return;
      }

      const dueTime = task.dueTime;
      const delay = max(dueTime - getCurrentTime(self.host), 0);
      self.dueTime = dueTime;

      const continuation =
        self.hostContinuation ??
        (() => {
          for (
            let task = peek(self);
            isSome(task) && !isDisposed(self);
            task = peek(self)
          ) {
            const { continuation, dueTime } = task;
            const delay = max(dueTime - getCurrentTime(self.host), 0);

            if (delay === 0) {
              move(self);
              self[SchedulerLike_inContinuation] = true;
              run(continuation);
              self[SchedulerLike_inContinuation] = false;
            } else {
              self.dueTime = getCurrentTime(self.host) + delay;
            }
            __yield({ delay });
          }
        });
      self.hostContinuation = continuation;

      self[MutableRefLike_current] = pipe(
        self.host,
        schedule(continuation, { delay }),
      );
    };

    type TProperties = PropertyTypeOf<
      [
        typeof disposablePrototype,
        ReturnType<typeof enumeratorPrototype>,
        typeof disposableRefPrototype,
      ]
    > & {
      [SchedulerLike_inContinuation]: boolean;
      delayed: QueueLike<QueueTask>;
      dueTime: number;
      host: SchedulerLike;
      hostContinuation: Option<SideEffect>;
      isPaused: boolean;
      queue: QueueLike<QueueTask>;
      taskIDCounter: number;
      yieldRequested: boolean;
    };

    return pipe(
      {
        [Object_properties]: {
          [SchedulerLike_inContinuation]: false,
          delayed: anyProperty,
          dueTime: 0,
          host: anyProperty,
          hostContinuation: anyProperty,
          isPaused: false,
          queue: anyProperty,
          taskIDCounter: 0,
          yieldRequested: false,
        },
        [Object_init](this: TProperties & DisposableLike, host: SchedulerLike) {
          init(disposablePrototype, this);
          init(enumeratorPrototype(), this);
          init(disposableRefPrototype, this, disposed);

          this.delayed = createPriorityQueue(delayedComparator);
          this.queue = createPriorityQueue(taskComparator);
          this.host = host;
        },
        get [SchedulerLike_now](): number {
          const self = this as unknown as TProperties;
          return getCurrentTime(self.host);
        },
        get [SchedulerLike_shouldYield](): boolean {
          const self = this as unknown as TProperties &
            EnumeratorLike<QueueTask>;

          const {
            [SchedulerLike_inContinuation]: inContinuation,
            yieldRequested,
          } = self;

          if (inContinuation) {
            self.yieldRequested = false;
          }

          const next = peek(self);

          return (
            inContinuation &&
            (yieldRequested ||
              isDisposed(self) ||
              !hasCurrent(self) ||
              self.isPaused ||
              (isSome(next) ? priorityShouldYield(self, next) : false) ||
              shouldYield(self.host))
          );
        },
        [SourceLike_move](
          this: TProperties & MutableEnumeratorLike<QueueTask>,
        ): void {
          // First fast forward through any disposed tasks.
          peek(this);
          const task = this.queue.pop();

          if (isSome(task)) {
            this[EnumeratorLike_current] = task;
          }
        },
        [SchedulerLike_requestYield](this: TProperties): void {
          this.yieldRequested = true;
        },
        [PauseableLike_pause](this: TProperties & DisposableRefLike) {
          this.isPaused = true;
          this[MutableRefLike_current] = disposed;
        },
        [PauseableLike_resume](
          this: TProperties & DisposableRefLike & EnumeratorLike,
        ) {
          this.isPaused = false;
          scheduleOnHost(this);
        },
        [SchedulerLike_schedule](
          this: TProperties & DisposableRefLike & EnumeratorLike<QueueTask>,
          continuation: ContinuationLike,
          options?: QueueSchedulerOptions,
        ) {
          const delay = getDelay(options);
          const { priority } = options ?? {};
          pipe(this, addIgnoringChildErrors(continuation));

          if (!isDisposed(continuation)) {
            const now = getCurrentTime(this.host);
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
        },
      },
      mixWith(
        disposablePrototype,
        enumeratorPrototype(),
        disposableRefPrototype,
      ),
      createObjectFactory<QueueSchedulerLike, TProperties, SchedulerLike>(),
    );
  })();

export const toPausableScheduler: Function1<
  SchedulerLike,
  PauseableSchedulerLike
> = createQueueScheduler;

export const toPriorityScheduler: Function1<
  SchedulerLike,
  PrioritySchedulerLike
> = createQueueScheduler;

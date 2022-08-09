import { MAX_SAFE_INTEGER } from "../__internal__/__internal__env";
import { getDelay } from "../__internal__/__internal__optionParsing";
import {
  getCurrentTime as getCurrentTimeInternal,
  isInContinuation as isInContinuationInternal,
} from "../__internal__/__internal__scheduling";
import {
  QueueLike,
  createPriorityQueue,
} from "../__internal__/scheduling/__internal__queue";
import {
  addIgnoringChildErrors,
  dispose,
  isDisposed,
} from "../__internal__/util/__internal__DisposableLike";
import {
  DisposableRefLike,
  disposableMixin,
  disposableRefMixin,
} from "../__internal__/util/__internal__Disposables";
import {
  MutableEnumeratorLike,
  enumeratorMixin,
} from "../__internal__/util/__internal__Enumerators";
import { MutableRefLike_current } from "../__internal__/util/__internal__MutableRefLike";
import {
  PropertyTypeOf,
  __extends,
  clazz,
  createInstanceFactory,
  init,
} from "../__internal__/util/__internal__Objects";
import {
  Function1,
  Function2,
  Option,
  SideEffect,
  compose,
  isNone,
  isSome,
  max,
  newInstance,
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
  Exception,
  PauseableLike,
  PauseableLike_pause,
  PauseableLike_resume,
  SourceLike_move,
  disposed,
} from "../util";
import { run } from "../util/ContinuationLike";
import { getCurrent, hasCurrent } from "../util/EnumeratorLike";
import { pause } from "../util/PauseableLike";
import { move } from "../util/SourceLike";

export const isInContinuation: (scheduler: {
  readonly [SchedulerLike_inContinuation]: boolean;
}) => boolean = isInContinuationInternal;
export const getCurrentTime: (scheduler: {
  readonly [SchedulerLike_now]: number;
}) => number = getCurrentTimeInternal;

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
  type TProperties = PropertyTypeOf<[typeof disposableMixin]> & {
    scheduler: SchedulerLike;
    f: SideEffect;
  };

  return createInstanceFactory(
    clazz(
      __extends(disposableMixin),
      function Continuation(
        this: TProperties & ContinuationLike,
        scheduler: SchedulerLike,
        f: SideEffect,
      ) {
        init(disposableMixin, this);
        this.scheduler = scheduler;
        this.f = f;

        return this;
      },
      {
        scheduler: none,
        f: none,
      },
      {
        [ContinuationLike_run](this: TProperties & ContinuationLike) {
          if (!isDisposed(this)) {
            let error: Option<Exception> = none;
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
    ),
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
    pipe(newInstance(YieldError, delay), raise);
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

    const typedDisposableRefMixin = disposableRefMixin();
    const typedEnumeratorMixin = enumeratorMixin<QueueTask>();

    type TProperties = PropertyTypeOf<
      [
        typeof disposableMixin,
        typeof typedEnumeratorMixin,
        typeof typedDisposableRefMixin,
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

    return createInstanceFactory(
      clazz(
        __extends(
          disposableMixin,
          typedEnumeratorMixin,
          typedDisposableRefMixin,
        ),
        function QueueScheduler(
          this: TProperties & QueueSchedulerLike,
          host: SchedulerLike,
        ) {
          init(disposableMixin, this);
          init(typedEnumeratorMixin, this);
          init(typedDisposableRefMixin, this, disposed);

          this.delayed = createPriorityQueue(delayedComparator);
          this.queue = createPriorityQueue(taskComparator);
          this.host = host;

          return this;
        },
        {
          [SchedulerLike_inContinuation]: false,
          delayed: none,
          dueTime: 0,
          host: none,
          hostContinuation: none,
          isPaused: false,
          queue: none,
          taskIDCounter: 0,
          yieldRequested: false,
        },
        {
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
            // First fast forward through disposed tasks.
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
                        ? max(priority, 0)
                        : MAX_SAFE_INTEGER,
                    };

              const { delayed, queue } = this;
              const targetQueue = dueTime > now ? delayed : queue;
              targetQueue.push(task);

              scheduleOnHost(this);
            }
          },
        },
      ),
    );
  })();

export const toPausableScheduler: Function1<
  SchedulerLike,
  PauseableSchedulerLike
> = compose(createQueueScheduler, pause);

export const toPriorityScheduler: Function1<
  SchedulerLike,
  PrioritySchedulerLike
> = createQueueScheduler;

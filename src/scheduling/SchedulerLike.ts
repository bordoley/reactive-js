import { MAX_SAFE_INTEGER } from "../__internal__/__internal__env";
import { getDelay } from "../__internal__/__internal__optionParsing";
import {
  QueueLike,
  createPriorityQueue,
} from "../__internal__/scheduling/__internal__queue";
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
  Mutable,
  createInstanceFactory,
  include,
  init,
  mixin,
  props,
} from "../__internal__/util/__internal__Objects";
import {
  Function1,
  Function2,
  Option,
  SideEffect,
  compose,
  isFunction,
  isNone,
  isSome,
  max,
  newInstance,
  none,
  pipe,
  raise,
  unsafeCast,
} from "../functions";
import { EnumeratorLike, EnumeratorLike_current, SourceLike_move } from "../ix";
import { getCurrent, hasCurrent, move } from "../ix/EnumeratorLike";
import {
  PauseableSchedulerLike,
  PrioritySchedulerLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  VirtualTimeSchedulerLike,
} from "../scheduling";
import {
  ContinuationLike,
  ContinuationLike_run,
  DisposableLike,
  Exception,
  PauseableLike,
  PauseableLike_pause,
  PauseableLike_resume,
} from "../util";
import { run } from "../util/ContinuationLike";
import {
  addIgnoringChildErrors,
  addTo,
  create as createDisposable,
  dispose,
  disposed,
  isDisposed,
  onDisposed,
} from "../util/DisposableLike";
import { pause } from "../util/PauseableLike";

export const isInContinuation = (scheduler: {
  readonly [SchedulerLike_inContinuation]: boolean;
}): boolean => scheduler[SchedulerLike_inContinuation];

export const getCurrentTime = (scheduler: {
  readonly [SchedulerLike_now]: number;
}): number => scheduler[SchedulerLike_now];

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
  type TProperties = {
    readonly scheduler: SchedulerLike;
    readonly f: SideEffect;
  };

  return createInstanceFactory(
    mixin(
      include(disposableMixin),
      function Continuation(
        instance: Pick<ContinuationLike, typeof ContinuationLike_run> &
          Mutable<TProperties>,
        scheduler: SchedulerLike,
        f: SideEffect,
      ): ContinuationLike {
        init(disposableMixin, instance);

        instance.scheduler = scheduler;
        instance.f = f;

        return instance;
      },
      props<TProperties>({
        scheduler: none,
        f: none,
      }),
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
    const continuation = isFunction(f) ? createContinuation(scheduler, f) : f;
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

    const peek = (instance: TProperties): Option<QueueTask> => {
      const { delayed, queue } = instance;
      const now = getCurrentTime(instance.host);

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
      instance: TProperties & EnumeratorLike<QueueTask>,
      next: QueueTask,
    ): boolean => {
      const { [EnumeratorLike_current]: current } = instance;

      return (
        current !== next &&
        next.dueTime <= getCurrentTime(instance.host) &&
        next.priority > current.priority
      );
    };

    const scheduleOnHost = (
      instance: TProperties & DisposableRefLike & EnumeratorLike,
    ) => {
      const task = peek(instance);

      const continuationActive =
        !isDisposed(instance[MutableRefLike_current]) &&
        isSome(task) &&
        instance.dueTime <= task.dueTime;

      if (isNone(task) || continuationActive || instance.isPaused) {
        return;
      }

      const dueTime = task.dueTime;
      const delay = max(dueTime - getCurrentTime(instance.host), 0);
      instance.dueTime = dueTime;

      const continuation =
        instance.hostContinuation ??
        (() => {
          for (
            let task = peek(instance);
            isSome(task) && !isDisposed(instance);
            task = peek(instance)
          ) {
            const { continuation, dueTime } = task;
            const delay = max(dueTime - getCurrentTime(instance.host), 0);

            if (delay === 0) {
              move(instance);
              instance[SchedulerLike_inContinuation] = true;
              run(continuation);
              instance[SchedulerLike_inContinuation] = false;
            } else {
              instance.dueTime = getCurrentTime(instance.host) + delay;
            }
            __yield({ delay });
          }
        });
      instance.hostContinuation = continuation;

      instance[MutableRefLike_current] = pipe(
        instance.host,
        schedule(continuation, { delay }),
      );
    };

    const typedDisposableRefMixin = disposableRefMixin();
    const typedEnumeratorMixin = enumeratorMixin<QueueTask>();

    type TProperties = {
      [SchedulerLike_inContinuation]: boolean;
      readonly delayed: QueueLike<QueueTask>;
      dueTime: number;
      readonly host: SchedulerLike;
      hostContinuation: Option<SideEffect>;
      isPaused: boolean;
      readonly queue: QueueLike<QueueTask>;
      taskIDCounter: number;
      yieldRequested: boolean;
    };

    return createInstanceFactory(
      mixin(
        include(disposableMixin, typedEnumeratorMixin, typedDisposableRefMixin),
        function QueueScheduler(
          instance: Pick<
            QueueSchedulerLike,
            | typeof SchedulerLike_now
            | typeof SchedulerLike_shouldYield
            | typeof SchedulerLike_requestYield
            | typeof PauseableLike_pause
            | typeof PauseableLike_resume
            | typeof SchedulerLike_schedule
          > &
            Mutable<TProperties>,
          host: SchedulerLike,
        ): QueueSchedulerLike {
          init(disposableMixin, instance);
          init(typedEnumeratorMixin, instance);
          init(typedDisposableRefMixin, instance, disposed);

          instance.delayed = createPriorityQueue(delayedComparator);
          instance.queue = createPriorityQueue(taskComparator);
          instance.host = host;

          return instance;
        },
        props<TProperties>({
          [SchedulerLike_inContinuation]: false,
          delayed: none,
          dueTime: 0,
          host: none,
          hostContinuation: none,
          isPaused: false,
          queue: none,
          taskIDCounter: 0,
          yieldRequested: false,
        }),
        {
          get [SchedulerLike_now](): number {
            unsafeCast<TProperties>(this);
            return getCurrentTime(this.host);
          },
          get [SchedulerLike_shouldYield](): boolean {
            unsafeCast<TProperties & EnumeratorLike<QueueTask>>(this);

            const {
              [SchedulerLike_inContinuation]: inContinuation,
              yieldRequested,
            } = this;

            if (inContinuation) {
              this.yieldRequested = false;
            }

            const next = peek(this);

            return (
              inContinuation &&
              (yieldRequested ||
                isDisposed(this) ||
                !hasCurrent(this) ||
                this.isPaused ||
                (isSome(next) ? priorityShouldYield(this, next) : false) ||
                shouldYield(this.host))
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

declare const navigator: {
  scheduling: Option<{
    isInputPending(): boolean;
  }>;
};
export const createHostScheduler = /*@__PURE__*/ (() => {
  const supportsPerformanceNow =
    typeof performance === "object" && isFunction(performance.now);

  const supportsSetImmediate = typeof setImmediate === "function";

  const supportsProcessHRTime =
    typeof process === "object" && isFunction(process.hrtime);

  const supportsIsInputPending =
    typeof navigator === "object" &&
    navigator.scheduling !== undefined &&
    navigator.scheduling.isInputPending !== undefined;

  const isInputPending = (): boolean =>
    supportsIsInputPending && (navigator.scheduling?.isInputPending() ?? false);

  const scheduleImmediateWithSetImmediate = (
    scheduler: TProperties & SchedulerLike,
    continuation: ContinuationLike,
  ) => {
    const disposable = pipe(
      createDisposable(),
      addTo(continuation),
      onDisposed(() => clearImmediate(immmediate)),
    );
    const immmediate: ReturnType<typeof setImmediate> = setImmediate(
      runContinuation,
      scheduler,
      continuation,
      disposable,
    );
  };

  const scheduleDelayed = (
    scheduler: TProperties & SchedulerLike,
    continuation: ContinuationLike,
    delay: number,
  ) => {
    const disposable = pipe(
      createDisposable(),
      addTo(continuation),
      onDisposed(_ => clearTimeout(timeout)),
    );

    const timeout: ReturnType<typeof setTimeout> = setTimeout(
      runContinuation,
      delay,
      scheduler,
      continuation,
      disposable,
    );
  };

  const scheduleImmediate = (
    scheduler: TProperties & SchedulerLike,
    continuation: ContinuationLike,
  ) => {
    if (supportsSetImmediate) {
      scheduleImmediateWithSetImmediate(scheduler, continuation);
    } else {
      scheduleDelayed(scheduler, continuation, 0);
    }
  };

  const runContinuation = (
    scheduler: TProperties & { [SchedulerLike_now]: number },
    continuation: ContinuationLike,
    immmediateOrTimerDisposable: DisposableLike,
  ) => {
    // clear the immediateOrTimer disposable
    pipe(immmediateOrTimerDisposable, dispose());
    scheduler.startTime = getCurrentTime(scheduler);
    scheduler[SchedulerLike_inContinuation] = true;
    run(continuation);
    scheduler[SchedulerLike_inContinuation] = false;
  };

  type TProperties = {
    [SchedulerLike_inContinuation]: boolean;
    startTime: number;
    readonly yieldInterval: number;
    yieldRequested: boolean;
  };

  const createHostSchedulerInstance = createInstanceFactory(
    mixin(
      include(disposableMixin),
      function HostScheduler(
        instance: Pick<
          SchedulerLike,
          | typeof SchedulerLike_now
          | typeof SchedulerLike_shouldYield
          | typeof SchedulerLike_requestYield
          | typeof SchedulerLike_schedule
        > &
          Mutable<TProperties>,
        yieldInterval: number,
      ): SchedulerLike {
        init(disposableMixin, instance);

        instance.yieldInterval = yieldInterval;

        return instance;
      },
      props<TProperties>({
        [SchedulerLike_inContinuation]: false,
        startTime: 0,
        yieldInterval: 0,
        yieldRequested: false,
      }),
      {
        get [SchedulerLike_now](): number {
          if (supportsPerformanceNow) {
            return performance.now();
          } else if (supportsProcessHRTime) {
            const hr = process.hrtime();
            return hr[0] * 1000 + hr[1] / 1e6;
          } else {
            return Date.now();
          }
        },

        get [SchedulerLike_shouldYield](): boolean {
          unsafeCast<TProperties & SchedulerLike>(this);

          const inContinuation = isInContinuation(this);
          const { yieldRequested } = this;

          if (inContinuation) {
            this.yieldRequested = false;
          }

          return (
            inContinuation &&
            (yieldRequested ||
              getCurrentTime(this) > this.startTime + this.yieldInterval ||
              isInputPending())
          );
        },

        [SchedulerLike_requestYield](this: TProperties): void {
          this.yieldRequested = true;
        },

        [SchedulerLike_schedule](
          this: TProperties & SchedulerLike,
          continuation: ContinuationLike,
          options?: { readonly delay?: number },
        ) {
          const delay = getDelay(options);

          pipe(this, addIgnoringChildErrors(continuation));

          const continuationIsDisposed = isDisposed(continuation);
          if (!continuationIsDisposed && delay > 0) {
            scheduleDelayed(this, continuation, delay);
          } else if (!continuationIsDisposed) {
            scheduleImmediate(this, continuation);
          }
        },
      },
    ),
  );

  return (
    options: {
      readonly yieldInterval?: number;
    } = {},
  ): SchedulerLike => {
    const { yieldInterval = 5 } = options;
    return createHostSchedulerInstance(yieldInterval);
  };
})();

export const createVirtualTimeScheduler = /*@__PURE__*/ (() => {
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

  const typedEnumeratorMixin = enumeratorMixin<VirtualTask>();

  type TProperties = {
    [SchedulerLike_inContinuation]: boolean;
    [SchedulerLike_now]: number;
    readonly maxMicroTaskTicks: number;
    microTaskTicks: number;
    taskIDCount: number;
    yieldRequested: boolean;
    readonly taskQueue: QueueLike<VirtualTask>;
  };

  const createVirtualTimeSchedulerInstance = createInstanceFactory(
    mixin(
      include(disposableMixin, typedEnumeratorMixin),
      function VirtualTimeScheduler(
        instance: Pick<
          VirtualTimeSchedulerLike,
          | typeof ContinuationLike_run
          | typeof SchedulerLike_shouldYield
          | typeof SchedulerLike_requestYield
          | typeof SchedulerLike_schedule
        > &
          Mutable<TProperties>,
        maxMicroTaskTicks: number,
      ): VirtualTimeSchedulerLike {
        init(disposableMixin, instance);

        instance.maxMicroTaskTicks = maxMicroTaskTicks;
        instance.taskQueue = createPriorityQueue(comparator);

        return instance;
      },
      props<TProperties>({
        [SchedulerLike_inContinuation]: false,
        [SchedulerLike_now]: 0,
        maxMicroTaskTicks: MAX_SAFE_INTEGER,
        microTaskTicks: 0,
        taskIDCount: 0,
        yieldRequested: false,
        taskQueue: none,
      }),
      {
        get [SchedulerLike_shouldYield]() {
          unsafeCast<TProperties>(this);

          const {
            yieldRequested,
            [SchedulerLike_inContinuation]: inContinuation,
          } = this;

          if (inContinuation) {
            this.microTaskTicks++;
            this.yieldRequested = false;
          }

          return (
            inContinuation &&
            (yieldRequested || this.microTaskTicks >= this.maxMicroTaskTicks)
          );
        },
        [ContinuationLike_run](
          this: TProperties & EnumeratorLike<VirtualTask>,
        ) {
          while (move(this)) {
            const task = getCurrent(this);
            const { dueTime, continuation } = task;

            this.microTaskTicks = 0;
            this[SchedulerLike_now] = dueTime;
            this[SchedulerLike_inContinuation] = true;
            run(continuation);
            this[SchedulerLike_inContinuation] = false;
          }
        },
        [SchedulerLike_requestYield](this: TProperties): void {
          this.yieldRequested = true;
        },
        [SchedulerLike_schedule](
          this: TProperties & DisposableLike,
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
        },
        [SourceLike_move](
          this: TProperties & MutableEnumeratorLike<VirtualTask>,
        ): void {
          const taskQueue = this.taskQueue;

          if (isDisposed(this)) {
            return;
          }

          const task = taskQueue.pop();

          if (isSome(task)) {
            this[EnumeratorLike_current] = task;
          } else {
            pipe(this, dispose());
          }
        },
      },
    ),
  );

  return (
    options: { readonly maxMicroTaskTicks?: number } = {},
  ): VirtualTimeSchedulerLike => {
    const { maxMicroTaskTicks = MAX_SAFE_INTEGER } = options;
    return createVirtualTimeSchedulerInstance(maxMicroTaskTicks);
  };
})();

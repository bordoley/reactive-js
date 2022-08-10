import { MAX_SAFE_INTEGER } from "./__internal__/__internal__env";
import { getDelay } from "./__internal__/__internal__optionParsing";
import {
  SchedulerLike_inContinuation as SchedulerLike_inContinuation_internal,
  SchedulerLike_now as SchedulerLike_now_internal,
  getCurrentTime,
  isInContinuation,
} from "./__internal__/__internal__scheduling";
import {
  QueueLike,
  createPriorityQueue,
} from "./__internal__/scheduling/__internal__queue";
import {
  addIgnoringChildErrors,
  addTo,
  dispose,
  isDisposed,
  onDisposed,
} from "./__internal__/util/__internal__DisposableLike";
import { disposableMixin } from "./__internal__/util/__internal__Disposables";
import {
  MutableEnumeratorLike,
  enumeratorMixin,
} from "./__internal__/util/__internal__Enumerators";
import {
  __extends,
  clazz,
  createInstanceFactory,
  init,
} from "./__internal__/util/__internal__Objects";
import { Option, isSome, none, pipe, unsafeCast } from "./functions";
import {
  ContinuationLike,
  ContinuationLike_run,
  DisposableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  PauseableLike,
  SinkLike,
  SourceLike_move,
  createDisposable,
} from "./util";
import { run } from "./util/ContinuationLike";
import { getCurrent, move } from "./util/EnumeratorLike";

/** @ignore */
export const SchedulerLike_inContinuation: typeof SchedulerLike_inContinuation_internal =
  SchedulerLike_inContinuation_internal;

/** @ignore */
export const SchedulerLike_now: typeof SchedulerLike_now_internal =
  SchedulerLike_now_internal;

/** @ignore */
export const SchedulerLike_requestYield = Symbol("SchedulerLike_requestYield");

/** @ignore */
export const SchedulerLike_shouldYield = Symbol("SchedulerLike_shouldYield");

/** @ignore */
export const SchedulerLike_schedule = Symbol("SchedulerLike_schedule");

export type SchedulerOptions = { readonly delay?: number };

export interface SchedulerLike extends DisposableLike {
  readonly [SchedulerLike_inContinuation]: boolean;
  readonly [SchedulerLike_now]: number;
  readonly [SchedulerLike_shouldYield]: boolean;

  /**
   * Request the scheduler to yield.
   */
  [SchedulerLike_requestYield](): void;

  [SchedulerLike_schedule](
    continuation: ContinuationLike,
    options?: SchedulerOptions,
  ): void;
}

/** @ignore */
export const DispatcherLike_dispatch = Symbol("DispatcherLike_dispatch");

/** @ignore */
export const DispatcherLike_scheduler = Symbol("DispatcherLike_scheduler");

export interface DispatcherLike<T = unknown> extends DisposableLike {
  /**
   * Dispatches the next request
   * @param req
   */
  [DispatcherLike_dispatch](req: T): void;

  readonly [DispatcherLike_scheduler]: SchedulerLike;
}

export interface PauseableSchedulerLike extends PauseableLike, SchedulerLike {}

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

export interface VirtualTimeSchedulerLike
  extends SchedulerLike,
    ContinuationLike {}

declare const navigator: {
  scheduling: Option<{
    isInputPending(): boolean;
  }>;
};
export const createHostScheduler = /*@__PURE__*/ (() => {
  const supportsPerformanceNow =
    typeof performance === "object" && typeof performance.now === "function";

  const supportsSetImmediate = typeof setImmediate === "function";

  const supportsProcessHRTime =
    typeof process === "object" && typeof process.hrtime === "function";

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
    yieldInterval: number;
    yieldRequested: boolean;
  };

  const createHostSchedulerInstance = createInstanceFactory(
    clazz(
      __extends(disposableMixin),
      function HostScheduler(
        instance: Pick<
          SchedulerLike,
          | typeof SchedulerLike_now
          | typeof SchedulerLike_shouldYield
          | typeof SchedulerLike_requestYield
          | typeof SchedulerLike_schedule
        >,
        yieldInterval: number,
      ): SchedulerLike {
        init(disposableMixin, instance);
        unsafeCast<TProperties>(instance);

        instance.yieldInterval = yieldInterval;

        return instance;
      },
      {
        [SchedulerLike_inContinuation]: false,
        startTime: 0,
        yieldInterval: 0,
        yieldRequested: false,
      },
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
    maxMicroTaskTicks: number;
    microTaskTicks: number;
    taskIDCount: number;
    yieldRequested: boolean;
    taskQueue: QueueLike<VirtualTask>;
  };

  const createVirtualTimeSchedulerInstance = createInstanceFactory(
    clazz(
      __extends(disposableMixin, typedEnumeratorMixin),
      function VirtualTimeScheduler(
        instance: Pick<
          VirtualTimeSchedulerLike,
          | typeof ContinuationLike_run
          | typeof SchedulerLike_shouldYield
          | typeof SchedulerLike_requestYield
          | typeof SchedulerLike_schedule
        >,
        maxMicroTaskTicks: number,
      ): VirtualTimeSchedulerLike {
        init(disposableMixin, instance);
        unsafeCast<TProperties>(instance);

        instance.maxMicroTaskTicks = maxMicroTaskTicks;
        instance.taskQueue = createPriorityQueue(comparator);

        return instance;
      },
      {
        [SchedulerLike_inContinuation]: false,
        [SchedulerLike_now]: 0,
        maxMicroTaskTicks: MAX_SAFE_INTEGER,
        microTaskTicks: 0,
        taskIDCount: 0,
        yieldRequested: false,
        taskQueue: none,
      },
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

/** @ignore */
export const ObserverLike_dispatcher = Symbol("ObserverLike_dispatcher");

/** @ignore */
export const ObserverLike_scheduler = Symbol("ObserverLike_scheduler");

export interface ObserverLike<T = unknown> extends SinkLike<T> {
  readonly [ObserverLike_dispatcher]: DispatcherLike<T>;
  readonly [ObserverLike_scheduler]: SchedulerLike;
}

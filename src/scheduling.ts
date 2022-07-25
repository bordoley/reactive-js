import { MAX_SAFE_INTEGER } from "./__internal__/env";
import {
  MutableEnumeratorLike,
  properties as enumeratorProperties,
  prototype as enumeratorPrototype,
} from "./__internal__/ix/Enumerator";
import { getDelay } from "./__internal__/optionalArgs";
import {
  QueueLike,
  createPriorityQueue,
} from "./__internal__/scheduling/queue";
import {
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  getCurrentTime,
  isInContinuation,
} from "./__internal__/schedulingInternal";
import {
  properties as disposableProperties,
  prototype as disposablePrototype,
} from "./__internal__/util/Disposable";
import {
  Object_init,
  createObjectFactory,
  init,
} from "./__internal__/util/Object";
import { Function1, isSome, none, pipe } from "./functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  InteractiveSourceLike_move,
} from "./ix";
import { getCurrent } from "./ix/EnumeratorLike";
import { move } from "./ix/InteractiveSourceLike";
import {
  ContinuationLike,
  ContinuationLike_run,
  DisposableLike,
  PauseableLike,
} from "./util";
import { run } from "./util/ContinuationLike";
import {
  addIgnoringChildErrors,
  addTo,
  create as createDisposable,
  dispose,
  isDisposed,
  onDisposed,
} from "./util/DisposableLike";

export {
  SchedulerLike_inContinuation,
  SchedulerLike_now,
} from "./__internal__/schedulingInternal";

export const SchedulerLike_requestYield = Symbol("SchedulerLike_requestYield");
export const SchedulerLike_shouldYield = Symbol("SchedulerLike_shouldYield");
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

export const DispatcherLike_dispatch = Symbol("DispatcherLike_dispatch");
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

export const createHostScheduler = /*@__PURE__*/ (() => {
  const supportsPerformanceNow = /*@__PURE__*/ (() =>
    typeof performance === "object" && typeof performance.now === "function")();

  const supportsSetImmediate = /*@__PURE__*/ (() =>
    typeof setImmediate === "function")();

  const supportsProcessHRTime = /*@__PURE__*/ (() =>
    typeof process === "object" && typeof process.hrtime === "function")();

  const supportsIsInputPending = /*@__PURE__*/ (() =>
    typeof navigator === "object" &&
    (navigator as any).scheduling !== undefined &&
    (navigator as any).scheduling.isInputPending !== undefined)();

  const isInputPending = (): boolean =>
    supportsIsInputPending && (navigator as any).scheduling.isInputPending();

  const scheduleImmediateWithSetImmediate = (
    scheduler: typeof properties & SchedulerLike,
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
    scheduler: typeof properties & SchedulerLike,
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
    scheduler: typeof properties & SchedulerLike,
    continuation: ContinuationLike,
  ) => {
    if (supportsSetImmediate) {
      scheduleImmediateWithSetImmediate(scheduler, continuation);
    } else {
      scheduleDelayed(scheduler, continuation, 0);
    }
  };

  const runContinuation = (
    scheduler: typeof properties & SchedulerLike,
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

  const properties = {
    ...disposableProperties,
    [SchedulerLike_inContinuation]: false,
    startTime: 0,
    yieldInterval: 0,
    yieldRequested: false,
  };

  const prototype = {
    ...disposablePrototype,
    [Object_init](this: typeof properties, yieldInterval: number) {
      init(disposablePrototype, this);
      this.yieldInterval = yieldInterval;
    },

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
      const self = this as unknown as typeof properties & SchedulerLike;

      const inContinuation = isInContinuation(self);
      const { yieldRequested } = self;

      if (inContinuation) {
        self.yieldRequested = false;
      }

      return (
        inContinuation &&
        (yieldRequested ||
          getCurrentTime(self) > self.startTime + self.yieldInterval ||
          isInputPending())
      );
    },

    [SchedulerLike_requestYield](this: typeof properties): void {
      this.yieldRequested = true;
    },

    [SchedulerLike_schedule](
      this: typeof properties & SchedulerLike,
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
  };

  const createInstance = /*@__PURE__*/ createObjectFactory<
    typeof prototype,
    typeof properties,
    number
  >(prototype, properties);

  return (
    options: {
      readonly yieldInterval?: number;
    } = {},
  ): SchedulerLike => {
    const { yieldInterval = 5 } = options;
    return createInstance(yieldInterval);
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

  const properties = {
    ...disposableProperties,
    ...enumeratorProperties,
    [SchedulerLike_inContinuation]: false,
    [SchedulerLike_now]: 0 as number,
    maxMicroTaskTicks: MAX_SAFE_INTEGER,
    microTaskTicks: 0,
    taskIDCount: 0,
    yieldRequested: false,
    taskQueue: none as unknown as QueueLike<VirtualTask>,
  };

  const prototype = {
    ...disposablePrototype,
    ...enumeratorPrototype,
    [ContinuationLike_run](
      this: typeof properties & EnumeratorLike<VirtualTask>,
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
    [InteractiveSourceLike_move](
      this: typeof properties & MutableEnumeratorLike<VirtualTask>,
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
    [Object_init](this: typeof properties, maxMicroTaskTicks: number) {
      init(disposablePrototype, this);
      this.maxMicroTaskTicks = maxMicroTaskTicks;
      this.taskQueue = createPriorityQueue(comparator);
    },
    get [SchedulerLike_shouldYield]() {
      const self = this as unknown as typeof properties;

      const { yieldRequested, [SchedulerLike_inContinuation]: inContinuation } =
        self;

      if (inContinuation) {
        self.microTaskTicks++;
        self.yieldRequested = false;
      }

      return (
        inContinuation &&
        (yieldRequested || self.microTaskTicks >= self.maxMicroTaskTicks)
      );
    },
    [SchedulerLike_requestYield](this: typeof properties): void {
      this.yieldRequested = true;
    },
    [SchedulerLike_schedule](
      this: typeof properties & DisposableLike,
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
  };

  const createInstance: Function1<number, VirtualTimeSchedulerLike> =
    /*@__PURE__*/ createObjectFactory<
      typeof prototype,
      typeof properties,
      number
    >(prototype, properties);

  (
    options: { readonly maxMicroTaskTicks?: number } = {},
  ): VirtualTimeSchedulerLike => {
    const { maxMicroTaskTicks = MAX_SAFE_INTEGER } = options;
    return createInstance(maxMicroTaskTicks);
  };
})();

import { Error, Symbol as GlobalSymbol } from "./__internal__/constants.js";
import type { StoreLike } from "./computations.js";
import { Method1, Optional, SideEffect1, isNone } from "./functions.js";

export const DisposableContainerLike_add = Symbol(
  "DisposableContainerLike_add",
);

export interface DisposableContainerLike {
  /**
   * Adds the given `DisposableLike` or teardown function to this container or disposes it if the container has been disposed.
   *
   * @param disposable - The disposable to add.
   */
  [DisposableContainerLike_add](disposable: Disposable): void;

  /**
   * Adds the given teardown function to this container or disposes it if the container has been disposed.
   *
   * @param teardown - The teardown function to add.
   */
  [DisposableContainerLike_add](teardown: SideEffect1<Optional<Error>>): void;

  /**
   * Adds the given teardown function to this container or disposes it if the container has been disposed.
   *
   * @param teardown - The teardown function to add.
   */
  [DisposableContainerLike_add](
    teardown: Method1<DisposableLike, Optional<Error>>,
  ): void;
}

export const DisposableLike_dispose: typeof Symbol.dispose =
  /*@__PURE__*/ ((): typeof Symbol.dispose => {
    if (isNone(GlobalSymbol.dispose)) {
      (GlobalSymbol as any).dispose = Symbol("dispose");
    }
    return GlobalSymbol.dispose;
  })();

export const DisposableLike_error = Symbol("DisposableLike_error");
export const DisposableLike_isDisposed = Symbol("DisposableLike_isDisposed");

/**
 * @noInheritDoc
 */
export interface DisposableLike extends DisposableContainerLike, Disposable {
  /**
   * The error the `Disposable` was disposed with if disposed.
   */
  readonly [DisposableLike_error]: Optional<Error>;

  /**
   * `true` if this resource has been disposed, otherwise false
   */
  readonly [DisposableLike_isDisposed]: boolean;

  /**
   * Dispose the resource.
   *
   * @param error - An optional error that signals the resource is being disposed due to an error.
   */
  [DisposableLike_dispose](error?: Error): void;
}

export const SerialDisposableLike_current = Symbol(
  "SerialDisposableLike_current",
);

/**
 * @noInheritDoc
 */
export interface SerialDisposableLike<
  TDisposable extends DisposableLike = DisposableLike,
> extends DisposableLike {
  get [SerialDisposableLike_current](): TDisposable;
  set [SerialDisposableLike_current](v: TDisposable);
}

export const EventListenerLike_notify = Symbol("EventListenerLike_notify");

/**
 * @noInheritDoc
 */
export interface EventListenerLike<T = unknown> extends DisposableLike {
  /**
   * Notifies the EventListener of the next notification produced by the source.
   *
   * @param next - The next notification value.
   */
  [EventListenerLike_notify](event: T): void;
}

export const SinkLike_complete = Symbol("SinkLike_complete");
export const SinkLike_isCompleted = Symbol("SinkLike_isCompleted");

/**
 * @noInheritDoc
 */
export interface SinkLike<T = unknown> extends EventListenerLike<T> {
  readonly [SinkLike_isCompleted]: boolean;

  [SinkLike_complete](): void;
}

export const DropLatestBackpressureStrategy = "drop-latest";
export const DropOldestBackpressureStrategy = "drop-oldest";
export const OverflowBackpressureStrategy = "overflow";
export const ThrowBackpressureStrategy = "throw";

export type BackpressureStrategy =
  | typeof DropLatestBackpressureStrategy
  | typeof DropOldestBackpressureStrategy
  | typeof OverflowBackpressureStrategy
  | typeof ThrowBackpressureStrategy;

export const ConsumerLike_backpressureStrategy = Symbol(
  "ConsumerLike_backpressureStrategy",
);
export const ConsumerLike_capacity = Symbol("ConsumerLike_capacity");
export const ConsumerLike_isReady = Symbol("ConsumerLike_isReady");
export const ConsumerLike_addOnReadyListener = Symbol(
  "ConsumerLike_addOnReadyListener",
);

/**
 * A `ConsumerLike` type that consumes enqueued events to
 * be consumed.
 *
 * @noInheritDoc
 */
export interface ConsumerLike<T = unknown> extends SinkLike<T> {
  readonly [ConsumerLike_isReady]: boolean;

  /**
   * The back pressure strategy utilized by the queue when it is at capacity.
   */
  readonly [ConsumerLike_backpressureStrategy]: BackpressureStrategy;

  /**
   * The number of items the queue is capable of efficiently buffering.
   */
  readonly [ConsumerLike_capacity]: number;

  [ConsumerLike_addOnReadyListener](
    callback: SideEffect1<void>,
  ): DisposableLike;
}

export const QueueLike_head = Symbol("QueueLike_head");
export const QueueLike_dequeue = Symbol("QueueLike_dequeue");
export const QueueLike_count = Symbol("QueueLike_count");

/**
 * @noInheritDoc
 */
export interface QueueLike<T = unknown> extends ConsumerLike<T>, Iterable<T> {
  readonly [QueueLike_count]: number;

  readonly [QueueLike_head]: Optional<T>;

  [QueueLike_dequeue](): Optional<T>;
}

/**
 * @noInheritDoc
 */
export class BackPressureError extends Error {
  readonly [ConsumerLike_capacity]: number;
  readonly [ConsumerLike_backpressureStrategy]: BackpressureStrategy;

  constructor(capacity: number, backpressureStrategy: BackpressureStrategy) {
    super();
    this[ConsumerLike_capacity] = capacity;
    this[ConsumerLike_backpressureStrategy] = backpressureStrategy;
  }
}

export const SchedulerLike_inContinuation = Symbol(
  "SchedulerLike_inContinuation",
);
export const SchedulerLike_maxYieldInterval = Symbol(
  "SchedulerLike_maxYieldInterval",
);
export const SchedulerLike_now = Symbol("SchedulerLike_now");
export const SchedulerLike_requestYield = Symbol("SchedulerLike_requestYield");
export const SchedulerLike_schedule = Symbol("SchedulerLike_schedule");
export const SchedulerLike_shouldYield = Symbol("SchedulerLike_shouldYield");

export const ContinuationContextLike_yield = Symbol(
  "ContinuationContextLike_yield",
);

export interface ContinuationContextLike {
  [ContinuationContextLike_yield](delay?: number): void;
}

/**
 * Schedulers are the core unit of concurrency, orchestration and
 * cooperative multi-tasking.
 *
 * @noInheritDoc
 */
export interface SchedulerLike extends DisposableContainerLike {
  /**
   * Boolean flag indicating the scheduler is currently
   * running a continuation.
   */
  readonly [SchedulerLike_inContinuation]: boolean;

  /**
   * The max number of milliseconds the scheduler will run
   * before yielding control back to the underlying system scheduler.
   */
  readonly [SchedulerLike_maxYieldInterval]: number;

  /**
   * The current time in milliseconds.
   */
  readonly [SchedulerLike_now]: number;

  /**
   * Boolean flag indicating whether a running continuation
   * should yield control back to the scheduler.
   */
  readonly [SchedulerLike_shouldYield]: boolean;

  /**
   * Request the scheduler to yield the current continuation.
   */
  [SchedulerLike_requestYield](): void;

  /**
   * Schedule a continuation on the Scheduler.
   * @param continuation - The continuation to run on the scheduler.
   * @param options
   */
  [SchedulerLike_schedule](
    continuation: SideEffect1<ContinuationContextLike>,
    options?: {
      /**
       * The amount of time in ms to delay execution of the continuation.
       */
      readonly delay?: number;
    },
  ): DisposableLike;
}

export const VirtualTimeSchedulerLike_run = Symbol(
  "VirtualTimeSchedulerLike_run",
);

/**
 * A non-concurrent scheduler that simulates time but executes synchronously.
 *
 * @noInheritDoc
 */
export interface VirtualTimeSchedulerLike
  extends SchedulerLike,
    DisposableLike {
  /**
   * Runs the scheduler synchronously until it has no more
   * enqueued continuations, at which time the scheduler will auto dispose.
   */
  [VirtualTimeSchedulerLike_run](): void;
}

export const PauseableLike_isPaused = Symbol("PauseableLike_isPaused");
export const PauseableLike_pause = Symbol("PauseableLike_pause");
export const PauseableLike_resume = Symbol("PauseableLike_resume");

/**
 * @noInheritDoc
 */
export interface PauseableLike extends DisposableContainerLike {
  /**
   * Boolean flag indicating if the PauseableLike is currently paused or not.
   */
  readonly [PauseableLike_isPaused]: StoreLike<boolean>;

  /**
   * Imperatively pause the source.
   */
  [PauseableLike_pause](): void;

  /**
   * Imperatively resume the source.
   */
  [PauseableLike_resume](): void;
}

/**
 * A `SchedulerLike` that supports imperative pausing and resuming
 * of it's run loop.
 *
 * @noInheritDoc
 */
export interface PauseableSchedulerLike extends SchedulerLike, PauseableLike {}

/**
 * A consumer of push-based notifications.
 *
 * @noInheritDoc
 */
export interface ObserverLike<T = unknown>
  extends ConsumerLike<T>,
    SchedulerLike {}

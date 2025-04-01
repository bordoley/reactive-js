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
  [DisposableContainerLike_add](disposable: DisposableLike): void;

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

export type BackpressureStrategy =
  | "drop-latest"
  | "drop-oldest"
  | "overflow"
  | "throw";

export const DropLatestBackpressureStrategy: BackpressureStrategy =
  "drop-latest";
export const DropOldestBackpressureStrategy: BackpressureStrategy =
  "drop-oldest";
export const OverflowBackpressureStrategy: BackpressureStrategy = "overflow";
export const ThrowBackpressureStrategy: BackpressureStrategy = "throw";

export const BackPressureConfig_strategy = Symbol(
  "BackPressureConfig_strategy",
);
export const BackPressureConfig_capacity = Symbol(
  "BackPressureConfig_capacity",
);

export type BackPressureConfig = {
  /**
   * The back pressure strategy utilized by the queue when it is at capacity.
   */
  readonly [BackPressureConfig_strategy]: BackpressureStrategy;

  /**
   * The number of items the queue is capable of efficiently buffering.
   */
  readonly [BackPressureConfig_capacity]: number;
};

export const FlowControllerLike_isReady = Symbol("FlowControllerLike_isReady");
export const FlowControllerLike_addOnReadyListener = Symbol(
  "FlowControllerLike_addOnReadyListener",
);

export interface FlowControllerLike extends DisposableLike {
  readonly [FlowControllerLike_isReady]: boolean;

  [FlowControllerLike_addOnReadyListener](
    callback: SideEffect1<void>,
  ): DisposableLike;
}

/**
 * @noInheritDoc
 */
export class BackPressureError extends Error implements BackPressureConfig {
  readonly [BackPressureConfig_capacity]: number;
  readonly [BackPressureConfig_strategy]: BackpressureStrategy;

  constructor(consumer: BackPressureConfig) {
    super();
    this[BackPressureConfig_capacity] = consumer[BackPressureConfig_capacity];
    this[BackPressureConfig_strategy] = consumer[BackPressureConfig_strategy];
  }
}

export const EnumeratorLike_moveNext = Symbol("EnumeratorLike_moveNext");
export const EnumeratorLike_current = Symbol("EnumeratorLike_current");
export const EnumeratorLike_hasCurrent = Symbol("EnumeratorLike_hasCurrent");

export interface EnumeratorLike<T = unknown> extends DisposableLike {
  readonly [EnumeratorLike_current]: T;
  readonly [EnumeratorLike_hasCurrent]: boolean;

  [EnumeratorLike_moveNext](): boolean;
}

export const AsyncEnumeratorLike_moveNext = Symbol(
  "AsyncEnumeratorLike_moveNext",
);
export const AsyncEnumeratorLike_current = Symbol(
  "AsyncEnumeratorLike_current",
);
export const AsyncEnumeratorLike_hasCurrent = Symbol(
  "AsyncEnumeratorLike_hasCurrent",
);
export interface AsyncEnumeratorLike<T = unknown> extends DisposableLike {
  readonly [AsyncEnumeratorLike_current]: T;
  readonly [AsyncEnumeratorLike_hasCurrent]: boolean;

  [AsyncEnumeratorLike_moveNext](): Promise<boolean>;
}

export const CollectionEnumeratorLike_count = Symbol(
  "CollectionEnumeratorLike_count",
);
export const CollectionEnumeratorLike_peek = Symbol(
  "CollectionEnumeratorLike_peek",
);
export interface CollectionEnumeratorLike<T = unknown>
  extends EnumeratorLike<T>,
    Iterable<T> {
  readonly [CollectionEnumeratorLike_count]: number;
  readonly [CollectionEnumeratorLike_peek]: Optional<T>;
}

export const QueueLike_enqueue = Symbol("QueueLike_enqueue");
/**
 * @noInheritDoc
 */
export interface QueueLike<T = unknown>
  extends CollectionEnumeratorLike<T>,
    BackPressureConfig {
  [QueueLike_enqueue](v: T): void;
}

export const FlowControllerEnumeratorLike_addOnDataAvailableListener = Symbol(
  "FlowControllerEnumeratorLike_addOnDataAvailableListener",
);
export const FlowControllerEnumeratorLike_isDataAvailable = Symbol(
  "FlowControllerEnumeratorLike_isDataAvailable",
);

export interface FlowControllerEnumeratorLike<T = unknown>
  extends CollectionEnumeratorLike<T>,
    Iterable<T> {
  readonly [FlowControllerEnumeratorLike_isDataAvailable]: boolean;

  [FlowControllerEnumeratorLike_addOnDataAvailableListener](
    callback: SideEffect1<void>,
  ): DisposableLike;
}

/**
 * @noInheritDoc
 */
export interface FlowControllerQueueLike<T = unknown>
  extends QueueLike<T>,
    FlowControllerEnumeratorLike<T>,
    FlowControllerLike {}

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

export const EventListenerLike_notify = Symbol("EventListenerLike_notify");
export interface EventListenerLike<T = unknown> extends DisposableLike {
  /**
   * Notifies the EventSink of the next notification produced by the source.
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

/**
 * A `ConsumerLike` type that consumes enqueued events to
 * be consumed.
 *
 * @noInheritDoc
 */
export interface ConsumerLike<T = unknown>
  extends SinkLike<T>,
    FlowControllerLike {}

/**
 * A consumer of push-based notifications.
 *
 * @noInheritDoc
 */
export interface ObserverLike<T = unknown>
  extends ConsumerLike<T>,
    SchedulerLike {}

import { IndexedCollectionLike } from "./collections.js";
import { SideEffect1 } from "./functions.js";
import { DispatcherLike, PauseableLike, SinkLike } from "./rx.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "./utils.js";

export const SchedulerLike_yield = Symbol("SchedulerLike_yield");
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

/**
 * Schedulers are the core unit of concurrency, orchestration and
 * cooperative multi-tasking.
 *
 * @noInheritDoc
 */
export interface SchedulerLike {
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
   * Yields control back to the scheduler.
   *
   * If no delay is specified, a scheduler may either allow
   * the continuation to continue to execute, or it will throw
   * an internal exception that must not be caught by the continuation
   * which the scheduler will use to reschedule the continuation for
   * a future time.
   *
   * @param delay - The amount of delay in ms the scheduler
   * should delay before resuming execution of the continuation.
   */
  [SchedulerLike_yield](delay?: number): void;

  /**
   * Schedule a continuation on the Scheduler.
   * @param continuation - The continuation to run on the scheduler.
   * @param options
   */
  [SchedulerLike_schedule](
    continuation: SideEffect1<SchedulerLike>,
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
  extends DispatcherLike<T>,
    SinkLike<T>,
    SchedulerLike {}

export const ObservableLike_isDeferred = Symbol("ObservableLike_isDeferred");
export const ObservableLike_isPure = Symbol("ObservableLike_isPure");
export const ObservableLike_isRunnable = Symbol("ObservableLike_isRunnable");
export const ObservableLike_observe = Symbol("ObservableLike_observe");

export interface ObservableLike<T = unknown> {
  /**
   * Indicates if the `ObservableLike` is deferred, ie. cold.
   */
  readonly [ObservableLike_isDeferred]: boolean;

  /**
   * Indicates if subscribing to the `ObservableLike` is free of side-effects
   */
  readonly [ObservableLike_isPure]: boolean;

  /**
   * Indicates if the `ObservableLike` supports being subscribed to
   * on a VirtualTimeScheduler.
   */
  readonly [ObservableLike_isRunnable]: boolean;

  /**
   * Subscribes the given `ObserverLike` to the `ObservableLike` source.
   *
   * @param observer - The observer.
   */
  [ObservableLike_observe](observer: ObserverLike<T>): void;
}

/**
 * @noInheritDoc
 */
export interface PureObservableLike<T = unknown> extends ObservableLike<T> {
  [ObservableLike_isPure]: true;
}

/**
 * @noInheritDoc
 */
export interface MulticastObservableLike<T = unknown>
  extends PureObservableLike<T> {
  readonly [ObservableLike_isDeferred]: false;
  readonly [ObservableLike_isRunnable]: false;
}

export const ReplayObservableLike_buffer = Symbol(
  "ReplayObservableLike_buffer",
);

/**
 * A stateful ObservableLike resource.
 *
 * @noInheritDoc
 * @category Observable
 */
export interface ReplayObservableLike<T = unknown>
  extends MulticastObservableLike<T> {
  readonly [ReplayObservableLike_buffer]: IndexedCollectionLike<T>;
}

export interface PauseableObservableLike<T = unknown>
  extends MulticastObservableLike<T>,
    PauseableLike {}

export const StreamLike_scheduler = Symbol("StreamLike_scheduler");

/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 * @category Interactive
 */
export interface StreamLike<TReq, T>
  extends DispatcherLike<TReq>,
    ReplayObservableLike<T> {
  readonly [StreamLike_scheduler]: SchedulerLike;
}

export const StreamableLike_TStream = Symbol("StreamableLike_TStream");
export const StreamableLike_stream = Symbol("StreamableLike_stream");

/**
 * A container that supports bi-directional streaming.
 *
 * @typeparam TReq
 * @typeparam T
 * @typeparam TStream
 *
 * @noInheritDoc
 * @category Interactive
 */
export interface StreamableLike<
  TReq = unknown,
  T = unknown,
  TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>,
> {
  readonly [StreamableLike_TStream]?: TStream;

  /**
   * Subscribe to the Streamable.
   *
   * @param scheduler - The scheduler to subscribe to the stream with.
   * @param options
   */
  [StreamableLike_stream](
    scheduler: SchedulerLike,
    options?: {
      /**
       * The number of items to buffer for replay when an observer subscribes
       * to the stream.
       */
      readonly replay?: number;

      /**
       * The capacity of the stream's request queue.
       */
      readonly capacity?: number;

      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ): TStream & DisposableLike;
}

/** @category Interactive */
export type StreamOf<TStreamable extends StreamableLike> = NonNullable<
  TStreamable[typeof StreamableLike_TStream]
>;

/**
 * @noInheritDoc
 * @category Observable
 */
export interface DeferredObservableLike<T = unknown> extends ObservableLike<T> {
  readonly [ObservableLike_isDeferred]: true;
}

/**
 * @noInheritDoc
 * @category Observable
 */
export interface RunnableLike<T = unknown> extends DeferredObservableLike<T> {
  readonly [ObservableLike_isRunnable]: true;
}

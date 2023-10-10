import {
  CollectionLike,
  EnumerableLike,
  IndexedCollectionLike,
} from "./collections.js";
import {
  ErrorSafeEventListenerLike,
  EventSourceLike,
  StoreLike,
} from "./events.js";
import { Optional, SideEffect1 } from "./functions.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SinkLike,
} from "./utils.js";

export const DispatcherLikeEvent_ready = Symbol("DispatcherLikeEvent_ready");
export const DispatcherLikeEvent_capacityExceeded = Symbol(
  "DispatcherLikeEvent_capacityExceeded",
);
export const DispatcherLikeEvent_completed = Symbol(
  "DispatcherLikeEvent_completed",
);

/**
 * @noInheritDoc
 */
export interface DispatcherLikeEventMap {
  [DispatcherLikeEvent_ready]: typeof DispatcherLikeEvent_ready;
  [DispatcherLikeEvent_capacityExceeded]: typeof DispatcherLikeEvent_capacityExceeded;
  [DispatcherLikeEvent_completed]: typeof DispatcherLikeEvent_completed;
}

export const DispatcherLike_complete = Symbol("DispatcherLike_complete");
/**
 * A `QueueableLike` type that consumes enqueued events to
 * be dispatched from any execution constext.
 *
 * @noInheritDoc
 */
export interface DispatcherLike<T = unknown>
  extends QueueableLike<T>,
    EventSourceLike<DispatcherLikeEventMap[keyof DispatcherLikeEventMap]> {
  /**
   * Communicates to the dispatcher that no more events will be enqueued.
   */
  [DispatcherLike_complete](): void;
}

export const PauseableLike_isPaused = Symbol("PauseableLike_isPaused");
export const PauseableLike_pause = Symbol("PauseableLike_pause");
export const PauseableLike_resume = Symbol("PauseableLike_resume");

/**
 * @noInheritDoc
 */
export interface PauseableLike {
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

export const ContinuationLike_activeChild = Symbol(
  "ContinuationLike_activeChild",
);
export const ContinuationLike_scheduler = Symbol("ContinuationLike_scheduler");
export const ContinuationLike_parent = Symbol("ContinuationLike_parent");
export const ContinuationLike_run = Symbol("ContinuationLike_run");

export interface ContinuationLike
  extends DisposableLike,
    QueueableLike<ContinuationLike>,
    CollectionLike<ContinuationLike> {
  readonly [ContinuationLike_activeChild]: Optional<ContinuationLike>;
  readonly [ContinuationLike_scheduler]: ContinuationSchedulerLike;

  [ContinuationLike_parent]: Optional<ContinuationLike>;

  [ContinuationLike_run](): void;
}

export const ContinuationSchedulerLike_schedule = Symbol(
  "ContinuationSchedulerLike_schedule",
);

export interface ContinuationSchedulerLike extends SchedulerLike {
  [ContinuationSchedulerLike_schedule](
    continuation: ContinuationLike,
    options?: { readonly delay?: number },
  ): void;
}

export const SchedulerTaskLike_continuation = Symbol(
  "SchedulerTaskLike_continuation",
);
export const SchedulerTaskLike_dueTime = Symbol("SchedulerTaskLike_dueTime");
export const SchedulerTaskLike_id = Symbol("SchedulerTaskLike_id");

export interface SchedulerTaskLike {
  readonly [SchedulerTaskLike_continuation]: ContinuationLike;
  [SchedulerTaskLike_dueTime]: number;
  [SchedulerTaskLike_id]: number;
}

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

export type Observableish<T> =
  | ObservableLike<T>
  | EnumerableLike<T>
  | EventSourceLike<T>
  | Iterable<T>;

/**
 * @noInheritDoc
 * @category Observable
 */
export interface DeferredObservableLike<T = unknown> extends ObservableLike<T> {
  readonly [ObservableLike_isDeferred]: true;
  readonly [ObservableLike_isPure]: false;
}

/**
 * @noInheritDoc
 * @category Observable
 */
export interface RunnableLike<T = unknown> extends ObservableLike<T> {
  readonly [ObservableLike_isDeferred]: true;
  readonly [ObservableLike_isPure]: true;
  readonly [ObservableLike_isRunnable]: true;
}

/**
 * @noInheritDoc
 * @category Observable
 */
export interface RunnableWithSideEffectsLike<T = unknown>
  extends ObservableLike<T> {
  readonly [ObservableLike_isDeferred]: true;
  readonly [ObservableLike_isPure]: false;
  readonly [ObservableLike_isRunnable]: true;
}

/**
 * @noInheritDoc
 */
export interface MulticastObservableLike<T = unknown>
  extends ObservableLike<T> {
  readonly [ObservableLike_isPure]: true;
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

export const ReplayPublisherLike_observerCount = Symbol(
  "ReplayPublisherLike_observerCount",
);

export interface ReplayPublisherLike<T = unknown>
  extends ReplayObservableLike<T>,
    ErrorSafeEventListenerLike<T> {
  readonly [ReplayPublisherLike_observerCount]: number;
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

import { IndexedLike } from "./collections.js";
import {
  ErrorSafeEventListenerLike,
  EventSourceLike,
  SinkLike,
  StoreLike,
} from "./events.js";
import { SideEffect1 } from "./functions.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
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
    EventSourceLike<DispatcherLikeEventMap[keyof DispatcherLikeEventMap]>,
    DisposableLike {
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
export interface PauseableLike extends DisposableLike {
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

/**
 * @noInheritDoc
 */
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
export interface DeferredObservableLike<T = unknown> extends ObservableLike<T> {
  readonly [ObservableLike_isDeferred]: true;
}

/**
 * @noInheritDoc
 */
export interface RunnableLike<T = unknown> extends DeferredObservableLike<T> {
  readonly [ObservableLike_isRunnable]: true;
}

/**
 * @noInheritDoc
 */
export interface PureObservableLike<T = unknown> extends ObservableLike<T> {
  readonly [ObservableLike_isPure]: true;
}

/**
 * @noInheritDoc
 */
export interface PureDeferredObservableLike<T = unknown>
  extends DeferredObservableLike<T>,
    PureObservableLike<T> {
  readonly [ObservableLike_isPure]: true;
  readonly [ObservableLike_isDeferred]: true;
}

/**
 * @noInheritDoc
 */
export interface DeferredObservableWithSideEffectsLike<T = unknown>
  extends DeferredObservableLike<T> {
  readonly [ObservableLike_isPure]: false;
  readonly [ObservableLike_isRunnable]: false;
}

/**
 * @noInheritDoc
 */
export interface PureRunnableLike<T = unknown>
  extends RunnableLike<T>,
    PureDeferredObservableLike<T> {
  readonly [ObservableLike_isDeferred]: true;
  readonly [ObservableLike_isPure]: true;
  readonly [ObservableLike_isRunnable]: true;
}

/**
 * @noInheritDoc
 */
export interface RunnableWithSideEffectsLike<T = unknown>
  extends RunnableLike<T> {
  readonly [ObservableLike_isPure]: false;
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
 */
export interface ReplayObservableLike<T = unknown>
  extends MulticastObservableLike<T> {
  readonly [ReplayObservableLike_buffer]: IndexedLike<T>;
}

export const SubjectLike_observerCount = Symbol("SubjectLike_observerCount");

/**
 * @noInheritDoc
 */
export interface SubjectLike<T = unknown>
  extends ReplayObservableLike<T>,
    ErrorSafeEventListenerLike<T> {
  readonly [SubjectLike_observerCount]: number;
}

/**
 * @noInheritDoc
 */
export interface PauseableObservableLike<T = unknown>
  extends ReplayObservableLike<T>,
    PauseableLike {}

export const FlowableLike_flow = Symbol("FlowableLike_flow");

/**
 * @noInheritDoc
 */
export interface FlowableLike<T> {
  [FlowableLike_flow](
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
      readonly replay?: number;
    },
  ): PauseableObservableLike<T>;
}

export const StreamLike_scheduler = Symbol("StreamLike_scheduler");

/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 */
export interface StreamLike<TReq, T>
  extends DispatcherLike<TReq>,
    ReplayObservableLike<T> {
  readonly [StreamLike_scheduler]: SchedulerLike;
}

export const StreamableLike_stream = Symbol("StreamableLike_stream");

/**
 * A container that supports bi-directional streaming.
 *
 * @typeparam TReq
 * @typeparam T
 * @typeparam TStream
 *
 * @noInheritDoc
 */
export interface StreamableLike<
  TReq = unknown,
  T = unknown,
  TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>,
> {
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
  ): TStream;
}

export type StreamOf<TStreamable extends StreamableLike> = ReturnType<
  TStreamable[typeof StreamableLike_stream]
>;

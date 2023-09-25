import { IndexedCollectionLike } from "./collections.js";
import { PauseableLike, SchedulerLike } from "./concurrent.js";
import { EventSourceLike, SinkLike } from "./events.js";
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
    EventSourceLike<DispatcherLikeEventMap[keyof DispatcherLikeEventMap]> {
  /**
   * Communicates to the dispatcher that no more events will be enqueued.
   */
  [DispatcherLike_complete](): void;
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

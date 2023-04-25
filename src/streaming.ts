import {
  __FlowableStreamLike_isPaused as FlowableStreamLike_isPaused,
  __FlowableStreamLike_pause as FlowableStreamLike_pause,
  __FlowableStreamLike_resume as FlowableStreamLike_resume,
  __StreamLike_scheduler as StreamLike_scheduler,
  __StreamableLike_stream as StreamableLike_stream,
} from "./__internal__/symbols.js";
import { ContainerLike, ContainerOf } from "./containers.js";
import { Function1, Optional, Updater } from "./functions.js";
import { ReadonlyObjectMapLike } from "./keyed-containers.js";
import { MulticastObservableLike, ObservableLike } from "./rx.js";
import { SchedulerLike } from "./scheduling.js";
import {
  DispatcherLike,
  DisposableLike,
  KeyedCollectionLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "./util.js";

export {
  FlowableStreamLike_isPaused,
  FlowableStreamLike_pause,
  FlowableStreamLike_resume,
  StreamLike_scheduler,
  StreamableLike_stream,
};

/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 * @category Stream
 */
export interface StreamLike<TReq, T>
  extends DispatcherLike<TReq>,
    MulticastObservableLike<T> {
  readonly [StreamLike_scheduler]: SchedulerLike;
}

/**
 * A container that supports bi-directional streaming.
 *
 * @typeparam TReq
 * @typeparam T
 * @typeparam TStream
 *
 * @noInheritDoc
 * @category Container
 */
export interface StreamableLike<
  TReq,
  T,
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
  ): TStream & DisposableLike;
}

/**
 * An `ObservableLike` that supports imperative flow control
 * via the pause and resume methods.
 *
 * @noInheritDoc
 * @category Stream
 */
export interface FlowableStreamLike<T = unknown>
  extends StreamLike<boolean | Updater<boolean>, T> {
  /**
   * Reactive property indicating if the stream is paused or not.
   */
  readonly [FlowableStreamLike_isPaused]: ObservableLike<boolean>;

  /**
   * Imperatively pause the stream.
   */
  [FlowableStreamLike_pause](): void;

  /**
   * Imperatively resume the stream.
   */
  [FlowableStreamLike_resume](): void;
}

/**
 * A cache stream that support transaction updates of a collection of keys
 * and observing the changing values of individual keys.
 *
 * @noInheritDoc
 * @category Stream
 */
export interface CacheStreamLike<T>
  extends StreamLike<
      ReadonlyObjectMapLike<Function1<Optional<T>, Optional<T>>>,
      never
    >,
    KeyedCollectionLike<string, ObservableLike<T>> {}

/**
 * A container that returns a CacheStream when subscribed to.
 *
 * @noInheritDoc
 * @category Container
 */
export interface CacheLike<T>
  extends StreamableLike<
    Readonly<Record<string, Function1<Optional<T>, Optional<T>>>>,
    never,
    CacheStreamLike<T>
  > {}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface EnumerateAsync<C extends ContainerLike, O = unknown> {
  enumerateAsync<T>(
    scheduler: SchedulerLike,
    options?: O & {
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
  ): Function1<ContainerOf<C, T>, StreamLike<void, T> & DisposableLike>;
}

export interface Flow<C extends ContainerLike, O = unknown> {
  flow<T>(
    scheduler: SchedulerLike,
    options?: O & {
      readonly replay?: number;
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ): Function1<ContainerOf<C, T>, FlowableStreamLike<T> & DisposableLike>;
}

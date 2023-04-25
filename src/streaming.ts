import {
  __FlowableStreamLike_isPaused as FlowableStreamLike_isPaused,
  __FlowableStreamLike_pause as FlowableStreamLike_pause,
  __FlowableStreamLike_resume as FlowableStreamLike_resume,
  __StreamLike_scheduler as StreamLike_scheduler,
  __StreamableLike_stream as StreamableLike_stream,
} from "./__internal__/symbols.js";
import {
  ContainerLike,
  ContainerLike_T,
  ContainerLike_type,
  ContainerOf,
} from "./containers.js";
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
 * A container that returns an interactive stream that produces
 * exactly one value for every enqueued void request.
 *
 * @noInheritDoc
 * @category Container
 */
export interface AsyncEnumerableLike<T = unknown>
  extends StreamableLike<void, T>,
    ObservableLike<T> {
  readonly [ContainerLike_type]?: AsyncEnumerableLike<
    this[typeof ContainerLike_T]
  >;
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
 * A container that returns an `ObservableLike` which supports
 * imperative flow control when subscribed to.
 *
 * @noInheritDoc
 * @category Container
 */
export interface FlowableLike<T = unknown>
  extends StreamableLike<boolean | Updater<boolean>, T, FlowableStreamLike<T>>,
    ObservableLike<T> {
  readonly [ContainerLike_type]?: FlowableLike<this[typeof ContainerLike_T]>;
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
  > {
  readonly [ContainerLike_type]?: CacheLike<never>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface FromAsyncEnumerable<C extends ContainerLike, O = never> {
  /**
   * @category Constructor
   */
  fromAsyncEnumerable<T>(
    options?: O,
  ): Function1<AsyncEnumerableLike<T>, ContainerOf<C, T>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface FromFlowable<C extends ContainerLike, O = never> {
  /**
   * @category Constructor
   */
  fromFlowable<T>(options?: O): Function1<FlowableLike<T>, ContainerOf<C, T>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ToAsyncEnumerable<C extends ContainerLike, O = never> {
  /**
   * @category Transform
   */
  toAsyncEnumerable<T>(
    options?: O,
  ): Function1<ContainerOf<C, T>, AsyncEnumerableLike<T>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ToFlowable<C extends ContainerLike, O = never> {
  /**
   * @category Transform
   */
  toFlowable<T>(options?: O): Function1<ContainerOf<C, T>, FlowableLike<T>>;
}

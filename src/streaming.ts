import {
  __StreamLike_scheduler as StreamLike_scheduler,
  __StreamableLike_TStream as StreamableLike_TStream,
  __StreamableLike_stream as StreamableLike_stream,
} from "./__internal__/symbols.js";
import { Function1, Optional } from "./functions.js";
import { ReadonlyObjectMapLike } from "./keyed-containers.js";
import {
  MulticastObservableLike,
  ObservableLike,
  PauseableObservableLike,
} from "./rx.js";
import {
  AssociativeCollectionLike,
  DictionaryLike,
  DispatcherEventMap,
  DispatcherLike,
  DisposableLike,
  EventSourceLike,
  PauseableEventMap,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "./util.js";

export { StreamableLike_stream, StreamLike_scheduler };

/**
 * Represents a duplex stream
 *
 * @noInheritDoc
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
 * @category Streamable
 */
export interface StreamableLike<TReq = unknown, T = unknown> {
  readonly [StreamableLike_TStream]?: StreamLike<TReq, T>;

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
  ): DisposableStreamOf<this>;
}

/**
 * A cache stream that support transaction updates of a collection of keys
 * and observing the changing values of individual keys.
 *
 * @noInheritDoc
 *  @category Streamable
 */
export interface CacheLike<T>
  extends StreamableLike<
    ReadonlyObjectMapLike<string, Function1<Optional<T>, Optional<T>>>,
    never
  > {
  readonly [StreamableLike_TStream]?: StreamLike<
    ReadonlyObjectMapLike<string, Function1<Optional<T>, Optional<T>>>,
    never
  > &
    AssociativeCollectionLike<string, ObservableLike<T>>;
}

/**
 *
 * @noInheritDoc
 * @category Streamable
 */
export interface AnimationGroupEventHandlerLike<
  TEventType,
  T,
  TKey extends string | number | symbol,
> extends StreamableLike<TEventType, boolean> {
  readonly [StreamableLike_TStream]?: StreamLike<TEventType, boolean> &
    PauseableObservableLike<boolean> &
    DictionaryLike<TKey, EventSourceLike<{ type: TEventType; value: T }>> &
    EventSourceLike<
      | DispatcherEventMap[keyof DispatcherEventMap]
      | PauseableEventMap[keyof PauseableEventMap]
    >;
}
/**
 *
 * @noInheritDoc
 *  @category Streamable
 */
export interface AnimationEventHandlerLike<
  TEventType extends Exclude<string | symbol, keyof DispatcherEventMap>,
  T,
> extends StreamableLike<TEventType, boolean> {
  readonly [StreamableLike_TStream]?: StreamLike<TEventType, boolean> &
    PauseableObservableLike<boolean> &
    EventSourceLike<
      | { type: TEventType; value: T }
      | DispatcherEventMap[keyof DispatcherEventMap]
      | PauseableEventMap[keyof PauseableEventMap]
    >;
}

export type StreamOf<TStreamable extends StreamableLike> = NonNullable<
  TStreamable[typeof StreamableLike_TStream]
>;

export type DisposableStreamOf<TStreamable extends StreamableLike> =
  StreamOf<TStreamable> & DisposableLike;

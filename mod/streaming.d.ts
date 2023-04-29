import { __StreamLike_scheduler as StreamLike_scheduler, __StreamableLike_stream as StreamableLike_stream } from "./__internal__/symbols.js";
import { Function1, Optional } from "./functions.js";
import { ReadonlyObjectMapLike } from "./keyed-containers.js";
import { MulticastObservableLike, ObservableLike } from "./rx.js";
import { DispatcherLike, DisposableLike, KeyedCollectionLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "./util.js";
export { StreamableLike_stream, StreamLike_scheduler };
/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 * @category Stream
 */
export interface StreamLike<TReq, T> extends DispatcherLike<TReq>, MulticastObservableLike<T> {
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
export interface StreamableLike<TReq, T, TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>> {
    /**
     * Subscribe to the Streamable.
     *
     * @param scheduler - The scheduler to subscribe to the stream with.
     * @param options
     */
    [StreamableLike_stream](scheduler: SchedulerLike, options?: {
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
    }): TStream & DisposableLike;
}
/**
 * A cache stream that support transaction updates of a collection of keys
 * and observing the changing values of individual keys.
 *
 * @noInheritDoc
 * @category Stream
 */
export interface CacheStreamLike<T> extends StreamLike<ReadonlyObjectMapLike<Function1<Optional<T>, Optional<T>>>, never>, KeyedCollectionLike<string, ObservableLike<T>> {
}
/**
 * A container that returns a CacheStream when subscribed to.
 *
 * @noInheritDoc
 * @category Container
 */
export interface CacheLike<T> extends StreamableLike<Readonly<Record<string, Function1<Optional<T>, Optional<T>>>>, never, CacheStreamLike<T>> {
}

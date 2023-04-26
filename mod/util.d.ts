import { __BufferLike_capacity as BufferLike_capacity, __CollectionLike_count as CollectionLike_count, __DispatcherLike_complete as DispatcherLike_complete, __DisposableLike_add as DisposableLike_add, __DisposableLike_dispose as DisposableLike_dispose, __DisposableLike_error as DisposableLike_error, __DisposableLike_isDisposed as DisposableLike_isDisposed, __EventListenerLike_isErrorSafe as EventListenerLike_isErrorSafe, __EventListenerLike_notify as EventListenerLike_notify, __EventPublisherLike_listenerCount as EventPublisherLike_listenerCount, __EventSourceLike_addListener as EventSourceLike_addListener, __KeyedCollectionLike_get as KeyedCollectionLike_get, __PauseableLike_pause as PauseableLike_pause, __PauseableLike_resume as PauseableLike_resume, __QueueableLike_backpressureStrategy as QueueableLike_backpressureStrategy, __QueueableLike_enqueue as QueueableLike_enqueue, __ReplayableLike_buffer as ReplayableLike_buffer } from "./__internal__/symbols.js";
import { ContainerLike, ContainerLike_T, ContainerLike_type } from "./containers.js";
import { Optional, SideEffect1 } from "./functions.js";
export { BufferLike_capacity, CollectionLike_count, DispatcherLike_complete, DisposableLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, EventListenerLike_isErrorSafe, EventListenerLike_notify, EventPublisherLike_listenerCount, EventSourceLike_addListener, KeyedCollectionLike_get, PauseableLike_pause, PauseableLike_resume, QueueableLike_backpressureStrategy, QueueableLike_enqueue, ReplayableLike_buffer, };
export type DisposableOrTeardown = DisposableLike | SideEffect1<Optional<Error>>;
/**
 * Represents an unmanaged resource that can be disposed.
 *
 * @noInheritDoc
 */
export interface DisposableLike {
    /**
     * The error the `Disposable` was disposed with if disposed.
     */
    readonly [DisposableLike_error]: Optional<Error>;
    /**
     * `true` if this resource has been disposed, otherwise false
     */
    readonly [DisposableLike_isDisposed]: boolean;
    /**
     * Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.
     *
     * @param disposable - The disposable to add.
     * @param ignoreChildErrors - Indicates that the parent should not auto dispose if the child disposed with an error.
     */
    [DisposableLike_add](disposable: DisposableOrTeardown): void;
    /**
     * Dispose the resource.
     *
     * @param error - An optional error that signals the resource is being disposed due to an error.
     */
    [DisposableLike_dispose](error?: Error): void;
}
/**
 * @noInheritDoc
 */
export interface BufferLike {
    /**
     * The number of items the queue is capable of efficiently buffering.
     */
    readonly [BufferLike_capacity]: number;
}
/**
 * An interface for types that support buffering items with backpressure.
 *
 * @noInheritDoc
 */
export interface QueueableLike<T = unknown> extends BufferLike {
    /**
     * The back pressure strategy utilized by the queue when it is at capacity.
     */
    readonly [QueueableLike_backpressureStrategy]: "drop-latest" | "drop-oldest" | "overflow" | "throw";
    /**
     * Enqueue an item onto the queue.
     *
     * @param req - The value to enqueue.
     * @returns `true` if the queue has additional remaining capacity otherwise `false`.
     */
    [QueueableLike_enqueue](req: T): boolean;
}
/**
 * @noInheritDoc
 */
export interface CollectionLike {
    readonly [CollectionLike_count]: number;
}
/**
 * @noInheritDoc
 */
export interface KeyedCollectionLike<TKey = unknown, T = unknown> extends CollectionLike {
    [KeyedCollectionLike_get](index: TKey): T;
}
/**
 * @noInheritDoc
 */
export interface IndexedCollectionLike<T = unknown> extends KeyedCollectionLike<number, T> {
}
/**
 * @noInheritDoc
 */
export interface IndexedBufferCollectionLike<T = unknown> extends BufferLike, IndexedCollectionLike<T> {
}
/**
 * @noInheritDoc
 */
export interface ReplayableLike<T = unknown> {
    readonly [ReplayableLike_buffer]: IndexedBufferCollectionLike<T>;
}
/**
 * @noInheritDoc
 */
export interface EventListenerLike<T = unknown> extends DisposableLike {
    readonly [EventListenerLike_isErrorSafe]: boolean;
    [EventListenerLike_notify](event: T): void;
}
/**
 * @noInheritDoc
 */
export interface ErrorSafeEventListenerLike<T = unknown> extends EventListenerLike<T> {
    readonly [EventListenerLike_isErrorSafe]: true;
}
/**
 * @noInheritDoc
 */
export interface EventSourceLike<T = unknown> extends ReplayableLike<T>, ContainerLike {
    readonly [ContainerLike_type]?: EventSourceLike<this[typeof ContainerLike_T]>;
    [EventSourceLike_addListener](listener: EventListenerLike<T>): void;
}
/**
 * @noInheritDoc
 */
export interface EventPublisherLike<T = unknown> extends EventSourceLike<T>, ErrorSafeEventListenerLike<T> {
    readonly [EventPublisherLike_listenerCount]: number;
}
/**
 * A `QueueableLike` type that consumes enqueued events to
 * be dispatched from any execution constext.
 *
 * @noInheritDoc
 */
export interface DispatcherLike<T = unknown> extends QueueableLike<T> {
    /**
     * Communicates to the dispatcher that no more events will be enqueued.
     */
    [DispatcherLike_complete](): void;
}
export interface PauseableLike {
    /**
     * Imperatively pause the source.
     */
    [PauseableLike_pause](): void;
    /**
     * Imperatively resume the source.
     */
    [PauseableLike_resume](): void;
}

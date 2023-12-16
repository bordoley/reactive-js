import { CollectionLike, MutableIndexedLike } from "./collections.js";
import { Optional, SideEffect1 } from "./functions.js";
export declare const DisposableLike_add: unique symbol;
export declare const DisposableLike_dispose: unique symbol;
export declare const DisposableLike_error: unique symbol;
export declare const DisposableLike_isDisposed: unique symbol;
/**
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
     * Adds the given `DisposableLike` or teardown function to this container or disposes it if the container has been disposed.
     *
     * @param disposable - The disposable to add.
     * @param ignoreChildErrors - Indicates that the parent should not auto dispose if the child disposed with an error.
     */
    [DisposableLike_add](disposable: DisposableLike): void;
    [DisposableLike_add](teardown: SideEffect1<Optional<Error>>): void;
    /**
     * Dispose the resource.
     *
     * @param error - An optional error that signals the resource is being disposed due to an error.
     */
    [DisposableLike_dispose](error?: Error): void;
}
export declare const SerialDisposableLike_current: unique symbol;
/**
 * @noInheritDoc
 */
export interface SerialDisposableLike<TDisposable extends DisposableLike = DisposableLike> extends DisposableLike {
    get [SerialDisposableLike_current](): TDisposable;
    set [SerialDisposableLike_current](v: TDisposable);
}
export declare const QueueableLike_backpressureStrategy: unique symbol;
export declare const QueueableLike_capacity: unique symbol;
export declare const QueueableLike_enqueue: unique symbol;
/**
 * An interface for types that support buffering items with backpressure.
 *
 * @noInheritDoc
 */
export interface QueueableLike<T = unknown> {
    /**
     * The back pressure strategy utilized by the queue when it is at capacity.
     */
    readonly [QueueableLike_backpressureStrategy]: "drop-latest" | "drop-oldest" | "overflow" | "throw";
    /**
     * The number of items the queue is capable of efficiently buffering.
     */
    readonly [QueueableLike_capacity]: number;
    /**
     * Enqueue an item onto the queue.
     *
     * @param req - The value to enqueue.
     * @returns `true` if the queue has additional remaining capacity otherwise `false`.
     */
    [QueueableLike_enqueue](req: T): boolean;
}
export declare const StackLike_head: unique symbol;
export declare const StackLike_pop: unique symbol;
/**
 * @noInheritDoc
 */
export interface StackLike<T = unknown> extends QueueableLike<T> {
    readonly [StackLike_head]: Optional<T>;
    [StackLike_pop](): Optional<T>;
}
export declare const QueueLike_head: unique symbol;
export declare const QueueLike_dequeue: unique symbol;
/**
 * @noInheritDoc
 */
export interface QueueLike<T = unknown> extends QueueableLike<T> {
    readonly [QueueLike_head]: Optional<T>;
    [QueueLike_dequeue](): Optional<T>;
}
/**
 * @noInheritDoc
 */
export interface QueueCollectionLike<T = unknown> extends QueueLike<T>, CollectionLike<T> {
}
/**
 * @noInheritDoc
 */
export interface IndexedQueueLike<T = unknown> extends QueueLike<T>, MutableIndexedLike<T>, StackLike<T> {
}
/**
 * @noInheritDoc
 */
export declare class BackPressureError extends Error {
    readonly [QueueableLike_capacity]: number;
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    constructor(capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]);
}

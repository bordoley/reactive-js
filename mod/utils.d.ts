import { Error } from "./__internal__/constants.js";
import { Optional, SideEffect1 } from "./functions.js";
export declare const DisposableContainerLike_add: unique symbol;
export interface DisposableContainerLike {
    /**
     * Adds the given `DisposableLike` or teardown function to this container or disposes it if the container has been disposed.
     *
     * @param disposable - The disposable to add.
     */
    [DisposableContainerLike_add](disposable: Disposable): void;
    /**
     * Adds the given teardown function to this container or disposes it if the container has been disposed.
     *
     * @param teardown - The teardown function to add.
     */
    [DisposableContainerLike_add](teardown: SideEffect1<Optional<Error>>): void;
}
export declare const DisposableLike_dispose: typeof Symbol.dispose;
export declare const DisposableLike_error: unique symbol;
export declare const DisposableLike_isDisposed: unique symbol;
/**
 * @noInheritDoc
 */
export interface DisposableLike extends DisposableContainerLike, Disposable {
    /**
     * The error the `Disposable` was disposed with if disposed.
     */
    readonly [DisposableLike_error]: Optional<Error>;
    /**
     * `true` if this resource has been disposed, otherwise false
     */
    readonly [DisposableLike_isDisposed]: boolean;
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
export declare const DropLatestBackpressureStrategy = "drop-latest";
export declare const DropOldestBackpressureStrategy = "drop-oldest";
export declare const OverflowBackpressureStrategy = "overflow";
export declare const ThrowBackpressureStrategy = "throw";
export type BackpressureStrategy = typeof DropLatestBackpressureStrategy | typeof DropOldestBackpressureStrategy | typeof OverflowBackpressureStrategy | typeof ThrowBackpressureStrategy;
/**
 * An interface for types that support buffering items with backpressure.
 *
 * @noInheritDoc
 */
export interface QueueableLike<T = unknown> {
    /**
     * The back pressure strategy utilized by the queue when it is at capacity.
     */
    readonly [QueueableLike_backpressureStrategy]: BackpressureStrategy;
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
export declare const QueueLike_head: unique symbol;
export declare const QueueLike_dequeue: unique symbol;
export declare const QueueLike_count: unique symbol;
/**
 * @noInheritDoc
 */
export interface QueueLike<T = unknown> extends QueueableLike<T>, Iterable<T> {
    readonly [QueueLike_count]: number;
    readonly [QueueLike_head]: Optional<T>;
    [QueueLike_dequeue](): Optional<T>;
}
/**
 * @noInheritDoc
 */
export declare class BackPressureError extends Error {
    readonly [QueueableLike_capacity]: number;
    readonly [QueueableLike_backpressureStrategy]: BackpressureStrategy;
    constructor(capacity: number, backpressureStrategy: BackpressureStrategy);
}

import { Optional, SideEffect1 } from "./functions.js";
/** @ignore */
export declare const DisposableLike_add: unique symbol;
/** @ignore */
export declare const DisposableLike_dispose: unique symbol;
/** @ignore */
export declare const DisposableLike_error: unique symbol;
/** @ignore */
export declare const DisposableLike_isDisposed: unique symbol;
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
     * @param disposable
     * @returns `this`
     */
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    /**
     * Dispose the resource.
     *
     * @param error An optional error that signals the resource is being disposed due to an error.
     */
    [DisposableLike_dispose](error?: Error): void;
}
/** @ignore */
export declare const QueueLike_count: unique symbol;
/** @ignore */
export declare const QueueLike_push: unique symbol;
export interface QueueLike<T = unknown> {
    /**
     * The number of queued up items.
     */
    readonly [QueueLike_count]: number;
    /**
     * Push an item onto the queue
     * @param req
     */
    [QueueLike_push](req: T): void;
}
/** @ignore */
export declare const EnumeratorLike_move: unique symbol;
/** @ignore */
export declare const EnumeratorLike_current: unique symbol;
/** @ignore */
export declare const EnumeratorLike_hasCurrent: unique symbol;
/**
 * @noInheritDoc
 */
export interface EnumeratorLike<T = unknown> {
    readonly [EnumeratorLike_current]: T;
    readonly [EnumeratorLike_hasCurrent]: boolean;
    [EnumeratorLike_move](): boolean;
}

import { DisposableLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, QueueableLike_capacity, QueueableLike_enqueue } from "./__internal__/symbols.js";
import { Optional, SideEffect1 } from "./functions.js";
export { DisposableLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, QueueableLike_enqueue, QueueableLike_capacity, };
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
     * @param ignoreChildErrors
     */
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    /**
     * Dispose the resource.
     *
     * @param error An optional error that signals the resource is being disposed due to an error.
     */
    [DisposableLike_dispose](error?: Error): void;
}
export interface QueueableLike<T = unknown> {
    readonly [QueueableLike_capacity]: number;
    /**
     * Enqueue an item onto the queue.
     * @param req - The value to enqueue.
     * @returns `true` if the queue has additional capacity otherwise false.
     */
    [QueueableLike_enqueue](req: T): boolean;
}

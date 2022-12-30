import { SideEffect1, Optional } from "./functions.mjs";
/** @ignore */
declare const DisposableLike_add: unique symbol;
/** @ignore */
declare const DisposableLike_dispose: unique symbol;
/** @ignore */
declare const DisposableLike_exception: unique symbol;
/** @ignore */
declare const DisposableLike_isDisposed: unique symbol;
declare type Exception = {
    readonly cause: unknown;
};
declare type DisposableOrTeardown = DisposableLike | SideEffect1<Optional<Exception>>;
/**
 * Represents an unmanaged resource that can be disposed.
 */
interface DisposableLike {
    /**
     * The error the `Disposable` was disposed with if disposed.
     */
    readonly [DisposableLike_exception]: Optional<Exception>;
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
    [DisposableLike_dispose](error?: Exception): void;
}
/** @ignore */
declare const PauseableLike_pause: unique symbol;
/** @ignore */
declare const PauseableLike_resume: unique symbol;
interface PauseableLike {
    [PauseableLike_pause](): void;
    [PauseableLike_resume](): void;
}
export { DisposableLike, DisposableLike_add, DisposableLike_dispose, DisposableLike_exception, DisposableLike_isDisposed, DisposableOrTeardown, Exception, PauseableLike, PauseableLike_pause, PauseableLike_resume };

import { SideEffect1 } from "./functions.mjs";
/**
 * Represents an unboxed value of type T or undefined.
 */
declare type Option<T> = T | undefined;
declare const DisposableLike_add: unique symbol;
declare const DisposableLike_dispose: unique symbol;
declare const DisposableLike_error: unique symbol;
declare const DisposableLike_isDisposed: unique symbol;
declare type Error = {
    readonly cause: unknown;
};
declare type DisposableOrTeardown = DisposableLike | SideEffect1<Option<Error>>;
/**
 * Represents an unmanaged resource that can be disposed.
 */
interface DisposableLike {
    /**
     * The error the `Disposable` was disposed with if disposed.
     */
    readonly [DisposableLike_error]: Option<Error>;
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
declare const PauseableLike_pause: unique symbol;
declare const PauseableLike_resume: unique symbol;
interface PauseableLike {
    [PauseableLike_pause](): void;
    [PauseableLike_resume](): void;
}
export { DisposableLike, DisposableLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, DisposableOrTeardown, Error, Option, PauseableLike, PauseableLike_pause, PauseableLike_resume };

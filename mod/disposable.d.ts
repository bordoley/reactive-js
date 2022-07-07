import { SideEffect1, Function1, SideEffect } from "./functions.mjs";
import { Option } from "./option.mjs";
/**
 * A wrapper around a caught error to handle corner cases such
 * as a function which throws undefined or string.
 */
interface Error {
    /** The underlying cause of the error. */
    readonly cause: unknown;
}
declare type DisposableOrTeardown = DisposableLike | SideEffect1<Option<Error>>;
/**
 * Represents an unmanaged resource that can be disposed.
 */
interface DisposableLike {
    /**
     * The error the `Disposable` was disposed with if disposed.
     */
    readonly error: Option<Error>;
    /**
     * `true` if this resource has been disposed, otherwise false
     */
    readonly isDisposed: boolean;
    /**
     * Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.
     *
     * @param disposable
     * @returns `this`
     */
    add(this: this, disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    /**
     * Dispose the resource.
     *
     * @param error An optional error that signals the resource is being disposed due to an error.
     */
    dispose(this: this, error?: Error): void;
}
declare class Disposable implements DisposableLike {
    /** @ignore */
    private _isDisposed;
    private readonly disposables;
    private _error;
    /**
     * The error the `Disposable` was disposed with if disposed.
     */
    get error(): Option<Error>;
    /**
     * `true` if this resource has been disposed, otherwise false
     */
    get isDisposed(): boolean;
    /**
     * Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.
     *
     * @param disposable
     * @returns `this`
     */
    add(this: this, disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    /**
     * Dispose the resource.
     *
     * @param error An optional error that signals the resource is being disposed due to an error.
     */
    dispose(this: this, error?: Error): void;
}
/**
 * Dispose `disposable` with an optional error.
 */
declare const dispose: <T extends DisposableLike>(e?: Error) => Function1<T, T>;
declare const isDisposed: (disposable: DisposableLike) => boolean;
declare const bindTo: <T extends DisposableLike>(child: DisposableLike) => Function1<T, T>;
declare function add<T extends DisposableLike>(child: DisposableLike, ignoreChildErrors: true): Function1<T, T>;
declare function add<T extends DisposableLike>(child: DisposableLike): Function1<T, T>;
declare function addTo<T extends DisposableLike>(child: DisposableLike, ignoreChildErrors: true): Function1<T, T>;
declare function addTo<T extends DisposableLike>(child: DisposableLike): Function1<T, T>;
declare const onDisposed: <T extends DisposableLike>(teardown: SideEffect1<Option<Error>>) => Function1<T, T>;
declare const onError: <T extends DisposableLike>(teardown: SideEffect1<Error>) => Function1<T, T>;
declare const onComplete: <T extends DisposableLike>(teardown: SideEffect) => Function1<T, T>;
/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
declare const toErrorHandler: (disposable: DisposableLike) => SideEffect1<unknown>;
declare const disposed: DisposableLike;
declare const toAbortSignal: (disposable: DisposableLike) => AbortSignal;
export { Disposable, DisposableLike, DisposableOrTeardown, Error, add, addTo, bindTo, dispose, disposed, isDisposed, onComplete, onDisposed, onError, toAbortSignal, toErrorHandler };

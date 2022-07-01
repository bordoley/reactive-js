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
declare type DisposableOrTeardown = Disposable | SideEffect1<Option<Error>>;
/**
 * Represents an unmanaged resource that can be disposed.
 */
declare class Disposable {
    /** @ignore */
    _isDisposed: boolean;
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
declare const dispose: <T extends Disposable>(e?: Error) => Function1<T, T>;
declare const isDisposed: (disposable: Disposable) => boolean;
declare const bindTo: <T extends Disposable>(child: Disposable) => Function1<T, T>;
declare function add<T extends Disposable>(child: Disposable, ignoreChildErrors: true): Function1<T, T>;
declare function add<T extends Disposable>(child: Disposable): Function1<T, T>;
declare function addTo<T extends Disposable>(child: Disposable, ignoreChildErrors: true): Function1<T, T>;
declare function addTo<T extends Disposable>(child: Disposable): Function1<T, T>;
declare const onDisposed: <T extends Disposable>(teardown: SideEffect1<Option<Error>>) => Function1<T, T>;
declare const onError: <T extends Disposable>(teardown: SideEffect1<Error>) => Function1<T, T>;
declare const onComplete: <T extends Disposable>(teardown: SideEffect) => Function1<T, T>;
/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
declare const toErrorHandler: (disposable: Disposable) => SideEffect1<unknown>;
declare const disposed: Disposable;
/**
 * A `Disposable` container that allows replacing an inner `Disposable` with another,
 * disposing the previous inner `Disposable` in the process. Disposing the
 * container also disposes the inner `Disposable`. Disposing the inner `Disposable`
 * with an error, disposes the container with the error.
 *
 * @noInheritDoc
 */
declare class SerialDisposable extends Disposable {
    private _inner;
    /**
     *  The inner `Disposable` that may be get or set. Setting the inner
     *  `Disposable` disposes the old `Disposable` unless it is strictly equal
     *  to the new one.
     */
    get inner(): Disposable;
    /** @ignore */
    set inner(newInner: Disposable);
}
/**
 * A `Disposable` that provides disposable semantics to an underlying resource.
 *
 * @noInheritDoc
 */
declare class DisposableValue<T> extends Disposable {
    /** The underlying resource */
    readonly value: T;
    constructor(
    /** The underlying resource */
    value: T, cleanup: SideEffect1<T>);
}
declare const toAbortSignal: (disposable: Disposable) => AbortSignal;
export { Disposable, DisposableOrTeardown, DisposableValue, Error, SerialDisposable, add, addTo, bindTo, dispose, disposed, isDisposed, onComplete, onDisposed, onError, toAbortSignal, toErrorHandler };

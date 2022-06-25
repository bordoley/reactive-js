import { SideEffect1, SideEffect, Function1 } from "./functions.mjs";
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
     * The error the `DisposableLike` was disposed with if disposed.
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
    add(this: DisposableLike, disposable: DisposableOrTeardown): void;
    /**
     * Dispose the resource. Must be idempotent.
     *
     * @param error An optional error that signals the resource is being disposed due to an error.
     */
    dispose(this: DisposableLike, error?: Error): void;
}
/**
 * Dispose `disposable` with an optional error.
 */
declare const dispose: (e?: Error) => SideEffect1<DisposableLike>;
/**
 * Add `child` to `parent`, disposing the child when the parent is disposed.
 */
declare const addDisposable: (parent: DisposableLike, child: DisposableLike) => void;
/**
 * Add `teardown` to `parent`, invoking `teardown` when `parent` is disposed.
 */
declare const addTeardown: (parent: DisposableLike, teardown: SideEffect1<Option<Error>>) => void;
/**
 * Add `teardown` to `parent` that is only invoked if `parent` is disposed with an error.
 */
declare const addOnDisposedWithErrorTeardown: (parent: DisposableLike, teardown: SideEffect1<unknown>) => void;
/**
 * Add `teardown` to `parent` that is only invoked if `parent` is disposed without an error.
 */
declare const addOnDisposedWithoutErrorTeardown: (parent: DisposableLike, teardown: SideEffect) => void;
/**
 * Add `child` to `parent`, only disposing child when `parent` is disposed with an error.
 */
declare const addOnDisposedWithError: (parent: DisposableLike, child: DisposableLike) => void;
declare const bindTo: <T extends DisposableLike>(child: DisposableLike) => Function1<T, T>;
declare const addChild: <T extends DisposableLike>(child: DisposableLike) => Function1<T, T>;
declare const addToParent: <T extends DisposableLike>(parent: DisposableLike) => Function1<T, T>;
declare const addChildAndDisposeOnError: <T extends DisposableLike>(child: DisposableLike) => Function1<T, T>;
declare const addToParentAndDisposeOnError: <T extends DisposableLike>(parent: DisposableLike) => Function1<T, T>;
/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
declare const toErrorHandler: (disposable: DisposableLike) => SideEffect1<unknown>;
/**
 * Abstract base class for implementing the `DisposableLike` interface.
 *
 * @noInheritDoc
 */
declare abstract class AbstractDisposable implements DisposableLike {
    /** @ignore */
    isDisposed: boolean;
    private readonly disposables;
    private _error;
    /** @ignore */
    get error(): Option<Error>;
    /** @ignore */
    add(this: AbstractDisposable, disposable: DisposableOrTeardown): void;
    /** @ignore */
    dispose(this: AbstractDisposable, error?: Error): void;
}
/**
 * Creates an empty `DisposableLike` instance.
 *
 * @param onDispose Optional teardown logic to attach to the newly created disposable.
 */
declare const createDisposable: (onDispose?: ((error?: Error) => void) | undefined) => DisposableLike;
/**
 * A disposed `DisposableLike` instance.
 */
declare const disposed: DisposableLike;
/**
 * A `DisposableLike` container that allows replacing an inner `DisposableLike` with another,
 * disposing the previous inner `DisposableLike` in the process. Disposing the
 * container also disposes the inner `DisposableLike`. Disposing the inner `DisposableLike`
 * with an error, disposes the container with the error.
 *
 * @noInheritDoc
 */
interface SerialDisposableLike extends DisposableLike {
    /**
     *  The inner `DisposableLike` that may be get or set. Setting the inner
     *  `DisposableLike` disposes the old `DisposableLike` unless it is strictly equal
     *  to the new one.
     */
    inner: DisposableLike;
}
/**
 * Abstract base class for implementing the `SerialDisposableLike` interface.
 *
 * @noInheritDoc
 * */
declare abstract class AbstractSerialDisposable extends AbstractDisposable implements SerialDisposableLike {
    private _inner;
    /** @ignore */
    get inner(): DisposableLike;
    /** @ignore */
    set inner(newInner: DisposableLike);
}
/**
 * Creates a new `SerialDisposableLike` instance containing a disposed instance.
 */
declare const createSerialDisposable: () => SerialDisposableLike;
/**
 * A `DisposableLike` that provides disposable semantics to an underlying resource.
 *
 * @noInheritDoc
 */
interface DisposableValueLike<T> extends DisposableLike {
    /** The underlying resource */
    readonly value: T;
}
/**
 * Creates a new DisposableValueLike instance, which applies
 * the supplied `cleanup` side effect to `value` when disposed.
 */
declare const createDisposableValue: <T>(value: T, cleanup: SideEffect1<T>) => DisposableValueLike<T>;
declare const toAbortSignal: (disposable: DisposableLike) => AbortSignal;
export { AbstractDisposable, AbstractSerialDisposable, DisposableLike, DisposableOrTeardown, DisposableValueLike, Error, SerialDisposableLike, addChild, addChildAndDisposeOnError, addDisposable, addOnDisposedWithError, addOnDisposedWithErrorTeardown, addOnDisposedWithoutErrorTeardown, addTeardown, addToParent, addToParentAndDisposeOnError, bindTo, createDisposable, createDisposableValue, createSerialDisposable, dispose, disposed, toAbortSignal, toErrorHandler };

/// <reference types="./disposable.d.ts" />
import { newInstance, pipe, pipeLazy } from './functions.mjs';
import { none, isSome, isNone } from './option.mjs';

/**
 * Represents an unmanaged resource that can be disposed.
 */
class Disposable {
    constructor() {
        /** @ignore */
        this._isDisposed = false;
        this.disposables = newInstance(Set);
        this._error = none;
    }
    /**
     * The error the `Disposable` was disposed with if disposed.
     */
    get error() {
        return this._error;
    }
    /**
     * `true` if this resource has been disposed, otherwise false
     */
    get isDisposed() {
        return this._isDisposed;
    }
    /**
     * Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.
     *
     * @param disposable
     * @returns `this`
     */
    add(disposable, ignoreChildErrors) {
        const { disposables } = this;
        if (isDisposed(this)) {
            doDispose(this, disposable);
        }
        else if (!disposables.has(disposable)) {
            disposables.add(disposable);
            if (!(disposable instanceof Function)) {
                addDisposableOrTeardown(disposable, e => {
                    disposables.delete(disposable);
                    if (isSome(e) && !ignoreChildErrors) {
                        pipe(this, dispose(e));
                    }
                }, true);
            }
        }
    }
    /**
     * Dispose the resource.
     *
     * @param error An optional error that signals the resource is being disposed due to an error.
     */
    dispose(error) {
        if (!isDisposed(this)) {
            this._isDisposed = true;
            this._error = error;
            const { disposables } = this;
            for (const disposable of disposables) {
                disposables.delete(disposable);
                doDispose(this, disposable);
            }
        }
    }
}
/**
 * Dispose `disposable` with an optional error.
 */
const dispose = (e) => disposable => {
    disposable.dispose(e);
    return disposable;
};
const isDisposed = (disposable) => disposable.isDisposed;
function addDisposableOrTeardown(parent, child, ignoreChildErrors = false) {
    parent.add(child, ignoreChildErrors);
}
const bindTo = (child) => (parent) => {
    addDisposableOrTeardown(parent, child);
    addDisposableOrTeardown(child, parent);
    return parent;
};
function add(child, ignoreChildErrors = false) {
    return (parent) => {
        addDisposableOrTeardown(parent, child, ignoreChildErrors);
        return parent;
    };
}
function addTo(parent, ignoreChildErrors = false) {
    return (child) => {
        addDisposableOrTeardown(parent, child, ignoreChildErrors);
        return child;
    };
}
const onDisposed = (teardown) => disposable => {
    addDisposableOrTeardown(disposable, teardown);
    return disposable;
};
const onError = (teardown) => disposable => {
    addDisposableOrTeardown(disposable, e => {
        if (isSome(e)) {
            teardown.call(disposable, e);
        }
    });
    return disposable;
};
const onComplete = (teardown) => disposable => {
    addDisposableOrTeardown(disposable, e => {
        if (isNone(e)) {
            teardown.call(disposable);
        }
    });
    return disposable;
};
/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
const toErrorHandler = (disposable) => cause => pipe(disposable, dispose({ cause }));
const doDispose = (self, disposable) => {
    const { error } = self;
    if (disposable instanceof Function) {
        try {
            disposable.call(self, error);
        }
        catch (_) {
            /* Proactively catch Errors thrown in teardown logic. Teardown functions
             * shouldn't throw, so this is to prevent unexpected Errors.
             */
        }
    }
    else {
        pipe(disposable, dispose(error));
    }
};
const disposed = /*@__PURE__*/ pipe(newInstance(Disposable), dispose());
/**
 * A `Disposable` container that allows replacing an inner `Disposable` with another,
 * disposing the previous inner `Disposable` in the process. Disposing the
 * container also disposes the inner `Disposable`. Disposing the inner `Disposable`
 * with an error, disposes the container with the error.
 *
 * @noInheritDoc
 */
class SerialDisposable extends Disposable {
    constructor() {
        super(...arguments);
        this._inner = disposed;
    }
    /**
     *  The inner `Disposable` that may be get or set. Setting the inner
     *  `Disposable` disposes the old `Disposable` unless it is strictly equal
     *  to the new one.
     */
    get inner() {
        return this._inner;
    }
    /** @ignore */
    set inner(newInner) {
        const oldInner = this._inner;
        this._inner = newInner;
        if (oldInner !== newInner) {
            addDisposableOrTeardown(this, newInner);
            pipe(oldInner, dispose());
        }
    }
}
/**
 * A `Disposable` that provides disposable semantics to an underlying resource.
 *
 * @noInheritDoc
 */
class DisposableValue extends Disposable {
    constructor(
    /** The underlying resource */
    value, cleanup) {
        super();
        this.value = value;
        pipe(this, onDisposed(pipeLazy(value, cleanup)));
    }
}
const toAbortSignal = (disposable) => {
    const abortController = newInstance(AbortController);
    addDisposableOrTeardown(disposable, () => abortController.abort());
    return abortController.signal;
};

export { Disposable, DisposableValue, SerialDisposable, add, addTo, bindTo, dispose, disposed, isDisposed, onComplete, onDisposed, onError, toAbortSignal, toErrorHandler };

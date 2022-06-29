/// <reference types="./disposable.d.ts" />
import { pipe, newInstance, instanceFactory, newInstanceWith, pipeLazy } from './functions.mjs';
import { isSome, isNone, none } from './option.mjs';

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
    addDisposableOrTeardown(parent, child, true);
    addDisposableOrTeardown(child, parent, true);
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
/**
 * Abstract base class for implementing the `DisposableLike` interface.
 *
 * @noInheritDoc
 */
class AbstractDisposable {
    constructor() {
        /** @ignore */
        this.isDisposed = false;
        this.disposables = newInstance(Set);
        this._error = none;
    }
    /** @ignore */
    get error() {
        return this._error;
    }
    /** @ignore */
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
    /** @ignore */
    dispose(error) {
        if (!isDisposed(this)) {
            this.isDisposed = true;
            this._error = error;
            const { disposables } = this;
            for (const disposable of disposables) {
                disposables.delete(disposable);
                doDispose(this, disposable);
            }
        }
    }
}
class DisposableImpl extends AbstractDisposable {
}
/**
 * Creates an empty `DisposableLike` instance.
 *
 * @param onDispose Optional teardown logic to attach to the newly created disposable.
 */
const createDisposable = (onDispose) => {
    const disposable = newInstance(DisposableImpl);
    if (isSome(onDispose)) {
        addDisposableOrTeardown(disposable, onDispose);
    }
    return disposable;
};
const _disposed = {
    add(disposable) {
        doDispose(_disposed, disposable);
    },
    error: none,
    isDisposed: true,
    dispose(_) { },
};
/**
 * A disposed `DisposableLike` instance.
 */
const disposed = _disposed;
class SerialDisposableImpl extends AbstractDisposable {
    constructor() {
        super(...arguments);
        this._inner = disposed;
    }
    /** @ignore */
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
 * Creates a new `SerialDisposableLike` instance containing a disposed instance.
 */
const createSerialDisposable = instanceFactory(SerialDisposableImpl);
class DisposableValueImpl extends AbstractDisposable {
    constructor(value) {
        super();
        this.value = value;
    }
}
/**
 * Creates a new DisposableValueLike instance, which applies
 * the supplied `cleanup` side effect to `value` when disposed.
 */
const createDisposableValue = (value, cleanup) => pipe(DisposableValueImpl, newInstanceWith(value), onDisposed(pipeLazy(value, cleanup)));
const toAbortSignal = (disposable) => {
    const abortController = newInstance(AbortController);
    addDisposableOrTeardown(disposable, () => abortController.abort());
    return abortController.signal;
};

export { AbstractDisposable, add, addTo, bindTo, createDisposable, createDisposableValue, createSerialDisposable, dispose, disposed, isDisposed, onComplete, onDisposed, onError, toAbortSignal, toErrorHandler };

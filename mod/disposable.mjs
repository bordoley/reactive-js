/// <reference types="./disposable.d.ts" />
import { pipe, defer } from './functions.mjs';
import { isSome, isNone, none } from './option.mjs';

/**
 * Dispose `disposable` with an optional error.
 */
const dispose = (e) => disposable => {
    disposable.dispose(e);
    return disposable;
};
const addDisposableOrTeardown = (parent, child) => {
    parent.add(child);
};
const bindTo = (child) => (parent) => {
    addDisposableOrTeardown(parent, child);
    addDisposableOrTeardown(child, parent);
    return parent;
};
const addChild = (child) => parent => {
    addDisposableOrTeardown(parent, child);
    return parent;
};
const addToParent = (parent) => child => {
    addDisposableOrTeardown(parent, child);
    return child;
};
const addDisposableOrTeardownDisposeParentOnChildError = (parent, child) => {
    addDisposableOrTeardown(parent, child);
    addDisposableOrTeardown(child, (error) => {
        if (isSome(error)) {
            pipe(parent, dispose(error));
        }
    });
};
const addChildAndDisposeOnError = (child) => (parent) => {
    addDisposableOrTeardownDisposeParentOnChildError(parent, child);
    return parent;
};
const addToParentAndDisposeOnError = (parent) => (child) => {
    addDisposableOrTeardownDisposeParentOnChildError(parent, child);
    return child;
};
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
const doDispose = (self, disposable, error) => {
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
        this.disposables = new Set();
        this._error = none;
    }
    /** @ignore */
    get error() {
        return this._error;
    }
    /** @ignore */
    add(disposable) {
        const { disposables } = this;
        if (this.isDisposed) {
            doDispose(this, disposable, this.error);
        }
        else if (!disposables.has(disposable)) {
            disposables.add(disposable);
            if (!(disposable instanceof Function)) {
                addDisposableOrTeardown(disposable, () => {
                    disposables.delete(disposable);
                });
            }
        }
    }
    /** @ignore */
    dispose(error) {
        if (!this.isDisposed) {
            this.isDisposed = true;
            this._error = error;
            const disposables = this.disposables;
            for (const disposable of disposables) {
                disposables.delete(disposable);
                doDispose(this, disposable, error);
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
    const disposable = new DisposableImpl();
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
/**
 * Abstract base class for implementing the `SerialDisposableLike` interface.
 *
 * @noInheritDoc
 * */
class AbstractSerialDisposable extends AbstractDisposable {
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
            addDisposableOrTeardownDisposeParentOnChildError(this, newInner);
            pipe(oldInner, dispose());
        }
    }
}
class SerialDisposableImpl extends AbstractSerialDisposable {
}
/**
 * Creates a new `SerialDisposableLike` instance containing a disposed instance.
 */
const createSerialDisposable = () => new SerialDisposableImpl();
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
const createDisposableValue = (value, cleanup) => pipe(new DisposableValueImpl(value), onDisposed(defer(value, cleanup)));
const toAbortSignal = (disposable) => {
    const abortController = new AbortController();
    addDisposableOrTeardown(disposable, () => abortController.abort());
    return abortController.signal;
};

export { AbstractDisposable, AbstractSerialDisposable, addChild, addChildAndDisposeOnError, addToParent, addToParentAndDisposeOnError, bindTo, createDisposable, createDisposableValue, createSerialDisposable, dispose, disposed, onComplete, onDisposed, onError, toAbortSignal, toErrorHandler };

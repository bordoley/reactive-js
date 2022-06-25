/// <reference types="./disposable.d.ts" />
import { pipe, defer } from './functions.mjs';
import { isSome, isNone, none } from './option.mjs';

/**
 * Dispose `disposable` with an optional error.
 */
const dispose = (e) => disposable => {
    disposable.dispose(e);
};
/**
 * Add `child` to `parent`, disposing the child when the parent is disposed.
 */
const addDisposable = (parent, child) => {
    parent.add(child);
};
/**
 * Add `teardown` to `parent`, invoking `teardown` when `parent` is disposed.
 */
const addTeardown = (parent, teardown) => {
    parent.add(teardown);
};
/**
 * Add `teardown` to `parent` that is only invoked if `parent` is disposed with an error.
 */
const addOnDisposedWithErrorTeardown = (parent, teardown) => {
    addTeardown(parent, e => {
        if (isSome(e)) {
            teardown.call(parent, e.cause);
        }
    });
};
/**
 * Add `teardown` to `parent` that is only invoked if `parent` is disposed without an error.
 */
const addOnDisposedWithoutErrorTeardown = (parent, teardown) => {
    addTeardown(parent, e => {
        if (isNone(e)) {
            teardown.call(parent);
        }
    });
};
const toDisposeOnErrorTeardown = (disposable) => (error) => {
    if (isSome(error)) {
        pipe(disposable, dispose(error));
    }
};
/**
 * Add `child` to `parent`, only disposing child when `parent` is disposed with an error.
 */
const addOnDisposedWithError = (parent, child) => {
    addTeardown(parent, toDisposeOnErrorTeardown(child));
};
const bindTo = (child) => (parent) => {
    addDisposable(parent, child);
    addDisposable(child, parent);
    return parent;
};
const addDisposableDisposeParentOnChildError = (parent, child) => {
    addDisposable(parent, child);
    addOnDisposedWithError(child, parent);
};
const addChildAndDisposeOnError = (child) => (parent) => {
    addDisposableDisposeParentOnChildError(parent, child);
    return parent;
};
const addToParentAndDisposeOnError = (parent) => (child) => {
    addDisposableDisposeParentOnChildError(parent, child);
    return child;
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
                addTeardown(disposable, () => {
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
        addTeardown(disposable, onDispose);
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
            addDisposableDisposeParentOnChildError(this, newInner);
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
const createDisposableValue = (value, cleanup) => {
    const retval = new DisposableValueImpl(value);
    addTeardown(retval, defer(value, cleanup));
    return retval;
};
const toAbortSignal = (disposable) => {
    const abortController = new AbortController();
    addTeardown(disposable, () => abortController.abort());
    return abortController.signal;
};

export { AbstractDisposable, AbstractSerialDisposable, addChildAndDisposeOnError, addDisposable, addOnDisposedWithError, addOnDisposedWithErrorTeardown, addOnDisposedWithoutErrorTeardown, addTeardown, addToParentAndDisposeOnError, bindTo, createDisposable, createDisposableValue, createSerialDisposable, dispose, disposed, toAbortSignal, toErrorHandler };

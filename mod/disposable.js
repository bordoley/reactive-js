import { defer, pipe } from "./functions.js";
import { isSome, none, isNone } from "./option.js";
export const dispose = (e) => disposable => {
    disposable.dispose(e);
};
export const addDisposable = (parent, child) => {
    parent.add(child);
};
export const addTeardown = (parent, teardown) => {
    parent.add(teardown);
};
export const addOnDisposedWithErrorTeardown = (parent, teardown) => {
    addTeardown(parent, e => {
        if (isSome(e)) {
            teardown(e.cause);
        }
    });
};
export const addOnDisposedWithoutErrorTeardown = (parent, teardown) => {
    addTeardown(parent, e => {
        if (isNone(e)) {
            teardown();
        }
    });
};
export const bindDisposables = (a, b) => {
    addDisposable(a, b);
    addDisposable(b, a);
};
const toDisposeOnErrorTeardown = (disposable) => (error) => {
    if (isSome(error)) {
        pipe(disposable, dispose(error));
    }
};
export const addOnDisposedWithError = (parent, child) => {
    addTeardown(parent, toDisposeOnErrorTeardown(child));
};
export const addDisposableDisposeParentOnChildError = (parent, child) => {
    addDisposable(parent, child);
    addOnDisposedWithError(child, parent);
};
export const addOnDisposedWithoutError = (parent, child) => {
    addTeardown(parent, e => {
        if (isNone(e)) {
            pipe(child, dispose());
        }
    });
};
export const toErrorHandler = (disposable) => cause => pipe(disposable, dispose({ cause }));
const doDispose = (disposable, error) => {
    if (disposable instanceof Function) {
        try {
            disposable(error);
        }
        catch (_) {
        }
    }
    else {
        pipe(disposable, dispose(error));
    }
};
export class AbstractDisposable {
    constructor() {
        this.isDisposed = false;
        this.disposables = new Set();
        this._error = none;
    }
    get error() {
        return this._error;
    }
    add(disposable) {
        const disposables = this.disposables;
        if (this.isDisposed) {
            doDispose(disposable, this.error);
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
    dispose(error) {
        if (!this.isDisposed) {
            this.isDisposed = true;
            this._error = error;
            const disposables = this.disposables;
            for (const disposable of disposables) {
                disposables.delete(disposable);
                doDispose(disposable, error);
            }
        }
    }
}
class DisposableImpl extends AbstractDisposable {
}
export const createDisposable = (onDispose) => {
    const disposable = new DisposableImpl();
    if (isSome(onDispose)) {
        addTeardown(disposable, onDispose);
    }
    return disposable;
};
const _disposed = {
    add(disposable) {
        doDispose(disposable);
    },
    error: none,
    isDisposed: true,
    dispose(_) { },
};
export const disposed = _disposed;
export class AbstractSerialDisposable extends AbstractDisposable {
    constructor() {
        super(...arguments);
        this._inner = disposed;
    }
    get inner() {
        return this._inner;
    }
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
export const createSerialDisposable = () => new SerialDisposableImpl();
class DisposableValueImpl extends AbstractDisposable {
    constructor(value) {
        super();
        this.value = value;
    }
}
export const createDisposableValue = (value, cleanup) => {
    const retval = new DisposableValueImpl(value);
    addTeardown(retval, defer(value, cleanup));
    return retval;
};

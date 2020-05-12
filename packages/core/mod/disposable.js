import { bind } from "./functions.js";
import { isSome, none } from "./option.js";
export const dispose = (disposable, e) => {
    disposable.dispose(e);
};
export const disposeOnError = (disposable) => (error) => {
    if (isSome(error)) {
        dispose(disposable, error);
    }
};
export const toErrorHandler = (disposable) => (cause) => dispose(disposable, { cause });
const doDispose = (disposable, error) => {
    if (disposable instanceof Function) {
        try {
            disposable(error);
        }
        catch (_) {
        }
    }
    else {
        dispose(disposable, error);
    }
};
export class AbstractDisposable {
    constructor() {
        this._isDisposed = false;
        this.disposables = new Set();
        this._error = none;
    }
    get error() {
        return this._error;
    }
    get isDisposed() {
        return this._isDisposed;
    }
    add(disposable) {
        const disposables = this.disposables;
        if (this.isDisposed) {
            doDispose(disposable, this.error);
        }
        else if (!disposables.has(disposable)) {
            disposables.add(disposable);
            if (!(disposable instanceof Function)) {
                disposable.add(() => {
                    disposables.delete(disposable);
                });
            }
        }
        return this;
    }
    dispose(error) {
        if (!this.isDisposed) {
            this._isDisposed = true;
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
        disposable.add(onDispose);
    }
    return disposable;
};
const _disposed = {
    add(disposable) {
        doDispose(disposable);
        return _disposed;
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
            this.add(newInner);
            dispose(oldInner);
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
export const createDisposableValue = (value, cleanup) => new DisposableValueImpl(value).add(bind(cleanup, value));

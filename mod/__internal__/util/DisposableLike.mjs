/// <reference types="./DisposableLike.d.ts" />
import { isNone, isSome } from '../../util/Option.mjs';
import { pipe, newInstance } from '../../util/functions.mjs';
import { MutableRefLike_current } from './MutableRefLike.mjs';
import { decorateProperty, decorateMethod, decorateGetter } from './mixins.mjs';

const DisposableLike_add = Symbol("DisposableLike_add");
const DisposableLike_dispose = Symbol("DisposableLike_dispose");
const DisposableLike_error = Symbol("DisposableLike_error");
const DisposableLike_isDisposed = Symbol("DisposableLike_isDisposed");
const DisposableRefLike_private_current = Symbol("DisposableRefLike_private_current");
const mixinSerialDisposable = (defaultValue) => decorateProperty(MutableRefLike_current, {
    get: function () {
        let current = this[DisposableRefLike_private_current];
        if (isNone(current)) {
            current = defaultValue();
            this[DisposableRefLike_private_current] = current;
            addDisposableOrTeardown(this, current);
        }
        return current;
    },
    set: function (newCurrent) {
        const oldCurrent = this[DisposableRefLike_private_current];
        this[DisposableRefLike_private_current] = newCurrent;
        addDisposableOrTeardown(this, newCurrent);
        if (isSome(oldCurrent) && oldCurrent !== newCurrent) {
            pipe(oldCurrent, dispose());
        }
    },
});
const mixinDelegatingDisposable = (getDelegate) => (Constructor) => pipe(Constructor, decorateMethod(DisposableLike_add, function (disposable, ignoreChildErrors) {
    const delegate = getDelegate(this);
    delegate[DisposableLike_add](disposable, ignoreChildErrors);
}), decorateMethod(DisposableLike_dispose, function (error) {
    const delegate = getDelegate(this);
    delegate[DisposableLike_dispose](error);
}), decorateGetter(DisposableLike_error, function () {
    const delegate = getDelegate(this);
    return delegate[DisposableLike_error];
}), decorateGetter(DisposableLike_isDisposed, function () {
    const delegate = getDelegate(this);
    return delegate[DisposableLike_isDisposed];
}));
const Disposable_private_error = Symbol("Disposable_private_error");
const Disposable_private_isDisposed = Symbol("Disposable_private_isDisposed");
const Disposable_private_disposables = Symbol("Disposable_private_disposables");
const doDispose = (self, disposable) => {
    const error = getError(self);
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
function disposableGetError() {
    return this[Disposable_private_error];
}
function disposableIsDisposed() {
    var _a;
    return (_a = this[Disposable_private_isDisposed]) !== null && _a !== void 0 ? _a : false;
}
function disposableAdd(disposable, ignoreChildErrors) {
    var _a;
    const disposables = (_a = this[Disposable_private_disposables]) !== null && _a !== void 0 ? _a : newInstance(Set);
    this[Disposable_private_disposables] = disposables;
    if (this === disposable) {
        return;
    }
    else if (isDisposed(this)) {
        doDispose(this, disposable);
    }
    else if (!disposables.has(disposable)) {
        disposables.add(disposable);
        if (!(disposable instanceof Function)) {
            disposable[DisposableLike_add](e => {
                disposables.delete(disposable);
                if (isSome(e) && !ignoreChildErrors) {
                    pipe(this, dispose(e));
                }
            }, true);
        }
    }
}
function disposableDispose(error) {
    if (!isDisposed(this)) {
        this[Disposable_private_error] = error;
        this[Disposable_private_isDisposed] = true;
        const disposables = this[Disposable_private_disposables];
        if (isNone(disposables)) {
            return;
        }
        for (const disposable of disposables) {
            disposables.delete(disposable);
            doDispose(this, disposable);
        }
    }
}
const mixinDisposable = () => (Constructor) => pipe(Constructor, decorateGetter(DisposableLike_error, disposableGetError), decorateGetter(DisposableLike_isDisposed, disposableIsDisposed), decorateMethod(DisposableLike_add, disposableAdd), decorateMethod(DisposableLike_dispose, disposableDispose));
const getError = (disposable) => disposable[DisposableLike_error];
const isDisposed = (disposable) => disposable[DisposableLike_isDisposed];
/**
 * Dispose `disposable` with an optional error.
 */
const dispose = (e) => disposable => {
    disposable[DisposableLike_dispose](e);
    return disposable;
};
const addDisposableOrTeardown = (parent, child, ignoreChildErrors = false) => {
    parent[DisposableLike_add](child, ignoreChildErrors);
};

export { DisposableLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, addDisposableOrTeardown, dispose, getError, isDisposed, mixinDelegatingDisposable, mixinDisposable, mixinSerialDisposable };

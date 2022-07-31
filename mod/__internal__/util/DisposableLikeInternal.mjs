/// <reference types="./DisposableLikeInternal.d.ts" />
import { isSome, isNone } from '../../functions.mjs';

const DisposableLike_add = Symbol("DisposableLike_add");
const DisposableLike_dispose = Symbol("DisposableLike_dispose");
const DisposableLike_exception = Symbol("DisposableLike_exception");
const DisposableLike_isDisposed = Symbol("DisposableLike_isDisposed");
/**
 * Dispose `disposable` with an optional error.
 */
const dispose = (e) => disposable => {
    disposable[DisposableLike_dispose](e);
    return disposable;
};
const getException = (disposable) => disposable[DisposableLike_exception];
const isDisposed = (disposable) => disposable[DisposableLike_isDisposed];
const addDisposableOrTeardown = (parent, child, ignoreChildErrors = false) => {
    parent[DisposableLike_add](child, ignoreChildErrors);
};
const bindTo = (child) => (parent) => {
    addDisposableOrTeardown(parent, child);
    addDisposableOrTeardown(child, parent);
    return parent;
};
const add = (child) => (parent) => {
    addDisposableOrTeardown(parent, child);
    return parent;
};
const addIgnoringChildErrors = (child) => (parent) => {
    addDisposableOrTeardown(parent, child, true);
    return parent;
};
const addTo = (parent) => (child) => {
    addDisposableOrTeardown(parent, child);
    return child;
};
const addToIgnoringChildErrors = (parent) => (child) => {
    addDisposableOrTeardown(parent, child, true);
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

export { DisposableLike_add, DisposableLike_dispose, DisposableLike_exception, DisposableLike_isDisposed, add, addDisposableOrTeardown, addIgnoringChildErrors, addTo, addToIgnoringChildErrors, bindTo, dispose, getException, isDisposed, onComplete, onDisposed, onError };

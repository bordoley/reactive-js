/// <reference types="./DisposableLike.d.ts" />
import { prototype, properties, init } from '../__internal__/util/Disposable.mjs';
import { DisposableLike_add, dispose, getError, DisposableLike_error, DisposableLike_isDisposed, DisposableLike_dispose } from '../__internal__/util/DisposableLike.mjs';
export { DisposableLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, dispose, getError, isDisposed } from '../__internal__/util/DisposableLike.mjs';
import { createObjectFactory } from '../__internal__/util/Object.mjs';
import { isSome, isNone, none } from './Option.mjs';
import { pipe, newInstance, ignore } from './functions.mjs';

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
/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
const toErrorHandler = (disposable) => cause => pipe(disposable, dispose({ cause }));
const toAbortSignal = (disposable) => {
    const abortController = newInstance(AbortController);
    addDisposableOrTeardown(disposable, () => abortController.abort());
    return abortController.signal;
};
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
const disposed = {
    [DisposableLike_error]: none,
    [DisposableLike_isDisposed]: true,
    [DisposableLike_add]: function (disposable) {
        doDispose(this, disposable);
    },
    [DisposableLike_dispose]: ignore,
};
const createInstance = /*@__PURE__*/ createObjectFactory(prototype, properties);
const create = () => {
    const instance = createInstance();
    init(instance);
    return instance;
};

export { add, addIgnoringChildErrors, addTo, addToIgnoringChildErrors, bindTo, create, disposed, onComplete, onDisposed, onError, toAbortSignal, toErrorHandler };

/// <reference types="./DisposableLike.d.ts" />
import { createObservable } from '../__internal__/rx/__internal_ObservableLike.create.mjs';
import { add as add$1, addIgnoringChildErrors as addIgnoringChildErrors$1, addTo as addTo$1, addToIgnoringChildErrors as addToIgnoringChildErrors$1, bindTo as bindTo$1, dispose as dispose$1, getException as getException$1, isDisposed as isDisposed$1, onDisposed as onDisposed$1, onComplete as onComplete$1, onError as onError$1 } from '../__internal__/util/__internal__DisposableLike.mjs';
import { createDisposable, disposed as disposed$1 } from '../__internal__/util/__internal__Disposables.mjs';
import { newInstance, pipe, compose } from '../functions.mjs';
import '../util.mjs';

const add = add$1;
const addIgnoringChildErrors = addIgnoringChildErrors$1;
const addTo = addTo$1;
const addToIgnoringChildErrors = addToIgnoringChildErrors$1;
const bindTo = bindTo$1;
const create = createDisposable;
const dispose = dispose$1;
const disposed = disposed$1;
const getException = getException$1;
const isDisposed = isDisposed$1;
const onDisposed = onDisposed$1;
const onComplete = onComplete$1;
const onError = onError$1;
const toAbortSignal = (disposable) => {
    const abortController = newInstance(AbortController);
    pipe(disposable, onDisposed(e => abortController.abort(e === null || e === void 0 ? void 0 : e.cause)));
    return abortController.signal;
};
const toObservable = () => compose(addTo, createObservable);
/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
const toErrorHandler = (disposable) => cause => pipe(disposable, dispose({ cause }));

export { add, addIgnoringChildErrors, addTo, addToIgnoringChildErrors, bindTo, create, dispose, disposed, getException, isDisposed, onComplete, onDisposed, onError, toAbortSignal, toErrorHandler, toObservable };

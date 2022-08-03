/// <reference types="./DisposableLike.d.ts" />
import { addDisposableOrTeardown, addTo, dispose } from '../__internal__/util/DisposableLikeInternal.mjs';
export { add, addIgnoringChildErrors, addTo, addToIgnoringChildErrors, bindTo, dispose, getException, isDisposed, onComplete, onDisposed, onError } from '../__internal__/util/DisposableLikeInternal.mjs';
import { newInstance, pipe } from '../functions.mjs';
import { createHotObservable } from '../rx.mjs';

const toAbortSignal = (disposable) => {
    const abortController = newInstance(AbortController);
    addDisposableOrTeardown(disposable, () => abortController.abort());
    return abortController.signal;
};
const toObservable = () => (disposable) => pipe(disposable, addTo, createHotObservable);
/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
const toErrorHandler = (disposable) => cause => pipe(disposable, dispose({ cause }));

export { toAbortSignal, toErrorHandler, toObservable };

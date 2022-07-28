/// <reference types="./DisposableLike.d.ts" />
import { dispose, addDisposableOrTeardown } from '../__internal__/util/DisposableLikeInternal.mjs';
export { add, addIgnoringChildErrors, addTo, addToIgnoringChildErrors, bindTo, dispose, getError, isDisposed, onComplete, onDisposed, onError } from '../__internal__/util/DisposableLikeInternal.mjs';
import { pipe, newInstance } from '../functions.mjs';

/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
const toErrorHandler = (disposable) => cause => pipe(disposable, dispose({ cause }));
const toAbortSignal = (disposable) => {
    const abortController = newInstance(AbortController);
    addDisposableOrTeardown(disposable, () => abortController.abort());
    return abortController.signal;
};

export { toAbortSignal, toErrorHandler };

/// <reference types="./DisposableLike.d.ts" />
import { DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed } from '../../util.mjs';

/**
 * Dispose `disposable` with an optional error.
 */
const dispose = (e) => disposable => {
    disposable[DisposableLike_dispose](e);
    return disposable;
};
const getError = (disposable) => disposable[DisposableLike_error];
const isDisposed = (disposable) => disposable[DisposableLike_isDisposed];

export { dispose, getError, isDisposed };

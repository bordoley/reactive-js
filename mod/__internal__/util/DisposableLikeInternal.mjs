/// <reference types="./DisposableLikeInternal.d.ts" />
const DisposableLike_add = Symbol("DisposableLike_add");
const DisposableLike_dispose = Symbol("DisposableLike_dispose");
const DisposableLike_error = Symbol("DisposableLike_error");
const DisposableLike_isDisposed = Symbol("DisposableLike_isDisposed");
/**
 * Dispose `disposable` with an optional error.
 */
const dispose = (e) => disposable => {
    disposable[DisposableLike_dispose](e);
    return disposable;
};
const getError = (disposable) => disposable[DisposableLike_error];
const isDisposed = (disposable) => disposable[DisposableLike_isDisposed];

export { DisposableLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, dispose, getError, isDisposed };

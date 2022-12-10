/// <reference types="./DisposableLike.d.ts" />
import '../util.mjs';
import add$1 from './__internal__/DisposableLike/DisposableLike.add.mjs';
import addIgnoringChildErrors$1 from './__internal__/DisposableLike/DisposableLike.addIgnoringChildErrors.mjs';
import addTo$1 from './__internal__/DisposableLike/DisposableLike.addTo.mjs';
import addToIgnoringChildErrors$1 from './__internal__/DisposableLike/DisposableLike.addToIgnoringChildErrors.mjs';
import bindTo$1 from './__internal__/DisposableLike/DisposableLike.bindTo.mjs';
import create$1 from './__internal__/DisposableLike/DisposableLike.create.mjs';
import dispose$1 from './__internal__/DisposableLike/DisposableLike.dispose.mjs';
import disposed$1 from './__internal__/DisposableLike/DisposableLike.disposed.mjs';
import getException$1 from './__internal__/DisposableLike/DisposableLike.getException.mjs';
import isDisposed$1 from './__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import onComplete$1 from './__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import onDisposed$1 from './__internal__/DisposableLike/DisposableLike.onDisposed.mjs';
import onError$1 from './__internal__/DisposableLike/DisposableLike.onError.mjs';
import toAbortSignal$1 from './__internal__/DisposableLike/DisposableLike.toAbortSignal.mjs';
import toErrorHandler$1 from './__internal__/DisposableLike/DisposableLike.toErrorHandler.mjs';
import toObservable$1 from './__internal__/DisposableLike/DisposableLike.toObservable.mjs';

const add = add$1;
const addIgnoringChildErrors = addIgnoringChildErrors$1;
const addTo = addTo$1;
const addToIgnoringChildErrors = addToIgnoringChildErrors$1;
const bindTo = bindTo$1;
const create = create$1;
/**
 * Dispose `disposable` with an optional error.
 */
const dispose = dispose$1;
const disposed = disposed$1;
const getException = getException$1;
const isDisposed = isDisposed$1;
const onComplete = onComplete$1;
const onDisposed = onDisposed$1;
const onError = onError$1;
const toAbortSignal = toAbortSignal$1;
/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
const toErrorHandler = toErrorHandler$1;
const toObservable = toObservable$1;

export { add, addIgnoringChildErrors, addTo, addToIgnoringChildErrors, bindTo, create, dispose, disposed, getException, isDisposed, onComplete, onDisposed, onError, toAbortSignal, toErrorHandler, toObservable };

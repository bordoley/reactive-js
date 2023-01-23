/// <reference types="./DisposableLike.d.ts" />
import '../util.mjs';
import DisposableLike__add from './__internal__/DisposableLike/DisposableLike.add.mjs';
import DisposableLike__addIgnoringChildErrors from './__internal__/DisposableLike/DisposableLike.addIgnoringChildErrors.mjs';
import DisposableLike__addTo from './__internal__/DisposableLike/DisposableLike.addTo.mjs';
import DisposableLike__addToIgnoringChildErrors from './__internal__/DisposableLike/DisposableLike.addToIgnoringChildErrors.mjs';
import DisposableLike__bindTo from './__internal__/DisposableLike/DisposableLike.bindTo.mjs';
import DisposableLike__create from './__internal__/DisposableLike/DisposableLike.create.mjs';
import DisposableLike__dispose from './__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__disposed from './__internal__/DisposableLike/DisposableLike.disposed.mjs';
import DisposableLike__getError from './__internal__/DisposableLike/DisposableLike.getError.mjs';
import DisposableLike__isDisposed from './__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import DisposableLike__onComplete from './__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import DisposableLike__onDisposed from './__internal__/DisposableLike/DisposableLike.onDisposed.mjs';
import DisposableLike__onError from './__internal__/DisposableLike/DisposableLike.onError.mjs';
import DisposableLike__toAbortSignal from './__internal__/DisposableLike/DisposableLike.toAbortSignal.mjs';
import DisposableLike__toErrorHandler from './__internal__/DisposableLike/DisposableLike.toErrorHandler.mjs';
import DisposableLike__toObservable from './__internal__/DisposableLike/DisposableLike.toObservable.mjs';

const add = DisposableLike__add;
const addIgnoringChildErrors = DisposableLike__addIgnoringChildErrors;
const addTo = DisposableLike__addTo;
const addToIgnoringChildErrors = DisposableLike__addToIgnoringChildErrors;
const bindTo = DisposableLike__bindTo;
const create = DisposableLike__create;
/**
 * Dispose `disposable` with an optional error.
 */
const dispose = DisposableLike__dispose;
const disposed = DisposableLike__disposed;
const getError = DisposableLike__getError;
const isDisposed = DisposableLike__isDisposed;
const onComplete = DisposableLike__onComplete;
const onDisposed = DisposableLike__onDisposed;
const onError = DisposableLike__onError;
const toAbortSignal = DisposableLike__toAbortSignal;
/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
const toErrorHandler = DisposableLike__toErrorHandler;
const toObservable = DisposableLike__toObservable;

export { add, addIgnoringChildErrors, addTo, addToIgnoringChildErrors, bindTo, create, dispose, disposed, getError, isDisposed, onComplete, onDisposed, onError, toAbortSignal, toErrorHandler, toObservable };

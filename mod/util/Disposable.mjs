/// <reference types="./Disposable.d.ts" />
import '../util.mjs';
import Disposable$add from './__internal__/Disposable/Disposable.add.mjs';
import Disposable$addIgnoringChildErrors from './__internal__/Disposable/Disposable.addIgnoringChildErrors.mjs';
import Disposable$addTo from './__internal__/Disposable/Disposable.addTo.mjs';
import Disposable$addToIgnoringChildErrors from './__internal__/Disposable/Disposable.addToIgnoringChildErrors.mjs';
import Disposable$bindTo from './__internal__/Disposable/Disposable.bindTo.mjs';
import Disposable$create from './__internal__/Disposable/Disposable.create.mjs';
import Disposable$dispose from './__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$disposed from './__internal__/Disposable/Disposable.disposed.mjs';
import Disposable$getError from './__internal__/Disposable/Disposable.getError.mjs';
import Disposable$isDisposed from './__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable$onComplete from './__internal__/Disposable/Disposable.onComplete.mjs';
import Disposable$onDisposed from './__internal__/Disposable/Disposable.onDisposed.mjs';
import Disposable$onError from './__internal__/Disposable/Disposable.onError.mjs';
import Disposable$toAbortSignal from './__internal__/Disposable/Disposable.toAbortSignal.mjs';
import Disposable$toErrorHandler from './__internal__/Disposable/Disposable.toErrorHandler.mjs';
import Disposable$toObservable from './__internal__/Disposable/Disposable.toObservable.mjs';

const add = Disposable$add;
const addIgnoringChildErrors = Disposable$addIgnoringChildErrors;
const addTo = Disposable$addTo;
const addToIgnoringChildErrors = Disposable$addToIgnoringChildErrors;
const bindTo = Disposable$bindTo;
const create = Disposable$create;
/**
 * Dispose `disposable` with an optional error.
 */
const dispose = Disposable$dispose;
const disposed = Disposable$disposed;
const getError = Disposable$getError;
const isDisposed = Disposable$isDisposed;
const onComplete = Disposable$onComplete;
const onDisposed = Disposable$onDisposed;
const onError = Disposable$onError;
const toAbortSignal = Disposable$toAbortSignal;
/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
const toErrorHandler = Disposable$toErrorHandler;
const toObservable = Disposable$toObservable;

export { add, addIgnoringChildErrors, addTo, addToIgnoringChildErrors, bindTo, create, dispose, disposed, getError, isDisposed, onComplete, onDisposed, onError, toAbortSignal, toErrorHandler, toObservable };

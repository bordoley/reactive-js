/// <reference types="./Disposable.d.ts" />
import '../util.mjs';
import Disposable_add from './__internal__/Disposable/Disposable.add.mjs';
import Disposable_addIgnoringChildErrors from './__internal__/Disposable/Disposable.addIgnoringChildErrors.mjs';
import Disposable_addTo from './__internal__/Disposable/Disposable.addTo.mjs';
import Disposable_addToIgnoringChildErrors from './__internal__/Disposable/Disposable.addToIgnoringChildErrors.mjs';
import Disposable_bindTo from './__internal__/Disposable/Disposable.bindTo.mjs';
import Disposable_create from './__internal__/Disposable/Disposable.create.mjs';
import Disposable_dispose from './__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_disposed from './__internal__/Disposable/Disposable.disposed.mjs';
import Disposable_getError from './__internal__/Disposable/Disposable.getError.mjs';
import Disposable_isDisposed from './__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable_onComplete from './__internal__/Disposable/Disposable.onComplete.mjs';
import Disposable_onDisposed from './__internal__/Disposable/Disposable.onDisposed.mjs';
import Disposable_onError from './__internal__/Disposable/Disposable.onError.mjs';
import Disposable_toAbortSignal from './__internal__/Disposable/Disposable.toAbortSignal.mjs';
import Disposable_toErrorHandler from './__internal__/Disposable/Disposable.toErrorHandler.mjs';
import Disposable_toObservable from './__internal__/Disposable/Disposable.toObservable.mjs';

const add = Disposable_add;
const addIgnoringChildErrors = Disposable_addIgnoringChildErrors;
const addTo = Disposable_addTo;
const addToIgnoringChildErrors = Disposable_addToIgnoringChildErrors;
const bindTo = Disposable_bindTo;
const create = Disposable_create;
/**
 * Dispose `disposable` with an optional error.
 */
const dispose = Disposable_dispose;
const disposed = Disposable_disposed;
const getError = Disposable_getError;
const isDisposed = Disposable_isDisposed;
const onComplete = Disposable_onComplete;
const onDisposed = Disposable_onDisposed;
const onError = Disposable_onError;
const toAbortSignal = Disposable_toAbortSignal;
/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
const toErrorHandler = Disposable_toErrorHandler;
const toObservable = Disposable_toObservable;
/** @ignore */
const Disposable = {
    add,
    addIgnoringChildErrors,
    addTo,
    addToIgnoringChildErrors,
    bindTo,
    create,
    dispose,
    disposed,
    getError,
    isDisposed,
    onComplete,
    onDisposed,
    onError,
    toAbortSignal,
    toErrorHandler,
    toObservable,
};

export { add, addIgnoringChildErrors, addTo, addToIgnoringChildErrors, bindTo, create, Disposable as default, dispose, disposed, getError, isDisposed, onComplete, onDisposed, onError, toAbortSignal, toErrorHandler, toObservable };

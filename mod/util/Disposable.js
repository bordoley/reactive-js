/// <reference types="./Disposable.d.ts" />

import { DisposableLike_error, DisposableLike_isDisposed, } from "../util.js";
import Disposable_add from "./Disposable/__internal__/Disposable.add.js";
import Disposable_addIgnoringChildErrors from "./Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_addTo from "./Disposable/__internal__/Disposable.addTo.js";
import Disposable_addToIgnoringChildErrors from "./Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Disposable_bindTo from "./Disposable/__internal__/Disposable.bindTo.js";
import Disposable_create from "./Disposable/__internal__/Disposable.create.js";
import Disposable_dispose from "./Disposable/__internal__/Disposable.dispose.js";
import Disposable_disposed from "./Disposable/__internal__/Disposable.disposed.js";
import Disposable_getError from "./Disposable/__internal__/Disposable.getError.js";
import Disposable_isDisposed from "./Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_onComplete from "./Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onDisposed from "./Disposable/__internal__/Disposable.onDisposed.js";
import Disposable_onError from "./Disposable/__internal__/Disposable.onError.js";
import Disposable_toAbortSignal from "./Disposable/__internal__/Disposable.toAbortSignal.js";
import Disposable_toErrorHandler from "./Disposable/__internal__/Disposable.toErrorHandler.js";
import Disposable_toObservable from "./Disposable/__internal__/Disposable.toObservable.js";
export const add = Disposable_add;
export const addIgnoringChildErrors = Disposable_addIgnoringChildErrors;
export const addTo = Disposable_addTo;
export const addToIgnoringChildErrors = Disposable_addToIgnoringChildErrors;
export const bindTo = Disposable_bindTo;
export const create = Disposable_create;
/**
 * Dispose `disposable` with an optional error.
 */
export const dispose = Disposable_dispose;
export const disposed = Disposable_disposed;
export const getError = Disposable_getError;
export const isDisposed = Disposable_isDisposed;
export const onComplete = Disposable_onComplete;
export const onDisposed = Disposable_onDisposed;
export const onError = Disposable_onError;
export const toAbortSignal = Disposable_toAbortSignal;
/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
export const toErrorHandler = Disposable_toErrorHandler;
export const toObservable = Disposable_toObservable;
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
export default Disposable;

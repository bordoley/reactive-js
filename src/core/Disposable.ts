import { DisposableLike } from "../core.js";

import Disposable_add from "./Disposable/__internal__/Disposable.add.js";
import Disposable_addTo from "./Disposable/__internal__/Disposable.addTo.js";
import Disposable_bindTo from "./Disposable/__internal__/Disposable.bindTo.js";
import Disposable_create from "./Disposable/__internal__/Disposable.create.js";
import Disposable_disposed from "./Disposable/__internal__/Disposable.disposed.js";
import Disposable_onComplete from "./Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onDisposed from "./Disposable/__internal__/Disposable.onDisposed.js";
import Disposable_onError from "./Disposable/__internal__/Disposable.onError.js";
import Disposable_toAbortSignal from "./Disposable/__internal__/Disposable.toAbortSignal.js";
import Disposable_toErrorHandler from "./Disposable/__internal__/Disposable.toErrorHandler.js";
import Disposable_toObservable from "./Disposable/__internal__/Disposable.toObservable.js";
import Disposable_usingAsync from "./Disposable/__internal__/Disposable.usingAsync.js";

export const add = Disposable_add;

export const addTo = Disposable_addTo;

export const bindTo = Disposable_bindTo;

export const create = Disposable_create;

export const disposed: DisposableLike = Disposable_disposed;

export const onComplete = Disposable_onComplete;

export const onDisposed = Disposable_onDisposed;

export const onError = Disposable_onError;

export const toAbortSignal = Disposable_toAbortSignal;

/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
export const toErrorHandler = Disposable_toErrorHandler;

export const toObservable = Disposable_toObservable;

export const usingAsync = Disposable_usingAsync;

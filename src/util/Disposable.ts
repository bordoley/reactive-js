import { Optional } from "../functions";
import {
  DisposableLike,
  DisposableLike_error,
  DisposableLike_isDisposed,
} from "../util";

import Disposable_add from "./__internal__/Disposable/Disposable.add";
import Disposable_addIgnoringChildErrors from "./__internal__/Disposable/Disposable.addIgnoringChildErrors";
import Disposable_addTo from "./__internal__/Disposable/Disposable.addTo";
import Disposable_addToIgnoringChildErrors from "./__internal__/Disposable/Disposable.addToIgnoringChildErrors";
import Disposable_bindTo from "./__internal__/Disposable/Disposable.bindTo";
import Disposable_create from "./__internal__/Disposable/Disposable.create";
import Disposable_dispose from "./__internal__/Disposable/Disposable.dispose";
import Disposable_disposed from "./__internal__/Disposable/Disposable.disposed";
import Disposable_getError from "./__internal__/Disposable/Disposable.getError";
import Disposable_isDisposed from "./__internal__/Disposable/Disposable.isDisposed";
import Disposable_onComplete from "./__internal__/Disposable/Disposable.onComplete";
import Disposable_onDisposed from "./__internal__/Disposable/Disposable.onDisposed";
import Disposable_onError from "./__internal__/Disposable/Disposable.onError";
import Disposable_toAbortSignal from "./__internal__/Disposable/Disposable.toAbortSignal";
import Disposable_toErrorHandler from "./__internal__/Disposable/Disposable.toErrorHandler";
import Disposable_toObservable from "./__internal__/Disposable/Disposable.toObservable";

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

export const disposed: DisposableLike = Disposable_disposed;

export const getError: (disposable: {
  [DisposableLike_error]: Optional<Error>;
}) => Optional<Error> = Disposable_getError;

export const isDisposed: (disposable: {
  [DisposableLike_isDisposed]: boolean;
}) => boolean = Disposable_isDisposed;

export const onComplete = Disposable_onComplete;

export const onDisposed = Disposable_onDisposed;

export const onError = Disposable_onError;

export const toAbortSignal = Disposable_toAbortSignal;

/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
export const toErrorHandler = Disposable_toErrorHandler;

export const toObservable = Disposable_toObservable;

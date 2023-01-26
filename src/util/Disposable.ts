import { Optional } from "../functions";
import {
  DisposableLike,
  DisposableLike_error,
  DisposableLike_isDisposed,
} from "../util";

import Disposable$add from "./__internal__/Disposable/Disposable.add";
import Disposable$addIgnoringChildErrors from "./__internal__/Disposable/Disposable.addIgnoringChildErrors";
import Disposable$addTo from "./__internal__/Disposable/Disposable.addTo";
import Disposable$addToIgnoringChildErrors from "./__internal__/Disposable/Disposable.addToIgnoringChildErrors";
import Disposable$bindTo from "./__internal__/Disposable/Disposable.bindTo";
import Disposable$create from "./__internal__/Disposable/Disposable.create";
import Disposable$dispose from "./__internal__/Disposable/Disposable.dispose";
import Disposable$disposed from "./__internal__/Disposable/Disposable.disposed";
import Disposable$getError from "./__internal__/Disposable/Disposable.getError";
import Disposable$isDisposed from "./__internal__/Disposable/Disposable.isDisposed";
import Disposable$onComplete from "./__internal__/Disposable/Disposable.onComplete";
import Disposable$onDisposed from "./__internal__/Disposable/Disposable.onDisposed";
import Disposable$onError from "./__internal__/Disposable/Disposable.onError";
import Disposable$toAbortSignal from "./__internal__/Disposable/Disposable.toAbortSignal";
import Disposable$toErrorHandler from "./__internal__/Disposable/Disposable.toErrorHandler";
import Disposable$toObservable from "./__internal__/Disposable/Disposable.toObservable";

export const add = Disposable$add;

export const addIgnoringChildErrors = Disposable$addIgnoringChildErrors;

export const addTo = Disposable$addTo;

export const addToIgnoringChildErrors = Disposable$addToIgnoringChildErrors;

export const bindTo = Disposable$bindTo;

export const create = Disposable$create;

/**
 * Dispose `disposable` with an optional error.
 */
export const dispose = Disposable$dispose;

export const disposed: DisposableLike = Disposable$disposed;

export const getError: (disposable: {
  [DisposableLike_error]: Optional<Error>;
}) => Optional<Error> = Disposable$getError;

export const isDisposed: (disposable: {
  [DisposableLike_isDisposed]: boolean;
}) => boolean = Disposable$isDisposed;

export const onComplete = Disposable$onComplete;

export const onDisposed = Disposable$onDisposed;

export const onError = Disposable$onError;

export const toAbortSignal = Disposable$toAbortSignal;

/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
export const toErrorHandler = Disposable$toErrorHandler;

export const toObservable = Disposable$toObservable;

import { Optional } from "../functions";
import {
  DisposableLike,
  DisposableLike_error,
  DisposableLike_isDisposed,
} from "../util";

import DisposableLike__add from "./__internal__/DisposableLike/DisposableLike.add";
import DisposableLike__addIgnoringChildErrors from "./__internal__/DisposableLike/DisposableLike.addIgnoringChildErrors";
import DisposableLike__addTo from "./__internal__/DisposableLike/DisposableLike.addTo";
import DisposableLike__addToIgnoringChildErrors from "./__internal__/DisposableLike/DisposableLike.addToIgnoringChildErrors";
import DisposableLike__bindTo from "./__internal__/DisposableLike/DisposableLike.bindTo";
import DisposableLike__create from "./__internal__/DisposableLike/DisposableLike.create";
import DisposableLike__dispose from "./__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__disposed from "./__internal__/DisposableLike/DisposableLike.disposed";
import DisposableLike__getError from "./__internal__/DisposableLike/DisposableLike.getError";
import DisposableLike__isDisposed from "./__internal__/DisposableLike/DisposableLike.isDisposed";
import DisposableLike__onComplete from "./__internal__/DisposableLike/DisposableLike.onComplete";
import DisposableLike__onDisposed from "./__internal__/DisposableLike/DisposableLike.onDisposed";
import DisposableLike__onError from "./__internal__/DisposableLike/DisposableLike.onError";
import DisposableLike__toAbortSignal from "./__internal__/DisposableLike/DisposableLike.toAbortSignal";
import DisposableLike__toErrorHandler from "./__internal__/DisposableLike/DisposableLike.toErrorHandler";
import DisposableLike__toObservable from "./__internal__/DisposableLike/DisposableLike.toObservable";

export const add = DisposableLike__add;

export const addIgnoringChildErrors = DisposableLike__addIgnoringChildErrors;

export const addTo = DisposableLike__addTo;

export const addToIgnoringChildErrors =
  DisposableLike__addToIgnoringChildErrors;

export const bindTo = DisposableLike__bindTo;

export const create = DisposableLike__create;

/**
 * Dispose `disposable` with an optional error.
 */
export const dispose = DisposableLike__dispose;

export const disposed: DisposableLike = DisposableLike__disposed;

export const getError: (disposable: {
  [DisposableLike_error]: Optional<Error>;
}) => Optional<Error> = DisposableLike__getError;

export const isDisposed: (disposable: {
  [DisposableLike_isDisposed]: boolean;
}) => boolean = DisposableLike__isDisposed;

export const onComplete = DisposableLike__onComplete;

export const onDisposed = DisposableLike__onDisposed;

export const onError = DisposableLike__onError;

export const toAbortSignal = DisposableLike__toAbortSignal;

/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
export const toErrorHandler = DisposableLike__toErrorHandler;

export const toObservable = DisposableLike__toObservable;

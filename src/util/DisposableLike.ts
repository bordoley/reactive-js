import { Option } from "../functions";
import {
  DisposableLike,
  DisposableLike_exception,
  DisposableLike_isDisposed,
  Exception,
} from "../util";

import { add as DisposableLike__add } from "./__internal__/DisposableLike/DisposableLike.add";
import { addIgnoringChildErrors as DisposableLike__addIgnoringChildErrors } from "./__internal__/DisposableLike/DisposableLike.addIgnoringChildErrors";
import { addTo as DisposableLike__addTo } from "./__internal__/DisposableLike/DisposableLike.addTo";
import { addToIgnoringChildErrors as DisposableLike__addToIgnoringChildErrors } from "./__internal__/DisposableLike/DisposableLike.addToIgnoringChildErrors";
import { bindTo as DisposableLike__bindTo } from "./__internal__/DisposableLike/DisposableLike.bindTo";
import { create as DisposableLike__create } from "./__internal__/DisposableLike/DisposableLike.create";
import { dispose as DisposableLike__dispose } from "./__internal__/DisposableLike/DisposableLike.dispose";
import { disposed as DisposableLike__disposed } from "./__internal__/DisposableLike/DisposableLike.disposed";
import { getException as DisposableLike__getException } from "./__internal__/DisposableLike/DisposableLike.getException";
import { isDisposed as DisposableLike__isDisposed } from "./__internal__/DisposableLike/DisposableLike.isDisposed";
import { onComplete as DisposableLike__onComplete } from "./__internal__/DisposableLike/DisposableLike.onComplete";
import { onDisposed as DisposableLike__onDisposed } from "./__internal__/DisposableLike/DisposableLike.onDisposed";
import { onError as DisposableLike__onError } from "./__internal__/DisposableLike/DisposableLike.onError";
import { toAbortSignal as DisposableLike__toAbortSignal } from "./__internal__/DisposableLike/DisposableLike.toAbortSignal";
import { toErrorHandler as DisposableLike__toErrorHandler } from "./__internal__/DisposableLike/DisposableLike.toErrorHandler";
import { toObservable as DisposableLike__toObservable } from "./__internal__/DisposableLike/DisposableLike.toObservable";

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

export const getException: (disposable: {
  [DisposableLike_exception]: Option<Exception>;
}) => Option<Exception> = DisposableLike__getException;

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

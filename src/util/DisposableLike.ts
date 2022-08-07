import {
  addIgnoringChildErrors as addIgnoringChildErrorsInternal,
  add as addInternal,
  addToIgnoringChildErrors as addToIgnoringChildErrorsInternal,
  addTo as addToInternal,
  bindTo as bindToInternal,
  dispose as disposeInternal,
  getException as getExceptionInternal,
  isDisposed as isDisposedInternal,
  onComplete as onCompleteInternal,
  onDisposed as onDisposedInternal,
  onError as onErrorInternal,
} from "../__internal__/util/DisposableLikeInternal";
import { Option, SideEffect1, newInstance, pipe } from "../functions";
import { ObservableLike, createObservable } from "../rx";
import {
  DisposableLike,
  DisposableLike_exception,
  DisposableLike_isDisposed,
  Exception,
} from "../util";

export const add = addInternal;
export const addIgnoringChildErrors = addIgnoringChildErrorsInternal;
export const addTo = addToInternal;
export const addToIgnoringChildErrors = addToIgnoringChildErrorsInternal;
export const bindTo = bindToInternal;
export const dispose = disposeInternal;
export const getException: (disposable: {
  [DisposableLike_exception]: Option<Exception>;
}) => Option<Exception> = getExceptionInternal;
export const isDisposed: (disposable: {
  [DisposableLike_isDisposed]: boolean;
}) => boolean = isDisposedInternal;
export const onDisposed = onDisposedInternal;
export const onComplete = onCompleteInternal;
export const onError = onErrorInternal;

export const toAbortSignal = (disposable: DisposableLike): AbortSignal => {
  const abortController = newInstance(AbortController);
  pipe(
    disposable,
    onDisposed(e => abortController.abort(e?.cause)),
  );
  return abortController.signal;
};

export const toObservable =
  <T>() =>
  (disposable: DisposableLike): ObservableLike<T> =>
    pipe(disposable, addTo, createObservable);

/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
export const toErrorHandler =
  (disposable: DisposableLike): SideEffect1<unknown> =>
  cause =>
    pipe(disposable, dispose({ cause }));

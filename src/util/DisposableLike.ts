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
} from "../__internal__/util/__internal__DisposableLike";
import {
  Option,
  SideEffect,
  SideEffect1,
  Updater,
  newInstance,
  pipe,
} from "../functions";
import { ObservableLike, createObservable } from "../rx";
import {
  DisposableLike,
  DisposableLike_exception,
  DisposableLike_isDisposed,
  Exception,
} from "../util";

export const add: <T extends DisposableLike>(
  child: DisposableLike,
) => (parent: T) => T = addInternal;
export const addIgnoringChildErrors: <T extends DisposableLike>(
  child: DisposableLike,
) => (parent: T) => T = addIgnoringChildErrorsInternal;
export const addTo: <T extends DisposableLike>(
  parent: DisposableLike,
) => Updater<T> = addToInternal;
export const addToIgnoringChildErrors: <T extends DisposableLike>(
  parent: DisposableLike,
) => Updater<T> = addToIgnoringChildErrorsInternal;
export const bindTo: <T extends DisposableLike>(
  parent: DisposableLike,
) => Updater<T> = bindToInternal;
export const dispose: <T extends DisposableLike>(e?: Exception) => Updater<T> =
  disposeInternal;
export const getException: (disposable: {
  [DisposableLike_exception]: Option<Exception>;
}) => Option<Exception> = getExceptionInternal;
export const isDisposed: (disposable: {
  [DisposableLike_isDisposed]: boolean;
}) => boolean = isDisposedInternal;
export const onDisposed: <T extends DisposableLike>(
  teardown: SideEffect1<Option<Exception>>,
) => Updater<T> = onDisposedInternal;
export const onComplete: <T extends DisposableLike>(
  teardown: SideEffect,
) => Updater<T> = onCompleteInternal;
export const onError: <T extends DisposableLike>(
  teardown: SideEffect1<Exception>,
) => Updater<T> = onErrorInternal;

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

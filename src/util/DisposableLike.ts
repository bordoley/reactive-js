import { createObservable } from "../__internal__/rx/ObservableLike.create";
import {
  createDisposable as createDisposableInternal,
  disposed as disposedInternal,
} from "../__internal__/util/DisposableLike.create";
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
} from "../__internal__/util/DisposableLike.operators";
import {
  Factory,
  Function1,
  Option,
  SideEffect,
  SideEffect1,
  Updater,
  compose,
  newInstance,
  pipe,
} from "../functions";
import { ObservableLike } from "../rx";
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
export const create: Factory<DisposableLike> = createDisposableInternal;
export const dispose: <T extends DisposableLike>(e?: Exception) => Updater<T> =
  disposeInternal;
export const disposed: DisposableLike = disposedInternal;
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

export const toObservable = <T>(): Function1<
  DisposableLike,
  ObservableLike<T>
> => compose(addTo, createObservable);

/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
export const toErrorHandler =
  (disposable: DisposableLike): SideEffect1<unknown> =>
  cause =>
    pipe(disposable, dispose({ cause }));

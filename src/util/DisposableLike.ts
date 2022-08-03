import {
  addDisposableOrTeardown,
  addTo,
  dispose,
} from "../__internal__/util/DisposableLikeInternal";
import { SideEffect1, newInstance, pipe } from "../functions";
import { HotObservableLike, createHotObservable } from "../rx";
import { DisposableLike } from "../util";

export const toAbortSignal = (disposable: DisposableLike): AbortSignal => {
  const abortController = newInstance(AbortController);
  addDisposableOrTeardown(disposable, () => abortController.abort());
  return abortController.signal;
};

export const toObservable =
  <T>() =>
  (disposable: DisposableLike): HotObservableLike<T> =>
    pipe(disposable, addTo, createHotObservable);

/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
export const toErrorHandler =
  (disposable: DisposableLike): SideEffect1<unknown> =>
  cause =>
    pipe(disposable, dispose({ cause }));

export {
  add,
  addIgnoringChildErrors,
  addTo,
  addToIgnoringChildErrors,
  bindTo,
  dispose,
  getException,
  isDisposed,
  onDisposed,
  onComplete,
  onError,
} from "../__internal__/util/DisposableLikeInternal";

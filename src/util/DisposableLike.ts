import {
  addDisposableOrTeardown,
  dispose,
} from "../__internal__/util/DisposableLikeInternal";
import { SideEffect1, newInstance, pipe } from "../functions";
import { DisposableLike } from "../util";

/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
export const toErrorHandler =
  (disposable: DisposableLike): SideEffect1<unknown> =>
  cause =>
    pipe(disposable, dispose({ cause }));

export const toAbortSignal = (disposable: DisposableLike): AbortSignal => {
  const abortController = newInstance(AbortController);
  addDisposableOrTeardown(disposable, () => abortController.abort());
  return abortController.signal;
};

export {
  add,
  addIgnoringChildErrors,
  addTo,
  addToIgnoringChildErrors,
  bindTo,
  dispose,
  getError,
  isDisposed,
  onDisposed,
  onComplete,
  onError,
} from "../__internal__/util/DisposableLikeInternal";

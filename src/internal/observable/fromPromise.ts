import { toErrorHandler, dispose } from "../../disposable";
import { Factory } from "../../functions";
import { dispatch } from "./dispatcher";
import { ObservableLike } from "./interfaces";
import { defer } from "./observable";
import { toDispatcher } from "./toDispatcher";

/**
 * Converts a `Promise` to an `ObservableLike`. The provided promise factory
 * is invoked for each observer to the observable.
 *
 * @param factory Factory function to create a new `Promise` instance.
 */
export const fromPromise = <T>(
  factory: Factory<Promise<T>>,
): ObservableLike<T> =>
  defer(() => observer => {
    const dispatcher = toDispatcher(observer);

    factory().then(next => {
      if (!dispatcher.isDisposed) {
        dispatch(dispatcher, next);
        dispose(dispatcher);
      }
    }, toErrorHandler(dispatcher));
  });

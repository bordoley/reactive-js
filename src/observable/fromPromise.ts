import { dispose, toErrorHandler } from "../disposable";
import { Factory, pipe } from "../functions";
import { ObservableLike } from "../observable";
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
  defer(observer => () => {
    const dispatcher = toDispatcher(observer);

    factory().then(next => {
      if (!dispatcher.isDisposed) {
        dispatcher.dispatch(next);
        pipe(dispatcher, dispose());
      }
    }, toErrorHandler(dispatcher));
  });

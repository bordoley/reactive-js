import { toErrorHandler, dispose } from "../../disposable.ts";
import { Factory, pipe } from "../../functions.ts";
import { ObservableLike } from "./interfaces.ts";
import { defer } from "./observable.ts";
import { toDispatcher } from "./toDispatcher.ts";

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
        dispatcher.dispatch(next);
        pipe(dispatcher, dispose());
      }
    }, toErrorHandler(dispatcher));
  });

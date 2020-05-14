import { toErrorHandler, dispose } from "../../disposable";
import { Factory } from "../../functions";
import { createObservable } from "./createObservable";
import { dispatch } from "./dispatcher";
import { ObservableLike, DispatcherLike } from "./interfaces";

/**
 * Converts a `Promise` to an `ObservableLike`. The provided promise factory
 * is invoked for each observer to the observable.
 *
 * @param factory Factory function to create a new `Promise` instance.
 */
export const fromPromise = <T>(
  factory: Factory<Promise<T>>,
): ObservableLike<T> => {
  const onSubscribe = (dispatcher: DispatcherLike<T>) => {
    factory().then(next => {
      if (!dispatcher.isDisposed) {
        dispatch(dispatcher, next);
        dispose(dispatcher);
      }
    }, toErrorHandler(dispatcher));
  };

  return createObservable(onSubscribe);
};

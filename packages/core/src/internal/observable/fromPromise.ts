import { createObservable } from "./createObservable";
import { ObservableLike, DispatcherLike } from "./interfaces";
import { toErrorHandler, dispose } from "../../disposable";
import { Factory } from "../../functions";
import { dispatch } from "./dispatcher";

/**
 * Converts a `Promise` to an `ObservableLike`. The provided promise factory
 * is invoked for each subscriber to the observable.
 *
 * @param factory Factory function to create a new `Promise` instance.
 */
export const fromPromise = <T>(
  factory: Factory<Promise<T>>,
): ObservableLike<T> => {
  const onSubscribe = (dispatcher: DispatcherLike<T>) => {
    factory().then(
      next => {
        if (!dispatcher.isDisposed) {
          dispatch(dispatcher, next);
          dispose(dispatcher);
        }
      },
      toErrorHandler(dispatcher),
    );
  };

  return createObservable(onSubscribe);
};

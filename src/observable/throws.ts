import { dispose } from "../disposable";
import { Factory, Function1, pipe } from "../functions";
import { ObservableLike, ObserverLike } from "../observable";
import { none } from "../option";
import { defer, deferSynchronous } from "./observable";

/**
 * Creates an `ObservableLike` that emits no items and immediately disposes its subscription with an error.
 *
 * @param factory Factory function to generate the error to emit.
 * @param delay The delay before disposing the subscription.
 */
export const throws = <T>(
  options: { readonly delay?: number } = {},
): Function1<Factory<unknown>, ObservableLike<T>> => errorFactory => {
  const { delay = 0 } = options;
  const factory = (observer: ObserverLike<T>) => () => {
    let cause: unknown = none;
    try {
      cause = errorFactory();
    } catch (e) {
      cause = e;
    }
    pipe(observer, dispose({ cause }));
  };

  return delay > 0 ? defer(factory, options) : deferSynchronous(factory);
};

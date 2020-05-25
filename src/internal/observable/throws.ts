import { dispose } from "../../disposable";
import { Function1, Factory } from "../../functions";
import { none } from "../../option";
import { ObservableLike, ObserverLike } from "./interfaces";
import { deferSynchronous, defer } from "./observable";

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
  const factory = () => (observer: ObserverLike<T>) => {
    let cause: unknown = none;
    try {
      cause = errorFactory();
    } catch (e) {
      cause = e;
    }
    dispose(observer, { cause });
  };

  return delay > 0 ? defer(factory, options) : deferSynchronous(factory);
};

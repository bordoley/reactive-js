import { dispose } from "../../disposable.ts";
import { Function1, Factory, pipe } from "../../functions.ts";
import { none } from "../../option.ts";
import { ObservableLike, ObserverLike } from "./interfaces.ts";
import { deferSynchronous, defer } from "./observable.ts";

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
    pipe(observer, dispose({ cause }));
  };

  return delay > 0 ? defer(factory, options) : deferSynchronous(factory);
};

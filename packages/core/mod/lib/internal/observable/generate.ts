import { Factory, Updater } from "../../functions.ts";
import { YieldableLike } from "../scheduler/interfaces.ts";
import { ObservableLike, ObserverLike } from "./interfaces.ts";
import {
  createScheduledObservable,
  createDelayedScheduledObservable,
} from "./observable.ts";

/**
 * Generates an `ObservableLike` sequence from a generator function
 * that is applied to an accumulator value with a specified `delay`
 * between emitted items.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 * @param delay The requested delay between emitted items by the observable.
 */
export function generate<T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
  options: { delay: number } = { delay: 0 },
): ObservableLike<T> {
  const factory = (observer: ObserverLike<T>) => {
    let acc = initialValue();

    return ($: YieldableLike) => {
      let observerIsDisposed = observer.isDisposed;

      while (!observerIsDisposed) {
        acc = generator(acc);
        observer.notify(acc);

        observerIsDisposed = observer.isDisposed;
        if (!observerIsDisposed) {
          $.yield(options);
        }
      }
      observer.dispose();
    };
  };

  const { delay } = options;
  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
}

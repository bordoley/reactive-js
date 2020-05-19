import { Factory, Updater } from "../../functions.ts";
import { ObservableLike, ObserverLike } from "./interfaces.ts";
import {
  createScheduledObservable,
  createDelayedScheduledObservable,
} from "./observable.ts";
import { yield$ } from "./observer.ts";

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
  const factory = () => {
    let acc = initialValue();

    return (observer: ObserverLike<T>) => {
      while (true) {
        acc = generator(acc);
        yield$(observer, acc, delay);
      }
    };
  };

  const { delay } = options;
  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
}

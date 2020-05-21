import { Factory, Updater } from "../../functions";
import { ObservableLike, ObserverLike } from "./interfaces";
import { deferSynchronous, defer } from "./observable";
import { yield$ } from "./observer";

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
  const { delay } = options;

  const factory = () => {
    let acc = initialValue();

    return (observer: ObserverLike<T>) => {
      while (true) {
        acc = generator(acc);
        yield$(observer, acc, delay);
      }
    };
  };

  return delay > 0 ? defer(factory, options) : deferSynchronous(factory);
}

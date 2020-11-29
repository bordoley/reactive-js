import { Factory, Updater } from "../functions";
import { ObservableLike, ObserverLike } from "../observable";
import { defer, deferSynchronous } from "./observable";
import { __yield } from "./observer";

/**
 * Generates an `ObservableLike` sequence from a generator function
 * that is applied to an accumulator value with a specified `delay`
 * between emitted items.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 * @param delay The requested delay between emitted items by the observable.
 */
export const generate = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
  options: { readonly delay?: number } = {},
): ObservableLike<T> => {
  const { delay = 0 } = options;

  const factory = () => {
    let acc = initialValue();

    return (observer: ObserverLike<T>) => {
      while (true) {
        acc = generator(acc);
        __yield(observer, acc, delay);
      }
    };
  };

  return delay > 0 ? defer(factory, options) : deferSynchronous(factory);
};

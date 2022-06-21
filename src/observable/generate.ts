import { Factory, Updater } from "../functions";
import { ObservableLike } from "../observable";
import { __yield } from "../scheduler";
import { defer, deferSynchronous } from "./observable";
import { Observer } from "./observer";

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

  const factory = (observer: Observer<T>) => {
    let acc = initialValue();

    return () => {
      while (true) {
        acc = generator(acc);
        observer.notify(acc);
        __yield(delay);
      }
    };
  };

  return delay > 0 ? defer(factory, options) : deferSynchronous(factory);
};

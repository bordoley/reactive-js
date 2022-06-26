import { Generate } from "../container";
import { Factory, Updater } from "../functions";
import { ObservableLike } from "../observable";
import { __yield } from "../scheduler";
import { defer } from "./defer";
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
  const { delay = Math.max(options.delay ?? 0, 0) } = options;

  const factory = () => {
    let acc = initialValue();

    return (observer: Observer<T>) => {
      while (true) {
        acc = generator(acc);
        observer.notify(acc);
        __yield(delay);
      }
    };
  };

  const observable = defer(factory, options);
  (observable as any).isEnumerable = delay === 0;
  return observable;
};

export const generateT: Generate<ObservableLike<unknown>> = {
  generate,
};

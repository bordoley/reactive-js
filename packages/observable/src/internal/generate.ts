import { isSome } from "@reactive-js/option";
import { alwaysTrue } from "./functions";
import { ObservableLike, SubscriberLike } from "./interfaces";
import {
  createScheduledObservable,
  createDelayedScheduledObservable,
} from "./observable";
import { AbstractProducer } from "./producer";

class GenerateProducer<T> extends AbstractProducer<T> {
  constructor(
    subscriber: SubscriberLike<T>,
    private readonly generator: (acc: T) => T,
    private acc: T,
    private readonly delay: number,
  ) {
    super(subscriber);
  }

  produce(shouldYield?: () => boolean): number {
    const generator = this.generator;
    const delay = this.delay;

    let acc = this.acc;
    let isDisposed = this.isDisposed;

    if (delay > 0 || isSome(shouldYield)) {
      shouldYield = shouldYield || alwaysTrue;

      while (!isDisposed) {
        this.notify(acc);

        isDisposed = this.isDisposed;
        if (!isDisposed) {
          acc = generator(acc);
        }

        if (!isDisposed && (delay > 0 || shouldYield())) {
          this.acc = acc;
          return delay;
        }
      }
    } else {
      while (!isDisposed) {
        this.notify(acc);

        isDisposed = this.isDisposed;
        if (!isDisposed) {
          acc = generator(acc);
        }
      }
    }
    return delay;
  }
}

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
  generator: (acc: T) => T,
  initialValue: () => T,
  delay = 0,
): ObservableLike<T> {
  const factory = (subscriber: SubscriberLike<T>) =>
    new GenerateProducer(subscriber, generator, initialValue(), delay);

  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
}

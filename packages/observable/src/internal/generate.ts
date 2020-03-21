import { ObservableLike, SubscriberLike } from "./interfaces";
import { createScheduledObservable } from "./observable";
import { AbstractProducer } from "./producer";

class GenerateProducer<T> extends AbstractProducer<T> {
  constructor(
    subscriber: SubscriberLike<T>,
    private readonly generator: (acc: T) => T,
    private acc: T,
    readonly delay: number,
  ) {
    super(subscriber);
  }

  produce(shouldYield?: () => boolean) {
    const generator = this.generator;

    let acc = this.acc;
    if (this.delay > 0 && !this.isDisposed) {
      this.notify(acc);
      this.acc = generator(acc);
      return;
    } else if (shouldYield !== undefined) {
      while (!this.isDisposed) {
        this.notify(acc);
        acc = generator(acc);

        if (shouldYield()) {
          this.acc = acc;
          return;
        }
      }
    } else {
      while (!this.isDisposed) {
        this.notify(acc);
        acc = generator(acc);
      }
    }

    this.dispose();
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

  return createScheduledObservable(factory, delay === 0);
}

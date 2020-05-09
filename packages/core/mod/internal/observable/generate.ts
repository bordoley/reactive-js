import { SchedulerLike } from "../../scheduler.ts";
import { ObservableLike, SubscriberLike } from "./interfaces.ts";
import {
  createScheduledObservable,
  createDelayedScheduledObservable,
} from "./observable.ts";
import { AbstractProducer } from "./producer.ts";

class GenerateProducer<T> extends AbstractProducer<T> {
  constructor(
    subscriber: SubscriberLike<T>,
    private readonly generator: (acc: T) => T,
    private acc: T,
    private readonly delay: number,
  ) {
    super(subscriber);
  }

  produce(scheduler: SchedulerLike) {
    const generator = this.generator;
    const delay = this.delay;

    let acc = this.acc;
    let isDisposed = this.isDisposed;

    while (!isDisposed) {
      this.notify(acc);

      isDisposed = this.isDisposed;
      if (!isDisposed) {
        acc = generator(acc);
      }

      if (!isDisposed && (delay > 0 || scheduler.shouldYield())) {
        this.acc = acc;
        scheduler.schedule(this, delay);
        return;
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
  { delay }: { delay: number } = { delay: 0 },
): ObservableLike<T> {
  const factory = (subscriber: SubscriberLike<T>) =>
    new GenerateProducer(subscriber, generator, initialValue(), delay);

  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
}

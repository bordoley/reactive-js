import { SchedulerLike } from "../../scheduler";
import { ObservableLike, SubscriberLike } from "./interfaces";
import {
  createScheduledObservable,
  createDelayedScheduledObservable,
} from "./observable";
import { AbstractProducer } from "./producer";
import { dispose } from "../../disposable";
import { Factory, Generator } from "../../functions";

class GenerateProducer<T> extends AbstractProducer<T> {
  constructor(
    subscriber: SubscriberLike<T>,
    private readonly generator: Generator<T>,
    private acc: T,
    readonly delay: number,
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
        scheduler.schedule(this, this);
        return;
      }
    }

    dispose(this);
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
  generator: Generator<T>,
  initialValue: Factory<T>,
  { delay }: { delay: number } = { delay: 0 },
): ObservableLike<T> {
  const factory = (subscriber: SubscriberLike<T>) =>
    new GenerateProducer(subscriber, generator, initialValue(), delay);

  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
}

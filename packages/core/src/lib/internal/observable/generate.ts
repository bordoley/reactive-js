import { dispose } from "../../disposable";
import { Factory, Generator } from "../../functions";
import { SchedulerLike, schedule } from "../../scheduler";
import { ObservableLike, ObserverLike } from "./interfaces";
import {
  createScheduledObservable,
  createDelayedScheduledObservable,
} from "./observable";
import { AbstractProducer } from "./producer";

class GenerateProducer<T> extends AbstractProducer<T> {
  constructor(
    observer: ObserverLike<T>,
    private readonly generator: Generator<T>,
    private acc: T,
    readonly delay: number,
  ) {
    super(observer);
  }

  continueUnsafe(scheduler: SchedulerLike) {
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
        schedule(scheduler, this, this);
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
  const factory = (observer: ObserverLike<T>) =>
    new GenerateProducer(observer, generator, initialValue(), delay);

  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
}

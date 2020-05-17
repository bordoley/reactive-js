import { dispose } from "../../disposable.ts";
import { Factory, Updater } from "../../functions.ts";
import { SchedulerLike, schedule } from "../../scheduler.ts";
import { ObservableLike, ObserverLike } from "./interfaces.ts";
import {
  createScheduledObservable,
  createDelayedScheduledObservable,
} from "./observable.ts";
import { AbstractProducer } from "./producer.ts";

class GenerateProducer<T> extends AbstractProducer<T> {
  constructor(
    observer: ObserverLike<T>,
    private readonly generator: Updater<T>,
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
      acc = generator(acc);
      this.notify(acc);

      isDisposed = this.isDisposed;
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
  generator: Updater<T>,
  initialValue: Factory<T>,
  { delay }: { delay: number } = { delay: 0 },
): ObservableLike<T> {
  const factory = (observer: ObserverLike<T>) =>
    new GenerateProducer(observer, generator, initialValue(), delay);

  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
}

import { ErrorLike } from "@reactive-js/disposable";
import { SchedulerContinuationLike } from "@reactive-js/scheduler";
import { ObservableLike, SubscriberLike } from "./interfaces";
import { observableMixin } from "./observable";
import { producerMixin } from "./producer";

class ThrowsProducer<T> implements SchedulerContinuationLike {
  readonly run = producerMixin.run;

  constructor(
    private readonly subscriber: SubscriberLike<T>,
    private readonly error: ErrorLike,
    readonly delay: number,
  ) {}

  produce(_?: () => boolean): SchedulerContinuationLike | void {
    this.subscriber.dispose(this.error);
  }
}

class ThrowsObservable<T> implements ObservableLike<T> {
  readonly enumerate = observableMixin.enumerate;
  readonly isSynchronous: boolean;

  constructor(private readonly factory: () => unknown, readonly delay: number) {
    this.isSynchronous = delay === 0;
  }

  subscribe(subscriber: SubscriberLike<T>) {
    const producer = new ThrowsProducer(
      subscriber,
      { cause: this.factory() },
      this.delay,
    );
    subscriber.schedule(producer);
  }
}

/**
 * Creates an `ObservableLike` that emits no items and immediately disposes its subscription with an error.
 *
 * @param factory Factory function to generate the error to emit.
 * @param delay The delay before disposing the subscription.
 */
export const throws = <T>(
  factory: () => unknown,
  delay = 0,
): ObservableLike<T> => new ThrowsObservable(factory, delay);

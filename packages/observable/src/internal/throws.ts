import { ErrorLike } from "@reactive-js/disposable";
import { ObservableLike, SubscriberLike } from "./interfaces";
import { createScheduledObservable, createDelayedScheduledObservable } from "./observable";
import { AbstractProducer } from "./producer";

class ThrowsProducer<T> extends AbstractProducer<T> {
  constructor(
    subscriber: SubscriberLike<T>,
    private readonly error: ErrorLike,
    readonly delay: number,
  ) {
    super(subscriber);
  }

  produce(_?: () => boolean): number {
    this.dispose(this.error);
    return 0;
  }
}

/**
 * Creates an `ObservableLike` that emits no items and immediately disposes its subscription with an error.
 *
 * @param factory Factory function to generate the error to emit.
 * @param delay The delay before disposing the subscription.
 */
export const throws = <T>(
  errorFactory: () => unknown,
  delay = 0,
): ObservableLike<T> => {
  const factory = (subscriber: SubscriberLike<T>) =>
    new ThrowsProducer(subscriber, { cause: errorFactory() }, delay);

    return delay > 0
      ? createDelayedScheduledObservable(factory, delay)
      : createScheduledObservable(factory, true);
};

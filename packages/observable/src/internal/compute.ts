import { ObservableLike, SubscriberLike } from "./interfaces";
import { createScheduledObservable, createDelayedScheduledObservable } from "./observable";
import { AbstractProducer } from "./producer";

class ComputeProducer<T> extends AbstractProducer<T> {
  constructor(
    subscriber: SubscriberLike<T>,
    private readonly f: () => T,
    readonly delay: number,
  ) {
    super(subscriber);
  }

  produce(_?: () => boolean): number {
    this.notify(this.f());
    this.dispose();
    return 0;
  }
}

/**
 *  Creates an `ObservableLike` that emits `value` after the specified `delay` then disposes the subscriber.
 *
 * @param value The value to emit.
 * @param delay The delay before emitting the value.
 */
export const compute = <T>(
  valueFactory: () => T,
  delay = 0,
): ObservableLike<T> => {
  const factory = (subscriber: SubscriberLike<T>) =>
    new ComputeProducer(subscriber, valueFactory, delay);

  return (delay > 0) 
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
};

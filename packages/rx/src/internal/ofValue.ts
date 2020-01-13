import { ObservableLike, SubscriberLike, EnumerableLike } from "./interfaces";
import { SchedulerContinuationLike } from "@reactive-js/scheduler";
import { enumerableMixin } from "./enumerable";

class OfValueProducer<T> implements SchedulerContinuationLike {
  constructor(
    private readonly subscriber: SubscriberLike<T>,
    private readonly value: T,
    readonly delay: number,
  ) {}

  run(_?: () => boolean) {
    const subscriber = this.subscriber;

    subscriber.notify(this.value);
    subscriber.dispose();
  }
}

class OfValueObservable<T> implements ObservableLike<T> {
  constructor(private readonly value: T, private readonly delay: number) {}

  subscribe(subscriber: SubscriberLike<T>) {
    subscriber.schedule(
      new OfValueProducer(subscriber, this.value, this.delay),
    );
  }
}

class OfValueEnumerable<T> extends OfValueObservable<T>
  implements EnumerableLike<T> {
  readonly [Symbol.iterator] = enumerableMixin[Symbol.iterator];
  readonly enumerate = enumerableMixin.enumerate;

  constructor(value: T) {
    super(value, 0);
  }
}

/**
 * Creates an `EnumerableLike` that emits `value` then disposes the subscriber.
 *
 * @param value The value to emit.
 */
export function ofValue<T>(value: T): EnumerableLike<T>;

/**
 *  Creates an `ObservableLike` that emits `value` after the specified `delay` then disposes the subscriber.
 *
 * @param value The value to emit.
 * @param delay The delay before emitting the value.
 */
export function ofValue<T>(value: T, delay: number): ObservableLike<T>;

export function ofValue<T>(value: T, delay = 0): ObservableLike<T> {
  return delay > 0
    ? new OfValueObservable(value, delay)
    : new OfValueEnumerable(value);
}

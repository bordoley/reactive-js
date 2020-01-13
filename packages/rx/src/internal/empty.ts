import {
  ObservableLike,
  SubscriberLike,
  EnumerableObservableLike,
} from "./interfaces";
import { SchedulerContinuationLike } from "@reactive-js/scheduler";
import { enumerableMixin } from "./enumerable";

class EmptyProducer<T> implements SchedulerContinuationLike {
  constructor(
    private readonly subscriber: SubscriberLike<T>,
    readonly delay: number,
  ) {}

  run(_?: () => boolean) {
    this.subscriber.dispose();
  }
}

class EmptyObservable<T> implements ObservableLike<T> {
  constructor(private readonly delay: number) {}

  subscribe(subscriber: SubscriberLike<T>) {
    subscriber.schedule(new EmptyProducer(subscriber, this.delay));
  }
}

class EmptyEnumerable<T> extends EmptyObservable<T>
  implements EnumerableObservableLike<T> {
  readonly [Symbol.iterator] = enumerableMixin[Symbol.iterator];
  readonly enumerate = enumerableMixin.enumerate;

  constructor() {
    super(0);
  }
}

const defaultEmpty = new EmptyEnumerable();

/**
 * Return an `EnumerableObservableLike` that emits no items and immediately disposes the subscription.
 */
export function empty<T>(): EnumerableObservableLike<T>;

/**
 * Return an `ObservableLike` that emits no items and disposes the subscription after a specified delay.
 */
export function empty<T>(delay: number): ObservableLike<T>;

export function empty<T>(delay = 0): ObservableLike<T> {
  return delay > 0 ? new EmptyObservable(delay) : defaultEmpty;
}

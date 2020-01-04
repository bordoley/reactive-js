import { ObservableLike, SubscriberLike, EnumerableLike } from "./interfaces";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { enumerableMixin } from "./enumerable";

class EmptyProducer<T> implements SchedulerContinuationLike {
  constructor(private readonly subscriber: SubscriberLike<T>) {}

  run(_?: () => boolean): SchedulerContinuationResultLike | void {
    this.subscriber.dispose();
  }
}

class EmptyObservable<T> implements ObservableLike<T> {
  constructor(private readonly delay: number) {}

  subscribe(subscriber: SubscriberLike<T>) {
    subscriber.schedule(new EmptyProducer(subscriber), this.delay);
  }
}

class EmptyEnumerable<T> extends EmptyObservable<T>
  implements EnumerableLike<T> {
  readonly [Symbol.iterator] = enumerableMixin[Symbol.iterator];
  readonly enumerate = enumerableMixin.enumerate;

  constructor() {
    super(0);
  }
}

const defaultEmpty = new EmptyEnumerable();

export function empty<T>(): EnumerableLike<T>;
export function empty<T>(delay: number): ObservableLike<T>;
export function empty<T>(delay = 0): ObservableLike<T> {
  return delay > 0 ? new EmptyObservable(delay) : defaultEmpty;
}

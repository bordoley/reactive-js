import { ObservableLike, SubscriberLike, EnumerableLike } from "./interfaces";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { defer } from "./defer";
import { enumerableMixin } from "./enumerable";

class EmptyProducer<T> implements SchedulerContinuationLike {
  constructor(private readonly subscriber: SubscriberLike<T>) {}

  run(_?: () => boolean): SchedulerContinuationResultLike | void {
    this.subscriber.complete();
  }
}

class EmptyEnumerable<T> implements EnumerableLike<T> {
  readonly [Symbol.iterator] = enumerableMixin[Symbol.iterator];
  readonly enumerate = enumerableMixin.enumerate;

  subscribe(subscriber: SubscriberLike<T>) {
    subscriber.schedule(new EmptyProducer(subscriber));
  }
}

const defaultEmpty = new EmptyEnumerable();

class EmptyObservable<T> implements ObservableLike<T> {
  constructor(private readonly delay: number) {}

  subscribe(subscriber: SubscriberLike<T>) {
    subscriber.schedule(new EmptyProducer(subscriber), this.delay);
  }
}

export const empty = <T>(delay = 0): ObservableLike<T> =>
  delay > 0 ? defer(() => new EmptyObservable(delay)) : defaultEmpty;

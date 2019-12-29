import { ObservableLike, SubscriberLike } from "./interfaces";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { EnumerableLike, EnumeratorLike, createObservableEnumerator } from "./enumerable";

class EmptyProducer<T> implements SchedulerContinuationLike {
  constructor(private readonly subscriber: SubscriberLike<T>) {}

  run(_?: () => boolean): SchedulerContinuationResultLike | void {
    this.subscriber.complete();
  }
}

class EmptyObservable<T>
  implements ObservableLike<T>, EnumerableLike<T> {

  constructor(private readonly delay: number) {}

  getEnumerator(): EnumeratorLike<T> {
    return createObservableEnumerator(this);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    const producer = new EmptyProducer(subscriber);
    subscriber.schedule(producer, this.delay);
  }
}

export const empty = <T>(delay = 0): ObservableLike<T> =>
  new EmptyObservable(delay);

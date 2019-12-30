import { ObservableLike, SubscriberLike } from "./interfaces";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { defer } from "./defer";

class OfValueObservable<T>
  implements ObservableLike<T>, SchedulerContinuationLike {
  private subscriber: SubscriberLike<T> | undefined;

  constructor(
    private readonly value: T,
    private readonly delay: number,
) {}

  run(_?: () => boolean): SchedulerContinuationResultLike | void {
    const subscriber = (this.subscriber as SubscriberLike<T>);
    subscriber.next(this.value);
    subscriber.complete();
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.subscriber = subscriber;
    subscriber.schedule(this, this.delay);
  }
}

export const ofValue = <T>(value: T, delay = 0): ObservableLike<T> =>
   defer(() => new OfValueObservable(value, delay));

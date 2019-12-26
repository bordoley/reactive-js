import { defer } from "./defer";
import { ObservableLike, SubscriberLike } from "./interfaces";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";

class EmptyObservable<T>
  implements ObservableLike<T>, SchedulerContinuationLike {
  private subscriber: SubscriberLike<T> | undefined;

  constructor(private readonly delay: number) {}

  run(_?: () => boolean): SchedulerContinuationResultLike | void {
    (this.subscriber as SubscriberLike<T>).complete();
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.subscriber = subscriber;
    subscriber.schedule(this, this.delay);
  }
}

export const empty = <T>(delay = 0): ObservableLike<T> =>
  defer(() => new EmptyObservable(delay));

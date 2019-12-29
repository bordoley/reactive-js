import { ObservableLike, SubscriberLike } from "./interfaces";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { defer } from "./defer";

class EmptyObservable<T>
  implements ObservableLike<T>,  SchedulerContinuationLike {
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

const defaultEmpty = defer(() => new EmptyObservable(0));

export const empty = <T>(delay = 0): ObservableLike<T> =>
  delay > 0
    ? defer(() => new EmptyObservable(delay))
    : defaultEmpty;

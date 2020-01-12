import { SchedulerLike } from "@reactive-js/scheduler";
import {
  ObservableLike,
  ObservableOperatorLike,
  SubjectLike,
  SubscriberLike,
} from "./interfaces";
import { createSubject } from "./subject";

class SharedObservable<T> implements ObservableLike<T> {
  private subscriberCount = 0;
  private subject?: SubjectLike<T>;
  private readonly teardown = () => {
    this.subscriberCount--;

    if (this.subscriberCount === 0) {
      (this.subject as SubjectLike<T>).dispose();
      this.subject = undefined;
    }
  };

  constructor(
    private readonly factory: () => SubjectLike<T>,
    private readonly source: ObservableLike<T>,
  ) {}

  subscribe(subscriber: SubscriberLike<T>): void {
    if (this.subscriberCount === 0) {
      this.subject = this.factory();
      this.source.subscribe(this.subject);
    }
    this.subscriberCount++;

    const subject = this.subject as SubjectLike<T>;

    subject.subscribe(subscriber);
    subscriber.add(this.teardown);
  }
}

/**
 * Returns an observable backed by a shared refcounted subscription to the
 * source. When the refcount goes to 0, the underlying subscription
 * to the source is disposed.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source.
 * @param replayCount The number of events that should be replayed when the `ObservableLike`
 * is subscribed to.
 */
export const share = <T>(
  scheduler: SchedulerLike,
  replayCount?: number,
): ObservableOperatorLike<T, T> => {
  const factory = () => createSubject(scheduler, replayCount);
  return observable => new SharedObservable(factory, observable);
};

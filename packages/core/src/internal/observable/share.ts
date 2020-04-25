import { none, Option } from "../../option";
import { SchedulerLike } from "../../scheduler";
import {
  ObservableLike,
  ObservableOperator,
  SubjectLike,
  SubscriberLike,
} from "./interfaces";
import { createSubject } from "./subject";
import { pipe } from "../../pipe";
import { observe } from "./observe";
import { subscribe } from "./subscribe";

class SharedObservable<T> implements ObservableLike<T> {
  private subscriberCount = 0;
  private subject: Option<SubjectLike<T>>;
  private readonly teardown = () => {
    this.subscriberCount--;

    if (this.subscriberCount === 0) {
      (this.subject as SubjectLike<T>).dispose();
      this.subject = none;
    }
  };

  readonly isSynchronous = false;

  constructor(
    private readonly factory: () => SubjectLike<T>,
    private readonly source: ObservableLike<T>,
    private readonly scheduler: SchedulerLike,
  ) {}

  subscribe(subscriber: SubscriberLike<T>): void {
    if (this.subscriberCount === 0) {
      this.subject = this.factory();
      this.subject.add(
        pipe(this.source, observe(this.subject), subscribe(this.scheduler))
      );
    }
    this.subscriberCount++;

    const subject = this.subject as SubjectLike<T>;

    subject.subscribe(subscriber);
    subscriber.add(this.teardown);
  }
}

/**
 * Returns an `ObservableLike` backed by a shared refcounted subscription to the
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
): ObservableOperator<T, T> => {
  const factory = () => createSubject(replayCount);
  return observable => new SharedObservable(factory, observable, scheduler);
};

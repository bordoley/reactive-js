import { pipe } from "../../functions.ts";
import { none, Option } from "../../option.ts";
import { SchedulerLike } from "../../scheduler.ts";
import { createSubject } from "./createSubject.ts";
import {
  ObservableLike,
  ObservableOperator,
  SubjectLike,
  SubscriberLike,
} from "./interfaces.ts";
import { onNotify } from "./onNotify.ts";
import { subscribe } from "./subscribe.ts";

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

  private readonly onNotify = (next: T) =>
    (this.subject as SubjectLike<T>).dispatch(next);

  constructor(
    private readonly factory: () => SubjectLike<T>,
    private readonly source: ObservableLike<T>,
    private readonly scheduler: SchedulerLike,
  ) {}

  subscribe(subscriber: SubscriberLike<T>): void {
    if (this.subscriberCount === 0) {
      this.subject = this.factory();
      this.subject.add(
        pipe(this.source, onNotify(this.onNotify), subscribe(this.scheduler)),
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

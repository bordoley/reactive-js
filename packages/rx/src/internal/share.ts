import { disposed } from "@reactive-js/disposable";
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
  private sourceSubscription = disposed;
  private subject?: SubjectLike<T>;
  private readonly teardown = () => {
    this.subscriberCount--;

    if (this.subscriberCount === 0) {
      this.sourceSubscription.dispose();
      this.sourceSubscription = disposed;
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

export const share = <T>(
  scheduler: SchedulerLike,
  replayCount?: number,
): ObservableOperatorLike<T, T> => {
  const factory = () => createSubject(scheduler, replayCount);
  return observable => new SharedObservable(factory, observable);
};

import { disposed } from "@reactive-js/disposable";
import {
  MulticastObservableLike,
  ObservableLike,
  SubjectResourceLike,
  SubscriberLike,
  subscribe,
  createSubject,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { observe } from "./observe";
import { pipe, OperatorLike } from "@reactive-js/pipe";

class SharedObservable<T> implements MulticastObservableLike<T> {
  private refCount = 0;
  private sourceSubscription = disposed;
  private subject?: SubjectResourceLike<T>;
  private readonly teardown = () => {
    this.refCount--;

    if (this.refCount === 0) {
      this.sourceSubscription.dispose();
      this.sourceSubscription = disposed;
      (this.subject as SubjectResourceLike<T>).dispose();
      this.subject = undefined;
    }
  };

  constructor(
    private readonly factory: () => SubjectResourceLike<T>,
    private readonly source: ObservableLike<T>,
    private readonly scheduler: SchedulerLike,
  ) {}

  get subscriberCount() {
    return this.refCount;
  }

  subscribe(subscriber: SubscriberLike<T>): void {
    if (this.refCount === 0) {
      this.subject = this.factory();
      this.sourceSubscription = pipe(
        this.source,
        observe(this.subject),
        subscribe(this.scheduler),
      );
    }
    this.refCount++;

    const subject = this.subject as SubjectResourceLike<T>;

    subject.subscribe(subscriber);
    subscriber.add(this.teardown);
  }
}

export const share = <T>(
  scheduler: SchedulerLike,
  replayCount?: number,
): OperatorLike<ObservableLike<T>, MulticastObservableLike<T>> => {
  const factory = () => createSubject(replayCount);
  return observable => new SharedObservable(factory, observable, scheduler);
};

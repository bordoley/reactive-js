import { DisposableOrTeardown } from "@reactive-js/disposable";
import { pipe, OperatorLike } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  MulticastObservableResourceLike,
  ObservableLike,
  SubjectResourceLike,
  SubscriberLike,
} from "./interfaces";
import { observe } from "./observe";
import { subscribe } from "./subscribe";
import { createSubject } from "./subject";

class PublishObservable<T> implements MulticastObservableResourceLike<T> {
  constructor(private readonly subject: SubjectResourceLike<T>) {}

  get subscriberCount() {
    return this.subject.subscriberCount;
  }

  get isDisposed() {
    return this.subject.isDisposed;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.subject.add(disposable, ...disposables);
    return this;
  }

  dispose() {
    this.subject.dispose();
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.subject.remove(disposable, ...disposables);
    return this;
  }

  subscribe(subscriber: SubscriberLike<T>): void {
    this.subject.subscribe(subscriber);
  }
}

export const publish = <T>(
  scheduler: SchedulerLike,
  replayCount: number = 0,
): OperatorLike<
  ObservableLike<T>,
  MulticastObservableResourceLike<T>
> => observable => {
  const subject = createSubject(replayCount);
  subject.add(pipe(observable, observe(subject), subscribe(scheduler)));
  return new PublishObservable(subject);
};

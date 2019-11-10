import { Disposable } from "@rx-min/rx-disposables";
import {
  observe,
  Observable,
  ObservableLike,
  SchedulerLike,
  SubscriberLike,
} from "@rx-min/rx-core";

import { Subject, SubjectLike } from "./subject";
import { ReplayLastSubject } from "./replayLastSubject";

class SharedObservable<T> implements ObservableLike<T> {
  factory: () => SubjectLike<T>;
  source: ObservableLike<T>;

  refCount: number = 0;
  subject: SubjectLike<T>;
  subscription = Disposable.disposed;

  teardown: () => void;

  constructor(source: ObservableLike<T>, factory: () => SubjectLike<T>) {
    this.source = source;
    this.factory = factory;
    this.subject = factory();

    this.teardown = () => {
      this.refCount--;

      if (this.refCount === 0) {
        this.subscription.dispose();
        this.subscription = Disposable.disposed;
        this.subject.dispose();
        this.subject = factory();
      }
    };
  }

  subscribe(subscriber: SubscriberLike<T>): void {
    const innerSubscription = Observable.connect(
      Observable.lift(
        this.subject,
        observe(subscriber)
      )
    );

    subscriber.add(Disposable.create(this.teardown)).add(innerSubscription);

    if (this.refCount === 1) {
      this.subscription = Observable.connect(
        Observable.lift(this.source, observe(this.subject))
      );
    }
  }
}

export const share = <T>(observable: ObservableLike<T>): ObservableLike<T> =>
  new SharedObservable(observable, Subject.create);

export const shareReplayLast = <T>(observable: ObservableLike<T>, scheduler: SchedulerLike): ObservableLike<T> => {
  const replayLastSubjectFactory = () => ReplayLastSubject.create(scheduler);
  return new SharedObservable(observable, replayLastSubjectFactory);
};

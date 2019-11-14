import { Disposable } from "@reactive-js/disposables";
import {
  connect,
  lift,
  observe,
  ObservableLike,
  SubscriberLike,
} from "@reactive-js/rx-core";

import {
  SchedulerLike,
} from "@reactive-js/scheduler";

import { Subject, SubjectLike } from "./subject";
import { ReplayLastSubject } from "./replayLastSubject";

class SharedObservable<T> implements ObservableLike<T> {
  private readonly source: ObservableLike<T>;
  private readonly teardown: () => void;
  private readonly scheduler: SchedulerLike;

  private refCount: number = 0;
  private subject: SubjectLike<T>;
  private subscription = Disposable.disposed;

  constructor(
    source: ObservableLike<T>,
    factory: () => SubjectLike<T>,
    scheduler: SchedulerLike,
  ) {
    this.source = source;
    this.scheduler = scheduler;

    this.teardown = () => {
      this.refCount--;

      if (this.refCount === 0) {
        this.subscription.dispose();
        this.subscription = Disposable.disposed;
        this.subject.dispose();
        this.subject = factory();
      }
    };

    this.subject = factory();
  }

  subscribe(subscriber: SubscriberLike<T>): void {
    const innerSubscription = connect(
      lift(this.subject, observe(subscriber)),
      subscriber.scheduler,
    );

    subscriber.subscription
      .add(Disposable.create(this.teardown))
      .add(innerSubscription);

    if (this.refCount === 1) {
      this.subscription = connect(
        lift(this.source, observe(this.subject)),
        this.scheduler,
      );
    }
  }
}

export const share = <T>(
  observable: ObservableLike<T>,
  scheduler: SchedulerLike,
): ObservableLike<T> =>
  new SharedObservable(observable, Subject.create, scheduler);

export const shareReplayLast = <T>(
  observable: ObservableLike<T>,
  scheduler: SchedulerLike,
): ObservableLike<T> => {
  const replayLastSubjectFactory = () => ReplayLastSubject.create(scheduler);
  return new SharedObservable(observable, replayLastSubjectFactory, scheduler);
};

import { Disposable } from "@reactive-js/disposables";
import {
  connect,
  observe,
  Observable,
  ObservableLike,
  SubscriberLike,
} from "@reactive-js/rx-core";

import { SchedulerLike } from "@reactive-js/scheduler";

import { Subject, SubjectLike } from "./subject";
import { ReplayLastSubject } from "./replayLastSubject";

class SharedObservable<T> implements ObservableLike<T> {
  private readonly factory: (priority?: number) => SubjectLike<T>;
  private readonly source: ObservableLike<T>;
  private readonly scheduler: SchedulerLike;
  private readonly priority?: number;

  private readonly teardown: () => void;

  private refCount: number = 0;
  private subject?: SubjectLike<T>;
  private sourceSubscription = Disposable.disposed;

  constructor(
    factory: (priority?: number) => SubjectLike<T>,
    source: ObservableLike<T>,
    scheduler: SchedulerLike,
    priority?: number,
  ) {
    this.factory = factory;
    this.source = source;
    this.scheduler = scheduler;
    this.priority = priority;

    this.teardown = () => {
      this.refCount--;

      if (this.refCount === 0) {
        this.sourceSubscription.dispose();
        this.sourceSubscription = Disposable.disposed;
        (this.subject as SubjectLike<T>).disposable.dispose();
        this.subject = undefined;
      }
    };
  }

  subscribe(subscriber: SubscriberLike<T>): void {
    if (this.refCount === 0) {
      this.subject = this.factory(this.priority);
    }

    const subject = this.subject as SubjectLike<T>;

    const innerSubscription = connect(
      Observable.lift(subject, observe(subscriber)),
      subscriber.scheduler,
    );

    subscriber.subscription
      .add(Disposable.create(this.teardown))
      .add(innerSubscription);

    if (this.refCount === 1) {
      this.sourceSubscription = connect(
        Observable.lift(this.source, observe(subject)),
        this.scheduler,
      );
    }
  }
}

export const share = <T>(
  observable: ObservableLike<T>,
  scheduler: SchedulerLike,
  priority?: number,
): ObservableLike<T> =>
  new SharedObservable(Subject.create, observable, scheduler, priority);

export const shareReplayLast = <T>(
  observable: ObservableLike<T>,
  scheduler: SchedulerLike,
  priority?: number,
): ObservableLike<T> =>
  new SharedObservable(
    ReplayLastSubject.create,
    observable,
    scheduler,
    priority,
  );

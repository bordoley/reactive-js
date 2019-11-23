import { disposed } from "@reactive-js/disposable";
import {
  Observable,
  ObservableLike,
  observe,
  SubscriberLike,
} from "@reactive-js/rx-core";

import { SchedulerLike } from "@reactive-js/scheduler";

import { ReplayLastSubject } from "./replayLastSubject";
import { Subject, SubjectResourceLike } from "./subject";

class SharedObservable<T> implements ObservableLike<T> {
  private readonly factory: (priority?: number) => SubjectResourceLike<T>;
  private readonly priority?: number;

  private refCount: number = 0;
  private readonly scheduler?: SchedulerLike;
  private readonly source: ObservableLike<T>;
  private sourceSubscription = disposed;
  private subject?: SubjectResourceLike<T>;

  private readonly teardown: () => void;

  constructor(
    factory: (priority?: number) => SubjectResourceLike<T>,
    source: ObservableLike<T>,
    scheduler?: SchedulerLike,
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
        this.sourceSubscription = disposed;
        (this.subject as SubjectResourceLike<T>).dispose();
        this.subject = undefined;
      }
    };
  }

  subscribe(subscriber: SubscriberLike<T>): void {
    if (this.refCount === 0) {
      this.subject = this.factory(this.priority);
      this.sourceSubscription = Observable.connect(
        Observable.lift(this.source, observe(this.subject)),
        this.scheduler,
      );
    }
    this.refCount++;

    const subject = this.subject as SubjectResourceLike<T>;

    const innerSubscription = Observable.connect(
      Observable.lift(subject, observe(subscriber)),
      subscriber,
    );

    subscriber.add(this.teardown, innerSubscription);
  }
}

export const share = <T>(
  observable: ObservableLike<T>,
  scheduler?: SchedulerLike,
  priority?: number,
): ObservableLike<T> =>
  new SharedObservable(Subject.create, observable, scheduler, priority);

export const shareReplayLast = <T>(
  observable: ObservableLike<T>,
  scheduler?: SchedulerLike,
  priority?: number,
): ObservableLike<T> =>
  new SharedObservable(
    ReplayLastSubject.create,
    observable,
    scheduler,
    priority,
  );

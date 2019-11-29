import { create as createDisposable, disposed } from "@reactive-js/disposable";
import { connect } from "./connect";
import { observe } from "./observe";
import { ObservableLike, ObservableOperator, pipe } from "./observable";
import { SubscriberLike } from "./subscriber";
import { SchedulerLike } from "@reactive-js/scheduler";
import { createSubject, SubjectResourceLike } from "./subject";

class SharedObservable<T> implements ObservableLike<T> {
  private readonly factory: () => SubjectResourceLike<T>;

  private refCount: number = 0;
  private readonly scheduler: SchedulerLike;
  private readonly source: ObservableLike<T>;
  private sourceSubscription = disposed;
  private subject?: SubjectResourceLike<T>;

  private readonly teardown: () => void;

  constructor(
    factory: () => SubjectResourceLike<T>,
    source: ObservableLike<T>,
    scheduler: SchedulerLike,
  ) {
    this.factory = factory;
    this.source = source;
    this.scheduler = scheduler;

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
      this.subject = this.factory();
      this.sourceSubscription = connect(
        pipe(this.source, observe(this.subject)),
        this.scheduler,
      );
    }
    this.refCount++;

    const subject = this.subject as SubjectResourceLike<T>;

    const innerSubscription = connect(
      pipe(subject, observe(subscriber)),
      subscriber,
    );

    subscriber.add(this.teardown, innerSubscription);
  }
}

export const share = <T>(
  scheduler: SchedulerLike,
  replayCount?: number,
): ObservableOperator<T, T> => {
  const factory = () => createSubject(replayCount);
  return observable => new SharedObservable(factory, observable, scheduler);
};

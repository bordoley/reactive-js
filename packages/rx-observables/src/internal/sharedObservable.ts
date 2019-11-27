import { disposed } from "@reactive-js/disposable";

import {
  connect,
  lift,
  ObservableLike,
  ObservableOperator,
  observe,
  pipe,
} from "@reactive-js/rx-observable";

import { SchedulerLike } from "@reactive-js/scheduler";

import { SubscriberLike } from "@reactive-js/rx-subscriber";

import {
  create as subjectCreate,
  createWithReplay as subjectCreateWithReplay,
  SubjectResourceLike,
} from "@reactive-js/rx-subject";

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
  scheduler?: SchedulerLike,
  priority?: number,
): ObservableOperator<T, T> => (observable: ObservableLike<T>) =>
  new SharedObservable(subjectCreate, observable, scheduler, priority);

export const shareReplay = <T>(
  count: number,
  scheduler?: SchedulerLike,
  priority?: number,
): ObservableOperator<T, T> => (observable: ObservableLike<T>) => {
  const factory = (priority?: number) =>
    subjectCreateWithReplay(count, priority);
  return new SharedObservable(factory, observable, scheduler, priority);
};

export const shareReplayLast = <T>(
  scheduler?: SchedulerLike,
  priority?: number,
): ObservableOperator<T, T> => shareReplay(1, scheduler, priority);

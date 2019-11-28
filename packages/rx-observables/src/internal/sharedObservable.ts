import { disposed } from "@reactive-js/disposable";
import {
  connect,
  ObservableLike,
  ObservableOperator,
  observe,
  pipe,
} from "@reactive-js/rx-observable";
import {
  create as createSubject,
  createWithReplay as createSubjectWithReplay,
  SubjectResourceLike,
} from "@reactive-js/rx-subject";
import { SubscriberLike } from "@reactive-js/rx-subscriber";
import { SchedulerLike, SchedulerOptions } from "@reactive-js/scheduler";

class SharedObservable<T> implements ObservableLike<T> {
  private readonly factory: (
    options?: SchedulerOptions,
  ) => SubjectResourceLike<T>;
  private readonly options?: SchedulerOptions;

  private refCount: number = 0;
  private readonly scheduler?: SchedulerLike;
  private readonly source: ObservableLike<T>;
  private sourceSubscription = disposed;
  private subject?: SubjectResourceLike<T>;

  private readonly teardown: () => void;

  constructor(
    factory: (options?: SchedulerOptions) => SubjectResourceLike<T>,
    source: ObservableLike<T>,
    scheduler?: SchedulerLike,
    options?: SchedulerOptions,
  ) {
    this.factory = factory;
    this.source = source;
    this.scheduler = scheduler;
    this.options = options;

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
      this.subject = this.factory(this.options);
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
  options?: SchedulerOptions,
): ObservableOperator<T, T> => (observable: ObservableLike<T>) =>
  new SharedObservable(createSubject, observable, scheduler, options);

export const shareReplay = <T>(
  count: number,
  scheduler?: SchedulerLike,
  options?: SchedulerOptions,
): ObservableOperator<T, T> => (observable: ObservableLike<T>) => {
  const factory = (options?: SchedulerOptions) =>
    createSubjectWithReplay(count, options);
  return new SharedObservable(factory, observable, scheduler, options);
};

export const shareReplayLast = <T>(
  scheduler?: SchedulerLike,
  options?: SchedulerOptions,
): ObservableOperator<T, T> => shareReplay(1, scheduler, options);

import {
  create as createDisposable,
  DisposableLike,
  DisposableOrTeardown,
  disposed,
} from "@reactive-js/disposable";
import {
  connect,
  ObservableLike,
  ObservableOperator,
  observe,
  pipe,
} from "@reactive-js/rx-observable";
import { ObservableResourceLike } from "@reactive-js/rx-observable-resource";
import {
  Notification,
  NotificationKind,
  notify,
  ObserverLike,
} from "@reactive-js/rx-observer";
import { SubscriberLike, toSafeObserver } from "@reactive-js/rx-subscriber";
import { SchedulerLike } from "@reactive-js/scheduler";

/** @noInheritDoc */
export interface SubjectLike<T> extends ObserverLike<T>, ObservableLike<T> {}

/** @noInheritDoc */
export interface SubjectResourceLike<T>
  extends SubjectLike<T>,
    ObservableResourceLike<T> {}

abstract class AbstractSubject<T> implements SubjectResourceLike<T> {
  get isDisposed() {
    return this.disposable.isDisposed;
  }
  private readonly disposable: DisposableLike;

  private isCompleted = false;
  private readonly observers: Array<ObserverLike<T>> = [];

  constructor() {
    this.disposable = createDisposable();
    this.disposable.add(() => {
      this.isCompleted = true;
      this.observers.length = 0;
    });
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.add(disposable, ...disposables);
  }

  complete(error?: Error) {
    if (this.isCompleted) {
      return;
    }

    this.onComplete(error);

    this.isCompleted = true;
    const subscribers = this.observers.slice();
    this.observers.length = 0;

    for (let subscriber of subscribers) {
      subscriber.complete(error);
    }
  }

  dispose() {
    this.disposable.dispose();
  }

  next(data: T) {
    if (this.isCompleted) {
      return;
    }

    this.onNext(data);

    const subscribers = this.observers.slice();
    for (let subscriber of subscribers) {
      subscriber.next(data);
    }
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.remove(disposable, ...disposables);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    if (!this.disposable.isDisposed) {
      // The idea here is that an onSubscribe function may
      // call onNext from unscheduled sources such as event handlers.
      // So we marshall those events back to the scheduler.
      const observer = toSafeObserver(subscriber);
      this.onSubscribe(observer);

      if (!this.isCompleted) {
        this.observers.push(observer);

        const disposable = createDisposable();
        disposable.add(() => {
          const index = this.observers.indexOf(observer);
          if (index !== -1) {
            this.observers.splice(index, 1);
          }
          subscriber.remove(disposable);
        });
        subscriber.add(disposable);
      }
    } else {
      subscriber.dispose();
    }
  }

  protected abstract onComplete(error?: Error): void;
  protected abstract onNext(data: T): void;
  protected abstract onSubscribe(observer: ObserverLike<T>): void;
}

class SubjectImpl<T> extends AbstractSubject<T> {
  protected onComplete(error?: Error) {}
  protected onNext(data: T) {}
  protected onSubscribe(observer: ObserverLike<T>) {}
}

class ReplayLastSubjectImpl<T> extends AbstractSubject<T> {
  private readonly count: number;
  private replayed: Notification<T>[] = [];

  constructor(count: number) {
    super();
    this.count = count;
    this.add(() => {
      this.replayed.length = 0;
    });
  }

  protected onComplete(error?: Error) {
    this.pushNotification([NotificationKind.Complete, error]);
  }

  protected onNext(data: T) {
    this.pushNotification([NotificationKind.Next, data]);
  }
  protected onSubscribe(observer: ObserverLike<T>) {
    // The observer is a safe observer, an queues all notifications
    // until a drain is scheduled. Hence there is no need to
    // copy the replayed notifications before publishing via notify.
    for (let notif of this.replayed) {
      notify(observer, notif);
    }
  }

  private pushNotification(notif: Notification<T>) {
    this.replayed.push(notif);
    if (this.replayed.length > this.count) {
      this.replayed.shift();
    }
  }
}

export const create = <T>(replayCount: number = 0): SubjectResourceLike<T> =>
  replayCount > 0 ? new ReplayLastSubjectImpl(replayCount) : new SubjectImpl();

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
  const factory = () => create(replayCount);
  return observable => new SharedObservable(factory, observable, scheduler);
};

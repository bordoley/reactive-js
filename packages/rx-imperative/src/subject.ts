import {
  Disposable,
  DisposableLike,
  DisposableOrTeardown,
} from "@reactive-js/disposables";

import {
  ObservableResourceLike,
  ObserverLike,
  Subscriber,
  SubscriberLike,
} from "@reactive-js/rx-core";

export interface SubjectLike<T>
  extends ObserverLike<T>,
    ObservableResourceLike<T> {}

export abstract class AbstractSubject<T> implements SubjectLike<T> {
  private readonly disposable: DisposableLike;
  private readonly observers: Array<ObserverLike<T>> = [];
  private readonly priority?: number;

  private isCompleted = false;

  constructor(priority?: number) {
    this.priority = priority;
    this.disposable = Disposable.create();
    this.disposable.add(() => {
      this.isCompleted = true;
      this.observers.length = 0;
    });
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  add(disposable: DisposableOrTeardown) {
    this.disposable.add(disposable);
  }

  dispose() {
    this.disposable.dispose();
  }

  remove(disposable: DisposableOrTeardown) {
    this.disposable.remove(disposable);
  }

  protected abstract onNext(data: T): void;
  protected abstract onComplete(error?: Error): void;
  protected abstract onSubscribe(observer: ObserverLike<T>): void;

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

  complete(error?: Error) {
    if (this.isCompleted) {
      return;
    }

    this.onComplete(error);

    this.isCompleted = true;
    const subscribers = this.observers.slice();
    for (let subscriber of subscribers) {
      subscriber.complete(error);
    }
  }

  subscribe(subscriber: SubscriberLike<T>) {
    if (!this.disposable.isDisposed) {
      // The idea here is that an onSubscribe function may
      // call onNext from unscheduled sources such as event handlers.
      // So we marshall those events back to the scheduler.
      const observer = Subscriber.toSafeObserver(subscriber, this.priority);
      this.observers.push(observer);

      const disposable = Disposable.create();
      disposable.add(() => {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
          this.observers.splice(index, 1);
        }
      });

      subscriber.add(disposable);

      this.onSubscribe(observer);
    }
  }
}

class SubjectImpl<T> extends AbstractSubject<T> {
  protected onNext(data: T) {}
  protected onComplete(error?: Error) {}
  protected onSubscribe(observer: ObserverLike<T>) {}
}

const create = <T>(priority?: number): SubjectLike<T> =>
  new SubjectImpl(priority);

export const Subject = {
  create,
};

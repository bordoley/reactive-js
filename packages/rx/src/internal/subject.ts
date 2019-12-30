import { createDisposable, disposableMixin } from "@reactive-js/disposable";
import {
  ErrorLike,
  ObserverLike,
  SubjectResourceLike,
  SubscriberLike,
} from "./interfaces";
import { createSafeObserver } from "./safeObserver";

class SubjectImpl<T> implements SubjectResourceLike<T> {
  readonly disposable = createDisposable();
  private isCompleted = false;
  private error?: ErrorLike;
  private readonly observers: Array<ObserverLike<T>> = [];
  private readonly replayed: T[] = [];

  add = disposableMixin.add;
dispose = disposableMixin.dispose;
remove = disposableMixin.remove;
constructor(private readonly replayCount: number) {
    this.add(() => {
      this.observers.length = 0;
      this.replayed.length = 0;
    });
  }

  get subscriberCount() {
    return this.observers.length;
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  

  

  
onComplete(error?: ErrorLike) {
    if (this.isCompleted || this.isDisposed) {
      return;
    }

    this.isCompleted = true;
    this.error = error;

    const observers = this.observers.slice();
    this.observers.length = 0;
    for (const observer of observers) {
      observer.onComplete(error);
    }
  }

  onNext(data: T) {
    if (this.isCompleted || this.isDisposed) {
      return;
    }

    if (this.replayCount > 0) {
      this.replayed.push(data);
      if (this.replayed.length > this.replayCount) {
        this.replayed.shift();
      }
    }

    const observers = this.observers.slice();
    for (const observer of observers) {
      observer.onNext(data);
    }
  }

  

  subscribe(subscriber: SubscriberLike<T>) {
    if (!this.isDisposed) {
      // The idea here is that an onSubscribe function may
      // call next from unscheduled sources such as event handlers.
      // So we marshall those events back to the scheduler.
      const observer = createSafeObserver(subscriber);

      // The observer is a safe observer, queues all notifications
      // until a drain is scheduled. Hence there is no need to
      // copy the replayed notifications before publishing via notify.
      for (const next of this.replayed) {
        observer.onNext(next);
      }

      if (!this.isCompleted) {
        this.observers.push(observer);

        subscriber.add(() => {
          const index = this.observers.indexOf(observer);
          if (index !== -1) {
            this.observers.splice(index, 1);
          }
        });
      } else {
        observer.onComplete(this.error);
      }

      this.add(subscriber);
    } else {
      subscriber.dispose();
    }
  }
}

export const createSubject = <T>(replayCount = 0): SubjectResourceLike<T> =>
  new SubjectImpl(replayCount);

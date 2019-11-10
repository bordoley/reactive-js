import {
  Disposable
} from "@rx-min/rx-disposables";

import { 
  observe,
  Notification, 
  Notifications, 
  Observable,
  ObservableLike,
  ObserverLike, 
  SchedulerLike, 
  SchedulerContinuationLike, 
  SchedulerContinuationResult, 
  SubscriberLike, 
} from '@rx-min/rx-core';

class OnSubscribeObservable<T> implements ObservableLike<T> {
  private onSubscribe: (subscriber: SubscriberLike<T>) => void;

  constructor(onSubscribe: (subscriber: SubscriberLike<T>) => void) {
    this.onSubscribe = onSubscribe;
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.onSubscribe(subscriber);
  }
}

export const create = <T>(
  onSubscribe: (subscriber: SubscriberLike<T>) => void,
): ObservableLike<T> =>
  new OnSubscribeObservable(onSubscribe);

class NeverObservable<T> implements ObservableLike<T> {
  subscribe(subscriber: SubscriberLike<T>) {
  }
}

const neverInstance: ObservableLike<any> = new NeverObservable();
export const never = <T>() => (neverInstance as ObservableLike<T>);

export const ofArray = <T>(values: ReadonlyArray<T>, scheduler: SchedulerLike, delay: number | void): ObservableLike<T> =>
  create(subscriber => {
    let index = 0;

    let continuationResult: SchedulerContinuationResult;
    const continuation: SchedulerContinuationLike = (shouldYield) => {
      if (subscriber.isDisposed) {
        return;
      } else if (index >= values.length) {
        subscriber.notify(Notifications.complete, undefined);
        return;
      } else if (delay > 0) {
        const value = values[index];
        index++;
        subscriber.notify(Notifications.next, value);
        return continuationResult;
      } else {
        let yieldRequested = false;
        while (index < values.length) {
          const value = values[index];
          index++;
          subscriber.notify(Notifications.next, value);
          yieldRequested = shouldYield();
          if (yieldRequested) {
            break;
          }
        }

        if (yieldRequested) {
          return continuationResult;
        } else {
          subscriber.notify(Notifications.complete, undefined);
          return;
        }
      }
    };

    continuationResult = delay !== undefined ? [continuation, delay] : continuation;

    subscriber.add(
      scheduler.schedule(continuation, delay)
    );
  });

export const ofValue = <T>(value: T, scheduler: SchedulerLike, delay: number | void): ObservableLike<T> =>
  ofArray([value], scheduler, delay)

export const empty = <T>(scheduler: SchedulerLike): ObservableLike<T> => ofArray([], scheduler)

export const throws = <T>(error: Error, scheduler: SchedulerLike, delay: number | void): ObservableLike<T> =>
  create(subscriber => {
    const continuation: SchedulerContinuationLike = (_shouldYield) => {
      subscriber.notify(Notifications.complete, error);
    }

    subscriber.add(
      scheduler.schedule(continuation, delay)
    );
  });

class MergeObserver<T> implements ObserverLike<T> {
  private readonly delegate: ObserverLike<T>;
  private readonly count: number;
  private completedCount = 0;

  constructor(delegate: ObserverLike<T>, count: number) {
    this.delegate = delegate;
    this.count = count;
  }

  notify(notif: Notification, data: T | Error | undefined) {
    switch (notif) {
      case Notifications.next:
        this.delegate.notify(notif, data);
        break;
      case Notifications.complete:
        if (data !== undefined) {
          this.delegate.notify(notif, data)
        } else {
          this.completedCount++;
          if (this.completedCount == this.count) {
            this.delegate.notify(Notifications.complete, undefined);
          }
        }
    }
  }
}

export const merge = <T>(head: ObservableLike<T>, ...tail: Array<ObservableLike<T>>): ObservableLike<T> => {
  return create(
    subscriber => {
      const observer = new MergeObserver(subscriber, tail.length + 1);

      subscriber.add(
        Observable.connect(Observable.lift(head, observe(observer)))
      );

      for (let observable of tail) {
        subscriber.add(
          Observable.connect(Observable.lift(observable, observe(observer)))
        );
      }
    }
  );
};

class ConcatObserver<T> implements ObserverLike<T> {
  private readonly delegate: ObserverLike<T>;
  private readonly continuation: () => boolean;

  constructor(delegate: ObserverLike<T>, continuation: () => boolean) {
    this.delegate = delegate;
    this.continuation = continuation;
  }

  notify(notif: Notification, data: T | Error | undefined) {
    switch (notif) {
      case Notifications.next:
        this.delegate.notify(notif, data);
        break;
      case Notifications.complete:
        if (data !== undefined) {
          this.delegate.notify(notif, data)
        } else if (!this.continuation()) {
          this.delegate.notify(Notifications.complete, undefined);
        }
    }
  }
}

export const concat = <T>(head: ObservableLike<T>, ...tail: Array<ObservableLike<T>>): ObservableLike<T> => create(
  subscriber => {
    const queue = [head, ...tail];
    const subscribeNext = () => {
      const head = queue.shift();
      if (head !== undefined) {
        let innerSubscription = Disposable.disposed;

        const continuation = () => {
          subscriber.remove(innerSubscription);
          return subscribeNext();
        };
        const observer = new ConcatObserver(subscriber, continuation)

        innerSubscription = Observable.connect(Observable.lift(head, observe(observer)));
      } 

      return head !== undefined;
    }

    subscribeNext();
  }
);
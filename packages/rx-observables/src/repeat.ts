import {
  MonoTypeDelegatingSubscriber,
  Notifications,
  ObservableLike,
  Observable,
  observe,
  OperatorLike,
  SubscriberLike
} from "@rx-min/rx-core";

import { SerialDisposable, SerialDisposableLike } from "@rx-min/rx-disposables";

class RepeatSubscriber<T> extends MonoTypeDelegatingSubscriber<T> {
  private readonly innerSubscription: SerialDisposableLike;
  private readonly observable: ObservableLike<T>;
  private readonly shouldRepeat: (error: Error | undefined) => boolean;

  constructor(
    delegate: SubscriberLike<T>,
    observable: ObservableLike<T>,
    shouldRepeat: (error: Error | undefined) => boolean,
  ) {
    super(delegate);
    this.observable = observable;
    this.shouldRepeat = shouldRepeat;

    this.innerSubscription = SerialDisposable.create()
    this.add(this.innerSubscription);
  }

  protected onNext(data: T) {
    this.delegate.notify(Notifications.next, data);
  }

  private setupSubscription() {
    const alreadyDisposed = this.innerSubscription.isDisposed;

    if (!alreadyDisposed) {
      this.innerSubscription.innerDisposable.dispose();

      this.innerSubscription.setInnerDisposable(
        Observable.connect(
          Observable.lift(
            this.observable,
            observe(this),
          )
        )
      );
    }
  }

  protected onComplete(data: Error | undefined) {
    const shouldComplete = !this.shouldRepeat(data);

    if (shouldComplete) {
      this.delegate.notify(Notifications.complete, data);
    } else {
      this.setupSubscription();
    }
  }
}

const repeatOperator = <T>(
  observable: ObservableLike<T>,
  shouldRepeat: (error: Error | undefined) => boolean,
): OperatorLike<T, T> =>
  (subscriber: SubscriberLike<T>) =>
    new RepeatSubscriber(subscriber, observable, shouldRepeat);

const alwaysTrue = () => true;

const defaultRepeatPredicate = (error: Error | undefined): boolean => 
  error === undefined;

export const repeat = <T>(
  observable: ObservableLike<T>,
  predicate: () => boolean = alwaysTrue,
): ObservableLike<T> => {
  const repeatPredicate =
    predicate === alwaysTrue 
      ? defaultRepeatPredicate
      : (error: Error | undefined) => 
          error === undefined && predicate();

   return Observable.lift(
    observable, 
    repeatOperator(observable, repeatPredicate),
  );
};

const alwaysTrue1 = <T>(_: T) => true;

const defaultRetryPredicate = (error: Error | undefined): boolean => 
  error !== undefined;

export const retry = <T>(
  observable: ObservableLike<T>,
  predicate: (error: Error) => boolean = alwaysTrue1,
): ObservableLike<T> => {
  const retryPredicate =
    predicate === alwaysTrue1
      ? defaultRetryPredicate
      : (error: Error | undefined) => 
          error !== undefined && predicate(error);

    return Observable.lift(
    observable, 
    repeatOperator(observable, retryPredicate),
  );
};
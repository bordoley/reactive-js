import { ObserverLike } from "@reactive-js/rx-observer";

import { connect, lift, ObservableLike } from "@reactive-js/rx-observable";

import {
  DelegatingSubscriber,
  observe,
  SubscriberOperator,
  SubscriberLike,
} from "@reactive-js/rx-subscriber";

import {
  create as serialDisposableCreate,
  SerialDisposableLike,
} from "@reactive-js/serial-disposable";

class RepeatSubscriber<T> extends DelegatingSubscriber<T, T> {
  static RepeatObserver = class<T> implements ObserverLike<T> {
    private readonly parent: RepeatSubscriber<T>;

    constructor(parent: RepeatSubscriber<T>) {
      this.parent = parent;
    }

    complete(error?: Error) {
      let shouldComplete = false;
      try {
        shouldComplete = !this.parent.shouldRepeat(error);
      } catch (repeatError) {
        shouldComplete = true;

        // FIXME: Add a custom error type that includes the error that
        // caused should repeat to fail
        // see: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#example
        error = repeatError;
      }

      if (shouldComplete) {
        this.parent.delegate.complete(error);
        this.parent.remove(this.parent.innerSubscription);
      } else {
        this.setupSubscription();
      }
    }

    next(data: T) {
      this.parent.delegate.next(data);
    }

    private setupSubscription() {
      const alreadyDisposed = this.parent.innerSubscription.isDisposed;

      if (alreadyDisposed) {
        return;
      }

      this.parent.innerSubscription.disposable.dispose();

      this.parent.innerSubscription.disposable = connect(
        lift(this.parent.observable, observe(this.parent.observer)),
        this.parent,
      );
    }
  };
  private readonly innerSubscription: SerialDisposableLike;
  private readonly observable: ObservableLike<T>;
  private readonly observer: ObserverLike<T>;
  private readonly shouldRepeat: (error?: Error) => boolean;

  constructor(
    delegate: SubscriberLike<T>,
    observable: ObservableLike<T>,
    shouldRepeat: (error?: Error) => boolean,
  ) {
    super(delegate);
    this.observable = observable;
    this.shouldRepeat = shouldRepeat;

    this.innerSubscription = serialDisposableCreate();
    this.add(this.innerSubscription);
    this.observer = new RepeatSubscriber.RepeatObserver(this);
  }

  protected onComplete(error?: Error) {
    this.observer.complete(error);
  }

  protected onNext(data: T) {
    this.observer.next(data);
  }
}

const repeatOperator = <T>(
  observable: ObservableLike<T>,
  shouldRepeat: (error?: Error) => boolean,
): SubscriberOperator<T, T> => (subscriber: SubscriberLike<T>) =>
  new RepeatSubscriber(subscriber, observable, shouldRepeat);

const alwaysTrue = () => true;

const defaultRepeatPredicate = (error?: Error): boolean => error === undefined;

export const repeat = <T>(
  observable: ObservableLike<T>,
  predicate: () => boolean = alwaysTrue,
): ObservableLike<T> => {
  const repeatPredicate =
    predicate === alwaysTrue
      ? defaultRepeatPredicate
      : (error?: Error) => error === undefined && predicate();

  return lift(observable, repeatOperator(observable, repeatPredicate));
};

const alwaysTrue1 = <T>(_: T) => true;

const defaultRetryPredicate = (error?: Error): boolean => error !== undefined;

export const retry = <T>(
  observable: ObservableLike<T>,
  predicate: (error: Error) => boolean = alwaysTrue1,
): ObservableLike<T> => {
  const retryPredicate =
    predicate === alwaysTrue1
      ? defaultRetryPredicate
      : (error?: Error) => error !== undefined && predicate(error);

  return lift(observable, repeatOperator(observable, retryPredicate));
};

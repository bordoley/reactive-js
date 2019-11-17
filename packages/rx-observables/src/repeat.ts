import {
  connect,
  observe,
  DelegatingSubscriber,
  ObservableLike,
  ObserverLike,
  Observable,
  Operator,
  SubscriberLike,
} from "@reactive-js/rx-core";

import {
  SerialDisposable,
  SerialDisposableLike,
} from "@reactive-js/disposables";

class RepeatSubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly innerSubscription: SerialDisposableLike;
  private readonly observable: ObservableLike<T>;
  private readonly shouldRepeat: (error?: Error) => boolean;
  private readonly observer: ObserverLike<T>;

  static RepeatObserver = class<T> implements ObserverLike<T> {
    private readonly parent: RepeatSubscriber<T>;

    constructor(parent: RepeatSubscriber<T>) {
      this.parent = parent;
    }

    private setupSubscription() {
      const alreadyDisposed = this.parent.innerSubscription.isDisposed;

      if (!alreadyDisposed) {
        this.parent.innerSubscription.innerDisposable.dispose();

        this.parent.innerSubscription.innerDisposable = connect(
          Observable.lift(
            this.parent.observable,
            observe(this.parent.observer),
          ),
          this.parent.scheduler,
        );
      }
    }

    next(data: T) {
      this.parent.delegate.next(data);
    }

    complete(error?: Error) {
      let shouldComplete = false;
      try {
        shouldComplete = !this.parent.shouldRepeat(error);
      } catch (repeatError) {
        shouldComplete = true;

        // FIXME: Add a custom error type that includes the error that
        // caused should repeat to fail
        error = repeatError;
      }

      if (shouldComplete) {
        this.parent.delegate.complete(error);
      } else {
        this.setupSubscription();
      }
    }
  };

  constructor(
    delegate: SubscriberLike<T>,
    observable: ObservableLike<T>,
    shouldRepeat: (error?: Error) => boolean,
  ) {
    super(delegate);
    this.observable = observable;
    this.shouldRepeat = shouldRepeat;

    this.innerSubscription = SerialDisposable.create();
    this.subscription.add(this.innerSubscription);
    this.observer = new RepeatSubscriber.RepeatObserver(this);
  }

  protected onNext(data: T) {
    this.observer.next(data);
  }

  protected onComplete(error?: Error) {
    this.observer.complete(error);
  }
}

const repeatOperator = <T>(
  observable: ObservableLike<T>,
  shouldRepeat: (error?: Error) => boolean,
): Operator<T, T> => (subscriber: SubscriberLike<T>) =>
  new RepeatSubscriber(subscriber, observable, shouldRepeat);

const alwaysTrue = () => true;

const defaultRepeatPredicate = (error?: Error): boolean =>
  error === undefined;

export const repeat = <T>(
  observable: ObservableLike<T>,
  predicate: () => boolean = alwaysTrue,
): ObservableLike<T> => {
  const repeatPredicate =
    predicate === alwaysTrue
      ? defaultRepeatPredicate
      : (error?: Error) => error === undefined && predicate();

  return Observable.lift(
    observable,
    repeatOperator(observable, repeatPredicate),
  );
};

const alwaysTrue1 = <T>(_: T) => true;

const defaultRetryPredicate = (error?: Error): boolean =>
  error !== undefined;

export const retry = <T>(
  observable: ObservableLike<T>,
  predicate: (error: Error) => boolean = alwaysTrue1,
): ObservableLike<T> => {
  const retryPredicate =
    predicate === alwaysTrue1
      ? defaultRetryPredicate
      : (error?: Error) => error !== undefined && predicate(error);

  return Observable.lift(
    observable,
    repeatOperator(observable, retryPredicate),
  );
};

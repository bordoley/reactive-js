import {
  createSerialDisposable,
  SerialDisposableLike,
} from "@reactive-js/disposable";
import {
  ErrorLike,
  ObservableLike,
  ObserverLike,
  SubscriberLike,
} from "@reactive-js/rx-core";
import { connect } from "./connect";
import { DelegatingSubscriber } from "./delegatingSubscriber";
import { lift, SubscriberOperator } from "./lift";
import { observe } from "./observe";
import { ObservableOperator, pipe } from "./pipe";

class RepeatSubscriber<T> extends DelegatingSubscriber<T, T> {
  static RepeatObserver = class<T> implements ObserverLike<T> {
    private readonly parent: RepeatSubscriber<T>;

    constructor(parent: RepeatSubscriber<T>) {
      this.parent = parent;
    }

    complete(error?: ErrorLike) {
      let shouldComplete = false;
      try {
        shouldComplete = !this.parent.shouldRepeat(error);
      } catch (cause) {
        shouldComplete = true;

        error = { cause, parent: error } as ErrorLike;
      }

      if (shouldComplete) {
        this.parent.remove(this.parent.innerSubscription);
        this.parent.delegate.complete(error);
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
        pipe(this.parent.observable, observe(this.parent.observer)),
        this.parent,
      );
    }
  };
  private readonly innerSubscription: SerialDisposableLike;
  private readonly observable: ObservableLike<T>;
  private readonly observer: ObserverLike<T>;
  private readonly shouldRepeat: (error?: ErrorLike) => boolean;

  constructor(
    delegate: SubscriberLike<T>,
    observable: ObservableLike<T>,
    shouldRepeat: (error?: ErrorLike) => boolean,
  ) {
    super(delegate);
    this.observable = observable;
    this.shouldRepeat = shouldRepeat;

    this.innerSubscription = createSerialDisposable();
    this.add(this.innerSubscription);
    this.observer = new RepeatSubscriber.RepeatObserver(this);
  }

  protected onComplete(error?: ErrorLike) {
    this.observer.complete(error);
  }

  protected onNext(data: T) {
    this.observer.next(data);
  }
}

const repeatOperator = <T>(
  observable: ObservableLike<T>,
  shouldRepeat: (error?: ErrorLike) => boolean,
): SubscriberOperator<T, T> => (subscriber: SubscriberLike<T>) =>
  new RepeatSubscriber(subscriber, observable, shouldRepeat);

const alwaysTrue = () => true;

const defaultRepeatPredicate = (error?: ErrorLike): boolean =>
  error === undefined;

export const repeat = <T>(
  predicate: () => boolean = alwaysTrue,
): ObservableOperator<T, T> => {
  const repeatPredicate =
    predicate === alwaysTrue
      ? defaultRepeatPredicate
      : (error?: ErrorLike) => error === undefined && predicate();

  return obs => lift(repeatOperator(obs, repeatPredicate))(obs);
};

const alwaysTrue1 = <T>(_: T) => true;

const defaultRetryPredicate = (error?: ErrorLike): boolean =>
  error !== undefined;

export const retry = <T>(
  predicate: (error: unknown) => boolean = alwaysTrue1,
): ObservableOperator<T, T> => {
  const retryPredicate =
    predicate === alwaysTrue1
      ? defaultRetryPredicate
      : (error?: ErrorLike) => error !== undefined && predicate(error.cause);

  return obs => lift(repeatOperator(obs, retryPredicate))(obs);
};

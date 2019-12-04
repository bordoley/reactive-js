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
    private count = 1;
    private readonly parent: RepeatSubscriber<T>;

    constructor(parent: RepeatSubscriber<T>) {
      this.parent = parent;
    }

    complete(error?: ErrorLike) {
      let shouldComplete = false;
      try {
        shouldComplete = !this.parent.shouldRepeat(this.count, error);
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
      this.count++;
      this.parent.innerSubscription.disposable = connect(
        pipe(this.parent.observable, observe(this.parent.observer)),
        this.parent,
      );
    }
  };
  private readonly innerSubscription: SerialDisposableLike;
  private readonly observable: ObservableLike<T>;
  private readonly observer: ObserverLike<T>;
  private readonly shouldRepeat: (count: number, error?: ErrorLike) => boolean;

  constructor(
    delegate: SubscriberLike<T>,
    observable: ObservableLike<T>,
    shouldRepeat: (count: number, error?: ErrorLike) => boolean,
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
  shouldRepeat: (count: number, error?: ErrorLike) => boolean,
): SubscriberOperator<T, T> => (subscriber: SubscriberLike<T>) =>
  new RepeatSubscriber(subscriber, observable, shouldRepeat);

const defaultRepeatPredicate = (_: number, error?: ErrorLike): boolean =>
  error === undefined;

export const repeat = <T>(
  predicate?: ((count: number) => boolean) | number,
): ObservableOperator<T, T> => {
  const repeatPredicate =
    predicate === undefined
      ? defaultRepeatPredicate
      : typeof predicate === "number"
      ? (count: number, error?: ErrorLike) =>
          error === undefined && count < predicate
      : (count: number, error?: ErrorLike) =>
          error === undefined && predicate(count);

  return obs => lift(repeatOperator(obs, repeatPredicate))(obs);
};

const defaultRetryPredicate = (_: number, error?: ErrorLike): boolean =>
  error !== undefined;

export const retry = <T>(
  predicate?: (count: number, error: unknown) => boolean,
): ObservableOperator<T, T> => {
  const retryPredicate =
    predicate === undefined
      ? defaultRetryPredicate
      : (count: number, error?: ErrorLike) =>
          error !== undefined && predicate(count, error.cause);

  return obs => lift(repeatOperator(obs, retryPredicate))(obs);
};

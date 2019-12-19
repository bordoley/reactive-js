import { createSerialDisposable } from "@reactive-js/disposable";
import {
  ErrorLike,
  ObservableLike,
  ObserverLike,
  SubscriberLike,
  subscribe,
  AbstractDelegatingSubscriber,
} from "@reactive-js/rx";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";
import { lift } from "./lift";
import { observe } from "./observe";
import { pipe } from "@reactive-js/pipe";

class RepeatSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  static RepeatObserver = class<T> implements ObserverLike<T> {
    private count = 1;

    constructor(private readonly parent: RepeatSubscriber<T>) {}

    onComplete(error?: ErrorLike) {
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

    onNext(data: T) {
      this.parent.delegate.next(data);
    }

    private setupSubscription() {
      this.count++;
      this.parent.innerSubscription.disposable = pipe(
        this.parent.observable,
        observe(this.parent.observer),
        subscribe(this.parent),
      );
    }
  };

  private readonly innerSubscription = createSerialDisposable();
  private readonly observer: ObserverLike<
    T
  > = new RepeatSubscriber.RepeatObserver(this);

  constructor(
    delegate: SubscriberLike<T>,
    private readonly observable: ObservableLike<T>,
    private readonly shouldRepeat: (
      count: number,
      error?: ErrorLike,
    ) => boolean,
  ) {
    super(delegate);

    this.add(this.innerSubscription);
  }

  completeUnsafe(error?: ErrorLike) {
    this.observer.onComplete(error);
  }

  nextUnsafe(data: T) {
    this.observer.onNext(data);
  }
}

const repeatOperator = <T>(
  observable: ObservableLike<T>,
  shouldRepeat: (count: number, error?: ErrorLike) => boolean,
): SubscriberOperatorLike<T, T> => (subscriber: SubscriberLike<T>) =>
  new RepeatSubscriber(subscriber, observable, shouldRepeat);

const defaultRepeatPredicate = (_: number, error?: ErrorLike): boolean =>
  error === undefined;

export const repeat = <T>(
  predicate?: ((count: number) => boolean) | number,
): ObservableOperatorLike<T, T> => {
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
): ObservableOperatorLike<T, T> => {
  const retryPredicate =
    predicate === undefined
      ? defaultRetryPredicate
      : (count: number, error?: ErrorLike) =>
          error !== undefined && predicate(count, error.cause);

  return obs => lift(repeatOperator(obs, retryPredicate))(obs);
};

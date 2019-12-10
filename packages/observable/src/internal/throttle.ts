import {
  createSerialDisposable,
  SerialDisposableLike,
} from "@reactive-js/disposable";
import {
  connect,
  DelegatingSubscriber,
  ErrorLike,
  ObservableLike,
  SubscriberLike,
} from "@reactive-js/rx";
import { empty } from "./fromArray";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";
import { lift } from "./lift";
import { onComplete } from "./observe";
import { pipe } from "@reactive-js/pipe";

class ThrottleFirstSubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly durationSelector: (next: T) => ObservableLike<unknown>;
  private readonly durationSubscription: SerialDisposableLike = createSerialDisposable();
  constructor(
    delegate: SubscriberLike<T>,
    durationSelector: (next: T) => ObservableLike<unknown>,
  ) {
    super(delegate);
    this.durationSelector = durationSelector;

    this.add(this.durationSubscription);
  }

  protected onComplete(error?: ErrorLike) {
    this.remove(this.durationSubscription);
    this.delegate.complete(error);
  }

  protected onNext(data: T) {
    if (this.durationSubscription.disposable.isDisposed) {
      this.durationSubscription.disposable = pipe(
        this.durationSelector(data),
        connect(this),
      );
      this.delegate.next(data);
    }
  }
}

const throttleFirstOperator = <T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
): SubscriberOperatorLike<T, T> => subscriber =>
  new ThrottleFirstSubscriber(subscriber, durationSelector);

export const throttleFirst = <T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
): ObservableOperatorLike<T, T> =>
  lift(throttleFirstOperator(durationSelector));

export const throttleFirstTime = <T>(
  duration: number,
): ObservableOperatorLike<T, T> => {
  const durationSelector = (_: T) => empty(duration);
  return throttleFirst(durationSelector);
};

class ThrottleLastSubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly durationSelector: (next: T) => ObservableLike<unknown>;
  private readonly durationSubscription: SerialDisposableLike = createSerialDisposable();
  private value: [T] | undefined = undefined;
  private readonly notifyNext = () => {
    const value = this.value;
    if (value !== undefined) {
      this.value = undefined;
      const [next] = value;

      this.delegate.next(next);
    }
  };
  constructor(
    delegate: SubscriberLike<T>,
    durationSelector: (next: T) => ObservableLike<unknown>,
  ) {
    super(delegate);
    this.durationSelector = durationSelector;

    this.add(this.durationSubscription);
  }

  protected onComplete(error?: ErrorLike) {
    this.remove(this.durationSubscription);
    if (error === undefined) {
      this.notifyNext();
    }
    this.delegate.complete(error);
  }

  protected onNext(data: T) {
    this.value = [data];

    if (this.durationSubscription.disposable.isDisposed) {
      this.durationSubscription.disposable = pipe(
        this.durationSelector(data),
        onComplete(this.notifyNext),
        connect(this),
      );
    }
  }
}

const throttleLastOperator = <T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
): SubscriberOperatorLike<T, T> => subscriber =>
  new ThrottleLastSubscriber(subscriber, durationSelector);

export const throttleLast = <T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
): ObservableOperatorLike<T, T> => lift(throttleLastOperator(durationSelector));

export const throttleLastTime = <T>(
  duration: number,
): ObservableOperatorLike<T, T> => {
  const durationSelector = (_: T) => empty(duration);
  return throttleLast(durationSelector);
};

class ThrottleSubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly durationSelector: (next: T) => ObservableLike<unknown>;
  private readonly durationSubscription: SerialDisposableLike = createSerialDisposable();
  private value: [T] | undefined = undefined;
  private readonly notifyNext = () => {
    const value = this.value;
    if (value !== undefined) {
      this.value = undefined;
      const [next] = value;

      this.durationSubscription.disposable = pipe(
        this.durationSelector(next),
        onComplete(this.notifyNext),
        connect(this),
      );

      this.delegate.next(next);
    }
  };
  constructor(
    delegate: SubscriberLike<T>,
    durationSelector: (next: T) => ObservableLike<unknown>,
  ) {
    super(delegate);
    this.durationSelector = durationSelector;

    this.add(this.durationSubscription);
  }

  protected onComplete(error?: ErrorLike) {
    this.remove(this.durationSubscription);
    if (error === undefined) {
      this.notifyNext();
    }
    this.delegate.complete(error);
  }

  protected onNext(data: T) {
    this.value = [data];
    if (this.durationSubscription.disposable.isDisposed) {
      this.notifyNext();
    }
  }
}

const throttleOperator = <T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
): SubscriberOperatorLike<T, T> => subscriber =>
  new ThrottleSubscriber(subscriber, durationSelector);

export const throttle = <T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
): ObservableOperatorLike<T, T> => lift(throttleOperator(durationSelector));

export const throttleTime = <T>(
  duration: number,
): ObservableOperatorLike<T, T> => {
  const durationSelector = (_: T) => empty(duration);
  return throttle(durationSelector);
};

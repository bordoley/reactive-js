import {
  createSerialDisposable,
  SerialDisposableLike,
} from "@reactive-js/disposable";
import { ErrorLike, ObservableLike, ObservableOperator, SubscriberLike, SubscriberOperator } from "@reactive-js/rx";
import { connect } from "./connect";
import { DelegatingSubscriber } from "./delegatingSubscriber";
import { empty } from "./fromArray";
import { lift,  } from "./lift";
import { onComplete } from "./observe";
import { pipe } from "./pipe";

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
      this.durationSubscription.disposable = connect(
        this.durationSelector(data),
        this,
      );
      this.delegate.next(data);
    }
  }
}

const throttleFirstOperator = <T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
): SubscriberOperator<T, T> => subscriber =>
  new ThrottleFirstSubscriber(subscriber, durationSelector);

export const throttleFirst = <T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
): ObservableOperator<T, T> => lift(throttleFirstOperator(durationSelector));

export const throttleFirstTime = <T>(
  duration: number,
): ObservableOperator<T, T> => {
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
      this.durationSubscription.disposable = connect(
        pipe(this.durationSelector(data), onComplete(this.notifyNext)),
        this,
      );
    }
  }
}

const throttleLastOperator = <T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
): SubscriberOperator<T, T> => subscriber =>
  new ThrottleLastSubscriber(subscriber, durationSelector);

export const throttleLast = <T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
): ObservableOperator<T, T> => lift(throttleLastOperator(durationSelector));

export const throttleLastTime = <T>(
  duration: number,
): ObservableOperator<T, T> => {
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

      this.durationSubscription.disposable = connect(
        pipe(this.durationSelector(next), onComplete(this.notifyNext)),
        this,
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
): SubscriberOperator<T, T> => subscriber =>
  new ThrottleSubscriber(subscriber, durationSelector);

export const throttle = <T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
): ObservableOperator<T, T> => lift(throttleOperator(durationSelector));

export const throttleTime = <T>(duration: number): ObservableOperator<T, T> => {
  const durationSelector = (_: T) => empty(duration);
  return throttle(durationSelector);
};

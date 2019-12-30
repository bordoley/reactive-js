import {
  createSerialDisposable,
  SerialDisposableLike,
} from "@reactive-js/disposable";
import { pipe } from "@reactive-js/pipe";
import { empty } from "./empty";
import {
  ErrorLike,
  ObservableLike,
  ObservableOperatorLike,
  ObserverLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { lift } from "./lift";
import { observe } from "./observe";
import { subscribe } from "./subscribe";
import { DelegatingSubscriber } from "./subscriber";

export const enum ThrottleMode {
  First = 1,
  Last = 2,
  Interval = 3,
}

class ThrottleSubscriber<T> extends DelegatingSubscriber<T, T>
  implements ObserverLike<unknown> {
  private readonly durationSubscription: SerialDisposableLike = createSerialDisposable();
  private value: T | undefined = undefined;
  private hasValue = false;

  constructor(
    delegate: SubscriberLike<T>,
    private readonly durationSelector: (next: T) => ObservableLike<unknown>,
    private readonly mode: ThrottleMode,
  ) {
    super(delegate);

    this.add(this.durationSubscription);
  }

  private notifyNext() {
    if (this.hasValue) {
      const value = this.value as T;
      this.value = undefined;
      this.hasValue = false;

      this.setupDurationSubscription(value);

      try {
        this.delegate.next(value);
      } catch (cause) {
        this.delegate.complete({ cause });
      }
    }
  }

  private setupDurationSubscription(next: T) {
    this.durationSubscription.inner = pipe(
      this.durationSelector(next),
      observe(this),
      subscribe(this),
    );
  }

  complete(error?: ErrorLike) {
    if(this.dispose()) {
      if (error === undefined && this.mode !== ThrottleMode.First) {
        this.notifyNext();
      }
      this.delegate.complete(error);
    } 
  }

  next(data: T) {
    if (!this.isDisposed) {
      this.value = data;
      this.hasValue = true;

      const durationSubscriptionDisposableIsDisposed = this.durationSubscription
        .inner.isDisposed;

      if (
        durationSubscriptionDisposableIsDisposed &&
        this.mode !== ThrottleMode.Last
      ) {
        this.notifyNext();
      } else if (durationSubscriptionDisposableIsDisposed) {
        this.setupDurationSubscription(data);
      }
    }
  }

  onComplete(error?: ErrorLike) {
    if (error !== undefined) {
      this.complete(error);
    } else {
      this.notifyNext();
    }
  }

  onNext(_: unknown) {}
}

const throttleOperator = <T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
  mode: ThrottleMode,
): SubscriberOperatorLike<T, T> => subscriber =>
  new ThrottleSubscriber(subscriber, durationSelector, mode);

export const throttle = <T>(
  duration: ((next: T) => ObservableLike<unknown>) | number,
  mode: ThrottleMode = ThrottleMode.Interval,
): ObservableOperatorLike<T, T> =>
  lift(
    throttleOperator(
      typeof duration === "number" ? _ => empty(duration) : duration,
      mode,
    ),
  );

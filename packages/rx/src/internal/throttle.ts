import {
  createSerialDisposable,
  SerialDisposableLike,
  ErrorLike,
} from "@reactive-js/disposable";
import { pipe } from "@reactive-js/pipe";
import {
  ObservableLike,
  ObservableOperatorLike,
  ObserverLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { liftObservable } from "./lift";
import { observe } from "./observe";
import { subscribe } from "./subscribe";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { ofValue } from "./ofValue";

export const enum ThrottleMode {
  First = 1,
  Last = 2,
  Interval = 3,
}

class ThrottleSubscriber<T> extends AbstractDelegatingSubscriber<T, T>
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

    this.add(this.durationSubscription).add(error => {
      if (
        error === undefined &&
        this.mode !== ThrottleMode.First &&
        this.hasValue
      ) {
        ofValue(this.value).subscribe(this.delegate);
      } else {
        this.delegate.dispose(error);
      }
    });
  }

  private donotify() {
    if (this.hasValue) {
      const value = this.value as T;
      this.value = undefined;
      this.hasValue = false;

      this.setupDurationSubscription(value);

      try {
        this.delegate.notify(value);
      } catch (cause) {
        this.delegate.dispose({ cause });
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

  notify(next: T) {
    if (!this.isDisposed) {
      this.value = next;
      this.hasValue = true;

      const durationSubscriptionDisposableIsDisposed = this.durationSubscription
        .inner.isDisposed;

      if (
        durationSubscriptionDisposableIsDisposed &&
        this.mode !== ThrottleMode.Last
      ) {
        this.donotify();
      } else if (durationSubscriptionDisposableIsDisposed) {
        this.setupDurationSubscription(next);
      }
    }
  }

  onDispose(error?: ErrorLike) {
    if (error !== undefined) {
      this.dispose(error);
    }
  }

  onNext(_: unknown) {
    this.donotify();
  }
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
  liftObservable(
    throttleOperator(
      typeof duration === "number"
        ? _ => ofValue(undefined, duration)
        : duration,
      mode,
    ),
  );

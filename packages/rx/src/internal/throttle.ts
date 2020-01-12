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
} from "./interfaces";
import { lift } from "./lift";
import { observe } from "./observe";
import { subscribe } from "./subscribe";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { ofValue } from "./ofValue";
import { SubscriberOperator } from "./subscriberOperator";

/**
 * The throttle most used by the `throttle` operator.
 */
export const enum ThrottleMode {
  /**
   * Takes a leading value.
   */
  First = 1,

  /**
   * Takes the trailing value
   */
  Last = 2,

  /**
   * Takes both the leading and trailing values.
   */
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
        this.onNotify();
      } else if (durationSubscriptionDisposableIsDisposed) {
        this.setupDurationSubscription(next);
      }
    }
  }

  onDispose(error?: ErrorLike) {
    if (error !== undefined) {
      this.dispose(error);
    }
    // FIXME: Should really schedule a call to onNotify here.
  }

  onNotify(_?: unknown) {
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
}

/**
 * Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.
 *
 * @param duration Selector function that is used to determine the silence duration in between emitted values.
 * @param mode The throttle mode.
 */
export function throttle<T>(
  duration: (next: T) => ObservableLike<unknown>,
  mode?: ThrottleMode,
): ObservableOperatorLike<T, T>;

/**
 * Emits a value from the source Observable, then ignores subsequent source values for `duration` milliseconds.
 *
 * @param duration Time to wait before emitting another value after emitting the last value, measured in milliseconds.
 * @param mode The throttle mode.
 */
export function throttle<T>(
  duration: number,
  mode?: ThrottleMode,
): ObservableOperatorLike<T, T>;

export function throttle<T>(
  duration: ((next: T) => ObservableLike<unknown>) | number,
  mode: ThrottleMode = ThrottleMode.Interval,
): ObservableOperatorLike<T, T> {
  const durationSelector =
    typeof duration === "number"
      ? (_: T) => ofValue(undefined, duration)
      : duration;
  const call = (subscriber: SubscriberLike<T>) =>
    new ThrottleSubscriber(subscriber, durationSelector, mode);
  return lift(new SubscriberOperator(false, call));
}

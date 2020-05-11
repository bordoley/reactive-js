import {
  createSerialDisposable,
  SerialDisposableLike,
  disposeOnError,
  dispose,
} from "../../disposable.ts";
import { pipe, Operator } from "../../functions.ts";
import { none, Option, isNone } from "../../option.ts";
import { fromValue } from "./fromValue.ts";
import {
  ObservableLike,
  ObservableOperator,
  SubscriberLike,
} from "./interfaces.ts";
import { lift } from "./lift.ts";
import { onNotify } from "./onNotify.ts";
import { subscribe } from "./subscribe.ts";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber.ts";

/**
 * The throttle mode used by the `throttle` operator.
 */
export const enum ThrottleMode {
  /**
   * Takes a leading value.
   */
  First = 1,

  /**
   * Takes the trailing value.
   */
  Last = 2,

  /**
   * Takes both the leading and trailing values.
   */
  Interval = 3,
}

const setupDurationSubscription = <T>(
  subscriber: ThrottleSubscriber<T>,
  next: T,
) => {
  subscriber.durationSubscription.inner = pipe(
    subscriber.durationSelector(next),
    onNotify(subscriber.onNotify),
    subscribe(subscriber),
  ).add(disposeOnError(subscriber));
};

class ThrottleSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  readonly durationSubscription: SerialDisposableLike = createSerialDisposable();
  private value: Option<T> = none;
  private hasValue = false;

  readonly onNotify = (_?: unknown) => {
    if (this.hasValue) {
      const value = this.value as T;
      this.value = none;
      this.hasValue = false;

      setupDurationSubscription(this, value);
      this.delegate.notify(value);
    }
  };

  constructor(
    delegate: SubscriberLike<T>,
    readonly durationSelector: Operator<T, ObservableLike<unknown>>,
    private readonly mode: ThrottleMode,
  ) {
    super(delegate);

    this.add(this.durationSubscription).add(error => {
      if (isNone(error) && mode !== ThrottleMode.First && this.hasValue) {
        fromValue()(this.value).subscribe(delegate);
      } else {
        dispose(delegate, error);
      }
    });
  }

  notify(next: T) {
    assertSubscriberNotifyInContinuation(this);

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
        setupDurationSubscription(this, next);
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
  duration: Operator<T, ObservableLike<unknown>>,
  mode?: ThrottleMode,
): ObservableOperator<T, T>;

/**
 * Returns an `ObservableLike` which emits a value from the source,
 * then ignores subsequent source values for `duration` milliseconds.
 *
 * @param duration Time to wait before emitting another value after
 * emitting the last value, measured in milliseconds.
 * @param mode The throttle mode.
 */
export function throttle<T>(
  duration: number,
  mode?: ThrottleMode,
): ObservableOperator<T, T>;

export function throttle<T>(
  duration: Operator<T, ObservableLike<unknown>> | number,
  mode: ThrottleMode = ThrottleMode.Interval,
): ObservableOperator<T, T> {
  const durationSelector =
    typeof duration === "number"
      ? (_: T) => fromValue({ delay: duration })(none)
      : duration;
  const operator = (subscriber: SubscriberLike<T>) =>
    new ThrottleSubscriber(subscriber, durationSelector, mode);
  operator.isSynchronous = false;
  return lift(operator);
}

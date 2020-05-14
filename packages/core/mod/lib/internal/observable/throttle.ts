import {
  createSerialDisposable,
  SerialDisposableLike,
  disposeOnError,
  dispose,
  add,
  addDisposableOrTeardown,
} from "../../disposable.ts";
import { pipe, Function } from "../../functions.ts";
import { none, Option, isNone } from "../../option.ts";
import { fromValue } from "./fromValue.ts";
import {
  ObservableLike,
  ObservableFunction,
  ObserverLike,
} from "./interfaces.ts";
import { lift } from "./lift.ts";
import { onNotify } from "./onNotify.ts";
import { subscribe } from "./subscribe.ts";
import {
  AbstractDelegatingObserver,
  assertObserverNotifyInContinuation,
} from "./observer.ts";

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
  observer: ThrottleObserver<T>,
  next: T,
) => {
  observer.durationSubscription.inner = pipe(
    observer.durationFunction(next),
    onNotify(observer.onNotify),
    subscribe(observer),
    addDisposableOrTeardown(disposeOnError(observer)),
  );
};

class ThrottleObserver<T> extends AbstractDelegatingObserver<T, T> {
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
    delegate: ObserverLike<T>,
    readonly durationFunction: Function<T, ObservableLike<unknown>>,
    private readonly mode: ThrottleMode,
  ) {
    super(delegate);

    add(this, this.durationSubscription, error => {
      if (isNone(error) && mode !== ThrottleMode.First && this.hasValue) {
        fromValue()(this.value).observe(delegate);
      } else {
        dispose(delegate, error);
      }
    });
  }

  notify(next: T) {
    assertObserverNotifyInContinuation(this);

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
 * @param duration Function function that is used to determine the silence duration in between emitted values.
 * @param mode The throttle mode.
 */
export function throttle<T>(
  duration: Function<T, ObservableLike<unknown>>,
  mode?: ThrottleMode,
): ObservableFunction<T, T>;

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
): ObservableFunction<T, T>;

export function throttle<T>(
  duration: Function<T, ObservableLike<unknown>> | number,
  mode: ThrottleMode = ThrottleMode.Interval,
): ObservableFunction<T, T> {
  const durationFunction =
    typeof duration === "number"
      ? (_: T) => fromValue({ delay: duration })(none)
      : duration;
  const operator = (observer: ObserverLike<T>) =>
    new ThrottleObserver(observer, durationFunction, mode);
  operator.isSynchronous = false;
  return lift(operator);
}

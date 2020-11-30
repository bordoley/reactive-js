import {
  SerialDisposableLike,
  addDisposableDisposeParentOnChildError,
  addOnDisposedWithError,
  addOnDisposedWithoutErrorTeardown,
  createSerialDisposable,
  dispose,
} from "../disposable";
import { Function1, pipe } from "../functions";
import {
  ObservableLike,
  ObservableOperator,
  ObserverLike,
} from "../observable";
import { Option, none } from "../option";
import { fromValue } from "./fromValue";
import { lift } from "./lift";
import {
  AbstractDelegatingObserver,
  assertObserverState,
  observe,
} from "./observer";

import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";

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
    readonly durationFunction: Function1<T, ObservableLike<unknown>>,
    private readonly mode: ThrottleMode,
  ) {
    super(delegate);
    addDisposableDisposeParentOnChildError(this, this.durationSubscription);
    addOnDisposedWithError(this, delegate);
    addOnDisposedWithoutErrorTeardown(this, () => {
      if (mode !== ThrottleMode.First && this.hasValue) {
        pipe(this.value, fromValue(), observe(delegate));
      } else {
        pipe(delegate, dispose());
      }
    });
  }

  notify(next: T) {
    assertObserverState(this);

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

/**
 * Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.
 *
 * @param duration Function function that is used to determine the silence duration in between emitted values.
 * @param mode The throttle mode.
 */
export function throttle<T>(
  duration: Function1<T, ObservableLike<unknown>>,
  options?: { readonly mode?: ThrottleMode },
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
  options?: { readonly mode?: ThrottleMode },
): ObservableOperator<T, T>;

export function throttle<T>(
  duration: Function1<T, ObservableLike<unknown>> | number,
  options: { readonly mode?: ThrottleMode } = {},
): ObservableOperator<T, T> {
  const { mode = ThrottleMode.Interval } = options;
  const durationFunction =
    typeof duration === "number"
      ? (_: T) => fromValue({ delay: duration })(none)
      : duration;
  const operator = (observer: ObserverLike<T>) =>
    new ThrottleObserver(observer, durationFunction, mode);
  operator.isSynchronous = false;
  return lift(operator);
}

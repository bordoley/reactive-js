import { fromValue } from "../container";
import {
  Error,
  SerialDisposableLike,
  addDisposable,
  addDisposableDisposeParentOnChildError,
  addTeardown,
  createSerialDisposable,
  dispose,
} from "../disposable";
import { Function1, pipe } from "../functions";
import {
  ObservableLike,
  ObservableOperator,
  ThrottleMode,
} from "../observable";
import { Option, isNone, none } from "../option";
import { sinkInto } from "../source";
import { fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { Observer } from "./observer";

import { subscribe } from "./subscribe";

const setupDurationSubscription = <T>(
  observer: ThrottleObserver<T>,
  next: T,
) => {
  observer.durationSubscription.inner = pipe(
    observer.durationFunction(next),
    subscribe(observer.scheduler, observer.onNotify),
  );
};

function onDispose(this: ThrottleObserver<unknown>, e: Option<Error>) {
  if (isNone(e) && this.mode !== "first" && this.hasValue) {
    pipe(this.value, fromValue(fromArrayT), sinkInto(this.delegate));
  } else {
    pipe(this.delegate, dispose(e));
  }
}

class ThrottleObserver<T> extends Observer<T> {
  value: Option<T> = none;
  hasValue = false;

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
    readonly delegate: Observer<T>,
    readonly durationFunction: Function1<T, ObservableLike<unknown>>,
    readonly mode: ThrottleMode,
    readonly durationSubscription: SerialDisposableLike,
  ) {
    super(delegate.scheduler);
  }

  notify(next: T) {
    this.assertState();

    this.value = next;
    this.hasValue = true;

    const durationSubscriptionDisposableIsDisposed =
      this.durationSubscription.inner.isDisposed;

    if (durationSubscriptionDisposableIsDisposed && this.mode !== "last") {
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
  const { mode = "interval" } = options;
  const durationFunction =
    typeof duration === "number"
      ? (_: T) => fromValue(fromArrayT, { delay: duration })(none)
      : duration;
  const operator = (delegate: Observer<T>) => {
    const durationSubscription = createSerialDisposable();
    const observer = new ThrottleObserver(
      delegate,
      durationFunction,
      mode,
      durationSubscription,
    );
    addDisposable(delegate, observer);
    addDisposableDisposeParentOnChildError(observer, durationSubscription);
    addTeardown(observer, onDispose);
    return observer;
  };
  return lift(operator);
}

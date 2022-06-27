import { fromValue } from "../container";
import {
  SerialDisposableLike,
  add,
  addTo,
  createSerialDisposable,
  onComplete,
} from "../disposable";
import { Function1, pipe } from "../functions";
import {
  ObservableLike,
  ObservableOperator,
  ThrottleMode,
} from "../observable";
import { Option, none } from "../option";
import { sinkInto } from "../source";
import { fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { Observer } from "./observer";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";

const setupDurationSubscription = <T>(
  observer: ThrottleObserver<T>,
  next: T,
) => {
  observer.durationSubscription.inner = pipe(
    observer.durationFunction(next),
    onNotify(observer.onNotify),
    subscribe(observer.scheduler),
  );
};

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
    const observer = pipe(
      new ThrottleObserver(
        delegate,
        durationFunction,
        mode,
        durationSubscription,
      ),
      addTo(delegate),
      onComplete(() => {
        if (observer.mode !== "first" && observer.hasValue) {
          pipe(observer.value, fromValue(fromArrayT), sinkInto(delegate));
        }
      }),
    );
    return pipe(observer, add(durationSubscription));
  };
  return lift(operator);
}

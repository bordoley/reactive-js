import {
  createSerialDisposable,
  SerialDisposableLike,
  disposeOnError,
  dispose,
  add,
  addDisposableOrTeardown,
} from "../../disposable.ts";
import { pipe, returns } from "../../functions.ts";
import { concat } from "./concat.ts";
import {
  ObservableLike,
  ObservableFunction,
  ObserverLike,
} from "./interfaces.ts";
import { lift } from "./lift.ts";
import { subscribe } from "./subscribe.ts";
import {
  AbstractDelegatingObserver,
  assertObserverNotifyInContinuation,
} from "./observer.ts";
import { throws } from "./throws.ts";

/** Symbol thrown when the timeout operator times out */
export const timeoutError = Symbol("TimeoutError");

const setupDurationSubscription = <T>(observer: TimeoutObserver<T>) => {
  observer.durationSubscription.inner = pipe(
    observer.duration,
    subscribe(observer),
    addDisposableOrTeardown(disposeOnError(observer)),
  );
};

class TimeoutObserver<T> extends AbstractDelegatingObserver<T, T> {
  readonly durationSubscription: SerialDisposableLike = createSerialDisposable();

  constructor(
    delegate: ObserverLike<T>,
    readonly duration: ObservableLike<unknown>,
  ) {
    super(delegate);
    add(this, this.durationSubscription, delegate);
    setupDurationSubscription(this);
  }

  notify(next: T) {
    assertObserverNotifyInContinuation(this);

    dispose(this.durationSubscription);
    this.delegate.notify(next);
  }
}

const returnTimeoutError = returns(timeoutError);

/**
 * Returns an `ObservableLike` that completes with an error if the source
 * does not emit a value in given time span.
 *
 * @param duration Time in ms within which the source must emit values.
 */
export function timeout<T>(duration: number): ObservableFunction<T, T>;

/**
 *
 * @param duration
 */
export function timeout<T>(
  duration: ObservableLike<unknown>,
): ObservableFunction<T, T>;

export function timeout<T>(
  duration: number | ObservableLike<unknown>,
): ObservableFunction<T, T> {
  const durationObs =
    typeof duration === "number"
      ? throws({ delay: duration })(returnTimeoutError)
      : concat(duration, throws()(returnTimeoutError));
  const operator = (observer: ObserverLike<T>) =>
    new TimeoutObserver(observer, durationObs);
  operator.isSynchronous = false;
  return lift(operator);
}

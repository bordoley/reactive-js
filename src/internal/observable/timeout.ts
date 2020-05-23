import {
  createSerialDisposable,
  SerialDisposableLike,
  dispose,
  addDisposableDisposeParentOnChildError,
} from "../../disposable";
import { pipe, returns } from "../../functions";
import { concat } from "./concat";
import { ObservableLike, ObservableOperator, ObserverLike } from "./interfaces";
import { lift } from "./lift";
import {
  AbstractAutoDisposingDelegatingObserver,
  assertObserverState,
} from "./observer";
import { subscribe } from "./subscribe";
import { throws } from "./throws";

const _timeoutError = Symbol("@reactive-js/core/lib/observable/timeoutError");

/** Symbol thrown when the timeout operator times out */
export const timeoutError = _timeoutError;

const setupDurationSubscription = <T>(observer: TimeoutObserver<T>) => {
  observer.durationSubscription.inner = pipe(
    observer.duration,
    subscribe(observer),
  );
};

class TimeoutObserver<T> extends AbstractAutoDisposingDelegatingObserver<T, T> {
  readonly durationSubscription: SerialDisposableLike = createSerialDisposable();

  constructor(
    delegate: ObserverLike<T>,
    readonly duration: ObservableLike<unknown>,
  ) {
    super(delegate);
    addDisposableDisposeParentOnChildError(this, this.durationSubscription);
    setupDurationSubscription(this);
  }

  notify(next: T) {
    assertObserverState(this);

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
export function timeout<T>(duration: number): ObservableOperator<T, T>;

/**
 *
 * @param duration
 */
export function timeout<T>(
  duration: ObservableLike<unknown>,
): ObservableOperator<T, T>;

export function timeout<T>(
  duration: number | ObservableLike<unknown>,
): ObservableOperator<T, T> {
  const durationObs =
    typeof duration === "number"
      ? throws({ delay: duration })(returnTimeoutError)
      : concat(duration, throws()(returnTimeoutError));
  const operator = (observer: ObserverLike<T>) =>
    new TimeoutObserver(observer, durationObs);
  operator.isSynchronous = false;
  return lift(operator);
}

import { throws } from "../container";
import {
  SerialDisposableLike,
  addDisposableDisposeParentOnChildError,
  createSerialDisposable,
  dispose,
  bindDisposables,
} from "../disposable";
import { pipe, returns } from "../functions";
import {
  ObservableLike,
  ObservableOperator,
  ObserverLike,
} from "../observable";
import { concat } from "./concat";
import { fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { mapT } from "./map";
import { AbstractDelegatingObserver } from "./observer";
import { subscribe } from "./subscribe";

const _timeoutError = Symbol("@reactive-js/core/lib/observable/timeoutError");

/** Symbol thrown when the timeout operator times out */
export const timeoutError = _timeoutError;

const setupDurationSubscription = <T>(observer: TimeoutObserver<T>) => {
  observer.durationSubscription.inner = pipe(
    observer.duration,
    subscribe(observer),
  );
};

class TimeoutObserver<T> extends AbstractDelegatingObserver<T, T> {
  readonly durationSubscription: SerialDisposableLike =
    createSerialDisposable();

  constructor(
    delegate: ObserverLike<T>,
    readonly duration: ObservableLike<unknown>,
  ) {
    super(delegate);
  }

  notify(next: T) {
    this.assertState();

    pipe(this.durationSubscription, dispose());
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
      ? throws(
          { ...fromArrayT, ...mapT },
          { delay: duration },
        )(returnTimeoutError)
      : concat(
          duration,
          throws({ ...fromArrayT, ...mapT })(returnTimeoutError),
        );
  const operator = (delegate: ObserverLike<T>) => {
    const observer = new TimeoutObserver(delegate, durationObs);

    bindDisposables(observer, delegate);
    addDisposableDisposeParentOnChildError(
      observer,
      observer.durationSubscription,
    );
    setupDurationSubscription(observer);

    return observer;
  };
  operator.isSynchronous = false;
  return lift(operator);
}

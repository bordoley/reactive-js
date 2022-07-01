import { throws } from "../container";
import { SerialDisposable, add, bindTo, dispose } from "../disposable";
import { newInstance, newInstanceWith, pipe, returns } from "../functions";
import { delegate } from "../liftable";
import { ObservableLike, ObservableOperator } from "../observable";
import { AbstractDelegatingObserver, Observer, scheduler } from "../observer";
import { assertState } from "../source";
import { concat } from "./concat";
import { fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { mapT } from "./map";
import { subscribe } from "./subscribe";

const _timeoutError = /*@__PURE__*/ Symbol(
  "@reactive-js/core/lib/observable/timeoutError",
);

/** Symbol thrown when the timeout operator times out */
export const timeoutError = _timeoutError;

const setupDurationSubscription = <T>(observer: TimeoutObserver<T>) => {
  observer.durationSubscription.inner = pipe(
    observer.duration,
    subscribe(scheduler(observer)),
  );
};

class TimeoutObserver<T> extends AbstractDelegatingObserver<T, T> {
  constructor(
    delegate: Observer<T>,
    readonly duration: ObservableLike<unknown>,
    readonly durationSubscription: SerialDisposable,
  ) {
    super(delegate);
  }

  notify(next: T) {
    assertState(this);

    pipe(this.durationSubscription, dispose());
    delegate(this).notify(next);
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
  const operator = (delegate: Observer<T>) => {
    const durationSubscription = newInstance(SerialDisposable);
    const observer = pipe(
      TimeoutObserver,
      newInstanceWith(delegate, durationObs, durationSubscription),
      bindTo(delegate),
      add(durationSubscription),
    );

    setupDurationSubscription(observer);

    return observer;
  };
  return lift(operator);
}

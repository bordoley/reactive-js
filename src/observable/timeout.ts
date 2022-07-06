import { getDelegate } from "../__internal__.delegating";
import { DisposableRef } from "../__internal__.disposable";
import { throws } from "../container";
import { bindTo, dispose } from "../disposable";
import { newInstance, newInstanceWith, pipe, returns } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { Observer, getScheduler } from "../observer";
import { assertState, notify } from "../reactiveSink";
import { concat } from "./concat";
import { fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { mapT } from "./map";
import { AbstractDelegatingObserver } from "./observer";
import { subscribe } from "./subscribe";

const _timeoutError = /*@__PURE__*/ Symbol(
  "@reactive-js/core/lib/observable/timeoutError",
);

/** Symbol thrown when the timeout operator times out */
export const timeoutError = _timeoutError;

const setupDurationSubscription = <T>(observer: TimeoutObserver<T>) => {
  observer.durationSubscription.current = pipe(
    observer.duration,
    subscribe(getScheduler(observer)),
  );
};

class TimeoutObserver<T> extends AbstractDelegatingObserver<T, T> {
  readonly durationSubscription: DisposableRef = newInstance(
    DisposableRef,
    this,
  );

  constructor(
    delegate: Observer<T>,
    readonly duration: ObservableLike<unknown>,
  ) {
    super(delegate);
  }

  notify(next: T) {
    assertState(this);

    pipe(this.durationSubscription.current, dispose());
    pipe(this, getDelegate, notify(next));
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
    const observer = pipe(
      TimeoutObserver,
      newInstanceWith(delegate, durationObs),
      bindTo(delegate),
    );

    setupDurationSubscription(observer);

    return observer;
  };
  return lift(operator);
}

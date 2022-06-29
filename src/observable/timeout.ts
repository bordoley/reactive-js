import { throws } from "../container";
import {
  SerialDisposableLike,
  add,
  bindTo,
  createSerialDisposable,
  dispose,
} from "../disposable";
import { pipe, returns } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { Observer, scheduler } from "../observer";
import { concat } from "./concat";
import { fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { mapT } from "./map";
import { subscribe } from "./subscribe";

const _timeoutError = Symbol("@reactive-js/core/lib/observable/timeoutError");

/** Symbol thrown when the timeout operator times out */
export const timeoutError = _timeoutError;

const setupDurationSubscription = <T>(observer: TimeoutObserver<T>) => {
  observer.durationSubscription.inner = pipe(
    observer.duration,
    subscribe(scheduler(observer)),
  );
};

class TimeoutObserver<T> extends Observer<T> {
  constructor(
    readonly delegate: Observer<T>,
    readonly duration: ObservableLike<unknown>,
    readonly durationSubscription: SerialDisposableLike,
  ) {
    super(delegate.scheduler);
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
  const operator = (delegate: Observer<T>) => {
    const durationSubscription = createSerialDisposable();
    const observer = pipe(
      new TimeoutObserver(delegate, durationObs, durationSubscription),
      bindTo(delegate),
      add(durationSubscription),
    );

    setupDurationSubscription(observer);

    return observer;
  };
  return lift(operator);
}

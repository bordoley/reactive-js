import {
  createSerialDisposable,
  SerialDisposableLike,
  disposeOnError,
  dispose,
  add,
  addDisposableOrTeardown,
} from "../../disposable";
import { pipe, returns } from "../../functions";
import { concat } from "./concat";
import {
  ObservableLike,
  ObservableFunction,
  SubscriberLike,
} from "./interfaces";
import { lift } from "./lift";
import { subscribe } from "./subscribe";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber";
import { throws } from "./throws";

/** Symbol thrown when the timeout operator times out */
export const timeoutError = Symbol("TimeoutError");

const setupDurationSubscription = <T>(subscriber: TimeoutSubscriber<T>) => {
  subscriber.durationSubscription.inner = pipe(
    subscriber.duration,
    subscribe(subscriber),
    addDisposableOrTeardown(disposeOnError(subscriber)),
  );
};

class TimeoutSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  readonly durationSubscription: SerialDisposableLike = createSerialDisposable();

  constructor(
    delegate: SubscriberLike<T>,
    readonly duration: ObservableLike<unknown>,
  ) {
    super(delegate);
    add(this, this.durationSubscription, delegate);
    setupDurationSubscription(this);
  }

  notify(next: T) {
    assertSubscriberNotifyInContinuation(this);

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
  const operator = (subscriber: SubscriberLike<T>) =>
    new TimeoutSubscriber(subscriber, durationObs);
  operator.isSynchronous = false;
  return lift(operator);
}

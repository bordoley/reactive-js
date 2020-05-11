import {
  createSerialDisposable,
  SerialDisposableLike,
  disposeOnError,
} from "../../disposable.ts";
import { pipe, returns } from "../../functions.ts";
import { concat } from "./concat.ts";
import {
  ObservableLike,
  ObservableOperator,
  SubscriberLike,
} from "./interfaces.ts";
import { lift } from "./lift.ts";
import { subscribe } from "./subscribe.ts";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber.ts";
import { throws } from "./throws.ts";

/** Symbol thrown when the timeout operator times out */
export const timeoutError = Symbol("TimeoutError");

const setupDurationSubscription = <T>(subscriber: TimeoutSubscriber<T>) => {
  subscriber.durationSubscription.inner = pipe(
    subscriber.duration,
    subscribe(subscriber),
  ).add(disposeOnError(subscriber));
};

class TimeoutSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  readonly durationSubscription: SerialDisposableLike = createSerialDisposable();

  constructor(
    delegate: SubscriberLike<T>,
    readonly duration: ObservableLike<unknown>,
  ) {
    super(delegate);
    this.add(this.durationSubscription).add(delegate);
    setupDurationSubscription(this);
  }

  notify(next: T) {
    assertSubscriberNotifyInContinuation(this);

    this.durationSubscription.dispose();
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
  const operator = (subscriber: SubscriberLike<T>) =>
    new TimeoutSubscriber(subscriber, durationObs);
  operator.isSynchronous = false;
  return lift(operator);
}

import {
  createSerialDisposable,
  SerialDisposableLike,
  Exception,
} from "@reactive-js/disposable";
import {
  ObservableLike,
  ObservableOperator,
  ObserverLike,
  SubscriberLike,
} from "./interfaces";
import { lift } from "./lift";
import { observe } from "./observe";
import { pipe } from "@reactive-js/pipe";
import { subscribe } from "./subscribe";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber";
import { throws } from "./throws";
import { concat } from "./concat";

/** Symbol thrown when the timeout operator times out */
export const timeoutError = Symbol("TimeoutError");

const setupDurationSubscription = <T>(subscriber: TimeoutSubscriber<T>) => {
  subscriber.durationSubscription.inner = pipe(
    subscriber.duration,
    observe(subscriber),
    subscribe(subscriber),
  );
};

class TimeoutSubscriber<T> extends AbstractDelegatingSubscriber<T, T>
  implements ObserverLike<unknown> {
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

  onDispose(error?: Exception) {
    if (error !== undefined) {
      this.dispose(error);
    }
  }

  onNotify(_: unknown) {}
}

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
      ? throws(() => timeoutError, duration)
      : concat(
          duration,
          throws(() => timeoutError),
        );
  const operator = (subscriber: SubscriberLike<T>) =>
    new TimeoutSubscriber(subscriber, durationObs);
  return lift(operator, false);
}

import {
  createSerialDisposable,
  SerialDisposableLike,
  Exception,
} from "../../disposable.ts";
import { isSome } from "../../option.ts";
import {
  ObservableLike,
  ObservableOperator,
  ObserverLike,
  SubscriberLike,
} from "./interfaces.ts";
import { lift } from "./lift.ts";
import { observe } from "./observe.ts";
import { pipe } from "../../pipe.ts";
import { subscribe } from "./subscribe.ts";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber.ts";
import { throws } from "./throws.ts";
import { concat } from "./concat.ts";

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
    if (isSome(error)) {
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
  operator.isSynchronous = false;
  return lift(operator);
}

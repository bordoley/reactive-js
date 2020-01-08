import {
  createSerialDisposable,
  SerialDisposableLike,
  ErrorLike,
} from "@reactive-js/disposable";
import {
  ObservableLike,
  ObservableOperatorLike,
  ObserverLike,
  SubscriberLike,
} from "./interfaces";
import { lift } from "./lift";
import { observe } from "./observe";
import { pipe } from "@reactive-js/pipe";
import { subscribe } from "./subscribe";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { throws } from "./throws";
import { SubscriberOperator } from "./subscriberOperator";

const timeoutError = Symbol("TimeoutError");

const setupDurationSubscription = <T>(subscriber: TimeoutSubscriber<T>) => {
  subscriber.durationSubscription.inner = pipe(
    subscriber.duration,
    observe(subscriber),
    subscribe(subscriber),
  );
}

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
    setupDurationSubscription(this);
    this.delegate.notify(next);
  }

  onDispose(error?: ErrorLike) {
    this.dispose(error);
  }

  onNotify(_: unknown) {}
}

export const timeout = <T>(
  duration: number | ObservableLike<unknown>,
): ObservableOperatorLike<T, T> => {
  const durationObs =
    typeof duration === "number" ? throws(timeoutError, duration) : duration;
  const call = (subscriber: SubscriberLike<T>) =>
    new TimeoutSubscriber(subscriber, durationObs);
  return lift(new SubscriberOperator(false, call));
};

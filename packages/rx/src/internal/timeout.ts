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

class TimeoutSubscriber<T> extends AbstractDelegatingSubscriber<T, T>
  implements ObserverLike<unknown> {
  private readonly durationSubscription: SerialDisposableLike = createSerialDisposable();

  constructor(
    delegate: SubscriberLike<T>,
    private readonly duration: ObservableLike<unknown>,
  ) {
    super(delegate);
    this.add(this.durationSubscription).add(delegate);
    this.setupDurationSubscription();
  }

  private setupDurationSubscription() {
    this.durationSubscription.inner = pipe(
      this.duration,
      observe(this),
      subscribe(this),
    );
  }

  notify(next: T) {
    this.setupDurationSubscription();
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
  const durationObs = typeof duration === "number" 
    ? throws(timeoutError, duration) 
    : duration;
  const call = (subscriber: SubscriberLike<T>) =>
    new TimeoutSubscriber(subscriber, durationObs);
  return lift(new SubscriberOperator(false, call));
};
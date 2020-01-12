import { createSerialDisposable, ErrorLike } from "@reactive-js/disposable";
import { pipe } from "@reactive-js/pipe";
import {
  ObservableLike,
  ObservableOperatorLike,
  ObserverLike,
  SubscriberLike,
} from "./interfaces";
import { lift } from "./lift";
import { observe } from "./observe";
import { subscribe } from "./subscribe";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { SubscriberOperator } from "./subscriberOperator";

class SwitchSubscriber<T>
  extends AbstractDelegatingSubscriber<ObservableLike<T>, T>
  implements ObserverLike<T> {
  private innerSubscription = createSerialDisposable();

  constructor(delegate: SubscriberLike<T>) {
    super(delegate);
    this.delegate.add(this.innerSubscription);
    this.add(error => {
      if (this.innerSubscription.inner.isDisposed || error !== undefined) {
        this.delegate.dispose(error);
      }
    });
  }

  notify(next: ObservableLike<T>) {
    this.innerSubscription.inner.dispose();

    const innerSubscription = pipe(next, observe(this), subscribe(this));
    this.delegate.add(innerSubscription);
    this.innerSubscription.inner = innerSubscription;
  }

  onDispose(error?: ErrorLike) {
    if (error !== undefined || this.isDisposed) {
      this.delegate.dispose(error);
    }
  }

  onNotify(next: T) {
    this.delegate.notify(next);
  }
}

/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike` producing
 * values only from the most recent source.
 */
export const switchAll = <T>(): ObservableOperatorLike<
  ObservableLike<T>,
  T
> => {
  const call = (subscriber: SubscriberLike<T>) =>
    new SwitchSubscriber(subscriber);
  return lift(new SubscriberOperator(false, call));
};

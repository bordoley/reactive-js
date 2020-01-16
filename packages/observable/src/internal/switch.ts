import { ErrorLike, disposed } from "@reactive-js/disposable";
import { pipe } from "@reactive-js/pipe";
import { ObservableLike, ObserverLike, SubscriberLike } from "./interfaces";
import { lift } from "./lift";
import { observe } from "./observe";
import { subscribe } from "./subscribe";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { SubscriberOperator } from "./subscriberOperator";

class SwitchSubscriber<T>
  extends AbstractDelegatingSubscriber<ObservableLike<T>, T>
  implements ObserverLike<T> {
  private inner = disposed;

  constructor(delegate: SubscriberLike<T>) {
    super(delegate);
    this.add(error => {
      if (this.inner.isDisposed || error !== undefined) {
        this.delegate.dispose(error);
      }
    });
  }

  notify(next: ObservableLike<T>) {
    this.inner.dispose();

    const inner = pipe(next, observe(this), subscribe(this));
    this.delegate.add(inner);
    this.inner = inner;
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

const call = <T>(subscriber: SubscriberLike<T>) =>
  new SwitchSubscriber(subscriber);

/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike` producing
 * values only from the most recent source.
 */
export const switchAll: <T>(
  source: ObservableLike<ObservableLike<T>>,
) => ObservableLike<T> = lift(new SubscriberOperator(false, call));

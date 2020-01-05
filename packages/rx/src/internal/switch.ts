import { createSerialDisposable, ErrorLike } from "@reactive-js/disposable";
import { pipe } from "@reactive-js/pipe";
import {
  ObservableLike,
  ObservableOperatorLike,
  ObserverLike,
  SubscriberLike,
} from "./interfaces";
import { liftObservable } from "./lift";
import { observe } from "./observe";
import { subscribe } from "./subscribe";
import { AbstractDelegatingSubscriber } from "./subscriber";

class SwitchSubscriber<T> extends AbstractDelegatingSubscriber<ObservableLike<T>, T>
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

const operator = <T>(subscriber: SubscriberLike<T>) =>
  new SwitchSubscriber(subscriber);

export const switchAll = <T>(): ObservableOperatorLike<ObservableLike<T>, T> =>
  liftObservable(operator);

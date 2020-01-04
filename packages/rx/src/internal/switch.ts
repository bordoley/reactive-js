import { createSerialDisposable } from "@reactive-js/disposable";
import { pipe } from "@reactive-js/pipe";
import {
  ErrorLike,
  ObservableLike,
  ObservableOperatorLike,
  ObserverLike,
  SubscriberLike,
} from "./interfaces";
import { liftObservable } from "./lift";
import { observe } from "./observe";
import { subscribe } from "./subscribe";
import { DelegatingSubscriber } from "./subscriber";

class SwitchSubscriber<T> extends DelegatingSubscriber<ObservableLike<T>, T>
  implements ObserverLike<T> {
  private innerSubscription = createSerialDisposable();

  constructor(delegate: SubscriberLike<T>) {
    super(delegate);
    this.delegate.add(this.innerSubscription);
  }

  complete(error?: ErrorLike) {
    if (!this.isDisposed) {
      this.dispose(error);
      if (this.innerSubscription.inner.isDisposed || error !== undefined) {
        this.delegate.complete(error);
      }
    }
  }

  next(data: ObservableLike<T>) {
    this.innerSubscription.inner.dispose();

    const innerSubscription = pipe(data, observe(this), subscribe(this));
    this.delegate.add(innerSubscription);
    this.innerSubscription.inner = innerSubscription;
  }

  onComplete(error?: ErrorLike) {
    if (error !== undefined || this.isDisposed) {
      this.delegate.complete(error);
    }
  }

  onNext(data: T) {
    this.delegate.next(data);
  }
}

const operator = <T>(subscriber: SubscriberLike<T>) =>
  new SwitchSubscriber(subscriber);

export const switchAll = <T>(): ObservableOperatorLike<ObservableLike<T>, T> =>
  liftObservable(operator);

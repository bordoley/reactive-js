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
import { DelegatingSubscriber } from "./subscriber";

class SwitchSubscriber<T> extends DelegatingSubscriber<ObservableLike<T>, T>
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

  notifyNext(data: ObservableLike<T>) {
    this.innerSubscription.inner.dispose();

    const innerSubscription = pipe(data, observe(this), subscribe(this));
    this.delegate.add(innerSubscription);
    this.innerSubscription.inner = innerSubscription;
  }

  onComplete(error?: ErrorLike) {
    if (error !== undefined || this.isDisposed) {
      this.delegate.dispose(error);
    }
  }

  onNext(data: T) {
    this.delegate.notifyNext(data);
  }
}

const operator = <T>(subscriber: SubscriberLike<T>) =>
  new SwitchSubscriber(subscriber);

export const switchAll = <T>(): ObservableOperatorLike<ObservableLike<T>, T> =>
  liftObservable(operator);

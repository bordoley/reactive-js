import { disposed } from "@reactive-js/disposable";
import { pipe } from "@reactive-js/pipe";
import {
  ErrorLike,
  ObservableLike,
  ObservableOperatorLike,
  ObserverLike,
  SubscriberLike,
} from "./interfaces";
import { lift } from "./lift";
import { observe } from "./observe";
import { subscribe } from "./subscribe";
import { DelegatingSubscriber } from "./subscriber";

class SwitchSubscriber<T> extends DelegatingSubscriber<ObservableLike<T>, T>
  implements ObserverLike<T> {
  private innerSubscription = disposed;

  complete(error?: ErrorLike) {
    if (this.innerSubscription.isDisposed || error !== undefined) {
      this.delegate.complete(error);
    } else {
      this.dispose();
    }
  }

  next(data: ObservableLike<T>) {
    this.delegate.remove(this.innerSubscription);

    const innerSubscription = pipe(data, observe(this), subscribe(this));
    this.delegate.add(innerSubscription);
    this.innerSubscription = innerSubscription;
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
  lift(operator);

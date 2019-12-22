import { disposed } from "@reactive-js/disposable";
import {
  subscribe,
  DelegatingSubscriber,
  ErrorLike,
  ObservableLike,
  ObserverLike,
  SubscriberLike,
} from "@reactive-js/rx";
import { ObservableOperatorLike } from "./interfaces";
import { lift } from "./lift";
import { observe } from "./observe";
import { pipe } from "@reactive-js/pipe";

class SwitchSubscriber<T>
  extends DelegatingSubscriber<ObservableLike<T>, T>
  implements ObserverLike<T> {
  private innerSubscription = disposed;

  next(data: ObservableLike<T>) {
    this.remove(this.innerSubscription);
    this.innerSubscription = pipe(data, observe(this), subscribe(this));
    this.add(this.innerSubscription);
  }

  onComplete(error?: ErrorLike) {
    if (error !== undefined) {
      this.complete(error);
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

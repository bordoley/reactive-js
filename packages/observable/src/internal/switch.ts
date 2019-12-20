import { disposed } from "@reactive-js/disposable";
import {
  subscribe,
  AbstractDelegatingSubscriber,
  ErrorLike,
  ObservableLike,
  ObserverLike,
  SubscriberLike,
} from "@reactive-js/rx";
import { ObservableOperatorLike } from "./interfaces";
import { lift } from "./lift";
import { observe } from "./observe";
import { pipe } from "@reactive-js/pipe";

class SwitchSubscriber<T> extends AbstractDelegatingSubscriber<
  ObservableLike<T>,
  T
> {
  static InnerObserver = class<T> implements ObserverLike<T> {
    private readonly parent: SwitchSubscriber<T>;
    constructor(parent: SwitchSubscriber<T>) {
      this.parent = parent;
    }

    onComplete(error?: ErrorLike) {
      if (error !== undefined) {
        this.parent.complete(error);
      }
    }

    onNext(data: T) {
      this.parent.delegate.next(data);
    }
  };

  private innerSubscription = disposed;

  constructor(delegate: SubscriberLike<T>) {
    super(delegate);
  }

  next(data: ObservableLike<T>) {
    this.remove(this.innerSubscription);
    this.innerSubscription = pipe(
      data,
      observe(new SwitchSubscriber.InnerObserver(this)),
      subscribe(this),
    );
    this.add(this.innerSubscription);
  }
}

const operator = <T>(subscriber: SubscriberLike<T>) =>
  new SwitchSubscriber(subscriber);

export const switchAll = <T>(): ObservableOperatorLike<ObservableLike<T>, T> =>
  lift(operator);

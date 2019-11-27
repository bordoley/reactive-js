import { disposed } from "@reactive-js/disposable";

import { ObserverLike } from "@reactive-js/rx-observer";

import {
  DelegatingSubscriber,
  SubscriberLike,
} from "@reactive-js/rx-subscriber";

import {
  connect,
  lift,
  ObservableLike,
  ObservableOperator,
  observe,
  pipe,
} from "@reactive-js/rx-observable";

import { create as createSerialDisposable } from "@reactive-js/serial-disposable";

class SwitchSubscriber<T> extends DelegatingSubscriber<ObservableLike<T>, T> {
  static InnerObserver = class<T> implements ObserverLike<T> {
    private readonly parent: SwitchSubscriber<T>;

    constructor(parent: SwitchSubscriber<T>) {
      this.parent = parent;
    }

    complete(error?: Error) {
      if (error !== undefined) {
        this.parent.complete(error);
      }
    }

    next(data: T) {
      this.parent.delegate.next(data);
    }
  };
  private readonly innerSubscription = createSerialDisposable();

  constructor(delegate: SubscriberLike<T>) {
    super(delegate);
    this.add(this.innerSubscription);
  }

  protected onComplete(error?: Error) {
    this.remove(this.innerSubscription);
    this.delegate.complete(error);
  }

  protected onNext(data: ObservableLike<T>) {
    this.innerSubscription.disposable = disposed;
    this.innerSubscription.disposable = connect(
      pipe(data, observe(new SwitchSubscriber.InnerObserver(this))),
      this,
    );
  }
}

const operator = <T>(subscriber: SubscriberLike<T>) =>
  new SwitchSubscriber(subscriber);

export const switchAll = <T>(): ObservableOperator<ObservableLike<T>, T> =>
  lift(operator);

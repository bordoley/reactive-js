import { disposed } from "@reactive-js/disposable";
import {
  DelegatingSubscriber,
  Observable,
  ObservableLike,
  observe,
  ObserverLike,
  Operator,
  SubscriberLike,
} from "@reactive-js/rx-core";
import { create as serialDisposableCreate } from "@reactive-js/serial-disposable";

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
  private readonly innerSubscription = serialDisposableCreate();

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
    this.innerSubscription.disposable = Observable.connect(
      Observable.lift(data, observe(new SwitchSubscriber.InnerObserver(this))),
      this,
    );
  }
}

// tslint:disable-next-line variable-name
export const switch_ = <T>(): Operator<ObservableLike<T>, T> => subscriber =>
  new SwitchSubscriber(subscriber);

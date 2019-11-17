import {
  connect,
  observe,
  DelegatingSubscriber,
  ObservableLike,
  Operator,
  SubscriberLike,
  Observable,
  ObserverLike,
} from "@reactive-js/rx-core";
import { Disposable, SerialDisposable } from "@reactive-js/disposables";

class SwitchSubscriber<T> extends DelegatingSubscriber<ObservableLike<T>, T> {
  private readonly innerSubscription = SerialDisposable.create();

  static InnerObserver = class<T> implements ObserverLike<T> {
    private readonly parent: SwitchSubscriber<T>;

    constructor(parent: SwitchSubscriber<T>) {
      this.parent = parent;
    }

    next(data: T) {
      this.parent.delegate.next(data);
    }

    complete(error?: Error) {
      if (error !== undefined) {
        this.parent.complete(error);
      }
    }
  };

  constructor(delegate: SubscriberLike<T>) {
    super(delegate);
    this.subscription.add(this.innerSubscription);
  }

  protected onNext(data: ObservableLike<T>) {
    this.innerSubscription.innerDisposable = Disposable.disposed;
    this.innerSubscription.innerDisposable = connect(
      Observable.lift(data, observe(new SwitchSubscriber.InnerObserver(this))),
      this.scheduler,
    );
  }

  protected onComplete(error?: Error) {
    this.delegate.complete(error);
    this.subscription.remove(this.innerSubscription);
  }
}

export const switch_ = <T>(): Operator<ObservableLike<T>, T> => subscriber =>
  new SwitchSubscriber(subscriber);

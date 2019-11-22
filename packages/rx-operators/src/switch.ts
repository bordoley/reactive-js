import { Disposable, SerialDisposable } from "@reactive-js/disposables";
import {
  DelegatingSubscriber,
  Observable,
  ObservableLike,
  observe,
  ObserverLike,
  Operator,
  SubscriberLike,
} from "@reactive-js/rx-core";

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
    this.add(this.innerSubscription);
  }

  protected onNext(data: ObservableLike<T>) {
    this.innerSubscription.disposable = Disposable.disposed;
    this.innerSubscription.disposable = Observable.connect(
      Observable.lift(data, observe(new SwitchSubscriber.InnerObserver(this))),
      this,
    );
  }

  protected onComplete(error?: Error) {
    this.remove(this.innerSubscription);
    this.delegate.complete(error);
  }
}

// tslint:disable-next-line variable-name
export const switch_ = <T>(): Operator<ObservableLike<T>, T> => subscriber =>
  new SwitchSubscriber(subscriber);

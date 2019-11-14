import {
  connect,
  observe,
  DelegatingSubscriber,
  Notification,
  Notifications,
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

    notify(notif: Notification, data: T | Error | void) {
      switch (notif) {
        case Notifications.next:
          this.parent.delegate.notify(notif, data);
          break;
        case Notifications.complete:
          if (data !== undefined) {
            this.parent.delegate.notify(Notifications.complete, data);
          }
          break;
      }
    }
  };

  constructor(delegate: SubscriberLike<T>) {
    super(delegate);
  }

  protected onNext(data: ObservableLike<T>) {
    this.innerSubscription.innerDisposable = Disposable.disposed;
    this.innerSubscription.innerDisposable = connect(
      Observable.lift(data, observe(new SwitchSubscriber.InnerObserver(this))),
      this.scheduler,
    );
  }

  protected onComplete(error: Error | void) {
    this.innerSubscription.dispose();
    this.delegate.notify(Notifications.complete, error);
  }
}

export const switch_ = <T>(): Operator<ObservableLike<T>, T> => subscriber =>
  new SwitchSubscriber(subscriber);

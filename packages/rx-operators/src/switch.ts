import {
  DelegatingSubscriber,
  Notification,
  Notifications,
  ObservableLike,
  SubscriberLike,
  Observable,
  observe,
  ObserverLike
} from "@rx-min/rx-core";
import { Disposable, SerialDisposable } from "@rx-min/rx-disposables";

class SwitchSubscriber<T> extends DelegatingSubscriber<ObservableLike<T>, T>  {
  private readonly innerSubscription = SerialDisposable.create();

  static InnerObserver = class <T> implements ObserverLike<T> {
    private readonly parent: SwitchSubscriber<T>;
  
    constructor(parent: SwitchSubscriber<T>) {
      this.parent = parent;
    }
  
    notify(notif: Notification, data: T | Error | undefined) {
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
  }

  constructor(
    delegate: SubscriberLike<T>,
  ) {
    super(delegate);
  }

  protected onNext(data: ObservableLike<T>) {
    this.innerSubscription.setInnerDisposable(Disposable.disposed);
    this.innerSubscription.setInnerDisposable(
      Observable.connect(
        Observable.lift(
          data,
          observe(new SwitchSubscriber.InnerObserver(this))
        )
      )
    )
  }

  protected onComplete(error: Error | undefined) {
    this.innerSubscription.dispose();
    this.delegate.notify(Notifications.complete, error);
  }
}
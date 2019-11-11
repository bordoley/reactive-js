import {
  DelegatingSubscriber,
  Notification,
  Notifications,
  ObservableLike,
  OperatorLike,
  SubscriberLike,
  Observable,
  observe,
  ObserverLike
} from "@rx-min/rx-core";

class WithLatestFromSubscriber<TA, TB, TC> extends DelegatingSubscriber<
  TA,
  TC
> {
  private readonly selector: (a: TA, b: TB) => TC;
  private otherLatest: TB | undefined;

  static InnerObserver = class<TA, TB, TC> implements ObserverLike<TB> {
    private readonly parent: WithLatestFromSubscriber<TA, TB, TC>;

    constructor(parent: WithLatestFromSubscriber<TA, TB, TC>) {
      this.parent = parent;
    }

    notify(notif: Notification, data: TB | Error | undefined) {
      switch (notif) {
        case Notifications.next:
          this.parent.otherLatest = data as TB;
          break;
        case Notifications.complete:
          if (data !== undefined) {
            this.parent.notify(Notifications.complete, data as Error);
          }
          break;
      }
    }
  };

  constructor(
    delegate: SubscriberLike<TC>,
    other: ObservableLike<TB>,
    selector: (a: TA, b: TB) => TC
  ) {
    super(delegate);
    this.selector = selector;

    this.add(
      Observable.connect(
        Observable.lift(
          other,
          observe(new WithLatestFromSubscriber.InnerObserver(this))
        )
      )
    );
  }

  protected onNext(data: TA) {
    if (this.otherLatest !== undefined) {
      const result = this.selector(data, this.otherLatest);
      this.delegate.notify(Notifications.next, result);
    }
  }

  protected onComplete(error: Error | undefined) {
    this.delegate.notify(Notifications.complete, error);
  }
}

export const withLatestFrom = <TA, TB, TC>(
  other: ObservableLike<TB>,
  selector: (a: TA, b: TB) => TC
): OperatorLike<TA, TC> => subscriber =>
  new WithLatestFromSubscriber(subscriber, other, selector);

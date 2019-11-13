import {
  DelegatingSubscriber,
  Notifications,
  Operator,
  SubscriberLike,
} from "@rx-min/rx-core";

class IgnoreElementsSubscriber<TA, TB> extends DelegatingSubscriber<TA, TB> {
  constructor(delegate: SubscriberLike<TB>) {
    super(delegate);
  }

  onNext(data: TA) {}

  protected onComplete(data: Error | void) {
    this.delegate.notify(Notifications.complete, data);
  }
}

export const ignoreElements = <TA, TB>(): Operator<TA, TB> => (
  subscriber: SubscriberLike<TB>,
) => new IgnoreElementsSubscriber<TA, TB>(subscriber);

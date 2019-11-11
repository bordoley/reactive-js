import {
  DelegatingSubscriber,
  Notifications,
  OperatorLike,
  SubscriberLike
} from "@rx-min/rx-core";

class IgnoreElementsSubscriber<TA, TB> extends DelegatingSubscriber<TA, TB> {
  constructor(delegate: SubscriberLike<TB>) {
    super(delegate);
  }

  onNext(data: TA) {}

  protected onComplete(data: Error | undefined) {
    this.delegate.notify(Notifications.complete, data);
  }
}

export const ignoreElements = <TA, TB>(): OperatorLike<TA, TB> => (
  subscriber: SubscriberLike<TB>
) => new IgnoreElementsSubscriber<TA, TB>(subscriber);

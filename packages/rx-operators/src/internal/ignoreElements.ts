import {
  DelegatingSubscriber,
  Operator,
  SubscriberLike,
} from "@reactive-js/rx-subscriber";

class IgnoreElementsSubscriber<TA, TB> extends DelegatingSubscriber<TA, TB> {
  constructor(delegate: SubscriberLike<TB>) {
    super(delegate);
  }

  onNext(data: TA) {}

  protected onComplete(error?: Error) {
    this.delegate.complete(error);
  }
}

export const ignoreElements = <TA, TB>(): Operator<TA, TB> => (
  subscriber: SubscriberLike<TB>,
) => new IgnoreElementsSubscriber<TA, TB>(subscriber);

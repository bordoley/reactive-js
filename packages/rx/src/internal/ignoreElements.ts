import { ObservableOperatorLike, SubscriberLike } from "./interfaces";
import { liftEnumerable } from "./lift";
import { DelegatingSubscriber } from "./subscriber";

class IgnoreSubscriber<TA, TB> extends DelegatingSubscriber<TA, TB> {
  constructor(delegate: SubscriberLike<TB>) {
    super(delegate);
    this.add(delegate);
  }

  notifyNext(_: TA) {}
}

const operator = <TA, TB>(subscriber: SubscriberLike<TB>) =>
  new IgnoreSubscriber<TA, TB>(subscriber);

export const ignoreElements = <TA, TB>(): ObservableOperatorLike<TA, TB> =>
  liftEnumerable(operator);

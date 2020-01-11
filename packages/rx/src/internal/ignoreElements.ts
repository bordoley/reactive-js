import { ObservableOperatorLike, SubscriberLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { SubscriberOperator } from "./subscriberOperator";

class IgnoreSubscriber<TA, TB> extends AbstractDelegatingSubscriber<TA, TB> {
  constructor(delegate: SubscriberLike<TB>) {
    super(delegate);
    this.add(delegate);
  }

  notify(_: TA) {}
}

/**
 * Returns an observable that ignores all items emitted by the source.
 */
export const ignoreElements = <TA, TB>(): ObservableOperatorLike<TA, TB> => {
  const call = (subscriber: SubscriberLike<TB>) =>
    new IgnoreSubscriber(subscriber);
  return lift(new SubscriberOperator(true, call));
};

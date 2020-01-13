import { ObservableLike, SubscriberLike } from "./interfaces";
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

const call = <TA, TB>(subscriber: SubscriberLike<TB>) =>
  new IgnoreSubscriber<TA, TB>(subscriber);

/**
 * Returns an `ObservableLike` that ignores all items emitted by the source.
 */
export const ignoreElements: <TA, TB>(
  source: ObservableLike<TA>,
) => ObservableLike<TB> = lift(new SubscriberOperator(true, call));

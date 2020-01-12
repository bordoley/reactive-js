import { ObservableOperatorLike, SubscriberLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { SubscriberOperator } from "./subscriberOperator";

class MapSubscriber<TA, TB> extends AbstractDelegatingSubscriber<TA, TB> {
  constructor(
    delegate: SubscriberLike<TB>,
    private readonly mapper: (data: TA) => TB,
  ) {
    super(delegate);
    this.add(delegate);
  }

  notify(next: TA) {
    const mapped = this.mapper(next);
    this.delegate.notify(mapped);
  }
}

/**
 * Applies the `mapper` function to each value emitted by the source observable.
 *
 * @param mapper The pure function to apply each value.
 */
export const map = <TA, TB>(
  mapper: (data: TA) => TB,
): ObservableOperatorLike<TA, TB> => {
  const call = (subscriber: SubscriberLike<TB>) =>
    new MapSubscriber(subscriber, mapper);
  return lift(new SubscriberOperator(true, call));
};

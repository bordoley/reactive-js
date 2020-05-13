import { add } from "../../disposable.ts";
import { returns, Function } from "../../functions.ts";
import { ObservableFunction, SubscriberLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { AbstractDelegatingSubscriber } from "./subscriber.ts";

class MapSubscriber<TA, TB> extends AbstractDelegatingSubscriber<TA, TB> {
  constructor(
    delegate: SubscriberLike<TB>,
    private readonly mapper: Function<TA, TB>,
  ) {
    super(delegate);
    add(this, delegate);
  }

  notify(next: TA) {
    const mapped = this.mapper(next);
    this.delegate.notify(mapped);
  }
}

/**
 * Returns an `ObservableLike` that applies the `mapper` function to each
 * value emitted by the source.
 *
 * @param mapper The map function to apply each value. Must be a pure function.
 */
export const map = <TA, TB>(
  mapper: Function<TA, TB>,
): ObservableFunction<TA, TB> => {
  const operator = (subscriber: SubscriberLike<TB>) =>
    new MapSubscriber(subscriber, mapper);
  operator.isSynchronous = true;
  return lift(operator);
};

export const mapTo = <TA, TB>(value: TB): ObservableFunction<TA, TB> =>
  map(returns(value));

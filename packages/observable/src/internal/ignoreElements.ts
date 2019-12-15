import {
  ErrorLike,
  SubscriberLike,
  AbstractDelegatingSubscriber,
} from "@reactive-js/rx";
import { ObservableOperatorLike } from "./interfaces";
import { lift } from "./lift";

class IgnoreElementsSubscriber<TA, TB> extends AbstractDelegatingSubscriber<
  TA,
  TB
> {
  constructor(delegate: SubscriberLike<TB>) {
    super(delegate);
  }

  nextUnsafe(_: TA) {}

  completeUnsafe(error?: ErrorLike) {
    this.delegate.complete(error);
  }
}

const operator = <TA, TB>(subscriber: SubscriberLike<TB>) =>
  subscriber instanceof AbstractDelegatingSubscriber
    ? new IgnoreElementsSubscriber<TA, TB>(subscriber)
    : subscriber;

export const ignoreElements = <TA, TB>(): ObservableOperatorLike<TA, TB> =>
  lift(operator);

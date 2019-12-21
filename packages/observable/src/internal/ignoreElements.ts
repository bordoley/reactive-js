import { SubscriberLike, AbstractDelegatingSubscriber } from "@reactive-js/rx";
import { ObservableOperatorLike } from "./interfaces";
import { lift } from "./lift";

class IgnoreElementsSubscriber<TA, TB> extends AbstractDelegatingSubscriber<
  TA,
  TB
> {
  next(_: TA) {}
}

const operator = <TA, TB>(subscriber: SubscriberLike<TB>) =>
  new IgnoreElementsSubscriber<TA, TB>(subscriber);

export const ignoreElements = <TA, TB>(): ObservableOperatorLike<TA, TB> =>
  lift(operator);

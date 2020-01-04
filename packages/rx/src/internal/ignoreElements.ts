import { ObservableOperatorLike, SubscriberLike } from "./interfaces";
import { liftEnumerable } from "./lift";
import { AutoDisposingDelegatingSubscriber } from "./subscriber";

const operator = <TA, TB>(subscriber: SubscriberLike<TB>) =>
  new AutoDisposingDelegatingSubscriber<TA, TB>(subscriber);

export const ignoreElements = <TA, TB>(): ObservableOperatorLike<TA, TB> =>
  liftEnumerable(operator);

import { ObservableOperatorLike, SubscriberLike } from "./interfaces";
import { lift } from "./lift";
import { DelegatingSubscriber } from "./subscriber";

const operator = <TA, TB>(subscriber: SubscriberLike<TB>) =>
  new DelegatingSubscriber<TA, TB>(subscriber);

export const ignoreElements = <TA, TB>(): ObservableOperatorLike<TA, TB> =>
  lift(operator);

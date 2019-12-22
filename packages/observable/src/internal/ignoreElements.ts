import { SubscriberLike, DelegatingSubscriber } from "@reactive-js/rx";
import { ObservableOperatorLike } from "./interfaces";
import { lift } from "./lift";

const operator = <TA, TB>(subscriber: SubscriberLike<TB>) =>
  new DelegatingSubscriber<TA, TB>(subscriber);

export const ignoreElements = <TA, TB>(): ObservableOperatorLike<TA, TB> =>
  lift(operator);

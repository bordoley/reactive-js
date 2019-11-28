import {
  DelegatingSubscriber,
  SubscriberLike,
} from "@reactive-js/rx-subscriber";
import { lift } from "./lift";
import { ObservableOperator } from "./observable";

class IgnoreElementsSubscriber<TA, TB> extends DelegatingSubscriber<TA, TB> {
  constructor(delegate: SubscriberLike<TB>) {
    super(delegate);
  }

  onNext(_: TA) {}

  protected onComplete(error?: Error) {
    this.delegate.complete(error);
  }
}

const operator = <TA, TB>(subscriber: SubscriberLike<TB>) =>
  new IgnoreElementsSubscriber<TA, TB>(subscriber);

export const ignoreElements = <TA, TB>(): ObservableOperator<TA, TB> =>
  lift(operator);

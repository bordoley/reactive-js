import {
  ErrorLike,
  ObservableOperatorLike,
  SubscriberLike,
  DelegatingSubscriber,
} from "@reactive-js/rx";
import { lift } from "./lift";

class IgnoreElementsSubscriber<TA, TB> extends DelegatingSubscriber<TA, TB> {
  constructor(delegate: SubscriberLike<TB>) {
    super(delegate);
  }

  onNext(_: TA) {}

  protected onComplete(error?: ErrorLike) {
    this.delegate.complete(error);
  }
}

const operator = <TA, TB>(subscriber: SubscriberLike<TB>) =>
  new IgnoreElementsSubscriber<TA, TB>(subscriber);

export const ignoreElements = <TA, TB>(): ObservableOperatorLike<TA, TB> =>
  lift(operator);

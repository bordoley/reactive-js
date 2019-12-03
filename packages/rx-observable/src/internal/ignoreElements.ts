import { ErrorLike, SubscriberLike } from "@reactive-js/rx-core";
import { DelegatingSubscriber } from "./delegatingSubscriber";
import { lift } from "./lift";
import { ObservableOperator } from "./pipe";

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

export const ignoreElements = <TA, TB>(): ObservableOperator<TA, TB> =>
  lift(operator);

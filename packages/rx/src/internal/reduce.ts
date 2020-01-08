import {
  ObservableOperatorLike,
  SubscriberLike,
} from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { ofValue } from "./ofValue";
import { SubscriberOperator } from "./subscriberOperator";

class ReduceSubscriber<T, TAcc> extends AbstractDelegatingSubscriber<T, TAcc> {
  constructor(
    delegate: SubscriberLike<TAcc>,
    private readonly reducer: (acc: TAcc, next: T) => TAcc,
    private acc: TAcc,
  ) {
    super(delegate);
    this.add(error => {
      if (error === undefined) {
        ofValue(this.acc).subscribe(this.delegate);
      } else {
        this.delegate.dispose(error);
      }
    });
  }

  notify(next: T) {
    this.acc = this.reducer(this.acc, next);
  }
}

export const reduce = <T, TAcc>(
  reducer: (acc: TAcc, next: T) => TAcc,
  initialValue: () => TAcc,
): ObservableOperatorLike<T, TAcc> => {
  const call = (subscriber: SubscriberLike<TAcc>) =>
    new ReduceSubscriber(subscriber, reducer, initialValue());
  return lift(new SubscriberOperator(true, call));
}
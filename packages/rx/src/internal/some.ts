import {
  ObservableOperatorLike,
  SubscriberLike,
} from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { ofValue } from "./ofValue";
import { SubscriberOperator } from "./subscriberOperator";

class SomeSubscriber<T> extends AbstractDelegatingSubscriber<T, boolean>  {
  constructor(
    delegate: SubscriberLike<boolean>,
    private readonly predicate: (next: T) => boolean,
  ) {
    super(delegate);
    this.add(error => {
      if (error === undefined) {
        ofValue(false).subscribe(this.delegate);
      } else {
        this.delegate.dispose(error);
      }
    });
  }

  notify(next: T) {
    const passesPredicate = this.predicate(next);
    if (passesPredicate) {
      this.delegate.notify(true);
      this.delegate.dispose();
    }
  }
}

export const some = <T>(
  predicate: (next: T) => boolean
): ObservableOperatorLike<T, boolean> => {
  const call = (subscriber: SubscriberLike<boolean>) =>
    new SomeSubscriber(subscriber, predicate);
  return lift(new SubscriberOperator(true, call));
}

const referenceEquals = <T>(a: T, b: T) => a === b;

export const contains = <T>(
  value: T,
  equals: (a: T, b: T) => boolean = referenceEquals,
) => some((b: T) => equals(value, b));
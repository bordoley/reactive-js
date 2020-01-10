import { ObservableOperatorLike, SubscriberLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { SubscriberOperator } from "./subscriberOperator";

class ThrowIfEmptySubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  private isEmpty = true;

  constructor(
    delegate: SubscriberLike<T>, 
    private readonly factory: () => unknown,
  ) {
    super(delegate);
    this.add(error => {
      if (error === undefined && this.isEmpty){
         const cause = this.factory();
         error = { cause };
      }
      this.delegate.dispose(error);
    });
  }

  notify(next: T) {
    this.isEmpty = false;
    this.delegate.notify(next);
  }
}

export const throwIfEmpty = <T>(
  factory: () => unknown,
): ObservableOperatorLike<T, T> => {
  const call = (subscriber: SubscriberLike<T>) =>
    new ThrowIfEmptySubscriber(subscriber, factory);
  return lift(new SubscriberOperator(true, call));
};

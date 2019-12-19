import {
  ErrorLike,
  SubscriberLike,
  AbstractDelegatingSubscriber,
} from "@reactive-js/rx";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";
import { lift } from "./lift";

class ReduceSubscriber<T, TAcc> extends AbstractDelegatingSubscriber<T, TAcc> {
  constructor(
    delegate: SubscriberLike<TAcc>,
    private readonly reducer: (acc: TAcc, next: T) => TAcc,
    private acc: TAcc,
  ) {
    super(delegate);
  }

  completeUnsafe(error?: ErrorLike) {
    if (error === undefined) {
      this.delegate.nextUnsafe(this.acc);
    }
    this.delegate.complete(error);
  }

  nextUnsafe(next: T) {
    const prevAcc = this.acc;
    const nextAcc = this.reducer(prevAcc, next);
    this.acc = nextAcc;
  }
}

const operator = <T, TAcc>(
  reducer: (acc: TAcc, next: T) => TAcc,
  initialValue: () => TAcc,
): SubscriberOperatorLike<T, TAcc> => subscriber =>
  new ReduceSubscriber(subscriber, reducer, initialValue());

export const reduce = <T, TAcc>(
  reducer: (acc: TAcc, next: T) => TAcc,
  initialValue: () => TAcc,
): ObservableOperatorLike<T, TAcc> => lift(operator(reducer, initialValue));

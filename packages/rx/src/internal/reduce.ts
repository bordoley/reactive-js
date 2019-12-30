import {
  ErrorLike,
  ObservableOperatorLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { lift } from "./lift";
import { DelegatingSubscriber } from "./subscriber";

class ReduceSubscriber<T, TAcc> extends DelegatingSubscriber<T, TAcc> {
  constructor(
    delegate: SubscriberLike<TAcc>,
    private readonly reducer: (acc: TAcc, next: T) => TAcc,
    private acc: TAcc,
  ) {
    super(delegate);
  }

  complete(error?: ErrorLike) {
    if (this.dispose()) {
      if (error === undefined) {
        try {
          this.delegate.next(this.acc);
        } catch (cause) {
          error = { cause };
        }
      }
      this.delegate.complete(error);
    }
  }

  next(next: T) {
    this.acc = this.reducer(this.acc, next);
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

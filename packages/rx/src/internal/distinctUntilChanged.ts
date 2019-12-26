import {
  ObservableOperatorLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { lift } from "./lift";
import { DelegatingSubscriber } from "./subscriber";

class DistinctUntilChangedSubscriber<T> extends DelegatingSubscriber<T, T> {
  private prev: [T] | undefined;

  constructor(
    delegate: SubscriberLike<T>,
    private readonly equals: (a: T, b: T) => boolean,
  ) {
    super(delegate);
  }

  next(data: T) {
    const prev = this.prev;
    const shouldEmit =
      !this.isDisposed && (prev === undefined || !this.equals(prev[0], data));

    if (shouldEmit) {
      if (prev === undefined) {
        this.prev = [data];
      } else {
        prev[0] = data;
      }
      this.delegate.next(data);
    }
  }
}

const referenceEquality = <T>(a: T, b: T): boolean => a === b;

const operator = <T>(
  equals: (a: T, b: T) => boolean = referenceEquality,
): SubscriberOperatorLike<T, T> => subscriber =>
  new DistinctUntilChangedSubscriber(subscriber, equals);

export const distinctUntilChanged = <T>(
  equals?: (a: T, b: T) => boolean,
): ObservableOperatorLike<T, T> => lift(operator(equals));

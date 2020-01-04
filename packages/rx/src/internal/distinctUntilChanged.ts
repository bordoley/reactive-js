import {
  SubscriberLike,
  SubscriberOperatorLike,
  ObservableOperatorLike,
} from "./interfaces";
import { liftEnumerable } from "./lift";
import { DelegatingSubscriber } from "./subscriber";

class DistinctUntilChangedSubscriber<T> extends DelegatingSubscriber<T, T> {
  private prev: T | undefined;
  private hasValue = false;

  constructor(
    delegate: SubscriberLike<T>,
    private readonly equals: (a: T, b: T) => boolean,
  ) {
    super(delegate);
  }

  notifyNext(data: T) {
    const shouldEmit =
      !this.isDisposed &&
      (!this.hasValue || !this.equals(this.prev as T, data));

    if (shouldEmit) {
      this.prev = data;
      this.hasValue = true;
      this.delegate.notifyNext(data);
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
): ObservableOperatorLike<T, T> => liftEnumerable(operator(equals));

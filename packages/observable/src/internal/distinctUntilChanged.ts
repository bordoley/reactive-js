import {
  ErrorLike,
  SubscriberLike,
  AbstractDelegatingSubscriber,
} from "@reactive-js/rx";
import { lift } from "./lift";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";

class DistinctUntilChangedSubscriber<T> extends AbstractDelegatingSubscriber<
  T,
  T
> {
  private prev: [T] | undefined;

  constructor(
    delegate: SubscriberLike<T>,
    private readonly equals: (a: T, b: T) => boolean,
  ) {
    super(delegate);
  }

  completeUnsafe(error?: ErrorLike) {
    this.delegate.complete(error);
  }

  nextUnsafe(data: T) {
    const shouldEmit =
      this.prev === undefined || !this.equals(this.prev[0], data);
    if (shouldEmit) {
      if (this.prev === undefined) {
        this.prev = [data];
      } else {
        this.prev[0] = data;
      }
      this.delegate.nextUnsafe(data);
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

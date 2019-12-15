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
  private equals: (a: T, b: T) => boolean;
  private prev: [T] | undefined;
  constructor(delegate: SubscriberLike<T>, equals: (a: T, b: T) => boolean) {
    super(delegate);
    this.equals = equals;
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

      // Performance: Bypass safety checks and directly
      // sink notifcations to the delegate.
      (this.delegate as AbstractDelegatingSubscriber<T, unknown>).nextUnsafe(
        data,
      );
    }
  }
}

const referenceEquality = <T>(a: T, b: T): boolean => a === b;

const operator = <T>(
  equals: (a: T, b: T) => boolean = referenceEquality,
): SubscriberOperatorLike<T, T> => subscriber =>
  subscriber instanceof AbstractDelegatingSubscriber
    ? new DistinctUntilChangedSubscriber(subscriber, equals)
    : subscriber;

export const distinctUntilChanged = <T>(
  equals?: (a: T, b: T) => boolean,
): ObservableOperatorLike<T, T> => lift(operator(equals));

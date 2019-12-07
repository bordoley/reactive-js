import {
  ErrorLike,
  ObservableOperatorLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "@reactive-js/rx";
import { DelegatingSubscriber } from "./delegatingSubscriber";
import { lift } from "./lift";

class DistinctUntilChangedSubscriber<T> extends DelegatingSubscriber<T, T> {
  private equals: (a: T, b: T) => boolean;
  private prev: [T] | undefined;
  constructor(delegate: SubscriberLike<T>, equals: (a: T, b: T) => boolean) {
    super(delegate);
    this.equals = equals;
  }

  protected onComplete(error?: ErrorLike) {
    this.delegate.complete(error);
  }

  protected onNext(data: T) {
    const shouldEmit =
      this.prev === undefined || !this.equals(this.prev[0], data);
    if (shouldEmit) {
      if (this.prev === undefined) {
        this.prev = [data];
      } else {
        this.prev[0] = data;
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

import {
  DelegatingSubscriber,
  Operator,
  SubscriberLike,
} from "@reactive-js/rx-core";

class DistinctUntilChangedSubscriber<T> extends DelegatingSubscriber<T, T> {
  private equals: (a: T, b: T) => boolean;
  private prev: [T] | undefined;

  constructor(delegate: SubscriberLike<T>, equals: (a: T, b: T) => boolean) {
    super(delegate);
    this.equals = equals;
  }

  protected onComplete(error?: Error) {
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

export const distinctUntilChanged = <T>(
  equals: (a: T, b: T) => boolean = referenceEquality,
): Operator<T, T> => subscriber =>
  new DistinctUntilChangedSubscriber(subscriber, equals);

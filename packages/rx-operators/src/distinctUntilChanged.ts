import {
  MonoTypeDelegatingSubscriber,
  Notifications,
  OperatorLike,
  SubscriberLike
} from "@rx-min/rx-core";

class DistinctUntilChangedSubscriber<T> extends MonoTypeDelegatingSubscriber<
  T
> {
  private equals: (a: T, b: T) => boolean;
  private prev: T | undefined;

  constructor(delegate: SubscriberLike<T>, equals: (a: T, b: T) => boolean) {
    super(delegate);
    this.equals = equals;
  }

  protected onNext(data: T) {
    const shouldEmit = this.prev == undefined || !this.equals(this.prev, data);
    if (shouldEmit) {
      this.prev = data;
      this.delegate.notify(Notifications.next, data);
    }
  }

  protected onComplete(data: Error | undefined) {
    this.delegate.notify(Notifications.complete, data);
  }
}

const referenceEquality = <T>(a: T, b: T): boolean => a === b;

export const distinctUntilChanged = <T>(
  equals = referenceEquality
): OperatorLike<T, T> => subscriber =>
  new DistinctUntilChangedSubscriber(subscriber, equals);

import {
  DelegatingSubscriber,
  Operator,
  SubscriberLike,
} from "@reactive-js/rx-core";

class KeepSubscriber<T> extends DelegatingSubscriber<T, T> {
  private predicate: (data: T) => boolean;

  constructor(delegate: SubscriberLike<T>, predicate: (data: T) => boolean) {
    super(delegate);
    this.predicate = predicate;
  }

  protected onComplete(error?: Error) {
    this.delegate.complete(error);
  }

  protected onNext(data: T) {
    const shouldKeep = this.predicate(data);
    if (shouldKeep) {
      this.delegate.next(data);
    }
  }
}

export const keep = <T>(
  predicate: (data: T) => boolean,
): Operator<T, T> => subscriber => new KeepSubscriber(subscriber, predicate);

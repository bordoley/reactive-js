import {
  DelegatingSubscriber,
  Operator,
  SubscriberLike,
} from "@reactive-js/rx-core";

class LastSubscriber<T> extends DelegatingSubscriber<T, T> {
  // FIXME: This won't work with Bucklescript optional values
  private last: T | void = undefined;

  constructor(delegate: SubscriberLike<T>) {
    super(delegate);
  }

  protected onNext(data: T) {
    this.last = data;
  }

  protected onComplete(error: Error | void) {
    if (this.last !== undefined) {
      this.delegate.next(this.last);
    }
    this.delegate.complete(error);
  }
}

export const last = <T>(): Operator<T, T> => subscriber =>
  new LastSubscriber(subscriber);

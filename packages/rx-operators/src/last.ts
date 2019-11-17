import {
  DelegatingSubscriber,
  Operator,
  SubscriberLike,
} from "@reactive-js/rx-core";

class LastSubscriber<T> extends DelegatingSubscriber<T, T> {
  private last: [T] | undefined;

  constructor(delegate: SubscriberLike<T>) {
    super(delegate);
  }

  protected onNext(data: T) {
    this.last = [data];

    if (this.last === undefined) {
      this.last = [data];
    } else {
      this.last[0] = data;
    }
  }

  protected onComplete(error?: Error) {
    if (this.last !== undefined) {
      const [ last ] = this.last;
      this.delegate.next(last);
    }
    this.delegate.complete(error);
  }
}

export const last = <T>(): Operator<T, T> => subscriber =>
  new LastSubscriber(subscriber);

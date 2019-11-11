import { ObservableLike, SubscriberLike } from "@rx-min/rx-core";

class OnSubscribeObservable<T> implements ObservableLike<T> {
  private onSubscribe: (subscriber: SubscriberLike<T>) => void;

  constructor(onSubscribe: (subscriber: SubscriberLike<T>) => void) {
    this.onSubscribe = onSubscribe;
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.onSubscribe(subscriber);
  }
}

export const create = <T>(
  onSubscribe: (subscriber: SubscriberLike<T>) => void,
): ObservableLike<T> => new OnSubscribeObservable(onSubscribe);

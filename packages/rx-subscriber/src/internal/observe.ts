import { ObserverLike } from "@reactive-js/rx-observer";
import { DelegatingSubscriber } from "./delegatingSubscriber";
import { SubscriberLike, SubscriberOperator } from "./subscriber";

class ObserveSubscriber<T> extends DelegatingSubscriber<T, T> {
  private observer: ObserverLike<T>;

  constructor(delegate: SubscriberLike<T>, observer: ObserverLike<T>) {
    super(delegate);
    this.observer = observer;
  }

  protected onComplete(error?: Error) {
    this.observer.complete(error);
    this.delegate.complete(error);
  }

  protected onNext(data: T) {
    this.observer.next(data);
    this.delegate.next(data);
  }
}

/**
 * Returns a SubscriberOperator which forwards notifications to the provided observer when notified.
 *
 * @param observer
 */
export const observe = <T>(
  observer: ObserverLike<T>,
): SubscriberOperator<T, T> => (subscriber: SubscriberLike<T>) =>
  new ObserveSubscriber(subscriber, observer);

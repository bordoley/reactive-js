import {
  DelegatingSubscriber,
  Notifications,
  Operator,
  SubscriberLike,
} from "@rx-min/rx-core";

class MapSubscriber<A, B> extends DelegatingSubscriber<A, B> {
  mapper: (data: A) => B;

  constructor(delegate: SubscriberLike<B>, mapper: (data: A) => B) {
    super(delegate);
    this.mapper = mapper;
  }

  protected onNext(data: A) {
    const mappedData = this.mapper(data);
    this.delegate.notify(Notifications.next, mappedData);
  }

  protected onComplete(data: Error | undefined) {
    this.delegate.notify(Notifications.complete, data);
  }
}

export const map = <A, B>(
  mapper: (data: A) => B,
): Operator<A, B> => subscriber => {
  if (subscriber instanceof MapSubscriber) {
    const delegate = subscriber.delegate;
    const subscriberMapper = subscriber.mapper;
    const fusionMapper = (data: A) => subscriberMapper(mapper(data));
    return new MapSubscriber(delegate, fusionMapper);
  } else {
    return new MapSubscriber(subscriber, mapper);
  }
};

export const mapTo = <A, B>(value: B): Operator<A, B> => map(_ => value);

import {
  DelegatingSubscriber,
  Operator,
  SubscriberLike,
} from "@reactive-js/rx-core";

class MapSubscriber<TA, TB> extends DelegatingSubscriber<TA, TB> {
  mapper: (data: TA) => TB;

  constructor(delegate: SubscriberLike<TB>, mapper: (data: TA) => TB) {
    super(delegate);
    this.mapper = mapper;
  }

  protected onNext(data: TA) {
    const mappedData = this.mapper(data);
    this.delegate.next(mappedData);
  }

  protected onComplete(error?: Error) {
    this.delegate.complete(error);
  }
}

export const map = <TA, TB>(
  mapper: (data: TA) => TB,
): Operator<TA, TB> => subscriber => {
  if (subscriber instanceof MapSubscriber) {
    const delegate = subscriber.delegate;
    const subscriberMapper = subscriber.mapper;
    const fusionMapper = (data: TA) => subscriberMapper(mapper(data));
    return new MapSubscriber(delegate, fusionMapper);
  } else {
    return new MapSubscriber(subscriber, mapper);
  }
};

export const mapTo = <TA, TB>(value: TB): Operator<TA, TB> => map(_ => value);

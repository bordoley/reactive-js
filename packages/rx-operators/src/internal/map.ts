import {
  DelegatingSubscriber,
  Operator,
  SubscriberLike,
} from "@reactive-js/rx-subscriber";

class MapSubscriber<TA, TB> extends DelegatingSubscriber<TA, TB> {
  mapper: (data: TA) => TB;

  constructor(delegate: SubscriberLike<TB>, mapper: (data: TA) => TB) {
    super(delegate);
    this.mapper = mapper;
  }

  protected onComplete(error?: Error) {
    this.delegate.complete(error);
  }

  protected onNext(data: TA) {
    const mappedData = this.mapper(data);
    this.delegate.next(mappedData);
  }
}

export const map = <TA, TB>(
  mapper: (data: TA) => TB,
): Operator<TA, TB> => subscriber => new MapSubscriber(subscriber, mapper);

export const mapTo = <TA, TB>(value: TB): Operator<TA, TB> => map(_ => value);

import {
  ErrorLike,
  ObservableOperatorLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "@reactive-js/rx";
import { DelegatingSubscriber } from "./delegatingSubscriber";
import { lift } from "./lift";

class MapSubscriber<TA, TB> extends DelegatingSubscriber<TA, TB> {
  private readonly mapper: (data: TA) => TB;
  constructor(delegate: SubscriberLike<TB>, mapper: (data: TA) => TB) {
    super(delegate);
    this.mapper = mapper;
  }

  protected onComplete(error?: ErrorLike) {
    this.delegate.complete(error);
  }

  protected onNext(data: TA) {
    const mappedData = this.mapper(data);
    this.delegate.next(mappedData);
  }
}

const operator = <TA, TB>(
  mapper: (data: TA) => TB,
): SubscriberOperatorLike<TA, TB> => subscriber =>
  new MapSubscriber(subscriber, mapper);

export const map = <TA, TB>(
  mapper: (data: TA) => TB,
): ObservableOperatorLike<TA, TB> => lift(operator(mapper));

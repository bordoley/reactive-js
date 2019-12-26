import {
  ObservableOperatorLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { lift } from "./lift";
import { DelegatingSubscriber } from "./subscriber";

class MapSubscriber<TA, TB> extends DelegatingSubscriber<TA, TB> {
  constructor(
    delegate: SubscriberLike<TB>,
    private readonly mapper: (data: TA) => TB,
  ) {
    super(delegate);
  }

  next(data: TA) {
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

import {
  ErrorLike,
  SubscriberLike,
  AbstractDelegatingSubscriber,
} from "@reactive-js/rx";
import { lift } from "./lift";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";

class MapSubscriber<TA, TB> extends AbstractDelegatingSubscriber<TA, TB> {
  readonly mapper: (data: TA) => TB;
  constructor(delegate: SubscriberLike<TB>, mapper: (data: TA) => TB) {
    super(delegate);
    this.mapper = mapper;
  }

  completeUnsafe(error?: ErrorLike) {
    this.delegate.complete(error);
  }

  nextUnsafe(data: TA) {
    const mappedData = this.mapper(data);

    // Performance: Bypass safety checks and directly
    // sink notifications to the delegate.
    this.delegate.nextUnsafe(mappedData);
  }
}

const operator = <TA, TB>(
  mapper: (data: TA) => TB,
): SubscriberOperatorLike<TA, TB> => subscriber =>
   new MapSubscriber(subscriber, mapper);

export const map = <TA, TB>(
  mapper: (data: TA) => TB,
): ObservableOperatorLike<TA, TB> => lift(operator(mapper));

import {
  ErrorLike,
  SubscriberLike,
  AbstractDelegatingSubscriber,
} from "@reactive-js/rx";
import { lift } from "./lift";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";

class MapSubscriber<TA, TB> extends AbstractDelegatingSubscriber<TA, TB> {
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

    // Performance: Bypass safety checks and directly
    // sink notifcations to the delegate.
    (this.delegate as any).onNext(mappedData);
  }
}

const operator = <TA, TB>(
  mapper: (data: TA) => TB,
): SubscriberOperatorLike<TA, TB> => subscriber =>
  subscriber instanceof AbstractDelegatingSubscriber
    ? new MapSubscriber(subscriber, mapper)
    : (subscriber as SubscriberLike<any>);

export const map = <TA, TB>(
  mapper: (data: TA) => TB,
): ObservableOperatorLike<TA, TB> => lift(operator(mapper));

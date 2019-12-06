import { ErrorLike, SubscriberLike } from "@reactive-js/rx";
import { DelegatingSubscriber } from "./delegatingSubscriber";
import { lift, SubscriberOperator } from "./lift";
import { ObservableOperator } from "./pipe";

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
): SubscriberOperator<TA, TB> => subscriber =>
  new MapSubscriber(subscriber, mapper);

export const map = <TA, TB>(
  mapper: (data: TA) => TB,
): ObservableOperator<TA, TB> => lift(operator(mapper));

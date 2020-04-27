import { SubscriberLike } from "./interfaces";
import { AbstractSchedulerContinuation } from "../../scheduler";


export abstract class AbstractProducer<
  T
> extends AbstractSchedulerContinuation {
  constructor(private readonly subscriber: SubscriberLike<T>) {
    super();
    this.add(subscriber);
  }

  notify(next: T) {
    this.subscriber.notify(next);
  }

  abstract produce(shouldYield?: () => boolean): number;
}

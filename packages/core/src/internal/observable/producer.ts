import { add } from "../../disposable";
import { AbstractSchedulerContinuation } from "../../scheduler";
import { SchedulerLike } from "../scheduler/interfaces";
import { SubscriberLike } from "./interfaces";

export abstract class AbstractProducer<
  T
> extends AbstractSchedulerContinuation {
  constructor(private readonly subscriber: SubscriberLike<T>) {
    super();
    add(this, subscriber);
  }

  notify(next: T) {
    this.subscriber.notify(next);
  }

  abstract produce(scheduler: SchedulerLike): void;
}

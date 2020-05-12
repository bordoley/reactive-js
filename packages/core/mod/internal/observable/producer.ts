import { AbstractSchedulerContinuation } from "../../scheduler.ts";
import { SchedulerLike } from "../scheduler/interfaces.ts";
import { SubscriberLike } from "./interfaces.ts";
import { add } from "../../disposable.ts";

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

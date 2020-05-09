import { AbstractSchedulerContinuation } from "../../scheduler.ts";
import { SchedulerLike } from "../scheduler/interfaces.ts";
import { SubscriberLike } from "./interfaces.ts";

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

  abstract produce(scheduler: SchedulerLike): void;
}

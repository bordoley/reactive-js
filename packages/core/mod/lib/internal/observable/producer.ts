import { add } from "../../disposable.ts";
import { AbstractSchedulerContinuation } from "../../scheduler.ts";
import { SchedulerLike } from "../scheduler/interfaces.ts";
import { ObserverLike } from "./interfaces.ts";

export abstract class AbstractProducer<
  T
> extends AbstractSchedulerContinuation {
  constructor(private readonly observer: ObserverLike<T>) {
    super();
    add(this, observer);
  }

  notify(next: T) {
    this.observer.notify(next);
  }

  abstract produce(scheduler: SchedulerLike): void;
}

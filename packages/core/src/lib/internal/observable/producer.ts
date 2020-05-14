import { add } from "../../disposable";
import { AbstractSchedulerContinuation } from "../../scheduler";
import { SchedulerLike } from "../scheduler/interfaces";
import { ObserverLike } from "./interfaces";

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

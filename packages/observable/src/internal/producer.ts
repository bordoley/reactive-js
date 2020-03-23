import { add, createDisposable, dispose } from "@reactive-js/disposable";
import { SchedulerContinuationLike } from "@reactive-js/scheduler";
import { SubscriberLike } from "./interfaces";

/** @ignore */
export abstract class AbstractProducer<T> implements SchedulerContinuationLike {
  readonly add = add;

  readonly disposable = createDisposable(_ => {
    this.isDisposed = true;
  });

  abstract readonly delay: number;

  readonly dispose = dispose;

  isDisposed = false;

  constructor(private readonly subscriber: SubscriberLike<T>) {
    this.add(subscriber);
  }

  notify(next: T) {
    this.subscriber.notify(next);
  }

  abstract produce(shouldYield?: () => boolean): void;

  run(shouldYield?: () => boolean) {
    if (!this.isDisposed) {
      try {
        this.produce(shouldYield);
      } catch (cause) {
        const error = { cause };
        this.dispose(error);
      }
    }
  }
}

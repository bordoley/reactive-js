import { ErrorLike } from "@reactive-js/disposable";
import { EnumeratorLike, AbstractEnumerator } from "@reactive-js/enumerable";
import { SchedulerContinuationLike } from "@reactive-js/scheduler";
import { ObservableLike, SubscriberLike } from "./interfaces";

const alwaysTrue = () => true;

class EnumeratorSubscriber<T> extends AbstractEnumerator<void, T>
  implements EnumeratorLike<void, T>, SubscriberLike<T> {
  private continuations: SchedulerContinuationLike[] = [];
  current: any;

  private error: ErrorLike | undefined = undefined;
  hasCurrent = false;
  readonly now = 0;

  constructor() {
    super();
    this.add(error => {
      this.error = error;
    });
  }

  move(): boolean {
    const continuations = this.continuations;
    this.hasCurrent = false;
    this.current = undefined;
    this.error = undefined;

    while (!this.hasCurrent) {
      const continuation = continuations.shift();
      if (continuation === undefined || continuation.isDisposed) {
        break;
      }

      continuation.run(alwaysTrue);
      
      if (!continuation.isDisposed) {
        continuations.push(continuation);
      }

      const error = this.error;
      if (error !== undefined) {
        const { cause } = error;
        throw cause;
      }
    }

    return this.hasCurrent;
  }

  notify(next: T): void {
    this.current = next;
    this.hasCurrent = true;
  }

  schedule(continuation: SchedulerContinuationLike, delay = 0): void {
    this.add(continuation);
    if (!continuation.isDisposed && delay === 0) {
      this.continuations.push(continuation);
    }
  }
}

export const observableMixin = {
  enumerate<T>(this: ObservableLike<T>): EnumeratorLike<void, T> {
    const subscriber = new EnumeratorSubscriber<T>();
    this.subscribe(subscriber);
    return subscriber;
  },
};

class ScheduledObservable<T> implements ObservableLike<T> {
  readonly enumerate = observableMixin.enumerate;

  constructor(
    private readonly factory: (
      subscriber: SubscriberLike<T>,
    ) => SchedulerContinuationLike,
    readonly isSynchronous: boolean,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const schedulerContinuation = this.factory(subscriber);
    subscriber.schedule(schedulerContinuation);
  }
}

/** @ignore */
export const createScheduledObservable = <T>(
  factory: (subscriber: SubscriberLike<T>) => SchedulerContinuationLike,
  isSynchronous: boolean,
): ObservableLike<T> => new ScheduledObservable(factory, isSynchronous);

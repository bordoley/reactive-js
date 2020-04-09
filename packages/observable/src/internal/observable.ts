import {
  ErrorLike,
  add,
  createDisposable,
  dispose,
} from "@reactive-js/disposable";
import { EnumeratorLike } from "@reactive-js/enumerable";
import {
  scheduleCallback,
  SchedulerContinuationLike,
} from "@reactive-js/scheduler";
import { alwaysTrue } from "./functions";
import { ObservableLike, SubscriberLike } from "./interfaces";
import { pipe } from "@reactive-js/pipe";

class EnumeratorSubscriber<T>
  implements EnumeratorLike<void, T>, SubscriberLike<T> {
  private continuations: SchedulerContinuationLike[] = [];
  current: any;
  readonly add = add;
  readonly disposable = createDisposable();
  readonly dispose = dispose;
  private error: ErrorLike | undefined = undefined;
  hasCurrent = false;
  readonly now = 0;

  constructor() {
    this.add(error => {
      this.error = error;
    });
  }

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
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

  schedule(continuation: SchedulerContinuationLike): void {
    this.add(continuation);
    if (!continuation.isDisposed && continuation.delay === 0) {
      this.continuations.push(continuation);
    } else {
      continuation.dispose();
    }
  }
}

export function enumerate<T>(this: ObservableLike<T>): EnumeratorLike<void, T> {
  const subscriber = new EnumeratorSubscriber<T>();
  this.subscribe(subscriber);
  return subscriber;
}

class ScheduledObservable<T> implements ObservableLike<T> {
  readonly enumerate = enumerate;

  constructor(
    private readonly factory: (
      subscriber: SubscriberLike<T>,
    ) => SchedulerContinuationLike | (() => void),
    readonly isSynchronous: boolean,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const schedulerContinuation = this.factory(subscriber);
    if (schedulerContinuation instanceof Function) {
      // Note: no need to add the returned disposable, since
      // subscriber already adds any callbacks scheduled on it.
      pipe(subscriber, scheduleCallback(schedulerContinuation));
    } else {
      subscriber.schedule(schedulerContinuation);
    }
  }
}

/** @ignore */
export const createScheduledObservable = <T>(
  factory: (
    subscriber: SubscriberLike<T>,
  ) => SchedulerContinuationLike | (() => void),
  isSynchronous: boolean,
): ObservableLike<T> => new ScheduledObservable(factory, isSynchronous);

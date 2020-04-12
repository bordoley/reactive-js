import { AbstractDisposable } from "@reactive-js/disposable";
import { EnumeratorLike } from "@reactive-js/enumerable";
import {
  scheduleCallback,
  SchedulerContinuationLike,
} from "@reactive-js/scheduler";
import { alwaysTrue } from "./functions";
import { ObservableLike, SubscriberLike } from "./interfaces";
import { assertSubscriberNotifyInContinuation } from "./subscriber";

class EnumeratorSubscriber<T> extends AbstractDisposable
  implements EnumeratorLike<void, T>, SubscriberLike<T> {
  private continuations: SchedulerContinuationLike[] = [];
  current: any;
  hasCurrent = false;
  inContinuation = false;
  readonly now = 0;

  move(): boolean {
    const continuations = this.continuations;
    this.hasCurrent = false;
    this.current = undefined;

    while (!this.hasCurrent) {
      const continuation = continuations.shift();
      if (continuation === undefined || continuation.isDisposed) {
        break;
      }

      this.inContinuation = true;
      const result = continuation.run(alwaysTrue);
      this.inContinuation = false;

      // We don't support delayed continuations.
      if (!continuation.isDisposed && result <= 0) {
        continuations.push(continuation);
      } else {
        continuation.dispose();
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
    assertSubscriberNotifyInContinuation(this);

    this.current = next;
    this.hasCurrent = true;
  }

  schedule(continuation: SchedulerContinuationLike, delay = 0): void {
    this.add(continuation);
    if (!continuation.isDisposed && delay === 0) {
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
    private readonly delay: number,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const schedulerContinuation = this.factory(subscriber);
    if (schedulerContinuation instanceof Function) {
      // Note: no need to add the returned disposable, since
      // subscriber already adds any callbacks scheduled on it.
      scheduleCallback(subscriber, schedulerContinuation, this.delay);
    } else {
      subscriber.schedule(schedulerContinuation, this.delay);
    }
  }
}

/** @ignore */
export const createScheduledObservable = <T>(
  factory: (
    subscriber: SubscriberLike<T>,
  ) => SchedulerContinuationLike | (() => void),
  isSynchronous: boolean,
): ObservableLike<T> => new ScheduledObservable(factory, isSynchronous, 0);

/** @ignore */
export const createDelayedScheduledObservable = <T>(
  factory: (
    subscriber: SubscriberLike<T>,
  ) => SchedulerContinuationLike | (() => void),
  delay: number,
): ObservableLike<T> => new ScheduledObservable(factory, false, delay);

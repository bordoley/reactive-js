import { AbstractDisposable, DisposableLike } from "@reactive-js/disposable";
import { EnumeratorLike, EnumerableLike } from "@reactive-js/enumerable";
import { none, isNone, isSome } from "@reactive-js/option";
import { SchedulerContinuationLike } from "@reactive-js/scheduler";
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
    this.current = none;

    while (!this.hasCurrent) {
      const continuation = continuations.shift();
      if (isNone(continuation)|| continuation.isDisposed) {
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
      if (isSome(error)) {
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

class ObservableEnumerableImpl<T> implements EnumerableLike<void, T> {
  constructor(private readonly obs: ObservableLike<T>) {}

  enumerate(): EnumeratorLike<void, T> & DisposableLike {
    const subscriber = new EnumeratorSubscriber<T>();
    this.obs.subscribe(subscriber);
    return subscriber;
  }
}

export const toEnumerable = <T>(
  observable: ObservableLike<T>,
): EnumerableLike<void, T> => new ObservableEnumerableImpl(observable);

import { DisposableLike, ErrorLike } from "@reactive-js/disposable";
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
      if (this.isDisposed || continuation === undefined) {
        break;
      }

      const next = continuation.run(alwaysTrue) || undefined;
      if (next !== undefined) {
        continuations.push(next);
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

  schedule(continuation: SchedulerContinuationLike, delay = 0): DisposableLike {
    if (!this.isDisposed && delay === 0) {
      this.continuations.push(continuation);
    }
    return this;
  }
}

export const observableMixin = {
  enumerate<T>(this: ObservableLike<T>): EnumeratorLike<void, T> {
    const subscriber = new EnumeratorSubscriber<T>();
    this.subscribe(subscriber);
    return subscriber;
  },
};

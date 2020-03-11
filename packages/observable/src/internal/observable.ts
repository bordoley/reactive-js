import { DisposableLike, ErrorLike } from "@reactive-js/disposable";
import { EnumeratorLike, AbstractEnumerator } from "@reactive-js/enumerable";
import { SchedulerContinuationLike } from "@reactive-js/scheduler";
import { ObservableLike, SubscriberLike } from "./interfaces";

const alwaysTrue = () => true;

class EnumeratorSubscriber<T> extends AbstractEnumerator<void, T>
  implements EnumeratorLike<void, T>, SubscriberLike<T> {
  // FIXME: Might need to use a queue to implement synchronous combineLatest
  private continuation?: SchedulerContinuationLike;
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
    this.hasCurrent = false;
    this.current = undefined;
    this.error = undefined;

    while (!this.hasCurrent) {
      if (this.isDisposed || this.continuation === undefined) {
        break;
      }

      this.continuation = this.continuation.run(alwaysTrue) || undefined;

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
      this.continuation = continuation;
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

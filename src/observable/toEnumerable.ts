import { AbstractContainer } from "../container";
import { addDisposable, dispose } from "../disposable";
import { EnumerableLike, EnumeratorLike } from "../enumerable";
import { Function1, pipe } from "../functions";
import { ObservableLike, ObserverLike } from "../observable";
import { isNone, isSome, none } from "../option";
import { SchedulerContinuationLike, run } from "../scheduler";
import { AbstractObserver, sink } from "./observer";

class EnumeratorObserver<T>
  extends AbstractObserver<T>
  implements EnumeratorLike<T>, ObserverLike<T>
{
  private continuations: SchedulerContinuationLike[] = [];
  current: any;
  hasCurrent = false;
  inContinuation = false;
  get now() {
    return 0;
  }

  get shouldYield() {
    return this.inContinuation;
  }

  move(): boolean {
    const continuations = this.continuations;
    this.hasCurrent = false;
    this.current = none;

    while (!this.hasCurrent) {
      const continuation = continuations.shift();
      if (isNone(continuation) || continuation.isDisposed) {
        break;
      }

      this.inContinuation = true;
      run(continuation);
      this.inContinuation = false;

      const error = this.error;
      if (isSome(error)) {
        const { cause } = error;
        throw cause;
      }
    }

    return this.hasCurrent;
  }

  notify(next: T) {
    this.assertState();

    this.current = next;
    this.hasCurrent = true;
  }

  requestYield(): void {
    // No-Op: We yield whenever the continuation is running.
  }

  schedule(continuation: SchedulerContinuationLike, { delay } = { delay: 0 }) {
    addDisposable(this, continuation);

    if (!continuation.isDisposed && delay === 0) {
      this.continuations.push(continuation);
    } else {
      pipe(continuation, dispose());
    }
  }
}

export const enumerate = <T>(obs: ObservableLike<T>): EnumeratorLike<T> => {
  const observer = new EnumeratorObserver<T>();
  pipe(obs, sink(observer));
  return observer;
};

class ObservableEnumerable<T>
  extends AbstractContainer
  implements EnumerableLike<T>
{
  constructor(private readonly obs: ObservableLike<T>) {
    super();
  }

  enumerate() {
    return enumerate(this.obs);
  }
}

export const toEnumerable =
  <T>(): Function1<ObservableLike<T>, EnumerableLike<T>> =>
  obs =>
    new ObservableEnumerable(obs);

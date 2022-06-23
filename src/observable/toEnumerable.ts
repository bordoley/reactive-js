import {
  addDisposable,
  addDisposableDisposeParentOnChildError,
  dispose,
} from "../disposable";
import {
  AbstractEnumerable,
  AbstractEnumerator,
  EnumerableLike,
  Enumerator,
  ToEnumerable,
} from "../enumerable";
import { Function1, pipe } from "../functions";
import { ObservableLike } from "../observable";
import { isNone } from "../option";
import { SchedulerContinuationLike, SchedulerLike, run } from "../scheduler";
import { sinkInto } from "../source";
import { Observer } from "./observer";

class EnumeratorScheduler<T>
  extends AbstractEnumerator<T>
  implements SchedulerLike
{
  inContinuation = false;
  private readonly continuations: SchedulerContinuationLike[] = [];

  get now() {
    return 0;
  }

  get shouldYield() {
    return this.inContinuation;
  }

  step(): boolean {
    const { continuations } = this;
    const continuation = continuations.shift();
    if (isNone(continuation) || continuation.isDisposed) {
      return false;
    }

    this.inContinuation = true;
    run(continuation);
    this.inContinuation = false;

    return true;
  }

  requestYield(): void {
    // No-Op: We yield whenever the continuation is running.
  }

  schedule(
    continuation: SchedulerContinuationLike,
    { delay } = { delay: 0 },
  ): void {
    addDisposable(this, continuation);

    if (!continuation.isDisposed && delay === 0) {
      this.continuations.push(continuation);
    } else {
      pipe(continuation, dispose());
    }
  }

  move(): boolean {
    this.reset();

    while (!this.isDisposed && !this.hasCurrent && this.step()) {}

    return this.hasCurrent;
  }
}

class EnumeratorObserver<T> extends Observer<T> {
  constructor(private readonly enumerator: EnumeratorScheduler<T>) {
    super(enumerator);
  }

  notify(next: T) {
    this.assertState();

    this.enumerator.current = next;
  }
}

export const enumerate = <T>(obs: ObservableLike<T>): Enumerator<T> => {
  const scheduler = new EnumeratorScheduler<T>();
  const observer = new EnumeratorObserver<T>(scheduler);

  addDisposableDisposeParentOnChildError(scheduler, observer);

  pipe(obs, sinkInto(observer));

  return scheduler;
};

class ObservableEnumerable<T> extends AbstractEnumerable<T> {
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

export const toEnumerableT: ToEnumerable<ObservableLike<unknown>> = {
  toEnumerable,
};

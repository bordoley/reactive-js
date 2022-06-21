import { AbstractContainer } from "../container";
import { AbstractDisposable, addDisposable, dispose } from "../disposable";
import { EnumerableLike, EnumeratorLike } from "../enumerable";
import { Function1, pipe } from "../functions";
import { ObservableLike } from "../observable";
import { isNone, isSome, none } from "../option";
import { SchedulerContinuationLike, SchedulerLike, run } from "../scheduler";
import { sinkInto } from "../source";
import { Observer } from "./observer";

class EnumeratorScheduler extends AbstractDisposable implements SchedulerLike {
  inContinuation = false;
  private readonly continuations: SchedulerContinuationLike[] = [];

  get now() {
    return 0;
  }

  get shouldYield() {
    return this.inContinuation;
  }

  move(): boolean {
    const { continuations } = this;
    const continuation = continuations.shift();
    if (isNone(continuation) || continuation.isDisposed) {
      return false;
    }

    this.inContinuation = true;
    run(continuation);
    this.inContinuation = false;

    // FIXME: Shouldn't this just dispose
    const error = this.error;
    if (isSome(error)) {
      const { cause } = error;
      throw cause;
    }
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
}

class EnumeratorObserver<T> extends Observer<T> implements EnumeratorLike<T> {
  current: any;
  hasCurrent = false;

  constructor(readonly scheduler = new EnumeratorScheduler()) {
    super(scheduler);
    // FIXME: probably need to bind the scheduler and the enumerator
  }

  move(): boolean {
    this.hasCurrent = false;
    this.current = none;

    while (!this.hasCurrent && this.scheduler.move()) {}

    return this.hasCurrent;
  }

  notify(next: T) {
    this.assertState();

    this.current = next;
    this.hasCurrent = true;
  }
}

export const enumerate = <T>(obs: ObservableLike<T>): EnumeratorLike<T> => {
  const observer = new EnumeratorObserver<T>();
  pipe(obs, sinkInto(observer));
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

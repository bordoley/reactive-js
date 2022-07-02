import { getDelay } from "../__internal__.optionalArgs";
import {
  SchedulerImplementationLike,
  runContinuation,
} from "../__internal__.schedulerImplementation";
import { add, addTo, dispose, isDisposed } from "../disposable";
import { EnumerableLike, ToEnumerable, createEnumerable } from "../enumerable";
import {
  AbstractEnumerator,
  Enumerator,
  hasCurrent,
  reset,
} from "../enumerator";
import { Function1, newInstance, newInstanceWith, pipe } from "../functions";
import { ObservableLike } from "../observable";
import { Observer } from "../observer";
import { isNone } from "../option";
import {
  SchedulerContinuationLike,
  SchedulerLike,
  inContinuation,
} from "../scheduler";
import { assertState, sourceFrom } from "../source";

class EnumeratorScheduler<T>
  extends AbstractEnumerator<T>
  implements SchedulerLike, SchedulerImplementationLike
{
  inContinuation = false;
  private readonly continuations: SchedulerContinuationLike[] = [];

  get now() {
    return 0;
  }

  get shouldYield(): boolean {
    return inContinuation(this);
  }

  step(): boolean {
    const { continuations } = this;
    const continuation = continuations.shift();
    if (isNone(continuation) || isDisposed(continuation)) {
      return false;
    }

    pipe(this, runContinuation(continuation));
    return true;
  }

  requestYield(): void {
    // No-Op: We yield whenever the continuation is running.
  }

  schedule(
    continuation: SchedulerContinuationLike,
    options?: { readonly delay?: number },
  ): void {
    const delay = getDelay(options);

    pipe(this, add(continuation, true));

    if (!isDisposed(continuation) && delay === 0) {
      this.continuations.push(continuation);
    } else {
      pipe(continuation, dispose());
    }
  }

  move(): boolean {
    reset(this);

    while (!isDisposed(this) && !hasCurrent(this) && this.step()) {}

    return hasCurrent(this);
  }
}

class EnumeratorObserver<T> extends Observer<T> {
  constructor(private readonly enumerator: EnumeratorScheduler<T>) {
    super(enumerator);
  }

  notify(next: T) {
    assertState(this);

    this.enumerator.current = next;
  }
}

export const enumerateObs = <T>(obs: ObservableLike<T>): Enumerator<T> => {
  const scheduler = newInstance<EnumeratorScheduler<T>>(EnumeratorScheduler);

  pipe(
    EnumeratorObserver,
    newInstanceWith(scheduler),
    addTo(scheduler),
    sourceFrom(obs),
  );

  return scheduler;
};

export const toEnumerable =
  <T>(): Function1<ObservableLike<T>, EnumerableLike<T>> =>
  obs =>
    createEnumerable(() => enumerateObs(obs));

export const toEnumerableT: ToEnumerable<ObservableLike<unknown>> = {
  toEnumerable,
};

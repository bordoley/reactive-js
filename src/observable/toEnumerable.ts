import { add, addTo, dispose } from "../disposable";
import {
  AbstractEnumerator,
  EnumerableLike,
  Enumerator,
  ToEnumerable,
  createEnumerable,
} from "../enumerable";
import { Function1, pipe } from "../functions";
import { ObservableLike } from "../observable";
import { isNone } from "../option";
import { SchedulerContinuationLike, SchedulerLike, run } from "../scheduler";
import { sourceFrom } from "../source";
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
    options: { readonly delay?: number } = {},
  ): void {
    const { delay = Math.max(options.delay ?? 0, 0) } = options;

    pipe(this, add(continuation, true));

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

  pipe(new EnumeratorObserver<T>(scheduler), addTo(scheduler), sourceFrom(obs));

  return scheduler;
};

export const toEnumerable =
  <T>(): Function1<ObservableLike<T>, EnumerableLike<T>> =>
  obs =>
    createEnumerable(() => enumerate(obs));

export const toEnumerableT: ToEnumerable<ObservableLike<unknown>> = {
  toEnumerable,
};

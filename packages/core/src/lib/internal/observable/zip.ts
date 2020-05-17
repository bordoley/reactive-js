import {
  DisposableLike,
  AbstractDisposable,
  dispose,
  add,
} from "../../disposable";
import { current, EnumeratorLike } from "../../enumerable";
import { none, isSome, isNone } from "../../option";
import { SchedulerContinuationLike } from "../../scheduler";
import { zipEnumerators } from "../enumerable/zip";
import { fromEnumerator } from "./fromEnumerable";
import { ObservableLike, ObserverLike, ObservableOperator } from "./interfaces";
import { AbstractDelegatingObserver, assertObserverState } from "./observer";
import { using } from "./using";

class EnumeratorObserver<T> extends AbstractDisposable
  implements EnumeratorLike<T>, ObserverLike<T> {
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
      if (isNone(continuation) || continuation.isDisposed) {
        break;
      }

      this.inContinuation = true;
      continuation.continue(this);
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
    assertObserverState(this);

    this.current = next;
    this.hasCurrent = true;
  }

  schedule(continuation: SchedulerContinuationLike, { delay } = { delay: 0 }) {
    add(this, continuation);
    if (!continuation.isDisposed && delay === 0) {
      this.continuations.push(continuation);
    } else {
      dispose(continuation);
    }
  }

  shouldYield() {
    return true;
  }
}

const subscribeInteractive = <T>(
  obs: ObservableLike<T>,
): EnumeratorObserver<T> => {
  const observer = new EnumeratorObserver<T>();
  obs.observe(observer);
  return observer;
};

const shouldEmit = (enumerators: readonly EnumeratorLike<unknown>[]) => {
  for (const enumerator of enumerators) {
    if (!enumerator.hasCurrent) {
      return false;
    }
  }
  return true;
};

const shouldComplete = (
  enumerators: readonly (DisposableLike & EnumeratorLike<unknown>)[],
) => {
  for (const enumerator of enumerators) {
    enumerator.move();
    if (enumerator.isDisposed && !enumerator.hasCurrent) {
      return true;
    }
  }
  return false;
};

class ZipObserver extends AbstractDelegatingObserver<unknown, unknown[]>
  implements EnumeratorLike<unknown> {
  current: unknown;
  private readonly buffer: unknown[] = [];
  hasCurrent = false;

  constructor(
    delegate: ObserverLike<unknown[]>,
    private readonly enumerators: readonly (DisposableLike &
      EnumeratorLike<any>)[],
  ) {
    super(delegate);
    add(delegate, () => {
      this.hasCurrent = false;
      this.current = none;
      this.buffer.length = 0;
    });
    add(this, error => {
      if (isSome(error) || (this.buffer.length === 0 && !this.hasCurrent)) {
        dispose(delegate, error);
      }
    });
  }

  move(): boolean {
    const buffer = this.buffer;
    if (buffer.length > 0) {
      const next = buffer.shift();
      this.hasCurrent = true;
      this.current = next;
      return true;
    } else {
      this.hasCurrent = false;
      this.current = none;
      return false;
    }
  }

  notify(next: unknown) {
    assertObserverState(this);

    const enumerators = this.enumerators;

    if (!this.isDisposed) {
      if (this.hasCurrent) {
        this.buffer.push(next);
      } else {
        this.hasCurrent = true;
        this.current = next;
      }

      if (shouldEmit(enumerators)) {
        const next = enumerators.map(current);
        const shouldCompleteResult = shouldComplete(enumerators);

        this.delegate.notify(next);

        if (shouldCompleteResult) {
          this.hasCurrent = false;
          this.current = none;
          this.buffer.length = 0;
          dispose(this);
        }
      }
    }
  }
}

class ZipObservable implements ObservableLike<unknown[]> {
  readonly isSynchronous: boolean;

  constructor(private readonly observables: readonly ObservableLike<any>[]) {
    this.isSynchronous = observables.every(obs => obs.isSynchronous);
  }

  observe(observer: ObserverLike<unknown[]>) {
    const observables = this.observables;
    const count = observables.length;

    if (this.isSynchronous) {
      using(
        _ => this.observables.map(subscribeInteractive),
        (...enumerators: EnumeratorObserver<any>[]) =>
          fromEnumerator()(zipEnumerators(enumerators)),
      ).observe(observer);
    } else {
      const enumerators: (DisposableLike & EnumeratorLike<unknown>)[] = [];
      for (let index = 0; index < count; index++) {
        const observable = observables[index];

        if (observable.isSynchronous) {
          const enumerator = subscribeInteractive(observable);

          enumerator.move();
          enumerators.push(enumerator);
        } else {
          const innerObserver = new ZipObserver(observer, enumerators);

          observable.observe(innerObserver);
          enumerators.push(innerObserver);
        }
      }
    }
  }
}

export function zip<TA, TB>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
): ObservableLike<[TA, TB]>;
export function zip<TA, TB, TC>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
): ObservableLike<[TA, TB, TC]>;
export function zip<TA, TB, TC, TD>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
): ObservableLike<[TA, TB, TC, TD]>;
export function zip<TA, TB, TC, TD, TE>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
): ObservableLike<[TA, TB, TC, TD, TE]>;
export function zip<TA, TB, TC, TD, TE, TF>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
  f: ObservableLike<TF>,
): ObservableLike<[TA, TB, TC, TD, TE, TF]>;
export function zip<TA, TB, TC, TD, TE, TF, TG>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
  f: ObservableLike<TF>,
  g: ObservableLike<TG>,
): ObservableLike<[TA, TB, TC, TD, TE, TF, TG]>;
export function zip<TA, TB, TC, TD, TE, TF, TG, TH>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
  f: ObservableLike<TF>,
  g: ObservableLike<TG>,
  h: ObservableLike<TH>,
): ObservableLike<[TA, TB, TC, TD, TE, TF, TG, TH]>;
export function zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
  f: ObservableLike<TF>,
  g: ObservableLike<TG>,
  h: ObservableLike<TH>,
  i: ObservableLike<TI>,
): ObservableLike<[TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

/**
 * Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
 * in order, of each of its input sources.
 */
export function zip(
  ...observables: ObservableLike<unknown>[]
): ObservableLike<unknown[]> {
  return new ZipObservable(observables);
}

export const zipWith = <TA, TB>(
  snd: ObservableLike<TB>,
): ObservableOperator<TA, [TA, TB]> => fst => zip(fst, snd);

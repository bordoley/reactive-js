import { DisposableLike, AbstractDisposable, dispose } from "../../disposable";
import { EnumeratorLike } from "../../enumerable";
import {
  Selector2,
  Selector3,
  Selector4,
  Selector5,
  Selector6,
  Selector7,
  Selector8,
  Selector9,
} from "../../functions";
import { none, isSome, isNone } from "../../option";
import { SchedulerContinuationLike } from "../../scheduler";
import { zipEnumerators } from "../enumerable/zip";
import { fromEnumerator } from "./fromEnumerable";
import {
  ObservableLike,
  SubscriberLike,
  ObservableOperator,
} from "./interfaces";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber";
import { using } from "./using";

class EnumeratorSubscriber<T> extends AbstractDisposable
  implements EnumeratorLike<T>, SubscriberLike<T> {
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
      continuation.run(this);
      this.inContinuation = false;

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

  schedule(
    continuation: SchedulerContinuationLike,
    { delay } = { delay: 0 },
  ): void {
    this.add(continuation);
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
): EnumeratorSubscriber<T> => {
  const subscriber = new EnumeratorSubscriber<T>();
  obs.subscribe(subscriber);
  return subscriber;
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

const getCurrent = <T>(enumerator: EnumeratorLike<T>): T => {
  return enumerator.current;
};

class ZipSubscriber<T> extends AbstractDelegatingSubscriber<unknown, T>
  implements EnumeratorLike<unknown> {
  current: unknown;
  private readonly buffer: Array<unknown> = [];
  hasCurrent = false;

  constructor(
    delegate: SubscriberLike<T>,
    private readonly enumerators: readonly (DisposableLike &
      EnumeratorLike<any>)[],
    private readonly selector: (...values: unknown[]) => T,
  ) {
    super(delegate);
    delegate.add(() => {
      this.hasCurrent = false;
      this.current = none;
      this.buffer.length = 0;
    });
    this.add(error => {
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
    assertSubscriberNotifyInContinuation(this);

    const enumerators = this.enumerators;

    if (!this.isDisposed) {
      if (this.hasCurrent) {
        this.buffer.push(next);
      } else {
        this.hasCurrent = true;
        this.current = next;
      }

      if (shouldEmit(enumerators)) {
        const next = this.selector(...enumerators.map(getCurrent));
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

class ZipObservable<T> implements ObservableLike<T> {
  readonly isSynchronous: boolean;

  constructor(
    private readonly observables: readonly ObservableLike<any>[],
    private readonly selector: (...values: unknown[]) => T,
  ) {
    this.isSynchronous = observables.every(obs => obs.isSynchronous);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    const observables = this.observables;
    const count = observables.length;

    if (this.isSynchronous) {
      using(
        _ => this.observables.map(subscribeInteractive),
        (...enumerators: EnumeratorSubscriber<any>[]) =>
          fromEnumerator()(zipEnumerators(enumerators, this.selector)),
      ).subscribe(subscriber);
    } else {
      const enumerators: (DisposableLike & EnumeratorLike<unknown>)[] = [];
      for (let index = 0; index < count; index++) {
        const observable = observables[index];

        if (observable.isSynchronous) {
          const enumerator = subscribeInteractive(observable);

          enumerator.move();
          enumerators.push(enumerator);
        } else {
          const innerSubscriber = new ZipSubscriber(
            subscriber,
            enumerators,
            this.selector,
          );

          observable.subscribe(innerSubscriber);
          enumerators.push(innerSubscriber);
        }
      }
    }
  }
}

export function zip<TA, TB, T>(
  observables: [ObservableLike<TA>, ObservableLike<TB>],
  selector: Selector2<TA, TB, T>,
): ObservableLike<T>;
export function zip<TA, TB, TC, T>(
  observables: [ObservableLike<TA>, ObservableLike<TB>, ObservableLike<TC>],
  selector: Selector3<TA, TB, TC, T>,
): ObservableLike<T>;
export function zip<TA, TB, TC, TD, T>(
  observables: [
    ObservableLike<TA>,
    ObservableLike<TB>,
    ObservableLike<TC>,
    ObservableLike<TD>,
  ],
  selector: Selector4<TA, TB, TC, TD, T>,
): ObservableLike<T>;
export function zip<TA, TB, TC, TD, TE, T>(
  observables: [
    ObservableLike<TA>,
    ObservableLike<TB>,
    ObservableLike<TC>,
    ObservableLike<TD>,
    ObservableLike<TE>,
  ],
  selector: Selector5<TA, TB, TC, TD, TE, T>,
): ObservableLike<T>;
export function zip<TA, TB, TC, TD, TE, TF, T>(
  observables: [
    ObservableLike<TA>,
    ObservableLike<TB>,
    ObservableLike<TC>,
    ObservableLike<TD>,
    ObservableLike<TE>,
    ObservableLike<TF>,
  ],
  selector: Selector6<TA, TB, TC, TD, TE, TF, T>,
): ObservableLike<T>;
export function zip<TA, TB, TC, TD, TE, TF, TG, T>(
  observables: [
    ObservableLike<TA>,
    ObservableLike<TB>,
    ObservableLike<TC>,
    ObservableLike<TD>,
    ObservableLike<TE>,
    ObservableLike<TF>,
    ObservableLike<TG>,
  ],
  selector: Selector7<TA, TB, TC, TD, TE, TF, TG, T>,
): ObservableLike<T>;
export function zip<TA, TB, TC, TD, TE, TF, TG, TH, T>(
  observables: [
    ObservableLike<TA>,
    ObservableLike<TB>,
    ObservableLike<TC>,
    ObservableLike<TD>,
    ObservableLike<TE>,
    ObservableLike<TF>,
    ObservableLike<TG>,
    ObservableLike<TH>,
  ],
  selector: Selector8<TA, TB, TC, TD, TE, TF, TG, TH, T>,
): ObservableLike<T>;
export function zip<TA, TB, TC, TD, TE, TF, TG, TH, TI, T>(
  observables: [
    ObservableLike<TA>,
    ObservableLike<TB>,
    ObservableLike<TC>,
    ObservableLike<TD>,
    ObservableLike<TE>,
    ObservableLike<TF>,
    ObservableLike<TG>,
    ObservableLike<TH>,
    ObservableLike<TI>,
  ],
  selector: Selector9<TA, TB, TC, TD, TE, TF, TG, TH, TI, T>,
): ObservableLike<T>;

/**
 * Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
 * in order, of each of its input sources.
 */
export function zip<T>(
  observables: ObservableLike<unknown>[],
  selector: (...values: unknown[]) => T,
): ObservableLike<T> {
  return new ZipObservable(observables, selector);
}

export const zipWith = <TA, TB, T>(
  snd: ObservableLike<TB>,
  selector: Selector2<TA, TB, T>,
): ObservableOperator<TA, T> => fst => zip([fst, snd], selector);

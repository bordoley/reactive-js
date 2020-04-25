import { DisposableLike, AbstractDisposable } from "../../disposable.ts";
import { EnumeratorLike } from "../../enumerable.ts";
import { none, isSome, isNone } from "../../option.ts";
import { SchedulerContinuationLike } from "../../scheduler.ts";
import { alwaysTrue } from "./functions.ts";
import { ObservableLike, SubscriberLike } from "./interfaces.ts";
import { AbstractProducer } from "./producer.ts";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber.ts";

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

const subscribeInteractive = <T>(obs: ObservableLike<T>): EnumeratorLike<T> & DisposableLike=> {
  const subscriber = new EnumeratorSubscriber<T>();
  obs.subscribe(subscriber);
  return subscriber;
}

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
        delegate.dispose(error);
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
          this.dispose();
        }
      }
    }
  }
}

class ZipProducer<T> extends AbstractProducer<T> {
  current: any;
  hasCurrent = false;

  constructor(
    subscriber: SubscriberLike<T>,
    private readonly enumerators: readonly EnumeratorLike<any>[],
    private readonly selector: (...values: unknown[]) => T,
  ) {
    super(subscriber);
  }

  produce(shouldYield?: () => boolean): number {
    const enumerators = this.enumerators;
    const selector = this.selector;

    if (isSome(shouldYield)) {
      let isDisposed = this.isDisposed;
      let shouldEmitNext = shouldEmit(enumerators);
      while (shouldEmitNext && !isDisposed) {
        const next = selector(...enumerators.map(getCurrent));
        this.notify(next);

        isDisposed = this.isDisposed;
        for (const buffer of enumerators) {
          buffer.move();
        }
        shouldEmitNext = shouldEmit(enumerators);

        if (shouldEmitNext && !isDisposed && shouldYield()) {
          return 0;
        }
      }
    } else {
      while (shouldEmit(enumerators) && !this.isDisposed) {
        const next = selector(...enumerators.map(getCurrent));

        for (const enumerator of enumerators) {
          enumerator.move();
        }

        this.notify(next);
      }
    }
    return -1;
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
      const enumerators = observables.map(obs => subscribeInteractive(obs));
      for (const enumerator of enumerators) {
        enumerator.move();
      }

      subscriber.schedule(
        new ZipProducer(subscriber, enumerators, this.selector),
      );
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
  selector: (a: TA, b: TB) => T,
): ObservableLike<T>;
export function zip<TA, TB, TC, T>(
  observables: [ObservableLike<TA>, ObservableLike<TB>, ObservableLike<TC>],
  selector: (a: TA, b: TB, c: TC) => T,
): ObservableLike<T>;
export function zip<TA, TB, TC, TD, T>(
  observables: [
    ObservableLike<TA>,
    ObservableLike<TB>,
    ObservableLike<TC>,
    ObservableLike<TD>,
  ],
  selector: (a: TA, b: TB, c: TC, d: TD) => T,
): ObservableLike<T>;
export function zip<TA, TB, TC, TD, TE, T>(
  observables: [
    ObservableLike<TA>,
    ObservableLike<TB>,
    ObservableLike<TC>,
    ObservableLike<TD>,
    ObservableLike<TE>,
  ],
  selector: (a: TA, b: TB, c: TC, d: TD, e: TE) => T,
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
  selector: (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF) => T,
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
  selector: (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF, g: TG) => T,
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
  selector: (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF, g: TG, h: TH) => T,
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
  selector: (
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
    f: TF,
    g: TG,
    h: TH,
    i: TI,
  ) => T,
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

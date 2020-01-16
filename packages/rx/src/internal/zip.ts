import {
  EnumerableObservableLike,
  ObservableLike,
  SubscriberLike,
} from "./interfaces";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { SchedulerContinuationLike } from "@reactive-js/scheduler";
import { producerMixin } from "./producer";
import { enumerableMixin } from "./enumerableObservable";
import { EnumeratorLike, isEnumerable } from "@reactive-js/enumerable";

const shouldEmit = (enumerators: readonly EnumeratorLike<void, unknown>[]) => {
  for (const enumerator of enumerators) {
    if (!enumerator.hasCurrent) {
      return false;
    }
  }
  return true;
};

const shouldComplete = (
  enumerators: readonly EnumeratorLike<void, unknown>[],
) => {
  for (const enumerator of enumerators) {
    enumerator.move();
    if (enumerator.isDisposed && !enumerator.hasCurrent) {
      return true;
    }
  }
  return false;
};

const getCurrent = <T>(enumerator: EnumeratorLike<void, T>): T => {
  return enumerator.current;
};

class ZipSubscriber<T> extends AbstractDelegatingSubscriber<unknown, T>
  implements EnumeratorLike<void, unknown> {
  current: unknown;
  private readonly buffer: Array<unknown> = [];
  hasCurrent = false;

  constructor(
    delegate: SubscriberLike<T>,
    private readonly enumerators: readonly EnumeratorLike<void, any>[],
    private readonly selector: (...values: unknown[]) => T,
  ) {
    super(delegate);
    delegate.add(() => {
      this.hasCurrent = false;
      this.current = undefined;
      this.buffer.length = 0;
    });
    this.add(error => {
      if (
        error !== undefined ||
        (this.buffer.length === 0 && !this.hasCurrent)
      ) {
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
      this.current = undefined;
      return false;
    }
  }

  notify(next: unknown) {
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
          this.current = undefined;
          this.buffer.length = 0;
          this.dispose();
        }
      }
    }
  }
}

class ZipObservable<T> implements ObservableLike<T> {
  constructor(
    private readonly observables: readonly ObservableLike<any>[],
    private readonly selector: (...values: unknown[]) => T,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const observables = this.observables;
    const count = observables.length;
    const enumerators: EnumeratorLike<void, unknown>[] = [];

    for (let index = 0; index < count; index++) {
      const observable = observables[index];

      if (isEnumerable(observable)) {
        const enumerable = (observable as unknown) as EnumerableObservableLike<
          T
        >;
        const enumerator = enumerable.enumerate();

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

class ZipProducer<T> implements SchedulerContinuationLike {
  current: any;
  hasCurrent = false;
  readonly run = producerMixin.run;

  constructor(
    private readonly subscriber: SubscriberLike<T>,
    private readonly enumerators: readonly EnumeratorLike<void, any>[],
    private readonly selector: (...values: unknown[]) => T,
  ) {}

  produce(shouldYield?: () => boolean): SchedulerContinuationLike | void {
    const enumerators = this.enumerators;
    const selector = this.selector;
    const subscriber = this.subscriber;

    if (shouldYield !== undefined) {
      while (shouldEmit(enumerators) && !subscriber.isDisposed) {
        const next = selector(...enumerators.map(getCurrent));
        subscriber.notify(next);

        for (const buffer of enumerators) {
          buffer.move();
        }

        if (shouldYield()) {
          return this;
        }
      }
    } else {
      while (shouldEmit(enumerators) && !subscriber.isDisposed) {
        const next = selector(...enumerators.map(getCurrent));

        for (const enumerator of enumerators) {
          enumerator.move();
        }

        subscriber.notify(next);
      }
    }
    subscriber.dispose();
    return;
  }
}

class ZipEnumerable<T> implements EnumerableObservableLike<T> {
  readonly [Symbol.iterator] = enumerableMixin[Symbol.iterator];
  readonly enumerate = enumerableMixin.enumerate;

  constructor(
    private readonly enumerables: readonly EnumerableObservableLike<any>[],
    readonly selector: (...values: unknown[]) => T,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const enumerables = this.enumerables;
    const enumerators = [];

    for (const enumerable of enumerables) {
      const enumerator = enumerable.enumerate();
      enumerator.move();
      enumerators.push(enumerator);
    }

    subscriber.schedule(
      new ZipProducer(subscriber, enumerators, this.selector),
    );
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
export function zip<TA, TB, T>(
  observables: [EnumerableObservableLike<TA>, EnumerableObservableLike<TB>],
  selector: (a: TA, b: TB) => T,
): EnumerableObservableLike<T>;
export function zip<TA, TB, TC, T>(
  observables: [
    EnumerableObservableLike<TA>,
    EnumerableObservableLike<TB>,
    EnumerableObservableLike<TC>,
  ],
  selector: (a: TA, b: TB, c: TC) => T,
): EnumerableObservableLike<T>;
export function zip<TA, TB, TC, TD, T>(
  observables: [
    EnumerableObservableLike<TA>,
    EnumerableObservableLike<TB>,
    EnumerableObservableLike<TC>,
    EnumerableObservableLike<TD>,
  ],
  selector: (a: TA, b: TB, c: TC, d: TD) => T,
): EnumerableObservableLike<T>;
export function zip<TA, TB, TC, TD, TE, T>(
  observables: [
    EnumerableObservableLike<TA>,
    EnumerableObservableLike<TB>,
    EnumerableObservableLike<TC>,
    EnumerableObservableLike<TD>,
    EnumerableObservableLike<TE>,
  ],
  selector: (a: TA, b: TB, c: TC, d: TD, e: TE) => T,
): EnumerableObservableLike<T>;
export function zip<TA, TB, TC, TD, TE, TF, T>(
  observables: [
    EnumerableObservableLike<TA>,
    EnumerableObservableLike<TB>,
    EnumerableObservableLike<TC>,
    EnumerableObservableLike<TD>,
    EnumerableObservableLike<TE>,
    EnumerableObservableLike<TF>,
  ],
  selector: (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF) => T,
): EnumerableObservableLike<T>;
export function zip<TA, TB, TC, TD, TE, TF, TG, T>(
  observables: [
    EnumerableObservableLike<TA>,
    EnumerableObservableLike<TB>,
    EnumerableObservableLike<TC>,
    EnumerableObservableLike<TD>,
    EnumerableObservableLike<TE>,
    EnumerableObservableLike<TF>,
    EnumerableObservableLike<TG>,
  ],
  selector: (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF, g: TG) => T,
): EnumerableObservableLike<T>;
export function zip<TA, TB, TC, TD, TE, TF, TG, TH, T>(
  observables: [
    EnumerableObservableLike<TA>,
    EnumerableObservableLike<TB>,
    EnumerableObservableLike<TC>,
    EnumerableObservableLike<TD>,
    EnumerableObservableLike<TE>,
    EnumerableObservableLike<TF>,
    EnumerableObservableLike<TG>,
    EnumerableObservableLike<TH>,
  ],
  selector: (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF, g: TG, h: TH) => T,
): EnumerableObservableLike<T>;
export function zip<TA, TB, TC, TD, TE, TF, TG, TH, TI, T>(
  observables: [
    EnumerableObservableLike<TA>,
    EnumerableObservableLike<TB>,
    EnumerableObservableLike<TC>,
    EnumerableObservableLike<TD>,
    EnumerableObservableLike<TE>,
    EnumerableObservableLike<TF>,
    EnumerableObservableLike<TG>,
    EnumerableObservableLike<TH>,
    EnumerableObservableLike<TI>,
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
): EnumerableObservableLike<T>;

/**
 * Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
 * in order, of each of its input sources.
 */
export function zip<T>(
  observables: ObservableLike<unknown>[],
  selector: (...values: unknown[]) => T,
): ObservableLike<T> {
  return observables.every(isEnumerable)
    ? new ZipEnumerable(observables as EnumerableObservableLike<T>[], selector)
    : new ZipObservable(observables, selector);
}

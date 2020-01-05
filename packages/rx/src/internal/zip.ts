import {
  EnumeratorLike,
  EnumerableLike,
  ObservableLike,
  SubscriberLike,
} from "./interfaces";
import { AbstractDelegatingSubscriber } from "./subscriber";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { producerMixin } from "./producer";
import { enumerableMixin, isEnumerable } from "./enumerable";

const shouldEmit = (enumerators: readonly EnumeratorLike<unknown>[]) => {
  for (const enumerator of enumerators) {
    if (!enumerator.hasCurrent) {
      return false;
    }
  }
  return true;
};

const shouldComplete = (enumerators: readonly EnumeratorLike<unknown>[]) => {
  for (const enumerator of enumerators) {
    enumerator.moveNext();
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
    private readonly enumerators: readonly EnumeratorLike<any>[],
    private readonly selector: (...values: unknown[]) => T,
  ) {
    super(delegate);
    this.delegate.add(() => {
      this.hasCurrent = false;
      this.current = undefined;
      this.buffer.length = 0;
    });
    this.add(error => {
      if (
        error !== undefined ||
        (this.buffer.length === 0 && !this.hasCurrent)
      ) {
        this.delegate.dispose(error);
      }
    });
  }

  moveNext(): boolean {
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
    const enumerators: EnumeratorLike<unknown>[] = [];

    for (let index = 0; index < count; index++) {
      const observable = observables[index];

      if (isEnumerable(observable)) {
        const enumerable = (observable as unknown) as EnumerableLike<T>;
        const enumerator = enumerable.enumerate();

        enumerator.moveNext();
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
  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this,
  };
  hasCurrent = false;
  readonly run = producerMixin.run;

  constructor(
    private readonly subscriber: SubscriberLike<T>,
    private readonly enumerators: readonly EnumeratorLike<any>[],
    private readonly selector: (...values: unknown[]) => T,
  ) {}

  produce(shouldYield?: () => boolean): SchedulerContinuationResultLike | void {
    const enumerators = this.enumerators;
    const selector = this.selector;
    const subscriber = this.subscriber as SubscriberLike<T>;

    if (shouldYield !== undefined) {
      while (shouldEmit(enumerators) && !subscriber.isDisposed) {
        const next = selector(...enumerators.map(getCurrent));
        subscriber.notify(next);

        for (const buffer of enumerators) {
          buffer.moveNext();
        }

        if (shouldYield()) {
          return this.continuationResult;
        }
      }
    } else {
      while (shouldEmit(enumerators) && !subscriber.isDisposed) {
        const next = selector(...enumerators.map(getCurrent));

        for (const enumerator of enumerators) {
          enumerator.moveNext();
        }

        subscriber.notify(next);
      }
    }
    subscriber.dispose();
    return;
  }
}

class ZipEnumerable<T> implements EnumerableLike<T> {
  readonly [Symbol.iterator] = enumerableMixin[Symbol.iterator];
  readonly enumerate = enumerableMixin.enumerate;

  constructor(
    private readonly enumerables: readonly EnumerableLike<any>[],
    readonly selector: (...values: unknown[]) => T,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const enumerables = this.enumerables;
    const enumerators = [];

    for (const enumerable of enumerables) {
      const enumerator = enumerable.enumerate();
      enumerator.moveNext();
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
  observables: [EnumerableLike<TA>, EnumerableLike<TB>],
  selector: (a: TA, b: TB) => T,
): EnumerableLike<T>;
export function zip<TA, TB, TC, T>(
  observables: [EnumerableLike<TA>, EnumerableLike<TB>, EnumerableLike<TC>],
  selector: (a: TA, b: TB, c: TC) => T,
): EnumerableLike<T>;
export function zip<TA, TB, TC, TD, T>(
  observables: [
    EnumerableLike<TA>,
    EnumerableLike<TB>,
    EnumerableLike<TC>,
    EnumerableLike<TD>,
  ],
  selector: (a: TA, b: TB, c: TC, d: TD) => T,
): EnumerableLike<T>;
export function zip<TA, TB, TC, TD, TE, T>(
  observables: [
    EnumerableLike<TA>,
    EnumerableLike<TB>,
    EnumerableLike<TC>,
    EnumerableLike<TD>,
    EnumerableLike<TE>,
  ],
  selector: (a: TA, b: TB, c: TC, d: TD, e: TE) => T,
): EnumerableLike<T>;
export function zip<TA, TB, TC, TD, TE, TF, T>(
  observables: [
    EnumerableLike<TA>,
    EnumerableLike<TB>,
    EnumerableLike<TC>,
    EnumerableLike<TD>,
    EnumerableLike<TE>,
    EnumerableLike<TF>,
  ],
  selector: (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF) => T,
): EnumerableLike<T>;
export function zip<TA, TB, TC, TD, TE, TF, TG, T>(
  observables: [
    EnumerableLike<TA>,
    EnumerableLike<TB>,
    EnumerableLike<TC>,
    EnumerableLike<TD>,
    EnumerableLike<TE>,
    EnumerableLike<TF>,
    EnumerableLike<TG>,
  ],
  selector: (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF, g: TG) => T,
): EnumerableLike<T>;
export function zip<TA, TB, TC, TD, TE, TF, TG, TH, T>(
  observables: [
    EnumerableLike<TA>,
    EnumerableLike<TB>,
    EnumerableLike<TC>,
    EnumerableLike<TD>,
    EnumerableLike<TE>,
    EnumerableLike<TF>,
    EnumerableLike<TG>,
    EnumerableLike<TH>,
  ],
  selector: (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF, g: TG, h: TH) => T,
): EnumerableLike<T>;
export function zip<TA, TB, TC, TD, TE, TF, TG, TH, TI, T>(
  observables: [
    EnumerableLike<TA>,
    EnumerableLike<TB>,
    EnumerableLike<TC>,
    EnumerableLike<TD>,
    EnumerableLike<TE>,
    EnumerableLike<TF>,
    EnumerableLike<TG>,
    EnumerableLike<TH>,
    EnumerableLike<TI>,
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
): EnumerableLike<T>;
export function zip<T>(
  observables: ObservableLike<unknown>[],
  selector: (...values: unknown[]) => T,
): ObservableLike<T> {
  return observables.every(isEnumerable)
    ? new ZipEnumerable(observables as EnumerableLike<T>[], selector)
    : new ZipObservable(observables, selector);
}

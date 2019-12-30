import { defer } from "./defer";
import {
  EnumeratorLike,
  EnumerableLike,
  ErrorLike,
  ObservableLike,
  SubscriberLike,
} from "./interfaces";
import { DelegatingSubscriber } from "./subscriber";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { producerMixin } from "./producer";

const shouldEmit = (buffers: ReadonlyArray<EnumeratorLike<unknown>>) => {
  for (const buffer of buffers) {
    if (!buffer.hasCurrent) {
      return false;
    }
  }
  return true;
};

const shouldComplete = (buffers: ReadonlyArray<EnumeratorLike<unknown>>) => {
  for (const buffer of buffers) {
    buffer.moveNext();
    if (buffer.isDisposed && !buffer.hasCurrent) {
      return true;
    }
  }
  return false;
};

const getCurrent = (buffer: EnumeratorLike<unknown>): unknown => {
  return buffer.current;
};

class ZipSubscriber<T> extends DelegatingSubscriber<unknown, T>
  implements EnumeratorLike<unknown> {
  private _current: unknown;
private readonly buffer: Array<unknown> = [];
  hasCurrent = false;
  

  constructor(
    delegate: SubscriberLike<T>,
    private readonly ctx: ZipObservable<T>,
  ) {
    super(delegate);
    this.delegate.add(() => {
      this.hasCurrent = false;
      this._current = undefined;
      this.buffer.length = 0;
    });
  }

  get current(): unknown {
    if (!this.hasCurrent) {
      throw new Error("no current value");
    }
    return this._current;
  }

  moveNext(): boolean {
    const buffer = this.buffer;
    if (buffer.length > 0) {
      const next = buffer.shift();
      this.hasCurrent = true;
      this._current = next;
      return true;
    } else {
      this.hasCurrent = false;
      this._current = undefined;
      return false;
    }
  }

  complete(error?: ErrorLike) {
    this.dispose();

    if (error !== undefined) {
      this.delegate.complete(error);
    } else if (this.buffer.length === 0 && !this.hasCurrent) {
      this.delegate.complete();
    }
  }

  next(data: unknown) {
    const ctx = this.ctx;
    const buffers = ctx.buffers;

    if (!this.isDisposed) {
      if (this.hasCurrent) {
        this.buffer.push(data);
      } else {
        this.hasCurrent = true;
        this._current = data;
      }

      if (shouldEmit(buffers)) {
        const next = ctx.selector(...buffers.map(getCurrent));
        const shouldCompleteResult = shouldComplete(buffers);

        this.delegate.next(next);

        if (shouldCompleteResult) {
          this.hasCurrent = false;
          this._current = undefined;
          this.buffer.length = 0;
          this.complete();
        }
      }
    }
  }
}

class ZipObservable<T> implements ObservableLike<T>, SchedulerContinuationLike {
  readonly buffers: EnumeratorLike<unknown>[] = [];

  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this,
  };
  private subscriber: SubscriberLike<T> | undefined;

  run = producerMixin.run;
constructor(
    private readonly observables: readonly ObservableLike<any>[],
    readonly selector: (...values: unknown[]) => T,
  ) {}

  loop(shouldYield?: () => boolean): SchedulerContinuationResultLike | void {
    const buffers = this.buffers;
    const selector = this.selector;
    const subscriber = this.subscriber as SubscriberLike<T>;

    if (shouldYield !== undefined) {
      while (shouldEmit(buffers) && !subscriber.isDisposed) {
        const next = selector(...buffers.map(getCurrent));
        subscriber.next(next);

        for (const buffer of buffers) {
          buffer.moveNext();
        }

        if (shouldYield()) {
          return this.continuationResult;
        }
      }
    } else {
      while (shouldEmit(buffers) && !subscriber.isDisposed) {
        const next = selector(...buffers.map(getCurrent));

        for (const buffer of buffers) {
          buffer.moveNext();
        }

        subscriber.next(next);
      }
    }
    return;
  }

  

  subscribe(subscriber: SubscriberLike<T>) {
    const observables = this.observables;
    const count = observables.length;
    const buffers = this.buffers;

    let enumerableCount = 0;
    for (let index = 0; index < count; index++) {
      const observable = observables[index];

      if ((observable as any).getEnumerator !== undefined) {
        const enumerable = (observable as unknown) as EnumerableLike<T>;
        const enumerator = enumerable.getEnumerator();

        enumerator.moveNext();
        buffers.push(enumerator);
        enumerableCount++;
      } else {
        const innerSubscriber = new ZipSubscriber(subscriber, this);

        observable.subscribe(innerSubscriber);
        buffers.push(innerSubscriber);
      }
    }

    if (enumerableCount === count) {
      this.subscriber = subscriber;
      subscriber.schedule(this);
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
export function zip<T>(
  observables: ObservableLike<unknown>[],
  selector: (...values: unknown[]) => T,
): ObservableLike<T> {
  return defer(() => new ZipObservable(observables, selector));
}

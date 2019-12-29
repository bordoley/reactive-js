import { defer } from "./defer";
import { ErrorLike, ObservableLike, SubscriberLike } from "./interfaces";
import { DelegatingSubscriber } from "./subscriber";
import { EnumeratorLike, EnumerableLike } from "./enumerable";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";

const shouldEmit = (buffers: ReadonlyArray<EnumeratorLike<unknown>>) => {
  for (const buffer of buffers) {
    if (!buffer.hasNext) {
      return false;
    }
  }
  return true;
};

const shift = (buffer: EnumeratorLike<unknown>): unknown => {
  buffer.moveNext();
  return buffer.current;
};

class ZipSubscriber<T> extends DelegatingSubscriber<unknown, T>
  implements EnumeratorLike<unknown> {
  private readonly buffer: Array<unknown> = [];
  private _current: [unknown] | undefined;

  constructor(
    delegate: SubscriberLike<T>,
    private readonly ctx: ZipObservable<T>,
  ) {
    super(delegate);
  }

  get current(): unknown {
    const current = this._current;
    if (current === undefined) {
      throw new Error("no current value");
    }
    return current[0];
  }

  get hasNext(): boolean {
    return this.buffer.length > 0;
  }

  get isCompleted(): boolean {
    return this.isDisposed;
  }

  moveNext(): boolean {
    const buffer = this.buffer;
    if (buffer.length > 0) {
      const next = buffer.shift() as unknown;
      const current = this._current;
      if (current !== undefined) {
        current[0] = next;
      } else {
        this._current = [next];
      }
      return true;
    } else {
      return false;
    }
  }

  complete(error?: ErrorLike) {
    this.dispose();

    const ctx = this.ctx;
    ctx.completedCount++;

    if (error !== undefined || ctx.completedCount === ctx.buffers.length) {
      this.delegate.complete(error);
    }
  }

  next(data: unknown) {
    const ctx = this.ctx;
    const buffers = ctx.buffers;

    this.buffer.push(data);

    if (shouldEmit(buffers)) {
      const next = ctx.selector(...buffers.map(shift));
      this.delegate.next(next);
    }
  }
}

class ZipProducer<T> implements SchedulerContinuationLike {
  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this,
  };

  constructor(
    private readonly subscriber: SubscriberLike<T>,
    private readonly buffers: EnumeratorLike<unknown>[],
    private readonly selector: (...values: unknown[]) => T,
  ) {}

  private loop(
    shouldYield: () => boolean,
  ): SchedulerContinuationResultLike | void {
    const buffers = this.buffers;
    const subscriber = this.subscriber;
    const selector = this.selector;

    while (shouldEmit(buffers) && !subscriber.isDisposed) {
      const next = selector(...buffers.map(shift));
      subscriber.next(next);

      if (shouldYield()) {
        return this.continuationResult;
      }
    }
    return;
  }

  private loopFast() {
    const buffers = this.buffers;
    const subscriber = this.subscriber;
    const selector = this.selector;

    while (shouldEmit(buffers) && !subscriber.isDisposed) {
      const next = selector(...buffers.map(shift));
      subscriber.next(next);
    }
    return;
  }

  run(shouldYield?: () => boolean) {
    let error = undefined;
    try {
      let result: SchedulerContinuationResultLike | void;
      if (shouldYield !== undefined) {
        result = this.loop(shouldYield);
      } else {
        result = this.loopFast();
      }

      if (result !== undefined) {
        return result;
      }
    } catch (cause) {
      error = { cause };
    }

    this.subscriber.complete(error);
    return;
  }
}

class ZipObservable<T> implements ObservableLike<T> {
  completedCount = 0;
  readonly buffers: EnumeratorLike<unknown>[] = [];

  constructor(
    private readonly observables: readonly ObservableLike<any>[],
    readonly selector: (...values: unknown[]) => T,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const observables = this.observables;
    const count = observables.length;
    const buffers = this.buffers;

    for (let index = 0; index < count; index++) {
      const observable = observables[index];

      if ((observable as any).getEnumerator !== undefined) {
        const enumerable = (observable as unknown) as EnumerableLike<T>;
        const enumerator = enumerable.getEnumerator();
        buffers.push(enumerator);
        this.completedCount++;
      } else {
        const innerSubscriber = new ZipSubscriber(subscriber, this);
        observable.subscribe(innerSubscriber);
        buffers.push(innerSubscriber);
      }
    }

    if (this.completedCount === count) {
      const producer = new ZipProducer(subscriber, buffers, this.selector);
      subscriber.schedule(producer);
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

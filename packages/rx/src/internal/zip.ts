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
    if (!buffer.hasCurrent) {
      return false;
    }
  }
  return true;
};

const getCurrent = (buffer: EnumeratorLike<unknown>): unknown => {
  return buffer.current;
};

class ZipSubscriber<T> extends DelegatingSubscriber<unknown, T>
  implements EnumeratorLike<unknown> {
  private readonly buffer: Array<unknown> = [];
  hasCurrent = false;
  private _current: unknown;

  constructor(
    delegate: SubscriberLike<T>,
    private readonly ctx: ZipObservable<T>,
  ) {
    super(delegate);
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
      const next = buffer.shift() as unknown;
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

    const ctx = this.ctx;
    ctx.completedCount++;

    if (error !== undefined || ctx.completedCount === ctx.buffers.length) {
      this.delegate.complete(error);
    }
  }

  next(data: unknown) {
    const ctx = this.ctx;
    const buffers = ctx.buffers;

    if (this.hasCurrent) {
      this.buffer.push(data);
    } else {
      this.hasCurrent = true;
      this._current = data;
    }

    if (shouldEmit(buffers)) {
      const next = ctx.selector(...buffers.map(getCurrent));

      for(const buffer of buffers){
        buffer.moveNext();
      }
      
      this.delegate.next(next);
    }
  }
}

class ZipObservable<T> implements ObservableLike<T>, SchedulerContinuationLike {
  readonly buffers: EnumeratorLike<unknown>[] = [];
  completedCount = 0;
  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this,
  };
  private subscriber: SubscriberLike<T> | undefined;

  constructor(
    private readonly observables: readonly ObservableLike<any>[],
    readonly selector: (...values: unknown[]) => T,
  ) {}

  private loop(
    shouldYield: () => boolean,
  ): SchedulerContinuationResultLike | void {
    const buffers = this.buffers;
    const selector = this.selector;
    const subscriber = (this.subscriber as SubscriberLike<T>);

    while (shouldEmit(buffers) && !subscriber.isDisposed) {
      const next = selector(...buffers.map(getCurrent));
      subscriber.next(next);

      // FIXME: In theory this loop should be capable of yielding
      for(const buffer of buffers){
        buffer.moveNext();
      }

      if (shouldYield()) {
        return this.continuationResult;
      }
    }
    return;
  }

  private loopFast() {
    const buffers = this.buffers;
    const subscriber = (this.subscriber as SubscriberLike<T>);
    const selector = this.selector;

    while (shouldEmit(buffers) && !subscriber.isDisposed) {
      const next = selector(...buffers.map(getCurrent));

      for(const buffer of buffers){
        buffer.moveNext();
      }

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

    (this.subscriber as SubscriberLike<T>).complete(error);
    return;
  }

  subscribe(subscriber: SubscriberLike<T>) {
    const observables = this.observables;
    const count = observables.length;
    const buffers = this.buffers;

    for (let index = 0; index < count; index++) {
      const observable = observables[index];

      if ((observable as any).getEnumerator !== undefined) {
        const enumerable = (observable as unknown) as EnumerableLike<T>;
        const enumerator = enumerable.getEnumerator();
        
        enumerator.moveNext();
        buffers.push(enumerator);
        this.completedCount++;
      } else {
        const innerSubscriber = new ZipSubscriber(subscriber, this);

        observable.subscribe(innerSubscriber);
        buffers.push(innerSubscriber);
      }
    }

    if (this.completedCount === count) {
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

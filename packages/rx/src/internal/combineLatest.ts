import { defer } from "./defer";
import { ErrorLike, ObservableLike, SubscriberLike } from "./interfaces";
import { DelegatingSubscriber } from "./subscriber";

class CombineLatestSubscriber<T> extends DelegatingSubscriber<unknown, T> {
  private hasProducedValue = false;

  constructor(
    delegate: SubscriberLike<T>,
    private readonly ctx: CombineLatestObservable<T>,
    private readonly index: number,
  ) {
    super(delegate);
  }

  complete(error?: ErrorLike) {
    if (!this.isDisposed) {
      this.dispose();
      const ctx = this.ctx;
      ctx.completedCount++;

      if (error !== undefined || ctx.completedCount === ctx.totalCount) {
        this.delegate.complete(error);
      }
    }
  }

  next(data: unknown) {
    const ctx = this.ctx;
    const latest = ctx.latest;
    latest[this.index] = data;

    if (!this.hasProducedValue) {
      ctx.producedCount++;
      this.hasProducedValue = true;
    }

    if (ctx.producedCount === ctx.totalCount) {
      const result = ctx.selector(...latest);
      this.delegate.next(result);
    }
  }
}

class CombineLatestObservable<T> implements ObservableLike<T> {
  completedCount = 0;
  producedCount = 0;

  readonly latest: Array<unknown>;
  readonly totalCount: number;

  constructor(
    private readonly observables: readonly ObservableLike<any>[],
    readonly selector: (...values: unknown[]) => T,
  ) {
    this.totalCount = observables.length;
    this.latest = new Array(this.totalCount);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    const observables = this.observables;
    const totalCount = this.totalCount;

    for (let index = 0; index < totalCount; index++) {
      const innerSubscriber = new CombineLatestSubscriber(
        subscriber,
        this,
        index,
      );
      observables[index].subscribe(innerSubscriber);
    }
  }
}

export function combineLatest<TA, TB, T>(
  observables: [ObservableLike<TA>, ObservableLike<TB>],
  selector: (a: TA, b: TB) => T,
): ObservableLike<T>;
export function combineLatest<TA, TB, TC, T>(
  observables: [ObservableLike<TA>, ObservableLike<TB>, ObservableLike<TC>],
  selector: (a: TA, b: TB, c: TC) => T,
): ObservableLike<T>;
export function combineLatest<TA, TB, TC, TD, T>(
  observables: [
    ObservableLike<TA>,
    ObservableLike<TB>,
    ObservableLike<TC>,
    ObservableLike<TD>,
  ],
  selector: (a: TA, b: TB, c: TC, d: TD) => T,
): ObservableLike<T>;
export function combineLatest<TA, TB, TC, TD, TE, T>(
  observables: [
    ObservableLike<TA>,
    ObservableLike<TB>,
    ObservableLike<TC>,
    ObservableLike<TD>,
    ObservableLike<TE>,
  ],
  selector: (a: TA, b: TB, c: TC, d: TD, e: TE) => T,
): ObservableLike<T>;
export function combineLatest<TA, TB, TC, TD, TE, TF, T>(
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
export function combineLatest<TA, TB, TC, TD, TE, TF, TG, T>(
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
export function combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, T>(
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
export function combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI, T>(
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
export function combineLatest<T>(
  observables: ObservableLike<any>[],
  selector: (...values: unknown[]) => T,
): ObservableLike<T> {
  return defer(() => new CombineLatestObservable(observables, selector));
}

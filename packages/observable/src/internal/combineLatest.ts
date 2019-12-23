import {
  ErrorLike,
  ObservableLike,
  ObserverLike,
  SubscriberLike,
  subscribe,
} from "@reactive-js/rx";
import { DisposableLike, disposed } from "@reactive-js/disposable";
import { observe } from "./observe";
import { pipe } from "@reactive-js/pipe";
import { defer } from "./defer";

class CombineLatestObserver<T> implements ObserverLike<any> {
  innerSubscription: DisposableLike = disposed;
  private hasProducedValue = false;

  constructor(
    private readonly ctx: CombineLatestObservable<T>,
    private readonly index: number,
  ) {}

  onComplete(error?: ErrorLike) {
    const ctx = this.ctx;
    const subscriber = ctx.subscriber as SubscriberLike<T>;

    ctx.completedCount++;

    if (error !== undefined || ctx.completedCount === ctx.totalCount) {
      subscriber.complete(error);
    } else {
      subscriber.remove(this.innerSubscription);
    }
  }

  onNext(data: any) {
    const ctx = this.ctx;

    if (!this.hasProducedValue) {
      ctx.producedCount++;
      this.hasProducedValue = true;
    }
    
    const latest = ctx.latest;
    latest[this.index] = data;

    if (ctx.producedCount === ctx.totalCount) {
      const result = this.ctx.selector(...latest);
      (ctx.subscriber as SubscriberLike<T>).next(result);
    }
  }
}

class CombineLatestObservable<T> implements ObservableLike<T> {
  completedCount = 0;
  producedCount = 0;
  subscriber: SubscriberLike<T> | undefined;

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
    this.subscriber = subscriber;

    const observables = this.observables;
    const totalCount = observables.length;

    for (let index = 0; index < totalCount; index++) {
      const observer = new CombineLatestObserver(
        this,
        index,
      );

      observer.innerSubscription = pipe(
        observables[index],
        observe(observer),
        subscribe(subscriber),
      );

      subscriber.add(observer.innerSubscription);
    }
  };
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

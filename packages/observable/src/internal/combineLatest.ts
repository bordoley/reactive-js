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

interface CombineLatestContext {
  completedCount: number;
  producedCount: number;
}

class CombineLatestObserver<T> implements ObserverLike<any> {
  innerSubscription: DisposableLike = disposed;
  private hasProducedValue = false;

  constructor(
    private readonly subscriber: SubscriberLike<T>,
    private readonly totalCount: number,
    private readonly latest: any[],
    private readonly ctx: CombineLatestContext,
    private readonly index: number,
    private readonly selector: (...values: unknown[]) => T,
  ) {}

  onComplete(error?: ErrorLike) {
    this.ctx.completedCount++;

    if (error !== undefined || this.ctx.completedCount === this.totalCount) {
      this.subscriber.complete(error);
    } else {
      this.subscriber.remove(this.innerSubscription);
    }
  }

  onNext(data: any) {
    if (!this.hasProducedValue) {
      this.ctx.producedCount++;
    }
    this.hasProducedValue = true;

    this.latest[this.index] = data;

    if (this.ctx.producedCount === this.totalCount) {
      const latest = this.selector(...this.latest);
      this.subscriber.next(latest);
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
  const subscribeImpl = (subscriber: SubscriberLike<T>) => {
    const ctx: CombineLatestContext = {
      completedCount: 0,
      producedCount: 0,
    };

    const latest = new Array(observables.length);

    for (let index = 0; index < observables.length; index++) {
      const observer = new CombineLatestObserver(
        subscriber,
        observables.length,
        latest,
        ctx,
        index,
        selector,
      );

      observer.innerSubscription = pipe(
        observables[index],
        observe(observer),
        subscribe(subscriber),
      );

      subscriber.add(observer.innerSubscription);
    }
  };

  return { subscribe: subscribeImpl };
}

import { add, createDisposable, dispose } from "@reactive-js/disposable";
import { SchedulerContinuationLike } from "@reactive-js/scheduler";
import { ObservableLike, SubscriberLike } from "./interfaces";
import { createScheduledObservable } from "./observable";
import { AbstractDelegatingSubscriber } from "./subscriber";

class CombineLatestSubscriber<T> extends AbstractDelegatingSubscriber<
  unknown,
  T
> {
  private ready = false;

  constructor(
    private readonly ctx: CombineLatestSchedulerContinuation<T>,
    private readonly index: number,
  ) {
    super(ctx.subscriber);
    this.add(error => {
      const ctx = this.ctx;
      ctx.completedCount++;

      if (error !== undefined || ctx.completedCount === ctx.totalCount) {
        this.delegate.dispose(error);
      }
    });
  }

  notify(next: unknown) {
    const ctx = this.ctx;
    const latest = ctx.latest;
    latest[this.index] = next;

    if (!this.ready) {
      ctx.readyCount++;
      this.ready = true;
    }

    if (ctx.readyCount === ctx.totalCount) {
      const result = ctx.selector(...latest);
      this.delegate.notify(result);
    }
  }
}

class CombineLatestSchedulerContinuation<T>
  implements SchedulerContinuationLike {
  completedCount = 0;
  readyCount = 0;

  readonly add = add;
  readonly delay = 0;
  readonly disposable = createDisposable(_ => {
    this.isDisposed = true;
  });
  readonly dispose = dispose;
  readonly latest: Array<unknown>;
  readonly totalCount: number;

  isDisposed = false;

  constructor(
    readonly subscriber: SubscriberLike<T>,
    private readonly observables: readonly ObservableLike<any>[],
    readonly selector: (...values: unknown[]) => T,
  ) {
    subscriber.add(this);
    this.totalCount = observables.length;
    this.latest = new Array(this.totalCount);
  }

  run(_?: () => boolean) {
    const observables = this.observables;
    const totalCount = this.totalCount;

    for (let index = 0; index < totalCount; index++) {
      const innerSubscriber = new CombineLatestSubscriber(this, index);
      observables[index].subscribe(innerSubscriber);
    }
    this.dispose();
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

/**
 * Returns an `ObservableLike` that combines the latest values from
 * multiple sources using the specified `selector` function.
 */
export function combineLatest<T>(
  observables: ObservableLike<any>[],
  selector: (...values: unknown[]) => T,
): ObservableLike<T> {
  const factory = (subscriber: SubscriberLike<T>) =>
    new CombineLatestSchedulerContinuation(subscriber, observables, selector);
  return createScheduledObservable(
    factory,
    observables.every(obs => obs.isSynchronous),
  );
}

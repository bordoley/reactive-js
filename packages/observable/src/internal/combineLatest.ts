import { SchedulerContinuationLike } from "@reactive-js/scheduler";
import { ObservableLike, SubscriberLike } from "./interfaces";
import { observableMixin } from "./observable";
import { producerMixin } from "./producer";
import { AbstractDelegatingSubscriber } from "./subscriber";

class CombineLatestSubscriber<T> extends AbstractDelegatingSubscriber<
  unknown,
  T
> {
  private hasProducedValue = false;

  constructor(
    delegate: SubscriberLike<T>,
    private readonly ctx: CombineLatestProducer<T>,
    private readonly index: number,
  ) {
    super(delegate);
    this.add(error => {
      const ctx = this.ctx;
      ctx.completedCount++;

      if (error !== undefined || ctx.completedCount === ctx.totalCount) {
        delegate.dispose(error);
      }
    });
  }

  notify(next: unknown) {
    const ctx = this.ctx;
    const latest = ctx.latest;
    latest[this.index] = next;

    if (!this.hasProducedValue) {
      ctx.producedCount++;
      this.hasProducedValue = true;
    }

    if (ctx.producedCount === ctx.totalCount) {
      const result = ctx.selector(...latest);
      this.delegate.notify(result);
    }
  }
}

class CombineLatestProducer<T> implements SchedulerContinuationLike {
  completedCount = 0;
  producedCount = 0;

  readonly latest: Array<unknown>;
  readonly run = producerMixin.run;
  readonly totalCount: number;

  constructor(
    private readonly subscriber: SubscriberLike<T>,
    private readonly observables: readonly ObservableLike<any>[],
    readonly selector: (...values: unknown[]) => T,
  ) {
    this.totalCount = observables.length;
    this.latest = new Array(this.totalCount);
  }

  produce(_?: () => boolean): SchedulerContinuationLike | void {
    const observables = this.observables;
    const totalCount = this.totalCount;
    const subscriber = this.subscriber;

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

class CombineLatestObservable<T> implements ObservableLike<T> {
  readonly enumerate = observableMixin.enumerate;
  readonly isSynchronous: boolean;

  constructor(
    private readonly observables: readonly ObservableLike<any>[],
    private readonly selector: (...values: unknown[]) => T,
  ) {
    this.isSynchronous = observables.every(obs => obs.isSynchronous);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    const producer = new CombineLatestProducer(
      subscriber,
      this.observables,
      this.selector,
    );
    subscriber.schedule(producer);
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
  return new CombineLatestObservable(observables, selector);
}

import { isSome } from "../../option";
import {
  ObservableLike,
  SubscriberLike,
  ObservableOperator,
} from "./interfaces";
import { createScheduledObservable } from "./observable";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber";
import { dispose } from "../../disposable";
import { Selector2, Selector3, Selector4, Selector5, Selector6, Selector7, Selector8, Selector9 } from "../../functions";

type CombineLatestCtx<T> = {
  completedCount: number;
  readonly latest: Array<unknown>;
  readyCount: number;
  readonly selector: (...values: unknown[]) => T;
  readonly subscriber: SubscriberLike<T>;
  readonly totalCount: number;
};

class CombineLatestSubscriber<T> extends AbstractDelegatingSubscriber<
  unknown,
  T
> {
  private ready = false;

  constructor(
    private readonly ctx: CombineLatestCtx<T>,
    private readonly index: number,
  ) {
    super(ctx.subscriber);
    this.add(error => {
      const ctx = this.ctx;
      ctx.completedCount++;

      if (isSome(error) || ctx.completedCount === ctx.totalCount) {
        dispose(this.delegate, error);
      }
    });
  }

  notify(next: unknown) {
    assertSubscriberNotifyInContinuation(this);

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

export function combineLatest<TA, TB, T>(
  observables: [ObservableLike<TA>, ObservableLike<TB>],
  selector:  Selector2<TA, TB, T>
): ObservableLike<T>;
export function combineLatest<TA, TB, TC, T>(
  observables: [ObservableLike<TA>, ObservableLike<TB>, ObservableLike<TC>],
  selector: Selector3<TA, TB, TC, T>
): ObservableLike<T>;
export function combineLatest<TA, TB, TC, TD, T>(
  observables: [
    ObservableLike<TA>,
    ObservableLike<TB>,
    ObservableLike<TC>,
    ObservableLike<TD>,
  ],
  selector: Selector4<TA, TB, TC, TD, T>
): ObservableLike<T>;
export function combineLatest<TA, TB, TC, TD, TE, T>(
  observables: [
    ObservableLike<TA>,
    ObservableLike<TB>,
    ObservableLike<TC>,
    ObservableLike<TD>,
    ObservableLike<TE>,
  ],
  selector: Selector5<TA, TB, TC, TD, TE, T>
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
  selector: Selector6<TA, TB, TC, TD, TE, TF, T>
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
  selector: Selector7<TA, TB, TC, TD, TE, TF, TG, T>
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
  selector: Selector8<TA, TB, TC, TD, TE, TF, TG, TH, T> 
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
  selector: Selector9<TA, TB, TC, TD, TE, TF, TG, TH, TI, T> 
): ObservableLike<T>;

/**
 * Returns an `ObservableLike` that combines the latest values from
 * multiple sources using the specified `selector` function.
 */
export function combineLatest<T>(
  observables: ObservableLike<any>[],
  selector: (...values: unknown[]) => T,
): ObservableLike<T> {
  const factory = (subscriber: SubscriberLike<T>) => {
    return () => {
      const totalCount = observables.length;
      const ctx = {
        completedCount: 0,
        latest: new Array(totalCount),
        readyCount: 0,
        selector,
        subscriber,
        totalCount,
      };

      for (let index = 0; index < totalCount; index++) {
        const innerSubscriber = new CombineLatestSubscriber(ctx, index);
        observables[index].subscribe(innerSubscriber);
      }
    };
  };

  return createScheduledObservable(
    factory,
    observables.every(obs => obs.isSynchronous),
  );
}

export const combineLatestWith = <TA, TB, T>(
  snd: ObservableLike<TB>,
  selector: Selector2<TA, TB, T>
): ObservableOperator<TA, T> => fst => combineLatest([fst, snd], selector);

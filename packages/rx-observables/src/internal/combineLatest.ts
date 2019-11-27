import { ObserverLike } from "@reactive-js/rx-observer";

import { connect, observe, ObservableLike, pipe } from "@reactive-js/rx-observable";

import { SubscriberLike } from "@reactive-js/rx-subscriber";

import {
  create as disposableCreate,
  DisposableLike,
  disposed,
} from "@reactive-js/disposable";

type CombineLatestContext = {
  completedCount: number;
  latest: Array<any>;
  producedCount: number;
};

class CombineLatestObserver implements ObserverLike<any> {
  innerSubscription: DisposableLike = disposed;
  private readonly allSubscriptions: DisposableLike;
  private readonly ctx: CombineLatestContext;
  private readonly delegate: SubscriberLike<any>;

  private hasProducedValue = false;
  private readonly index: number;
  private readonly totalCount: number;

  constructor(
    delegate: SubscriberLike<any>,
    totalCount: number,
    allSubscriptions: DisposableLike,
    ctx: CombineLatestContext,
    index: number,
  ) {
    this.delegate = delegate;
    this.totalCount = totalCount;
    this.allSubscriptions = allSubscriptions;
    this.ctx = ctx;
    this.index = index;
  }

  complete(error?: Error) {
    this.ctx.completedCount++;

    if (error !== undefined || this.ctx.completedCount === this.totalCount) {
      this.delegate.remove(this.allSubscriptions);
      this.delegate.complete(error);
    } else {
      this.allSubscriptions.remove(this.innerSubscription);
    }
  }

  next(data: any) {
    if (!this.hasProducedValue) {
      this.ctx.producedCount++;
    }
    this.hasProducedValue = true;

    this.ctx.latest[this.index] = data;

    if (this.ctx.producedCount === this.totalCount) {
      const latest = [...this.ctx.latest];
      this.delegate.next(latest);
    }
  }
}

export function combineLatest<TA, TB>(
  obs1: ObservableLike<TA>,
  obs2: ObservableLike<TB>,
): ObservableLike<[TA, TB]>;
export function combineLatest<TA, TB, TC>(
  obs1: ObservableLike<TA>,
  obs2: ObservableLike<TB>,
  obs3: ObservableLike<TC>,
): ObservableLike<[TA, TB, TC]>;
export function combineLatest<TA, TB, TC, TD>(
  obs1: ObservableLike<TA>,
  obs2: ObservableLike<TB>,
  obs3: ObservableLike<TC>,
  obs4: ObservableLike<TD>,
): ObservableLike<[TA, TB, TC, TD]>;
export function combineLatest<TA, TB, TC, TD, TE>(
  obs1: ObservableLike<TA>,
  obs2: ObservableLike<TB>,
  obs3: ObservableLike<TC>,
  obs4: ObservableLike<TD>,
  obs5: ObservableLike<TE>,
): ObservableLike<[TA, TB, TC, TD, TE]>;
export function combineLatest<TA, TB, TC, TD, TE, TF>(
  obs1: ObservableLike<TA>,
  obs2: ObservableLike<TB>,
  obs3: ObservableLike<TC>,
  obs4: ObservableLike<TD>,
  obs5: ObservableLike<TE>,
  obs6: ObservableLike<TF>,
): ObservableLike<[TA, TB, TC, TD, TE, TF]>;
export function combineLatest<TA, TB, TC, TD, TE, TF, TG>(
  obs1: ObservableLike<TA>,
  obs2: ObservableLike<TB>,
  obs3: ObservableLike<TC>,
  obs4: ObservableLike<TD>,
  obs5: ObservableLike<TE>,
  obs6: ObservableLike<TF>,
  obs7: ObservableLike<TG>,
): ObservableLike<[TA, TB, TC, TD, TE, TF, TG]>;
export function combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
  obs1: ObservableLike<TA>,
  obs2: ObservableLike<TB>,
  obs3: ObservableLike<TC>,
  obs4: ObservableLike<TD>,
  obs5: ObservableLike<TE>,
  obs6: ObservableLike<TF>,
  obs7: ObservableLike<TG>,
  obs8: ObservableLike<TH>,
): ObservableLike<[TA, TB, TC, TD, TE, TF, TG, TH]>;
export function combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
  obs1: ObservableLike<TA>,
  obs2: ObservableLike<TB>,
  obs3: ObservableLike<TC>,
  obs4: ObservableLike<TD>,
  obs5: ObservableLike<TE>,
  obs6: ObservableLike<TF>,
  obs7: ObservableLike<TG>,
  obs8: ObservableLike<TH>,
  obs9: ObservableLike<TI>,
): ObservableLike<[TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
export function combineLatest(
  ...observables: ObservableLike<any>[]
): ObservableLike<any> {
  const subscribe = (subscriber: SubscriberLike<any>) => {
    const ctx: CombineLatestContext = {
      completedCount: 0,
      producedCount: 0,
      latest: new Array(observables.length),
    };

    const allSubscriptions = disposableCreate();
    subscriber.add(allSubscriptions);

    for (let index = 0; index < observables.length; index++) {
      const observer = new CombineLatestObserver(
        subscriber,
        observables.length,
        allSubscriptions,
        ctx,
        index,
      );

      observer.innerSubscription = connect(
        pipe(observables[index], observe(observer)),
        subscriber,
      );

      allSubscriptions.add(observer.innerSubscription);
    }
  };

  return { subscribe };
}

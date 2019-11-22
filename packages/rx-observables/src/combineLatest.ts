import {
  Observable,
  ObservableLike,
  observe,
  ObserverLike,
  SubscriberLike,
} from "@reactive-js/rx-core";

import { Disposable, DisposableLike } from "@reactive-js/disposables";

type CombineLatestContext = {
  completedCount: number;
  producedCount: number;
  latest: Array<any>;
};

class CombineLatestObserver implements ObserverLike<any> {
  private readonly delegate: SubscriberLike<any>;
  private readonly totalCount: number;
  private readonly allSubscriptions: DisposableLike;
  private readonly ctx: CombineLatestContext;
  private readonly index: number;

  private hasProducedValue = false;

  innerSubscription: DisposableLike = Disposable.disposed;

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

  complete(error?: Error) {
    this.ctx.completedCount++;

    if (error !== undefined || this.ctx.completedCount === this.totalCount) {
      this.delegate.remove(this.allSubscriptions);
      this.delegate.complete(error);
    } else {
      this.allSubscriptions.remove(this.innerSubscription);
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
  obs1: ObservableLike<any>,
  obs2: ObservableLike<any>,
  ...tail: ObservableLike<any>[]
): ObservableLike<any> {
  const observables = [obs1, obs2, ...tail];

  const subscribe = (subscriber: SubscriberLike<any>) => {
    const ctx: CombineLatestContext = {
      completedCount: 0,
      producedCount: 0,
      latest: new Array(observables.length),
    };

    const allSubscriptions = Disposable.create();
    subscriber.add(allSubscriptions);

    for (let index = 0; index < observables.length; index++) {
      const observer = new CombineLatestObserver(
        subscriber,
        observables.length,
        allSubscriptions,
        ctx,
        index,
      );

      observer.innerSubscription = Observable.connect(
        Observable.lift(observables[index], observe(observer)),
        subscriber,
      );

      allSubscriptions.add(observer.innerSubscription);
    }
  };

  return { subscribe };
}

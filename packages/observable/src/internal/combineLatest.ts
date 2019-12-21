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
  latest: Array<any>;
  producedCount: number;
}

class CombineLatestObserver implements ObserverLike<any> {
  innerSubscription: DisposableLike = disposed;
  private hasProducedValue = false;

  constructor(
    private readonly subscriber: SubscriberLike<any>,
    private readonly totalCount: number,
    private readonly ctx: CombineLatestContext,
    private readonly index: number,
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

    this.ctx.latest[this.index] = data;

    if (this.ctx.producedCount === this.totalCount) {
      const latest = [...this.ctx.latest];
      this.subscriber.next(latest);
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
  const subscribeImpl = (subscriber: SubscriberLike<any>) => {
    const ctx: CombineLatestContext = {
      completedCount: 0,
      producedCount: 0,
      latest: new Array(observables.length),
    };

    for (let index = 0; index < observables.length; index++) {
      const observer = new CombineLatestObserver(
        subscriber,
        observables.length,
        ctx,
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

  return { subscribe: subscribeImpl };
}

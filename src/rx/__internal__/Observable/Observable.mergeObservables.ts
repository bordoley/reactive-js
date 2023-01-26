import { getLength, pipe } from "../../../functions";
import { ObservableLike, ObserverLike } from "../../../rx";
import Observable$create from "../../../rx/__internal__/Observable/Observable.create";
import Sink$sourceFrom from "../../../rx/__internal__/Sink/Sink.sourceFrom";
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import EnumerableObservable$create from "../EnumerableObservable/EnumerableObservable.create";
import Observer$createWithDelegate from "../Observer/Observer.createWithDelegate";
import RunnableObservable$create from "../RunnableObservable/RunnableObservable.create";
import Observable$allAreEnumerable from "./Observable.allAreEnumerable";
import Observable$allAreRunnable from "./Observable.allAreRunnable";

const Observable$mergeObservables = /*@__PURE__*/ (() => {
  const createMergeObserver = <T>(
    delegate: ObserverLike<T>,
    count: number,
    ctx: {
      completedCount: number;
    },
  ) =>
    pipe(
      Observer$createWithDelegate(delegate),
      Disposable$addTo(delegate),
      Disposable$onComplete(() => {
        ctx.completedCount++;
        if (ctx.completedCount >= count) {
          pipe(delegate, Disposable$dispose());
        }
      }),
    );

  return <T>(observables: readonly ObservableLike<T>[]): ObservableLike<T> => {
    const onSink = (observer: ObserverLike<T>) => {
      const count = getLength(observables);
      const ctx = { completedCount: 0 };

      for (const observable of observables) {
        pipe(
          createMergeObserver(observer, count, ctx),
          Sink$sourceFrom(observable),
        );
      }
    };

    const isEnumerable = Observable$allAreEnumerable(observables);
    const isRunnable = Observable$allAreRunnable(observables);

    return isEnumerable
      ? EnumerableObservable$create(onSink)
      : isRunnable
      ? RunnableObservable$create(onSink)
      : Observable$create(onSink);
  };
})();

export default Observable$mergeObservables;

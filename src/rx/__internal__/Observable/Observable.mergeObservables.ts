import { getLength, pipe } from "../../../functions";
import { ObservableLike, ObserverLike } from "../../../rx";
import Observable_create from "../../../rx/__internal__/Observable/Observable.create";
import Sink_sourceFrom from "../../../rx/__internal__/Sink/Sink.sourceFrom";
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import EnumerableObservable_create from "../EnumerableObservable/EnumerableObservable.create";
import Observer_createWithDelegate from "../Observer/Observer.createWithDelegate";
import RunnableObservable_create from "../RunnableObservable/RunnableObservable.create";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable";
import Observable_allAreRunnable from "./Observable.allAreRunnable";

const Observable_mergeObservables = /*@__PURE__*/ (() => {
  const createMergeObserver = <T>(
    delegate: ObserverLike<T>,
    count: number,
    ctx: {
      completedCount: number;
    },
  ) =>
    pipe(
      Observer_createWithDelegate(delegate),
      Disposable_addTo(delegate),
      Disposable_onComplete(() => {
        ctx.completedCount++;
        if (ctx.completedCount >= count) {
          pipe(delegate, Disposable_dispose());
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
          Sink_sourceFrom(observable),
        );
      }
    };

    const isEnumerable = Observable_allAreEnumerable(observables);
    const isRunnable = Observable_allAreRunnable(observables);

    return isEnumerable
      ? EnumerableObservable_create(onSink)
      : isRunnable
      ? RunnableObservable_create(onSink)
      : Observable_create(onSink);
  };
})();

export default Observable_mergeObservables;

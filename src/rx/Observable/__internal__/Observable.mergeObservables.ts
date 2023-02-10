import { getLength, pipe } from "../../../functions";
import { ObservableLike, ObserverLike } from "../../../rx";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create";
import Sink_sourceFrom from "../../../rx/Sink/__internal__/Sink.sourceFrom";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete";
import EnumerableObservable_create from "../../EnumerableObservable/__internal__/EnumerableObservable.create";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate";
import RunnableObservable_create from "../../RunnableObservable/__internal__/RunnableObservable.create";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable";
import Observable_allAreRunnable from "./Observable.allAreRunnable";

const Observable_mergeObservables = /*@__PURE__*/ (() => {
  const MergeObserverCtx_completedCount = Symbol(
    "MergeObserverCtx_completedCount",
  );
  const createMergeObserver = <T>(
    delegate: ObserverLike<T>,
    count: number,
    ctx: {
      [MergeObserverCtx_completedCount]: number;
    },
  ) =>
    pipe(
      Observer_createWithDelegate(delegate),
      Disposable_addTo(delegate),
      Disposable_onComplete(() => {
        ctx[MergeObserverCtx_completedCount]++;
        if (ctx[MergeObserverCtx_completedCount] >= count) {
          pipe(delegate, Disposable_dispose());
        }
      }),
    );

  return <T>(observables: readonly ObservableLike<T>[]): ObservableLike<T> => {
    const onSink = (observer: ObserverLike<T>) => {
      const count = getLength(observables);
      const ctx = { [MergeObserverCtx_completedCount]: 0 };

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

import { __MergeObserverCtx_completedCount } from "../../../__internal__/symbols.js";
import {
  DisposableLike_dispose,
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
} from "../../../core.js";
import Disposable_addTo from "../../../core/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../core/Disposable/__internal__/Disposable.onComplete.js";
import Enumerablee_create from "../../../core/Enumerable/__internal__/Enumerable.create.js";
import Observable_create from "../../../core/Observable/__internal__/Observable.create.js";
import ReadonlyArray_getLength from "../../../core/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import { bindMethod, pipe } from "../../../functions.js";
import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";

const Observable_mergeObservables = /*@__PURE__*/ (() => {
  const createMergeObserver = <T>(
    delegate: ObserverLike<T>,
    count: number,
    ctx: {
      [__MergeObserverCtx_completedCount]: number;
    },
  ) =>
    pipe(
      Observer_createWithDelegate(delegate),
      Disposable_addTo(delegate),
      Disposable_onComplete(() => {
        ctx[__MergeObserverCtx_completedCount]++;
        if (ctx[__MergeObserverCtx_completedCount] >= count) {
          delegate[DisposableLike_dispose]();
        }
      }),
    );

  return <T>(observables: readonly ObservableLike<T>[]): ObservableLike<T> => {
    const onSubscribe = (observer: ObserverLike<T>) => {
      const count = ReadonlyArray_getLength(observables);
      const ctx = { [__MergeObserverCtx_completedCount]: 0 };

      for (const observable of observables) {
        pipe(
          createMergeObserver(observer, count, ctx),
          bindMethod(observable, ObservableLike_observe),
        );
      }
    };

    const isDeferred = Observable_allAreEnumerable(observables);
    const isEnumerable = Observable_allAreEnumerable(observables);
    const isRunnable = Observable_allAreRunnable(observables);

    return isEnumerable
      ? Enumerablee_create(onSubscribe)
      : isRunnable
      ? Runnable_create(onSubscribe)
      : isDeferred
      ? DeferredObservable_create(onSubscribe)
      : Observable_create(onSubscribe);
  };
})();

export default Observable_mergeObservables;

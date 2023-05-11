import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import type * as Observable from "../../Observable.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import ReadonlyArray_getLength from "../../ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import { __MergeObserverCtx_completedCount } from "../../__internal__/symbols.js";
import { bindMethod, pipe } from "../../functions.js";
import {
  DisposableLike_dispose,
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../types.js";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";

const Observable_mergeMany: Observable.Signature["mergeMany"] =
  /*@__PURE__*/ (() => {
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

    return <T>(
      observables: readonly ObservableLike<T>[],
    ): ObservableLike<T> => {
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

      return Observable_createWithConfig(onSubscribe, {
        [ObservableLike_isDeferred]: isDeferred,
        [ObservableLike_isEnumerable]: isEnumerable,
        [ObservableLike_isRunnable]: isRunnable,
      });
    };
  })() as Observable.Signature["mergeMany"];

export default Observable_mergeMany;

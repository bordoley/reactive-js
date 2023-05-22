import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Enumerator_concatAll from "../../Enumerator/__internal__/Enumerator.concatAll.js";
import type * as Observable from "../../Observable.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import ReadonlyArray_enumerate from "../../ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import ReadonlyArray_getLength from "../../ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import ReadonlyArray_isEmpty from "../../ReadonlyArray/__internal__/ReadonlyArray.isEmpty.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { bindMethod, invoke, pipe, pipeLazy } from "../../functions.js";
import {
  DisposableLike_dispose,
  EnumerableLike_enumerate,
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../types.js";
import Observable_allAreDeferred from "./Observable.allAreDeferred.js";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";

const Observable_concatMany: Observable.Signature["concatMany"] =
  /*@__PURE__*/ (<T>() => {
    const createConcatObserver = <T>(
      delegate: ObserverLike<T>,
      observables: readonly ObservableLike<T>[],
      next: number,
    ) =>
      pipe(
        Observer_createWithDelegate(delegate),
        Disposable_addTo(delegate),
        Disposable_onComplete(() => {
          if (next < ReadonlyArray_getLength(observables)) {
            observables[next][ObservableLike_observe](
              createConcatObserver(delegate, observables, next + 1),
            );
          } else {
            delegate[DisposableLike_dispose]();
          }
        }),
      );

    return (observables: readonly ObservableLike<T>[]): ObservableLike<T> => {
      const onSubscribe = (observer: ObserverLike<T>) => {
        if (!ReadonlyArray_isEmpty(observables)) {
          pipe(
            createConcatObserver(observer, observables, 1),
            bindMethod(observables[0], ObservableLike_observe),
          );
        } else {
          observer[DisposableLike_dispose]();
        }
      };

      const isEnumerable = Observable_allAreEnumerable<T>(observables);
      const isDeferred = Observable_allAreDeferred(observables);
      const isRunnable = Observable_allAreRunnable(observables);

      return isEnumerable
        ? Enumerable_create(
            pipeLazy(
              observables,
              ReadonlyArray_map(invoke(EnumerableLike_enumerate)),
              ReadonlyArray_enumerate(),
              Enumerator_concatAll(),
            ),
          )
        : Observable_createWithConfig(onSubscribe, {
            [ObservableLike_isDeferred]: isDeferred,
            [ObservableLike_isRunnable]: isRunnable,
          });
    };
  })() as Observable.Signature["concatMany"];

export default Observable_concatMany;

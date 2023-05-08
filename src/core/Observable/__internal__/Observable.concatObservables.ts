import {
  DisposableLike_dispose,
  EnumerableLike,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  RunnableLike,
} from "../../../core.js";
import Disposable_addTo from "../../../core/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../core/Disposable/__internal__/Disposable.onComplete.js";
import ReadonlyArray_getLength from "../../../core/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import ReadonlyArray_isEmpty from "../../../core/ReadonlyArray/__internal__/ReadonlyArray.isEmpty.js";
import { bindMethod, pipe } from "../../../functions.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";

interface ObservableConcatObservables {
  concatObservables<T>(
    observables: readonly EnumerableLike<T>[],
  ): EnumerableLike<T>;
  concatObservables<T>(
    observables: readonly RunnableLike<T>[],
  ): RunnableLike<T>;
  concatObservables<T>(
    observables: readonly ObservableLike<T>[],
  ): ObservableLike<T>;
}
const Observable_concatObservables: ObservableConcatObservables["concatObservables"] =
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

      const isEnumerable = Observable_allAreEnumerable(observables);
      const isRunnable = Observable_allAreRunnable(observables);

      return Observable_createWithConfig(onSubscribe, {
        [ObservableLike_isEnumerable]: isEnumerable,
        [ObservableLike_isRunnable]: isRunnable,
      });
    };
  })() as ObservableConcatObservables["concatObservables"];

export default Observable_concatObservables;

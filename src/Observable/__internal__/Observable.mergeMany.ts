import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import type * as Observable from "../../Observable.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import ReadonlyArray_getLength from "../../ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import { bindMethod, pipe } from "../../functions.js";
import {
  DisposableLike_dispose,
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../types.js";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable.js";
import Observable_allArePure from "./Observable.allArePure.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";

const Observable_mergeMany: Observable.Signature["mergeMany"] = (<T>(
  observables: readonly ObservableLike<T>[],
): ObservableLike<T> => {
  const onSubscribe = (observer: ObserverLike<T>) => {
    const count = ReadonlyArray_getLength(observables);
    let completed = 0;

    for (const observable of observables) {
      pipe(
        Observer_createWithDelegate(observer),
        Disposable_addTo(observer),
        Disposable_onComplete(() => {
          completed++;
          if (completed >= count) {
            observer[DisposableLike_dispose]();
          }
        }),
        bindMethod(observable, ObservableLike_observe),
      );
    }
  };

  const isDeferred = Observable_allAreEnumerable(observables);
  const isPure = Observable_allArePure(observables);
  const isRunnable = Observable_allAreRunnable(observables);

  return Observable_createWithConfig(onSubscribe, {
    [ObservableLike_isDeferred]: isDeferred,
    [ObservableLike_isPure]: isPure,
    [ObservableLike_isRunnable]: isRunnable,
  });
}) as Observable.Signature["mergeMany"];

export default Observable_mergeMany;

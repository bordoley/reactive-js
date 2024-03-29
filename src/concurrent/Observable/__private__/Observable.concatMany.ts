import { Array_length } from "../../../__internal__/constants.js";
import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isMulticasted,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../../concurrent.js";
import { bindMethod, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observer_createWithDelegate from "../../Observer/__private__/Observer.createWithDelegate.js";
import Observable_allArePure from "./Observable.allArePure.js";
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
        Disposable.addTo(delegate),
        DisposableContainer.onComplete(() => {
          if (next < observables[Array_length]) {
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
        pipe(
          createConcatObserver(observer, observables, 1),
          bindMethod(observables[0], ObservableLike_observe),
        );
      };

      const isRunnable = Observable_allAreRunnable(observables);
      const isPure = Observable_allArePure(observables);

      return Observable_createWithConfig(onSubscribe, {
        [ObservableLike_isDeferred]: true,
        [ObservableLike_isMulticasted]: false,
        [ObservableLike_isRunnable]: isRunnable,
        [ObservableLike_isPure]: isPure,
      });
    };
  })() as Observable.Signature["concatMany"];

export default Observable_concatMany;

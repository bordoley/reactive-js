import { Array_length } from "../../../__internal__/constants.js";
import { mixInstanceFactory, props } from "../../../__internal__/mixins.js";
import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_observe,
  ObserverLike,
} from "../../../concurrent.js";
import { bindMethod, isSome, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observer_createWithDelegate from "../../Observer/__private__/Observer.createWithDelegate.js";
import Observable_allAreMulticasted from "./Observable.allAreMulticasted.js";
import Observable_allArePure from "./Observable.allArePure.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";

const Observable_mergeMany: Observable.Signature["mergeMany"] = (<T>() => {
  const MergeObservable_observables = Symbol("MergeObservable_observables");

  type TProperties<T> = {
    [ObservableLike_isDeferred]: boolean;
    [ComputationLike_isPure]: boolean;
    [ComputationLike_isSynchronous]: boolean;
    [MergeObservable_observables]: readonly ObservableLike<T>[];
  };

  const isMergeObservable = <T>(
    observable: ObservableLike<T>,
  ): observable is ObservableLike<T> & TProperties<T> =>
    isSome((observable as any)[MergeObservable_observables]);

  const flattenObservables = <T>(
    observables: readonly ObservableLike<T>[],
  ): readonly ObservableLike<T>[] =>
    observables.some(isMergeObservable)
      ? observables.flatMap(observable =>
          isMergeObservable(observable)
            ? flattenObservables(observable[MergeObservable_observables])
            : observable,
        )
      : observables;

  return mixInstanceFactory(
    function MergeObservable(
      instance: TProperties<T> & ObservableLike<T>,
      observables: readonly ObservableLike<T>[],
    ): ObservableLike<T> {
      instance[ObservableLike_isDeferred] =
        !Observable_allAreMulticasted(observables);
      instance[ComputationLike_isPure] = Observable_allArePure(observables);
      instance[ComputationLike_isSynchronous] =
        Observable_allAreRunnable(observables);
      instance[MergeObservable_observables] = flattenObservables(observables);

      return instance;
    },
    props<TProperties<T>>({
      [ObservableLike_isDeferred]: false,
      [ComputationLike_isPure]: false,
      [ComputationLike_isSynchronous]: false,
      [MergeObservable_observables]: none,
    }),
    {
      [ObservableLike_observe](
        this: TProperties<T>,
        observer: ObserverLike<T>,
      ): void {
        const observables = this[MergeObservable_observables];
        const count = observables[Array_length];
        let completed = 0;

        for (const observable of observables) {
          pipe(
            Observer_createWithDelegate(observer),
            Disposable.addTo(observer),
            DisposableContainer.onComplete(() => {
              completed++;
              if (completed >= count) {
                observer[DisposableLike_dispose]();
              }
            }),
            bindMethod(observable, ObservableLike_observe),
          );
        }
      },
    },
  );
})() as Observable.Signature["mergeMany"];

export default Observable_mergeMany;

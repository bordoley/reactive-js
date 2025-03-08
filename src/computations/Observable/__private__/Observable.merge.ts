import { Array_length } from "../../../__internal__/constants.js";
import { mixInstanceFactory, props } from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
} from "../../../computations.js";
import { bindMethod, isSome, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observer_createWithDelegate from "../../Observer/__private__/Observer.createWithDelegate.js";

const Observable_merge: Observable.Signature["merge"] = /*@__PURE__*/ (<
  T,
>() => {
  const MergeObservable_observables = Symbol("MergeObservable_observables");

  type TProperties<T> = {
    [ComputationLike_isDeferred]: boolean;
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
      ...observables: readonly ObservableLike<T>[]
    ): ObservableLike<T> {
      observables = flattenObservables(observables);

      instance[ComputationLike_isDeferred] =
        !Computation.areAllMulticasted(observables);
      instance[ComputationLike_isPure] = Computation.areAllPure(observables);
      instance[ComputationLike_isSynchronous] =
        Computation.areAllSynchronous(observables);

      instance[MergeObservable_observables] = observables;

      return instance;
    },
    props<TProperties<T>>({
      [ComputationLike_isDeferred]: false,
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
})() as Observable.Signature["merge"];

export default Observable_merge;

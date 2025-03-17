import { Array_length } from "../../../__internal__/constants.js";
import {
  Mixin1,
  include,
  init,
  mix,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ObservableLike,
  ObservableLike_observe,
} from "../../../computations.js";
import { bindMethod, isSome, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as DelegatingObserver from "../../../utils/__internal__/DelegatingObserver.js";
import { ObserverLike, SinkLike_complete } from "../../../utils.js";
import type * as Observable from "../../Observable.js";

const Observable_merge: Observable.Signature["merge"] = /*@__PURE__*/ (<
  T,
>() => {
  const MergeObservable_observables = Symbol("MergeObservable_observables");

  type TProperties<T> = {
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

  const MergeObservableMixin: Mixin1<
    ObservableLike<T>,
    readonly ObservableLike<T>[]
  > = mix(
    function MergeObservable(
      this: TProperties<T> &
        Omit<ObservableLike<T>, typeof ComputationLike_isDeferred>,
      observables: readonly ObservableLike<T>[],
    ): ObservableLike<T> {
      observables = flattenObservables(observables);

      this[ComputationLike_isPure] = Computation.areAllPure(observables);
      this[ComputationLike_isSynchronous] =
        Computation.areAllSynchronous(observables);

      this[MergeObservable_observables] = observables;

      return this;
    },
    props<TProperties<T>>({
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
            DelegatingObserver.createNotifyOnlyNonCompletingNonDisposing(
              observer,
            ),
            Disposable.addTo(observer),
            DisposableContainer.onComplete(() => {
              completed++;
              if (completed >= count) {
                observer[SinkLike_complete]();
              }
            }),
            bindMethod(observable, ObservableLike_observe),
          );
        }
      },
    },
  );

  const createDeferredMergeObservable = mixInstanceFactory(
    include(MergeObservableMixin),
    function DeferredMergeObservable(
      this: TProperties<T> & ObservableLike<T>,
      observables: readonly ObservableLike<T>[],
    ): ObservableLike<T> {
      init(MergeObservableMixin, this, observables);

      return this;
    },
  );

  return (...observables: readonly ObservableLike<T>[]) =>
    createDeferredMergeObservable(observables);
})() as Observable.Signature["merge"];

export default Observable_merge;

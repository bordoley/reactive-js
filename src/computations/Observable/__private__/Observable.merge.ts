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
  DeferredObservableLike,
  MulticastObservableLike,
  ObservableLike,
  ObservableLike_observe,
} from "../../../computations.js";
import { bindMethod, isSome, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import Observer_createWithDelegate from "../../../utils/Observer/__internal__/Observer.createWithDelegate.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import {
  DisposableContainerLike,
  DisposableLike_dispose,
  ObserverLike,
} from "../../../utils.js";
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
      instance: TProperties<T> &
        Omit<ObservableLike<T>, typeof ComputationLike_isDeferred>,
      observables: readonly ObservableLike<T>[],
    ): ObservableLike<T> {
      observables = flattenObservables(observables);

      instance[ComputationLike_isPure] = Computation.areAllPure(observables);
      instance[ComputationLike_isSynchronous] =
        Computation.areAllSynchronous(observables);

      instance[MergeObservable_observables] = observables;

      return instance;
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

  const createDeferredMergeObservable = mixInstanceFactory(
    include(MergeObservableMixin),
    function DeferredMergeObservable(
      instance: TProperties<T> & DeferredObservableLike<T>,
      observables: readonly ObservableLike<T>[],
    ): DeferredObservableLike<T> {
      init(MergeObservableMixin, instance, observables);

      return instance;
    },
  );

  const createMulticastMergeObservable = mixInstanceFactory(
    include(MergeObservableMixin, DelegatingDisposableContainerMixin),
    function MulticastMergeObservable(
      instance: Omit<
        MulticastObservableLike<T>,
        keyof DisposableContainerLike | typeof ObservableLike_observe
      >,
      observables: readonly MulticastObservableLike<T>[],
    ): MulticastObservableLike<T> {
      const disposable = Disposable.create();

      init(DelegatingDisposableContainerMixin, instance, disposable);
      init(MergeObservableMixin, instance, observables);

      const count = observables[Array_length];
      let completed = 0;
      for (const observable of observables) {
        pipe(
          observable,
          DisposableContainer.onDisposed(e => {
            completed++;
            if (completed >= count || isSome(e)) {
              disposable[DisposableLike_dispose](e);
            }
          }),
        );
      }
      return instance;
    },
    props(),
    {
      [ComputationLike_isDeferred]: false as const,
      [ComputationLike_isSynchronous]: false as const,
    },
  );

  return (...observables: readonly ObservableLike<T>[]) =>
    Computation.areAllMulticasted(observables)
      ? createMulticastMergeObservable(
          observables as readonly MulticastObservableLike<T>[],
        )
      : createDeferredMergeObservable(observables);
})() as Observable.Signature["merge"];

export default Observable_merge;

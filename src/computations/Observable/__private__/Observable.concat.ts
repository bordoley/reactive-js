import { Array_length } from "../../../__internal__/constants.js";
import { mixInstanceFactory, props } from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ObservableLike,
  ObservableLike_observe,
} from "../../../computations.js";
import { bind, bindMethod, isSome, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import Observer_createWithDelegate from "../../../utils/Observer/__internal__/Observer.createWithDelegate.js";
import { DisposableLike_dispose, ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_empty from "./Observable.empty.js";

const Observable_concat: Observable.Signature["concat"] = /*@__PURE__*/ (<
  T,
>() => {
  const ConcatObserverCtx_delegate = Symbol("ConcatObserverCtx_delegate");
  const ConcatObserverCtx_observables = Symbol("ConcatObserverCtx_observables");
  const ConcatObserverCtx_nextIndex = Symbol("ConcatObserverCtx_nextIndex");

  type ConcatObserverCtx = {
    readonly [ConcatObserverCtx_delegate]: ObserverLike<T>;
    readonly [ConcatObserverCtx_observables]: readonly ObservableLike<T>[];
    [ConcatObserverCtx_nextIndex]: number;
  };

  function onConcatObserverComplete(this: ConcatObserverCtx) {
    const delegate = this[ConcatObserverCtx_delegate];
    const observables = this[ConcatObserverCtx_observables];
    const next = this[ConcatObserverCtx_nextIndex];
    if (next < observables[Array_length]) {
      this[ConcatObserverCtx_nextIndex]++;
      observables[next][ObservableLike_observe](createConcatObserver(this));
    } else {
      delegate[DisposableLike_dispose]();
    }
  }

  const createConcatObserver = (ctx: ConcatObserverCtx) => {
    const delegate = ctx[ConcatObserverCtx_delegate];
    return pipe(
      Observer_createWithDelegate(delegate),
      Disposable.addTo(delegate),
      DisposableContainer.onComplete(bind(onConcatObserverComplete, ctx)),
    );
  };

  const ConcatObservable_observables = Symbol("ConcatObservable_observables");

  type TProperties<T> = {
    [ComputationLike_isPure]: boolean;
    [ComputationLike_isSynchronous]: boolean;
    [ConcatObservable_observables]: readonly ObservableLike<T>[];
  };

  const isConcatObservable = <T>(
    observable: ObservableLike<T>,
  ): observable is ObservableLike<T> & TProperties<T> =>
    isSome((observable as any)[ConcatObservable_observables]);

  const flattenObservables = <T>(
    observables: readonly ObservableLike<T>[],
  ): readonly ObservableLike<T>[] =>
    observables.some(isConcatObservable)
      ? observables.flatMap(observable =>
          isConcatObservable(observable)
            ? flattenObservables(observable[ConcatObservable_observables])
            : observable,
        )
      : observables;

  const createConcatObservable = mixInstanceFactory(
    function ConcatObservable(
      instance: TProperties<T> & ObservableLike<T>,
      observables: readonly ObservableLike<T>[],
    ): ObservableLike<T> {
      instance[ComputationLike_isPure] = Computation.areAllPure(observables);
      instance[ComputationLike_isSynchronous] =
        Computation.areAllSynchronous(observables);
      instance[ConcatObservable_observables] = flattenObservables(observables);

      return instance;
    },
    props<TProperties<T>>({
      [ComputationLike_isPure]: false,
      [ComputationLike_isSynchronous]: false,
      [ConcatObservable_observables]: none,
    }),
    {
      [ComputationLike_isDeferred]: true as const,

      [ObservableLike_observe](
        this: TProperties<T>,
        observer: ObserverLike<T>,
      ): void {
        const { [ConcatObservable_observables]: observables } = this;

        pipe(
          createConcatObserver({
            [ConcatObserverCtx_delegate]: observer,
            [ConcatObserverCtx_observables]: observables,
            [ConcatObserverCtx_nextIndex]: 1,
          }),
          bindMethod(observables[0], ObservableLike_observe),
        );
      },
    },
  );

  return (...observables: readonly ObservableLike<T>[]) => {
    const length = observables[Array_length];
    return length === 0
      ? Observable_empty()
      : length === 1
        ? observables[0]
        : createConcatObservable(observables);
  };
})() as Observable.Signature["concat"];

export default Observable_concat;

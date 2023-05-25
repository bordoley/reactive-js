import EnumerableBase_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
import Enumerator_concatAll from "../../Enumerator/__internal__/Enumerator.concatAll.js";
import Enumerator_map from "../../Enumerator/__internal__/Enumerator.map.js";
import Iterable_toObservable from "../../Iterable/__internal__/Iterable.toObservable.js";
import type * as Observable from "../../Observable.js";
import Observable_concatMap from "../../Observable/__internal__/Observable.concatMap.js";
import Observer_createMergeAllObserverOperator from "../../Observer/__internal__/Observer.createMergeAllObserverOperator.js";
import { Function1, compose, invoke, pipe, pipeLazy } from "../../functions.js";
import {
  DeferredObservableBaseLike,
  EnumerableBaseLike,
  EnumerableLike_enumerate,
  EnumerableWithSideEffectsLike,
  ObservableLike,
  ObservableLike_isPure,
} from "../../types.js";
import Observable_enumerate from "./Observable.enumerate.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
import Observable_liftRunnableBoundedObservableOperatorWithSideEffects from "./Observable.liftRunnableBoundedObservableOperatorWithSideEffects.js";
import Observable_map from "./Observable.map.js";

const RunnableWithSideEffects_mergeAll = /*@__PURE__*/ compose(
  Observer_createMergeAllObserverOperator,
  Observable_liftRunnableBoundedObservableOperatorWithSideEffects,
);

const RunnableWithSideEffects_concatAll = <T>() =>
  RunnableWithSideEffects_mergeAll<T>({ concurrency: 1 });

const EnumerableWithSideEffects_concatAll =
  <T>() =>
  (
    enumerable: EnumerableBaseLike<EnumerableBaseLike<T>>,
  ): EnumerableWithSideEffectsLike<T> =>
    EnumerableBase_create<T>(
      pipeLazy(
        enumerable,
        Observable_enumerate(),
        Enumerator_map(invoke(EnumerableLike_enumerate)),
        Enumerator_concatAll(),
      ),
      { [ObservableLike_isPure]: false },
    );

const Observable_flatMapIterable: Observable.Signature["flatMapIterable"] = (<
  TA,
  TB,
>(
  selector: Function1<TA, Iterable<TB>>,
) => {
  const mapper = compose(selector, Iterable_toObservable<TB>());

  return (observable: ObservableLike<TA>) =>
    Observable_isEnumerable(observable)
      ? pipe(
          observable,
          Observable_map(mapper),
          EnumerableWithSideEffects_concatAll(),
        )
      : Observable_isRunnable(observable)
      ? pipe(
          observable,
          Observable_map<TA, DeferredObservableBaseLike<TB>>(mapper),
          RunnableWithSideEffects_concatAll<TB>(),
        )
      : pipe(observable, Observable_concatMap(mapper));
}) as Observable.Signature["flatMapIterable"];

export default Observable_flatMapIterable;

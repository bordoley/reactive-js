import { Function1, newInstance, pipeUnsafe } from "../../../functions.js";
import {
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../../rx.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";

const LiftedObservable_source = Symbol("LiftedObservable_source");
const LiftedObservable_operators = Symbol("LiftedObservable_operators");

class LiftedObservable<TIn, TOut> implements ObservableLike<TOut> {
  readonly [LiftedObservable_source]: ObservableLike<TIn>;
  readonly [LiftedObservable_operators]: readonly Function1<
    ObserverLike<any>,
    ObserverLike<any>
  >[];
  readonly [ObservableLike_isEnumerable]: boolean;
  readonly [ObservableLike_isRunnable]: boolean;

  constructor(
    source: ObservableLike<TIn>,
    operators: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
    isEnumerable: boolean,
    isRunnable: boolean,
  ) {
    this[LiftedObservable_source] = source;
    this[LiftedObservable_operators] = operators;
    this[ObservableLike_isEnumerable] = isEnumerable;
    this[ObservableLike_isRunnable] = isRunnable;
  }

  [ObservableLike_observe](observer: ObserverLike<TOut>) {
    pipeUnsafe(
      observer,
      ...this[LiftedObservable_operators],
      Observer_sourceFrom(this[LiftedObservable_source]),
    );
  }
}

const Observable_lift =
  (isEnumerable = false, isRunnable = false) =>
  <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ): Function1<ObservableLike<TA>, ObservableLike<TB>> =>
  source => {
    const sourceSource =
      source instanceof LiftedObservable
        ? source[LiftedObservable_source]
        : source;

    const allFunctions =
      source instanceof LiftedObservable
        ? [operator, ...source[LiftedObservable_operators]]
        : [operator];

    const isLiftedEnumerable =
      isEnumerable && sourceSource[ObservableLike_isEnumerable];
    const isLiftedRunnable =
      (isEnumerable || isRunnable) && sourceSource[ObservableLike_isRunnable];

    return newInstance(
      LiftedObservable,
      sourceSource,
      allFunctions,
      isLiftedEnumerable,
      isLiftedRunnable,
    );
  };

export default Observable_lift;

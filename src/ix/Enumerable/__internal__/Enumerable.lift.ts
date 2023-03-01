import { Lift } from "../../../containers.js";
import { Function1, newInstance, pipeUnsafe } from "../../../functions.js";
import { EnumerableLike } from "../../../ix.js";
import {
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../../rx.js";
import Observer_sourceFrom from "../../../rx/Observer/__internal__/Observer.sourceFrom.js";

const LiftedEnumerable_source = Symbol("LiftedEnumerable_source");
const LiftedEnumerable_operators = Symbol("LiftedEnumerable_operators");

class LiftedEnumerable<TIn, TOut> implements EnumerableLike<TOut> {
  readonly [ObservableLike_isEnumerable] = true;
  readonly [ObservableLike_isRunnable] = true;
  readonly [LiftedEnumerable_source]: EnumerableLike<TIn>;
  readonly [LiftedEnumerable_operators]: readonly Function1<
    ObserverLike<any>,
    ObserverLike<any>
  >[];

  constructor(
    source: EnumerableLike<TIn>,
    operators: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
  ) {
    this[LiftedEnumerable_source] = source;
    this[LiftedEnumerable_operators] = operators;
  }

  [ObservableLike_observe](observer: ObserverLike<TOut>) {
    pipeUnsafe(
      observer,
      ...this[LiftedEnumerable_operators],
      Observer_sourceFrom(this[LiftedEnumerable_source]),
    );
  }
}

const Enumerable_lift: Lift<EnumerableLike>["lift"] =
  <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ): Function1<EnumerableLike<TA>, EnumerableLike<TB>> =>
  source => {
    const sourceSource =
      source instanceof LiftedEnumerable
        ? source[LiftedEnumerable_source]
        : source;

    const allFunctions =
      source instanceof LiftedEnumerable
        ? [operator, ...source[LiftedEnumerable_operators]]
        : [operator];

    return newInstance(LiftedEnumerable, sourceSource, allFunctions);
  };

export default Enumerable_lift;

import { Lift } from "../../../containers.js";
import { Function1, newInstance, pipeUnsafe } from "../../../functions.js";
import {
  EnumerableObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../../rx.js";
import Sink_sourceFrom from "../../Sink/__internal__/Sink.sourceFrom.js";

const LiftedEnumerableObservable_source = Symbol(
  "LiftedEnumerableObservable_source",
);
const LiftedEnumerableObservable_operators = Symbol(
  "LiftedEnumerableObservable_operators",
);

class LiftedEnumerableObservable<TIn, TOut>
  implements EnumerableObservableLike<TOut>
{
  readonly [ObservableLike_isEnumerable] = true;
  readonly [ObservableLike_isRunnable] = true;
  readonly [LiftedEnumerableObservable_source]: EnumerableObservableLike<TIn>;
  readonly [LiftedEnumerableObservable_operators]: readonly Function1<
    ObserverLike<any>,
    ObserverLike<any>
  >[];

  constructor(
    source: EnumerableObservableLike<TIn>,
    operators: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
  ) {
    this[LiftedEnumerableObservable_source] = source;
    this[LiftedEnumerableObservable_operators] = operators;
  }

  [ObservableLike_observe](observer: ObserverLike<TOut>) {
    pipeUnsafe(
      observer,
      ...this[LiftedEnumerableObservable_operators],
      Sink_sourceFrom(this[LiftedEnumerableObservable_source]),
    );
  }
}

const EnumerableObservable_lift: Lift<EnumerableObservableLike>["lift"] =
  <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ): Function1<EnumerableObservableLike<TA>, EnumerableObservableLike<TB>> =>
  source => {
    const sourceSource =
      source instanceof LiftedEnumerableObservable
        ? source[LiftedEnumerableObservable_source]
        : source;

    const allFunctions =
      source instanceof LiftedEnumerableObservable
        ? [operator, ...source[LiftedEnumerableObservable_operators]]
        : [operator];

    return newInstance(LiftedEnumerableObservable, sourceSource, allFunctions);
  };

export default EnumerableObservable_lift;

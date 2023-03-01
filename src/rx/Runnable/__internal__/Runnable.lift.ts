import { Lift } from "../../../containers.js";
import { Function1, newInstance, pipeUnsafe } from "../../../functions.js";
import {
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  ReactiveContainerLike_sinkInto,
  RunnableLike,
} from "../../../rx.js";
import Sink_sourceFrom from "../../Sink/__internal__/Sink.sourceFrom.js";

const LiftedRunnable_source = Symbol("LiftedRunnable_source");
const LiftedRunnable_operators = Symbol("LiftedRunnable_operators");

class LiftedRunnable<TIn, TOut> implements RunnableLike<TOut> {
  readonly [ObservableLike_isEnumerable] = false;
  readonly [ObservableLike_isRunnable] = true;
  readonly [LiftedRunnable_source]: RunnableLike<TIn>;
  readonly [LiftedRunnable_operators]: readonly Function1<
    ObserverLike<any>,
    ObserverLike<any>
  >[];

  constructor(
    source: RunnableLike<TIn>,
    operators: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
  ) {
    this[LiftedRunnable_source] = source;
    this[LiftedRunnable_operators] = operators;
  }

  [ReactiveContainerLike_sinkInto](observer: ObserverLike<TOut>) {
    pipeUnsafe(
      observer,
      ...this[LiftedRunnable_operators],
      Sink_sourceFrom(this[LiftedRunnable_source]),
    );
  }
}

const Runnable_lift: Lift<RunnableLike>["lift"] =
  <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ): Function1<RunnableLike<TA>, RunnableLike<TB>> =>
  source => {
    const sourceSource =
      source instanceof LiftedRunnable ? source[LiftedRunnable_source] : source;

    const allFunctions =
      source instanceof LiftedRunnable
        ? [operator, ...source[LiftedRunnable_operators]]
        : [operator];

    return newInstance(LiftedRunnable, sourceSource, allFunctions);
  };

export default Runnable_lift;

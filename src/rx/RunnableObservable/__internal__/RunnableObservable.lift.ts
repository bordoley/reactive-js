import {
  Lift,
  TReactive,
} from "../../../containers/__internal__/containers.internal";
import { Function1, newInstance, pipeUnsafe } from "../../../functions";
import {
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  ReactiveContainerLike_sinkInto,
  RunnableObservableLike,
} from "../../../rx";
import Sink_sourceFrom from "../../Sink/__internal__/Sink.sourceFrom";

const LiftedRunnableObservable_source = Symbol(
  "LiftedRunnableObservable_source",
);
const LiftedRunnableObservable_operators = Symbol(
  "LiftedRunnableObservable_operators",
);

class LiftedRunnableObservable<TIn, TOut>
  implements RunnableObservableLike<TOut>
{
  readonly [ObservableLike_isEnumerable] = false;
  readonly [ObservableLike_isRunnable] = true;
  readonly [LiftedRunnableObservable_source]: RunnableObservableLike<TIn>;
  readonly [LiftedRunnableObservable_operators]: readonly Function1<
    ObserverLike<any>,
    ObserverLike<any>
  >[];

  constructor(
    source: RunnableObservableLike<TIn>,
    operators: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
  ) {
    this[LiftedRunnableObservable_source] = source;
    this[LiftedRunnableObservable_operators] = operators;
  }

  [ReactiveContainerLike_sinkInto](observer: ObserverLike<TOut>) {
    pipeUnsafe(
      observer,
      ...this[LiftedRunnableObservable_operators],
      Sink_sourceFrom(this[LiftedRunnableObservable_source]),
    );
  }
}

const RunnableObservable_lift: Lift<
  RunnableObservableLike,
  TReactive
>["lift"] =
  <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ): Function1<RunnableObservableLike<TA>, RunnableObservableLike<TB>> =>
  source => {
    const sourceSource =
      source instanceof LiftedRunnableObservable
        ? source[LiftedRunnableObservable_source]
        : source;

    const allFunctions =
      source instanceof LiftedRunnableObservable
        ? [operator, ...source[LiftedRunnableObservable_operators]]
        : [operator];

    return newInstance(LiftedRunnableObservable, sourceSource, allFunctions);
  };

export default RunnableObservable_lift;

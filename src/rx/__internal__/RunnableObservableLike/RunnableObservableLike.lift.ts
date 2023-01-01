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
import { sourceFrom } from "../../../rx/SinkLike";

const RunnableObservableLike__lift: Lift<
  RunnableObservableLike,
  TReactive
>["lift"] = /*@__PURE__*/ (() => {
  class LiftedRunnableObservable<TIn, TOut>
    implements RunnableObservableLike<TOut>
  {
    readonly [ObservableLike_isEnumerable] = false;
    readonly [ObservableLike_isRunnable] = true;

    constructor(
      readonly source: RunnableObservableLike<TIn>,
      readonly operators: readonly Function1<
        ObserverLike<any>,
        ObserverLike<any>
      >[],
    ) {}

    [ReactiveContainerLike_sinkInto](observer: ObserverLike<TOut>) {
      pipeUnsafe(observer, ...this.operators, sourceFrom(this.source));
    }
  }

  return <TA, TB>(
      operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
    ): Function1<RunnableObservableLike<TA>, RunnableObservableLike<TB>> =>
    source => {
      const sourceSource =
        source instanceof LiftedRunnableObservable ? source.source : source;

      const allFunctions =
        source instanceof LiftedRunnableObservable
          ? [operator, ...source.operators]
          : [operator];

      return newInstance(LiftedRunnableObservable, sourceSource, allFunctions);
    };
})();

export default RunnableObservableLike__lift;

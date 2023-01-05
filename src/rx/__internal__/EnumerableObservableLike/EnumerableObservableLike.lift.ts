import {
  Lift,
  TReactive,
} from "../../../containers/__internal__/containers.internal";
import { Function1, newInstance, pipeUnsafe } from "../../../functions";
import {
  EnumerableObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  ReactiveContainerLike_sinkInto,
} from "../../../rx";
import SinkLike__sourceFrom from "../SinkLike/SinkLike.sourceFrom";

const EnumerableObservableLike__lift: Lift<
  EnumerableObservableLike,
  TReactive
>["lift"] = /*@__PURE__*/ (() => {
  class LiftedEnumerableObservable<TIn, TOut>
    implements EnumerableObservableLike<TOut>
  {
    readonly [ObservableLike_isEnumerable] = true;
    readonly [ObservableLike_isRunnable] = true;

    constructor(
      readonly source: EnumerableObservableLike<TIn>,
      readonly operators: readonly Function1<
        ObserverLike<any>,
        ObserverLike<any>
      >[],
    ) {}

    [ReactiveContainerLike_sinkInto](observer: ObserverLike<TOut>) {
      pipeUnsafe(
        observer,
        ...this.operators,
        SinkLike__sourceFrom(this.source),
      );
    }
  }

  return <TA, TB>(
      operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
    ): Function1<EnumerableObservableLike<TA>, EnumerableObservableLike<TB>> =>
    source => {
      const sourceSource =
        source instanceof LiftedEnumerableObservable ? source.source : source;

      const allFunctions =
        source instanceof LiftedEnumerableObservable
          ? [operator, ...source.operators]
          : [operator];

      return newInstance(
        LiftedEnumerableObservable,
        sourceSource,
        allFunctions,
      );
    };
})();

export default EnumerableObservableLike__lift;

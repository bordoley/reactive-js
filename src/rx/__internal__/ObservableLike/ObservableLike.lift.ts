import { Function1, newInstance, pipeUnsafe } from "../../../functions";
import {
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  ReactiveContainerLike_sinkInto,
} from "../../../rx";
import SinkLike__sourceFrom from "../SinkLike/SinkLike.sourceFrom";

class LiftedObservable<TIn, TOut> implements ObservableLike<TOut> {
  readonly [ObservableLike_isEnumerable]: boolean;
  readonly [ObservableLike_isRunnable]: boolean;

  constructor(
    readonly source: ObservableLike<TIn>,
    readonly operators: readonly Function1<
      ObserverLike<any>,
      ObserverLike<any>
    >[],
    isEnumerable: boolean,
    isRunnable: boolean,
  ) {
    this[ObservableLike_isEnumerable] = isEnumerable;
    this[ObservableLike_isRunnable] = isRunnable;
  }

  [ReactiveContainerLike_sinkInto](observer: ObserverLike<TOut>) {
    pipeUnsafe(observer, ...this.operators, SinkLike__sourceFrom(this.source));
  }
}

const ObservableLike__lift =
  (isEnumerable = false, isRunnable = false) =>
  <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ): Function1<ObservableLike<TA>, ObservableLike<TB>> =>
  source => {
    const sourceSource =
      source instanceof LiftedObservable ? source.source : source;

    const allFunctions =
      source instanceof LiftedObservable
        ? [operator, ...source.operators]
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

export default ObservableLike__lift;

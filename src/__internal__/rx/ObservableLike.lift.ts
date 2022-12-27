import {
  Lift,
  TReactive,
  reactive,
} from "../../containers/__internal__/containers.internal";
import { Function1, newInstance, pipeUnsafe } from "../../functions";
import {
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  ReactiveContainerLike_sinkInto,
} from "../../rx";
import { sourceFrom } from "../../rx/SinkLike";

const createLift: (
  isEnumerable: boolean,
  isRunnable: boolean,
) => Lift<ObservableLike, TReactive>["lift"] = /*@__PURE__*/ (() => {
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
      pipeUnsafe(observer, ...this.operators, sourceFrom(this.source));
    }
  }

  return (isEnumerable, isRunnable) =>
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
        isLiftedEnumerable ||
        (isRunnable && sourceSource[ObservableLike_isRunnable]);

      return newInstance(
        LiftedObservable,
        sourceSource,
        allFunctions,
        isLiftedEnumerable,
        isLiftedRunnable,
      );
    };
})();

export const liftObservable = createLift(false, false);
export const liftObservableT: Lift<ObservableLike, TReactive> = {
  lift: liftObservable,
  variance: reactive,
};
export const liftRunnableObservable = createLift(false, true);
export const liftEnumerableObservable = createLift(true, true);
export const liftEnumerableObservableT: Lift<ObservableLike, TReactive> = {
  lift: liftEnumerableObservable,
  variance: reactive,
};

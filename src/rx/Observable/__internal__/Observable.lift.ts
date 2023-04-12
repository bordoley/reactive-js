import {
  LiftedLike,
  LiftedLike_operators,
  LiftedLike_source,
} from "../../../__internal__/containers.js";
import { Function1, newInstance, pipeUnsafe } from "../../../functions.js";
import {
  EnumerableLike,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  RunnableLike,
} from "../../../rx.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";

class LiftedObservable<TIn, TOut>
  implements
    ObservableLike<TOut>,
    LiftedLike<ObservableLike<TIn>, ObserverLike<any>>
{
  readonly [LiftedLike_source]: ObservableLike<TIn>;
  readonly [LiftedLike_operators]: readonly Function1<
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
    this[LiftedLike_source] = source;
    this[LiftedLike_operators] = operators;
    this[ObservableLike_isEnumerable] = isEnumerable;
    this[ObservableLike_isRunnable] = isRunnable;
  }

  [ObservableLike_observe](observer: ObserverLike<TOut>) {
    pipeUnsafe(
      observer,
      ...this[LiftedLike_operators],
      Observer_sourceFrom(this[LiftedLike_source]),
    );
  }
}

interface ObservableLift {
  lift<C extends EnumerableLike>(config: {
    [ObservableLike_isEnumerable]: true;
    [ObservableLike_isRunnable]: true;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => Function1<EnumerableLike<TA>, EnumerableLike<TB>>;

  lift<C extends RunnableLike>(config: {
    [ObservableLike_isEnumerable]: true;
    [ObservableLike_isRunnable]: true;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => Function1<RunnableLike<TA>, RunnableLike<TB>>;

  lift<C extends ObservableLike>(config: {
    [ObservableLike_isEnumerable]: true;
    [ObservableLike_isRunnable]: true;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => Function1<ObservableLike<TA>, ObservableLike<TB>>;

  lift<C extends RunnableLike>(config: {
    [ObservableLike_isEnumerable]: false;
    [ObservableLike_isRunnable]: true;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => Function1<RunnableLike<TA>, RunnableLike<TB>>;

  lift<C extends ObservableLike>(config: {
    [ObservableLike_isEnumerable]: false;
    [ObservableLike_isRunnable]: true;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => Function1<ObservableLike<TA>, ObservableLike<TB>>;

  lift(config: {
    [ObservableLike_isEnumerable]: false;
    [ObservableLike_isRunnable]: false;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => Function1<ObservableLike<TA>, ObservableLike<TB>>;

  lift(config: {
    [ObservableLike_isEnumerable]: boolean;
    [ObservableLike_isRunnable]: boolean;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => Function1<ObservableLike<TA>, ObservableLike<TB>>;
}
const Observable_lift: ObservableLift["lift"] = ((config: {
    [ObservableLike_isEnumerable]: boolean;
    [ObservableLike_isRunnable]: boolean;
  }) =>
  <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ): Function1<ObservableLike<TA>, ObservableLike<TB>> =>
  source => {
    const sourceSource = (source as any)[LiftedLike_source] ?? source;
    const allFunctions = [
      operator,
      ...((source as any)[LiftedLike_operators] ?? []),
    ];

    const isLiftedEnumerable =
      config[ObservableLike_isEnumerable] &&
      sourceSource[ObservableLike_isEnumerable];
    const isLiftedRunnable =
      (config[ObservableLike_isEnumerable] ||
        config[ObservableLike_isRunnable]) &&
      sourceSource[ObservableLike_isRunnable];

    return newInstance(
      LiftedObservable,
      sourceSource,
      allFunctions,
      isLiftedEnumerable,
      isLiftedRunnable,
    );
  }) as ObservableLift["lift"];

export default Observable_lift;

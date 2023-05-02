import {
  LiftedLike_operators,
  LiftedLike_source,
} from "../../../__internal__/containers.js";
import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { Function1 } from "../../../functions.js";
import {
  EnumerableLike,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  RunnableLike,
} from "../../../rx.js";
import Observable_liftMixin from "./Observable.liftMixin.js";

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
const Observable_lift: ObservableLift["lift"] = (<TA, TB>() => {
  const createLiftedObservable = createInstanceFactory(
    Observable_liftMixin<TA, TB>(),
  );

  return (config: {
      [ObservableLike_isEnumerable]: boolean;
      [ObservableLike_isRunnable]: boolean;
    }) =>
    (
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

      return createLiftedObservable(
        sourceSource,
        allFunctions,
        isLiftedEnumerable,
        isLiftedRunnable,
      );
    };
})() as ObservableLift["lift"];

export default Observable_lift;

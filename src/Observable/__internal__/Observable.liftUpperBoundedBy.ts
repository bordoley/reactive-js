import type {
  DeferredObservableUpperBoundObservableOperator,
  MulticastObservableUpperBoundObservableOperator,
  RunnableUpperBoundObservableOperator,
} from "../../Observable.js";
import {
  LiftedLike_operators,
  LiftedLike_source,
} from "../../__internal__/types.js";
import { Function1 } from "../../functions.js";
import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isRunnable,
  ObserverLike,
} from "../../types.js";
import Observable_createLifted from "./Observable.createLifted.js";

interface ObservableLiftUpperBoundedBy {
  liftUpperBoundedBy(options: {
    readonly [ObservableLike_isDeferred]: true;
    readonly [ObservableLike_isRunnable]: true;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => RunnableUpperBoundObservableOperator<TA, TB>;

  liftUpperBoundedBy(options: {
    readonly [ObservableLike_isDeferred]: true;
    readonly [ObservableLike_isRunnable]: false;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => DeferredObservableUpperBoundObservableOperator<TA, TB>;

  liftUpperBoundedBy(options: {
    readonly [ObservableLike_isDeferred]: false;
    readonly [ObservableLike_isRunnable]: false;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => MulticastObservableUpperBoundObservableOperator<TA, TB>;

  liftUpperBoundedBy(options: {
    readonly [ObservableLike_isDeferred]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => Function1<ObservableLike<TA>, ObservableLike<TB>>;
}

const Observable_liftUpperBoundedBy: ObservableLiftUpperBoundedBy["liftUpperBoundedBy"] =
  ((config: {
      readonly [ObservableLike_isDeferred]: boolean;
      readonly [ObservableLike_isRunnable]: boolean;
    }) =>
    <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) =>
    (source: ObservableLike<TA>) => {
      const sourceSource = (source as any)[LiftedLike_source] ?? source;
      const allFunctions = [
        operator,
        ...((source as any)[LiftedLike_operators] ?? []),
      ];

      const isRunnable =
        config[ObservableLike_isRunnable] &&
        sourceSource[ObservableLike_isRunnable];
      const isDeferredObservable =
        isRunnable ||
        (config[ObservableLike_isDeferred] &&
          sourceSource[ObservableLike_isDeferred]);

      const liftedConfig = {
        [ObservableLike_isRunnable]: isRunnable,
        [ObservableLike_isDeferred]: isDeferredObservable,
      };

      return Observable_createLifted<TA, TB>(
        sourceSource,
        allFunctions,
        liftedConfig,
      );
    }) as ObservableLiftUpperBoundedBy["liftUpperBoundedBy"];

export default Observable_liftUpperBoundedBy;

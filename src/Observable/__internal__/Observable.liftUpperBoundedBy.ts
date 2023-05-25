import type {
  DeferredObservableBoundedObservableOperatorWithSideEffects,
  RunnableBoundedObservableOperatorWithSideEffects,
  RunnableBoundedPureObservableOperator,
} from "../../Observable.js";
import { createInstanceFactory } from "../../__internal__/mixins.js";
import {
  LiftedLike_operators,
  LiftedLike_source,
} from "../../__internal__/types.js";
import { Function1, bindMethod, pipeUnsafe } from "../../functions.js";
import {
  ObservableBaseLike,
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../types.js";
import Observable_create from "./Observable.create.js";
import Observable_liftMixin from "./Observable.liftMixin.js";

const Observable_createLifted: <TA, TB>(
  obs: ObservableLike<TA>,
  ops: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
  config: {
    readonly [ObservableLike_isDeferred]: boolean;
    readonly [ObservableLike_isPure]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
  },
) => ObservableBaseLike<TB> = /*@__PURE__*/ (() =>
  createInstanceFactory(Observable_liftMixin<unknown, unknown>()))();

interface ObservableLiftUpperBoundedBy {
  liftUpperBoundedBy(options: {
    readonly [ObservableLike_isDeferred]: true;
    readonly [ObservableLike_isPure]: true;
    readonly [ObservableLike_isRunnable]: true;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => RunnableBoundedPureObservableOperator<TA, TB>;

  liftUpperBoundedBy(options: {
    readonly [ObservableLike_isDeferred]: true;
    readonly [ObservableLike_isPure]: false;
    readonly [ObservableLike_isRunnable]: true;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => RunnableBoundedObservableOperatorWithSideEffects<TA, TB>;

  liftUpperBoundedBy(options: {
    readonly [ObservableLike_isDeferred]: true;
    readonly [ObservableLike_isPure]: false;
    readonly [ObservableLike_isRunnable]: false;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => DeferredObservableBoundedObservableOperatorWithSideEffects<TA, TB>;

  liftUpperBoundedBy(options: {
    readonly [ObservableLike_isDeferred]: boolean;
    readonly [ObservableLike_isPure]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => Function1<ObservableBaseLike<TA>, ObservableBaseLike<TB>>;
}

const Observable_liftUpperBoundedBy: ObservableLiftUpperBoundedBy["liftUpperBoundedBy"] =
  ((config: {
      readonly [ObservableLike_isDeferred]: boolean;
      readonly [ObservableLike_isPure]: boolean;
      readonly [ObservableLike_isRunnable]: boolean;
    }) =>
    <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) =>
    (source: ObservableLike<TA>) => {
      const sourceSource = (source as any)[LiftedLike_source] ?? source;
      const allFunctions = [
        operator,
        ...((source as any)[LiftedLike_operators] ?? []),
      ];

      const isDeferredObservable =
        config[ObservableLike_isDeferred] &&
        sourceSource[ObservableLike_isDeferred];
      const isPure =
        config[ObservableLike_isPure] && sourceSource[ObservableLike_isPure];
      const isRunnable =
        config[ObservableLike_isRunnable] &&
        sourceSource[ObservableLike_isRunnable];

      const liftedConfig = {
        [ObservableLike_isDeferred]: isDeferredObservable,
        [ObservableLike_isPure]: isPure,
        [ObservableLike_isRunnable]: isRunnable,
      };

      return !isDeferredObservable && !isPure && !isRunnable
        ? Observable_create(observer => {
            pipeUnsafe(
              observer,
              ...allFunctions,
              bindMethod(sourceSource, ObservableLike_observe),
            );
          })
        : Observable_createLifted<TA, TB>(
            sourceSource,
            allFunctions,
            liftedConfig,
          );
    }) as ObservableLiftUpperBoundedBy["liftUpperBoundedBy"];

export default Observable_liftUpperBoundedBy;

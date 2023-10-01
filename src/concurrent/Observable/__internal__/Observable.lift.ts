import { createInstanceFactory } from "../../../__internal__/mixins.js";
import {
  DeferredObservableLike,
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  RunnableLike,
  RunnableWithSideEffectsLike,
} from "../../../concurrent.js";
import { Function1, bindMethod, pipeUnsafe } from "../../../functions.js";
import type {
  DeferredObservableOperator,
  ObservableOperatorWithSideEffects,
  PureObservableOperator,
} from "../../Observable.js";
import LiftedObservableMixin, {
  LiftedObservableLike_operators,
  LiftedObservableLike_source,
} from "../../__mixins__/LiftedObservableMixin.js";

import Observable_create from "./Observable.create.js";

const Observable_createLifted: <TA, TB>(
  obs: ObservableLike<TA>,
  ops: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
  config: Pick<
    ObservableLike,
    | typeof ObservableLike_isDeferred
    | typeof ObservableLike_isPure
    | typeof ObservableLike_isRunnable
  >,
) => ObservableLike<TB> = /*@__PURE__*/ (() =>
  createInstanceFactory(LiftedObservableMixin<unknown, unknown>()))();

interface ObservableLift {
  lift(
    options: Pick<
      RunnableLike,
      | typeof ObservableLike_isDeferred
      | typeof ObservableLike_isPure
      | typeof ObservableLike_isRunnable
    >,
  ): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => PureObservableOperator<TA, TB>;

  lift(
    options: Pick<
      RunnableWithSideEffectsLike,
      | typeof ObservableLike_isDeferred
      | typeof ObservableLike_isPure
      | typeof ObservableLike_isRunnable
    >,
  ): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => ObservableOperatorWithSideEffects<TA, TB>;

  lift(
    options: Pick<
      DeferredObservableLike,
      | typeof ObservableLike_isDeferred
      | typeof ObservableLike_isPure
      | typeof ObservableLike_isRunnable
    >,
  ): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => DeferredObservableOperator<TA, TB>;

  lift(
    options: Pick<
      ObservableLike,
      | typeof ObservableLike_isDeferred
      | typeof ObservableLike_isPure
      | typeof ObservableLike_isRunnable
    >,
  ): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => Function1<ObservableLike<TA>, ObservableLike<TB>>;
}

const Observable_lift: ObservableLift["lift"] = ((
    config: Pick<
      ObservableLike,
      | typeof ObservableLike_isDeferred
      | typeof ObservableLike_isPure
      | typeof ObservableLike_isRunnable
    >,
  ) =>
  <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) =>
  (source: ObservableLike<TA>) => {
    const sourceSource = (source as any)[LiftedObservableLike_source] ?? source;
    const allFunctions = [
      operator,
      ...((source as any)[LiftedObservableLike_operators] ?? []),
    ];

    const isDeferred =
      config[ObservableLike_isDeferred] &&
      sourceSource[ObservableLike_isDeferred];
    const isPure =
      config[ObservableLike_isPure] && sourceSource[ObservableLike_isPure];
    const isRunnable =
      config[ObservableLike_isRunnable] &&
      sourceSource[ObservableLike_isRunnable];

    const liftedConfig = {
      [ObservableLike_isDeferred]: isDeferred,
      [ObservableLike_isPure]: isPure,
      [ObservableLike_isRunnable]: isRunnable,
    };

    return !isDeferred && !isPure && !isRunnable
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
  }) as ObservableLift["lift"];

export default Observable_lift;

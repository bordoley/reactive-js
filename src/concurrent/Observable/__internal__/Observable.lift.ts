import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import {
  DeferredObservableLike,
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  PauseableLike,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  PauseableObservableLike,
  RunnableLike,
  RunnableWithSideEffectsLike,
} from "../../../concurrent.js";
import {
  Function1,
  bindMethod,
  isSome,
  pipeUnsafe,
} from "../../../functions.js";
import type {
  DeferredObservableOperator,
  ObservableOperatorWithSideEffects,
  PureObservableOperator,
} from "../../Observable.js";
import LiftedObservableMixin, {
  LiftedObservableLike,
  LiftedObservableLike_operators,
  LiftedObservableLike_source,
} from "../../__mixins__/LiftedObservableMixin.js";

import Observable_create from "./Observable.create.js";

const createLiftedObservable: <TA, TB>(
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

const createLiftedPauseableObservable: <TIn, TOut>(
  source: PauseableObservableLike<TIn>,
  ops: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
) => PauseableObservableLike<TOut> = /*@__PURE__*/ (<TIn, TOut>() => {
  return createInstanceFactory(
    mix(
      include(LiftedObservableMixin()),
      function LiftedPauseableObservable(
        instance: PauseableLike,
        source: PauseableObservableLike<TIn>,
        ops: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
      ): PauseableObservableLike<TOut> {
        init(
          LiftedObservableMixin<TIn, TOut, PauseableObservableLike<TIn>>(),
          instance,
          source,
          ops,
          {
            [ObservableLike_isDeferred]: false,
            [ObservableLike_isPure]: true,
            [ObservableLike_isRunnable]: false,
          },
        );

        return instance as PauseableObservableLike<TOut>;
      },
      props({}),
      {
        [ObservableLike_isPure]: true as const,

        get [PauseableLike_isPaused]() {
          unsafeCast<
            LiftedObservableLike<TIn, TOut, PauseableObservableLike<TIn>>
          >(this);
          return this[LiftedObservableLike_source][PauseableLike_isPaused];
        },
        [PauseableLike_pause](
          this: LiftedObservableLike<TIn, TOut, PauseableObservableLike<TIn>>,
        ): void {
          this[LiftedObservableLike_source][PauseableLike_pause]();
        },
        [PauseableLike_resume](
          this: LiftedObservableLike<TIn, TOut, PauseableObservableLike<TIn>>,
        ): void {
          this[LiftedObservableLike_source][PauseableLike_resume]();
        },
      },
    ),
  );
})();

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
      config[ObservableLike_isDeferred] && source[ObservableLike_isDeferred];
    const isPure =
      config[ObservableLike_isPure] && source[ObservableLike_isPure];
    const isRunnable =
      config[ObservableLike_isRunnable] && source[ObservableLike_isRunnable];

    const isPauseable = isSome((source as any)[PauseableLike_pause]) && isPure;

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
        ? isPauseable
        : createLiftedPauseableObservable<TA, TB>(sourceSource, allFunctions)
      : createLiftedObservable<TA, TB>(
          sourceSource,
          allFunctions,
          liftedConfig,
        );
  }) as ObservableLift["lift"];

export default Observable_lift;

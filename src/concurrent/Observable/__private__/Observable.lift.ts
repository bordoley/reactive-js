import { __DEV__ } from "../../../__internal__/constants.js";
import {
  createInstanceFactory,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DeferredObservableWithSideEffectsLike,
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  PureRunnableLike,
  RunnableWithSideEffectsLike,
} from "../../../concurrent.js";
import {
  Function1,
  bindMethod,
  none,
  pipeUnsafe,
  raiseIf,
} from "../../../functions.js";
import type {
  ObservableOperatorWithSideEffects,
  PureObservableOperator,
} from "../../Observable.js";
import Observable_create from "./Observable.create.js";

const LiftedObservableLike_source = Symbol("LiftedObservableMixin_source");
const LiftedObservableLike_operators = Symbol(
  "LiftedObservableMixin_operators",
);

interface LiftedObservableLike<TIn, TOut> extends ObservableLike<TOut> {
  [LiftedObservableLike_source]: ObservableLike<TIn>;
  [LiftedObservableLike_operators]: readonly Function1<
    ObserverLike<any>,
    ObserverLike<any>
  >[];
}

const createLiftedObservable: <TA, TB>(
  obs: ObservableLike<TA>,
  ops: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
  config: Pick<
    ObservableLike,
    | typeof ObservableLike_isDeferred
    | typeof ObservableLike_isPure
    | typeof ObservableLike_isRunnable
  >,
) => ObservableLike<TB> = /*@__PURE__*/ (<TA, TB>() => {
  type TProperties = {
    [LiftedObservableLike_source]: ObservableLike<TA>;
    [LiftedObservableLike_operators]: readonly Function1<
      ObserverLike<any>,
      ObserverLike<any>
    >[];
    [ObservableLike_isDeferred]: boolean;
    [ObservableLike_isPure]: boolean;
    [ObservableLike_isRunnable]: boolean;
  };

  return createInstanceFactory(
    mix(
      function LiftedObservable(
        instance: TProperties & ObservableLike<TB>,
        source: ObservableLike<TA>,
        ops: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
        config: Pick<
          ObservableLike,
          | typeof ObservableLike_isDeferred
          | typeof ObservableLike_isPure
          | typeof ObservableLike_isRunnable
        >,
      ): LiftedObservableLike<TA, TB> {
        instance[LiftedObservableLike_source] = source;
        instance[LiftedObservableLike_operators] = ops;

        const configRunnable = config[ObservableLike_isRunnable];
        const configDeferred = config[ObservableLike_isDeferred];
        const configPure = config[ObservableLike_isPure];

        if (__DEV__) {
          raiseIf(
            configRunnable && !configDeferred,
            "Attempting to create a non-deferred, runnable observable, which is an illegal state",
          );

          raiseIf(
            !configDeferred && !configPure,
            "Attempting to create a non-deferred, not-pure observable which is an illegal state",
          );
        }

        instance[ObservableLike_isRunnable] = configRunnable;
        instance[ObservableLike_isDeferred] = configDeferred;
        instance[ObservableLike_isPure] = configPure;

        return instance;
      },
      props<TProperties>({
        [LiftedObservableLike_source]: none,
        [LiftedObservableLike_operators]: none,
        [ObservableLike_isDeferred]: false,
        [ObservableLike_isPure]: false,
        [ObservableLike_isRunnable]: false,
      }),
      {
        [ObservableLike_observe](
          this: TProperties,
          observer: ObserverLike<TB>,
        ) {
          pipeUnsafe(
            observer,
            ...this[LiftedObservableLike_operators],
            bindMethod(
              this[LiftedObservableLike_source],
              ObservableLike_observe,
            ),
          );
        },
      },
    ),
  );
})();

interface ObservableLift {
  lift(
    options: Pick<
      PureRunnableLike,
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
      DeferredObservableWithSideEffectsLike,
      | typeof ObservableLike_isDeferred
      | typeof ObservableLike_isPure
      | typeof ObservableLike_isRunnable
    >,
  ): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<TB>>;

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

    const liftedConfig = {
      [ObservableLike_isDeferred]: isDeferred,
      [ObservableLike_isPure]: isPure,
      [ObservableLike_isRunnable]: isRunnable,
    };

    return !isDeferred && !isPure
      ? Observable_create(observer => {
          pipeUnsafe(
            observer,
            ...allFunctions,
            bindMethod(sourceSource, ObservableLike_observe),
          );
        })
      : createLiftedObservable<TA, TB>(
          sourceSource,
          allFunctions,
          liftedConfig,
        );
  }) as ObservableLift["lift"];

export default Observable_lift;

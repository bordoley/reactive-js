import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  DeferredObservableWithSideEffectsLike,
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isMulticasted,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../../concurrent.js";
import { Function1, bindMethod, none, pipeUnsafe } from "../../../functions.js";
import type {
  ObservableOperatorWithSideEffects,
  PureStatefulObservableOperator,
  PureStatelessObservableOperator,
} from "../../Observable.js";
import ObservableMixin from "../../__mixins__/ObservableMixin.js";

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
    | typeof ObservableLike_isMulticasted
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
  };

  return mixInstanceFactory(
    include(ObservableMixin),
    function LiftedObservable(
      instance: TProperties &
        Pick<ObservableLike<TB>, typeof ObservableLike_observe>,
      source: ObservableLike<TA>,
      ops: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
      config: Pick<
        ObservableLike,
        | typeof ObservableLike_isDeferred
        | typeof ObservableLike_isMulticasted
        | typeof ObservableLike_isPure
        | typeof ObservableLike_isRunnable
      >,
    ): LiftedObservableLike<TA, TB> {
      init(ObservableMixin, instance, config);

      instance[LiftedObservableLike_source] = source;
      instance[LiftedObservableLike_operators] = ops;

      return instance;
    },
    props<TProperties>({
      [LiftedObservableLike_source]: none,
      [LiftedObservableLike_operators]: none,
    }),
    {
      [ObservableLike_observe](this: TProperties, observer: ObserverLike<TB>) {
        pipeUnsafe(
          observer,
          ...this[LiftedObservableLike_operators],
          bindMethod(this[LiftedObservableLike_source], ObservableLike_observe),
        );
      },
    },
  );
})();

interface ObservableLift {
  lift(options: {
    [ObservableLike_isDeferred]: true;
    [ObservableLike_isMulticasted]: true;
    [ObservableLike_isPure]: true;
    [ObservableLike_isRunnable]: true;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => PureStatelessObservableOperator<TA, TB>;

  lift(options: {
    [ObservableLike_isDeferred]: true;
    [ObservableLike_isMulticasted]: false;
    [ObservableLike_isPure]: true;
    [ObservableLike_isRunnable]: true;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => PureStatefulObservableOperator<TA, TB>;

  lift(options: {
    [ObservableLike_isDeferred]: true;
    [ObservableLike_isMulticasted]: false;
    [ObservableLike_isPure]: false;
    [ObservableLike_isRunnable]: true;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => ObservableOperatorWithSideEffects<TA, TB>;

  lift(options: {
    [ObservableLike_isDeferred]: true;
    [ObservableLike_isMulticasted]: false;
    [ObservableLike_isPure]: false;
    [ObservableLike_isRunnable]: false;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<TB>>;

  lift(
    options: Pick<
      ObservableLike,
      | typeof ObservableLike_isDeferred
      | typeof ObservableLike_isMulticasted
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
      | typeof ObservableLike_isMulticasted
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
    const isMulticasted =
      config[ObservableLike_isMulticasted] &&
      source[ObservableLike_isMulticasted];
    const isPure =
      config[ObservableLike_isPure] && source[ObservableLike_isPure];
    const isRunnable =
      config[ObservableLike_isRunnable] && source[ObservableLike_isRunnable];

    const liftedConfig = {
      [ObservableLike_isDeferred]: isDeferred || !isMulticasted,
      [ObservableLike_isMulticasted]: isMulticasted,
      [ObservableLike_isPure]: isPure,
      [ObservableLike_isRunnable]: isRunnable,
    };

    return createLiftedObservable<TA, TB>(
      sourceSource,
      allFunctions,
      liftedConfig,
    );
  }) as ObservableLift["lift"];

export default Observable_lift;

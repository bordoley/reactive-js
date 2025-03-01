import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isInteractive,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import {
  DeferredObservableWithSideEffectsLike,
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
} from "../../../concurrent.js";
import { Function1, bindMethod, none, pipeUnsafe } from "../../../functions.js";
import type {
  DeferredReactiveObservableOperator,
  ObservableOperator,
  ObservableOperatorWithSideEffects,
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
    | typeof ComputationLike_isDeferred
    | typeof ComputationLike_isPure
    | typeof ComputationLike_isSynchronous
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
        Pick<
          ObservableLike<TB>,
          typeof ObservableLike_observe | typeof ComputationLike_isInteractive
        >,
      source: ObservableLike<TA>,
      ops: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
      config: Pick<
        ObservableLike,
        | typeof ComputationLike_isDeferred
        | typeof ComputationLike_isPure
        | typeof ComputationLike_isSynchronous
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
      [ComputationLike_isInteractive]: false as const,

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

export const ObservableLift_isStateless = Symbol("ObservableLift_isStateless");

interface ObservableLift {
  lift(options: {
    [ObservableLift_isStateless]: true;
    [ComputationLike_isDeferred]: boolean;
    [ComputationLike_isPure]: true;
    [ComputationLike_isSynchronous]: true;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => ObservableOperator<TA, TB>;

  lift(options: {
    [ComputationLike_isDeferred]: true;
    [ComputationLike_isPure]: true;
    [ComputationLike_isSynchronous]: true;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => DeferredReactiveObservableOperator<TA, TB>;

  lift(options: {
    [ComputationLike_isDeferred]: true;
    [ComputationLike_isPure]: false;
    [ComputationLike_isSynchronous]: true;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => ObservableOperatorWithSideEffects<TA, TB>;

  lift(options: {
    [ComputationLike_isDeferred]: true;
    [ComputationLike_isPure]: false;
    [ComputationLike_isSynchronous]: false;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<TB>>;

  lift(options: {
    [ObservableLift_isStateless]: boolean;
    [ComputationLike_isDeferred]: boolean;
    [ComputationLike_isPure]: boolean;
    [ComputationLike_isSynchronous]: boolean;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => Function1<ObservableLike<TA>, ObservableLike<TB>>;
}

const Observable_lift: ObservableLift["lift"] = ((
    config: Pick<
      ObservableLike,
      | typeof ComputationLike_isDeferred
      | typeof ComputationLike_isPure
      | typeof ComputationLike_isSynchronous
    > & {
      [ObservableLift_isStateless]?: boolean;
    },
  ) =>
  <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) =>
  (source: ObservableLike<TA>) => {
    const sourceSource = (source as any)[LiftedObservableLike_source] ?? source;
    const allFunctions = [
      operator,
      ...((source as any)[LiftedObservableLike_operators] ?? []),
    ];

    const isStateless = config[ObservableLift_isStateless] ?? false;

    const sourceIsMulticasted = Computation.isMulticasted(source);

    const isDeferred =
      (sourceIsMulticasted && !isStateless) ||
      (config[ComputationLike_isDeferred] &&
        source[ComputationLike_isDeferred]);
    const isSynchronousObservable =
      config[ComputationLike_isSynchronous] &&
      source[ComputationLike_isSynchronous];
    const isPure =
      !isDeferred ||
      (config[ComputationLike_isPure] && source[ComputationLike_isPure]);

    const liftedConfig = {
      [ComputationLike_isDeferred]: isDeferred,
      [ComputationLike_isPure]: isPure,
      [ComputationLike_isSynchronous]: isSynchronousObservable,
    };

    return createLiftedObservable<TA, TB>(
      sourceSource,
      allFunctions,
      liftedConfig,
    );
  }) as ObservableLift["lift"];

export default Observable_lift;

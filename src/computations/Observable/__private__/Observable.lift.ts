import {
  Mixin2,
  include,
  init,
  mix,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ComputationOperatorWithSideEffects,
  DeferredObservableWithSideEffectsLike,
  MulticastObservableLike,
  ObservableLike,
  ObservableLike_observe,
  StatefulSynchronousComputationOperator,
  StatelessComputationOperator,
} from "../../../computations.js";
import {
  Function1,
  Optional,
  bindMethod,
  none,
  pipeUnsafe,
} from "../../../functions.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";

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

  const LiftedObservableMixin: Mixin2<
    LiftedObservableLike<TA, TB>,
    ObservableLike<TA>,
    readonly Function1<ObserverLike<any>, ObserverLike<any>>[]
  > = mix(
    function LiftedObservable(
      this: TProperties &
        Pick<ObservableLike<TB>, typeof ObservableLike_observe>,
      source: ObservableLike<TA>,
      ops: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
    ): LiftedObservableLike<TA, TB> {
      this[LiftedObservableLike_source] = source;
      this[LiftedObservableLike_operators] = ops;

      return this;
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

  type TPropertiesDeferred = {
    [ComputationLike_isPure]: Optional<boolean>;
    [ComputationLike_isSynchronous]: Optional<boolean>;
  };

  const createDeferredLiftedObservable = mixInstanceFactory(
    include(LiftedObservableMixin),
    function DeferredLiftedObservable(
      this: TPropertiesDeferred &
        Omit<ObservableLike<TB>, typeof ObservableLike_observe>,
      source: ObservableLike<TA>,
      ops: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
      config: {
        [ComputationLike_isPure]?: boolean;
        [ComputationLike_isSynchronous]?: boolean;
      },
    ): LiftedObservableLike<TA, TB> {
      init(LiftedObservableMixin, this, source, ops);

      this[ComputationLike_isPure] = config[ComputationLike_isPure];
      this[ComputationLike_isSynchronous] =
        config[ComputationLike_isSynchronous];

      return this;
    },
    props<TPropertiesDeferred>({
      [ComputationLike_isPure]: true,
      [ComputationLike_isSynchronous]: true,
    }),
  );

  const createMulticastLiftedObservable = mixInstanceFactory(
    include(LiftedObservableMixin, DelegatingDisposableContainerMixin),
    function DeferredLiftedObservable(
      this: Omit<ObservableLike<TB>, typeof ObservableLike_observe>,
      source: MulticastObservableLike<TA>,
      ops: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
    ): LiftedObservableLike<TA, TB> {
      init(LiftedObservableMixin, this, source, ops);
      init(DelegatingDisposableContainerMixin, this, source);

      return this;
    },
    props(),
    {
      [ComputationLike_isDeferred]: false as const,
      [ComputationLike_isSynchronous]: false as const,
    },
  );

  return (
    obs: ObservableLike<TA>,
    ops: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
    config: Pick<
      ObservableLike,
      | typeof ComputationLike_isDeferred
      | typeof ComputationLike_isPure
      | typeof ComputationLike_isSynchronous
    >,
  ) =>
    Computation.isDeferred(config)
      ? createDeferredLiftedObservable(obs, ops, config)
      : createMulticastLiftedObservable(
          obs as MulticastObservableLike<TA>,
          ops,
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
  ) => StatelessComputationOperator<Observable.Computation, TA, TB>;

  lift(options: {
    [ComputationLike_isDeferred]: true;
    [ComputationLike_isPure]: true;
    [ComputationLike_isSynchronous]: true;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => StatefulSynchronousComputationOperator<Observable.Computation, TA, TB>;

  lift(options: {
    [ComputationLike_isDeferred]: true;
    [ComputationLike_isPure]: false;
    [ComputationLike_isSynchronous]: true;
  }): <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => ComputationOperatorWithSideEffects<Observable.Computation, TA, TB>;

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

    const isDeferred = !isStateless || Computation.isDeferred(source);

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

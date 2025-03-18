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
  DeferredProducerWithSideEffectsLike,
  ProducerLike,
  ProducerLike_consume,
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
import { ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";

const LiftedProducerLike_source = Symbol("LiftedProducerMixin_source");
const LiftedProducerLike_operators = Symbol("LiftedProducerMixin_operators");

interface LiftedProducerLike<TIn, TOut> extends ProducerLike<TOut> {
  [LiftedProducerLike_source]: ProducerLike<TIn>;
  [LiftedProducerLike_operators]: readonly Function1<
    ConsumerLike<any>,
    ConsumerLike<any>
  >[];
}

const createLiftedProducer: <TA, TB>(
  obs: ProducerLike<TA>,
  ops: readonly Function1<ConsumerLike<any>, ConsumerLike<any>>[],
  config: Pick<
    ProducerLike,
    | typeof ComputationLike_isDeferred
    | typeof ComputationLike_isPure
    | typeof ComputationLike_isSynchronous
  >,
) => ProducerLike<TB> = /*@__PURE__*/ (<TA, TB>() => {
  type TProperties = {
    [LiftedProducerLike_source]: ProducerLike<TA>;
    [LiftedProducerLike_operators]: readonly Function1<
      ConsumerLike<any>,
      ConsumerLike<any>
    >[];
  };

  const LiftedProducerMixin: Mixin2<
    LiftedProducerLike<TA, TB>,
    ProducerLike<TA>,
    readonly Function1<ConsumerLike<any>, ConsumerLike<any>>[]
  > = mix(
    function LiftedProducer(
      this: TProperties & Pick<ProducerLike<TB>, typeof ProducerLike_consume>,
      source: ProducerLike<TA>,
      ops: readonly Function1<ConsumerLike<any>, ConsumerLike<any>>[],
    ): LiftedProducerLike<TA, TB> {
      this[LiftedProducerLike_source] = source;
      this[LiftedProducerLike_operators] = ops;

      return this;
    },
    props<TProperties>({
      [LiftedProducerLike_source]: none,
      [LiftedProducerLike_operators]: none,
    }),
    {
      [ProducerLike_consume](this: TProperties, consumer: ConsumerLike<TB>) {
        pipeUnsafe(
          consumer,
          ...this[LiftedProducerLike_operators],
          bindMethod(this[LiftedProducerLike_source], ProducerLike_consume),
        );
      },
    },
  );

  type TPropertiesDeferred = {
    [ComputationLike_isDeferred]: Optional<boolean>;
    [ComputationLike_isPure]: Optional<boolean>;
    [ComputationLike_isSynchronous]: Optional<boolean>;
  };

  const createDeferredLiftedProducer = mixInstanceFactory(
    include(LiftedProducerMixin),
    function DeferredLiftedProducer(
      this: TPropertiesDeferred &
        Omit<ProducerLike<TB>, typeof ProducerLike_consume>,
      source: ProducerLike<TA>,
      ops: readonly Function1<ConsumerLike<any>, ConsumerLike<any>>[],
      config: {
        [ComputationLike_isDeferred]?: boolean;
        [ComputationLike_isPure]?: boolean;
        [ComputationLike_isSynchronous]?: boolean;
      },
    ): LiftedProducerLike<TA, TB> {
      init(LiftedProducerMixin, this, source, ops);

      this[ComputationLike_isDeferred] = config[ComputationLike_isDeferred];
      this[ComputationLike_isPure] = config[ComputationLike_isPure];
      this[ComputationLike_isSynchronous] =
        config[ComputationLike_isSynchronous];

      return this;
    },
    props<TPropertiesDeferred>({
      [ComputationLike_isDeferred]: true,
      [ComputationLike_isPure]: true,
      [ComputationLike_isSynchronous]: true,
    }),
    {
      [ProducerLike_consume](this: TProperties, consumer: ConsumerLike<TB>) {
        pipeUnsafe(
          consumer,
          ...this[LiftedProducerLike_operators],
          bindMethod(this[LiftedProducerLike_source], ProducerLike_consume),
        );
      },
    },
  );

  return (
    obs: ProducerLike<TA>,
    ops: readonly Function1<ConsumerLike<any>, ConsumerLike<any>>[],
    config: Pick<
      ProducerLike,
      | typeof ComputationLike_isDeferred
      | typeof ComputationLike_isPure
      | typeof ComputationLike_isSynchronous
    >,
  ) => createDeferredLiftedProducer(obs, ops, config);
})();

interface ProducerLift {
  lift(options: {
    [ComputationLike_isPure]: true;
    [ComputationLike_isSynchronous]: true;
  }): <TA, TB>(
    operator: Function1<ConsumerLike<TB>, ConsumerLike<TA>>,
  ) => StatelessComputationOperator<Producer.Computation, TA, TB>;

  lift(options: {
    [ComputationLike_isPure]: true;
    [ComputationLike_isSynchronous]: true;
  }): <TA, TB>(
    operator: Function1<ConsumerLike<TB>, ConsumerLike<TA>>,
  ) => StatefulSynchronousComputationOperator<Producer.Computation, TA, TB>;

  lift(options: {
    [ComputationLike_isPure]: false;
    [ComputationLike_isSynchronous]: true;
  }): <TA, TB>(
    operator: Function1<ConsumerLike<TB>, ConsumerLike<TA>>,
  ) => ComputationOperatorWithSideEffects<Producer.Computation, TA, TB>;

  lift(options: {
    [ComputationLike_isPure]: false;
    [ComputationLike_isSynchronous]: false;
  }): <TA, TB>(
    operator: Function1<ConsumerLike<TB>, ConsumerLike<TA>>,
  ) => Function1<ProducerLike<TA>, DeferredProducerWithSideEffectsLike<TB>>;

  lift(options: {
    [ComputationLike_isPure]: boolean;
    [ComputationLike_isSynchronous]: boolean;
  }): <TA, TB>(
    operator: Function1<ConsumerLike<TB>, ConsumerLike<TA>>,
  ) => Function1<ProducerLike<TA>, ProducerLike<TB>>;
}

const Producer_lift: ProducerLift["lift"] = ((
    config: Pick<
      ProducerLike,
      typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous
    >,
  ) =>
  <TA, TB>(operator: Function1<ConsumerLike<TB>, ConsumerLike<TA>>) =>
  (source: ProducerLike<TA>) => {
    const sourceSource = (source as any)[LiftedProducerLike_source] ?? source;
    const allFunctions = [
      operator,
      ...((source as any)[LiftedProducerLike_operators] ?? []),
    ];

    const isSynchronousProducer =
      config[ComputationLike_isSynchronous] &&
      Computation.isSynchronous(source);
    const isPure = Computation.isPure(source) && config[ComputationLike_isPure];

    const liftedConfig = {
      [ComputationLike_isDeferred]: source[ComputationLike_isDeferred],
      [ComputationLike_isPure]: isPure,
      [ComputationLike_isSynchronous]: isSynchronousProducer,
    };

    return createLiftedProducer<TA, TB>(
      sourceSource,
      allFunctions,
      liftedConfig,
    );
  }) as ProducerLift["lift"];

export default Producer_lift;

export const Producer_liftPure = /*@__PURE__*/ Producer_lift({
  [ComputationLike_isPure]: true,
  [ComputationLike_isSynchronous]: true,
});

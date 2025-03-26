import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ProducerLike,
  SourceLike_subscribe,
} from "../../../computations.js";
import { Function1, none, pipeUnsafe } from "../../../functions.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import { ConsumerLike, DisposableContainerLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import {
  LiftedSinkLike,
  LiftedSourceLike,
  LiftedSourceLike_sink,
  LiftedSourceLike_source,
} from "../../__internal__/LiftedSource.js";
import LiftedSinkToConsumerMixin from "../../__mixins__/LiftedSinkToConsumerMixin.js";

interface LiftedProducerLike<TIn, TOut>
  extends LiftedSourceLike<
      TIn,
      TOut,
      ConsumerLike<TIn>,
      ConsumerLike<TOut>,
      ProducerLike<TIn>
    >,
    ProducerLike<TOut> {
  readonly [ComputationLike_isDeferred]: true;
  readonly [ComputationLike_isPure]?: boolean;
  readonly [ComputationLike_isSynchronous]: false;

  readonly [LiftedSourceLike_source]: ProducerLike<TIn>;
  readonly [LiftedSourceLike_sink]: ReadonlyArray<
    Function1<
      LiftedSinkLike<any, ConsumerLike>,
      LiftedSinkLike<any, ConsumerLike>
    >
  >;

  [SourceLike_subscribe](listener: ConsumerLike<TOut>): void;
}

const sinkToConsumer: <T>(
  delegate: LiftedSinkLike<ConsumerLike, any>,
) => ConsumerLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedSinkToConsumerMixin()),
    function OperatorToConsumer(
      this: unknown,
      delegate: LiftedSinkLike<ConsumerLike, any>,
    ): ConsumerLike<T> {
      init(LiftedSinkToConsumerMixin(), this, delegate);

      return this;
    },
  ))();

const createLiftedProducer: <TIn, TOut>(
  src: ProducerLike<TIn>,
  op: Function1<
    LiftedSinkLike<ConsumerLike, TOut>,
    LiftedSinkLike<ConsumerLike, TIn>
  >,
  config?: {
    [ComputationLike_isPure]?: boolean;
  },
) => ProducerLike<TOut> = /*@__PURE__*/ (<TIn, TOut>() => {
  type TProperties = {
    [ComputationLike_isPure]: boolean;
    [LiftedSourceLike_source]: ProducerLike<TIn>;
    [LiftedSourceLike_sink]: ReadonlyArray<
      Function1<
        LiftedSinkLike<any, ConsumerLike>,
        LiftedSinkLike<any, ConsumerLike>
      >
    >;
  };

  type TPrototype = Omit<
    LiftedProducerLike<TIn, TOut>,
    | keyof DisposableContainerLike
    | typeof LiftedSourceLike_source
    | typeof LiftedSourceLike_sink
  >;

  return mixInstanceFactory(
    function LiftedProducer(
      this: TProperties & TPrototype,
      source: ProducerLike<TIn>,
      op: Function1<
        LiftedSinkLike<ConsumerLike, TOut>,
        LiftedSinkLike<ConsumerLike, TIn>
      >,
      config?: {
        [ComputationLike_isPure]?: boolean;
      },
    ): ProducerLike<TOut> {
      const liftedSource: ProducerLike<TIn> =
        (source as any)[LiftedSourceLike_source] ?? source;
      const ops = [op, ...((source as any)[LiftedSourceLike_sink] ?? [])];

      this[LiftedSourceLike_source] = liftedSource;
      this[LiftedSourceLike_sink] = ops;

      this[ComputationLike_isPure] =
        Computation.isPure(source) && Computation.isPure(config ?? {});

      return this;
    },
    props<TProperties>({
      [ComputationLike_isPure]: true,
      [LiftedSourceLike_source]: none,
      [LiftedSourceLike_sink]: none,
    }),
    proto<TPrototype>({
      [ComputationLike_isDeferred]: true as const,
      [ComputationLike_isSynchronous]: false as const,

      [SourceLike_subscribe](this: TProperties, consumer: ConsumerLike<TOut>) {
        const source = this[LiftedSourceLike_source];
        const destinationOp: ConsumerLike<TIn> = pipeUnsafe(
          consumer,
          Sink.toOperator(),
          ...this[LiftedSourceLike_sink],
          sinkToConsumer,
        );
        source[SourceLike_subscribe](destinationOp);
      },
    }),
  );
})();

const Producer_lift =
  <TIn, TOut>(config?: { [ComputationLike_isPure]?: boolean }) =>
  (
    operator: Function1<
      LiftedSinkLike<ConsumerLike, TOut>,
      LiftedSinkLike<ConsumerLike, TIn>
    >,
  ) =>
  (source: ProducerLike<TIn>): ProducerLike<TOut> => {
    return createLiftedProducer(source, operator, config);
  };

export default Producer_lift;

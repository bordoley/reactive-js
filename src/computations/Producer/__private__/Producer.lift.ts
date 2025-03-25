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
import {
  LiftedOperatorLike,
  LiftedSourceLike,
  LiftedSourceLike_operators,
  LiftedSourceLike_source,
} from "../../__internal__/LiftedSource.js";
import LiftedOperatorToConsumerMixin from "../../__mixins__/LiftedOperatorToConsumerMixin.js";

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
  readonly [LiftedSourceLike_operators]: ReadonlyArray<
    Function1<LiftedOperatorLike<any>, LiftedOperatorLike<any>>
  >;

  [SourceLike_subscribe](listener: ConsumerLike<TOut>): void;
}

const operatorToConsumer: <T>(
  delegate: ConsumerLike,
) => Function1<LiftedOperatorLike<any>, ConsumerLike<T>> = /*@__PURE__*/ (<
  T,
>() => {
  const createOperatorToConsumer = mixInstanceFactory(
    include(LiftedOperatorToConsumerMixin()),
    function OperatorToConsumer(
      this: unknown,
      delegate: ConsumerLike,
      operator: LiftedOperatorLike<any>,
    ): ConsumerLike<T> {
      init(LiftedOperatorToConsumerMixin(), this, operator, delegate);

      return this;
    },
  );

  return delegate => operator => createOperatorToConsumer(delegate, operator);
})();

const createLiftedProducer: <TIn, TOut>(
  src: ProducerLike<TIn>,
  op: Function1<LiftedOperatorLike<TOut>, LiftedOperatorLike<TIn>>,
) => ProducerLike<TOut> = /*@__PURE__*/ (<TIn, TOut>() => {
  type TProperties = {
    [LiftedSourceLike_source]: ProducerLike<TIn>;
    [LiftedSourceLike_operators]: ReadonlyArray<
      Function1<LiftedOperatorLike<any>, LiftedOperatorLike<any>>
    >;
  };

  type TPrototype = Omit<
    LiftedProducerLike<TIn, TOut>,
    | keyof DisposableContainerLike
    | typeof LiftedSourceLike_source
    | typeof LiftedSourceLike_operators
  >;

  return mixInstanceFactory(
    function LiftedProducer(
      this: TProperties & TPrototype,
      source: ProducerLike<TIn>,
      op: Function1<LiftedOperatorLike<TOut>, LiftedOperatorLike<TIn>>,
    ): ProducerLike<TOut> {
      const liftedSource: ProducerLike<TIn> =
        (source as any)[LiftedSourceLike_source] ?? source;
      const ops = [op, ...((source as any)[LiftedSourceLike_operators] ?? [])];

      this[LiftedSourceLike_source] = liftedSource;
      this[LiftedSourceLike_operators] = ops;

      return this;
    },
    props<TProperties>({
      [LiftedSourceLike_source]: none,
      [LiftedSourceLike_operators]: none,
    }),
    proto<TPrototype>({
      [ComputationLike_isPure]: true as const,
      [ComputationLike_isDeferred]: true as const,
      [ComputationLike_isSynchronous]: false as const,

      [SourceLike_subscribe](this: TProperties, consumer: ConsumerLike<TOut>) {
        const source = this[LiftedSourceLike_source];
        const destinationOp: ConsumerLike<TIn> = pipeUnsafe(
          consumer,
          Sink.toOperator(),
          ...this[LiftedSourceLike_operators],
          operatorToConsumer(consumer),
        );
        source[SourceLike_subscribe](destinationOp);
      },
    }),
  );
})();

const Producer_lift =
  <TIn, TOut>(
    operator: Function1<LiftedOperatorLike<TOut>, LiftedOperatorLike<TIn>>,
  ) =>
  (source: ProducerLike<TIn>): ProducerLike<TOut> => {
    return createLiftedProducer(source, operator);
  };

export default Producer_lift;

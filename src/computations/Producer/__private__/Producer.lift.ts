import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ProducerLike,
} from "../../../computations.js";
import { Function1, Optional } from "../../../functions.js";
import { BackpressureStrategy, ConsumerLike } from "../../../utils.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import { LiftedSinkLike } from "../../__internal__/LiftedSource.js";
import LiftedSinkToConsumerMixin from "../../__mixins__/LiftedSinkToConsumerMixin.js";

export const liftedSinkToConsumer: <T>(
  delegate: LiftedSinkLike<ConsumerLike, unknown>,
  backPressure?: Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
  }>,
) => ConsumerLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedSinkToConsumerMixin()),
    function LiftedSinkToConsumer(
      this: unknown,
      operator: LiftedSinkLike<ConsumerLike, unknown>,
      backPressure: Optional<{
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
      }>,
    ): ConsumerLike<T> {
      init(LiftedSinkToConsumerMixin(), this, operator, backPressure);

      return this;
    },
  ))();

export const liftedSinkToConsumerWithBackPressure =
  <T>(config: {
    capacity: number;
    backpressureStrategy: BackpressureStrategy;
  }) =>
  (sink: LiftedSinkLike<ConsumerLike, T>) =>
    liftedSinkToConsumer(sink, config);

const Producer_lift =
  <TIn, TOut>(config?: { [ComputationLike_isPure]?: boolean }) =>
  (
    operator: Function1<
      LiftedSinkLike<ConsumerLike, TOut>,
      LiftedSinkLike<ConsumerLike, TIn>
    >,
  ) =>
  (source: ProducerLike<TIn>): ProducerLike<TOut> =>
    DeferredEventSource.createLifted(source, operator, liftedSinkToConsumer, {
      [ComputationLike_isSynchronous]: false,
      [ComputationLike_isPure]: config?.[ComputationLike_isPure],
    });

export default Producer_lift;

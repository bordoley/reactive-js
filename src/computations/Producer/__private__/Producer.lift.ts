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
import { Function1 } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { ConsumerLike } from "../../../utils.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import { LiftedSinkLike } from "../../__internal__/LiftedSource.js";
import LiftedSinkToConsumerMixin from "../../__mixins__/LiftedSinkToConsumerMixin.js";

const liftedSinkToConsumer: <T>(
  delegate: LiftedSinkLike<ConsumerLike, any>,
) => ConsumerLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedSinkToConsumerMixin(), DelegatingDisposableMixin),
    function OperatorToConsumer(
      this: unknown,
      delegate: LiftedSinkLike<ConsumerLike, any>,
    ): ConsumerLike<T> {
      init(LiftedSinkToConsumerMixin(), this, delegate);
      init(DelegatingDisposableMixin, this, delegate);

      return this;
    },
  ))();

const Producer_lift =
  <TIn, TOut>(config?: { [ComputationLike_isPure]?: boolean }) =>
  (
    operator: Function1<
      LiftedSinkLike<ConsumerLike, TOut>,
      LiftedSinkLike<ConsumerLike, TIn>
    >,
  ) =>
  (source: ProducerLike<TIn>): ProducerLike<TOut> =>
    DeferredSource.createLifted(source, operator, liftedSinkToConsumer, {
      [ComputationLike_isSynchronous]: false,
      [ComputationLike_isPure]: config?.[ComputationLike_isPure],
    });

export default Producer_lift;

import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import {
  Equality,
  none,
  partial,
  pipe,
  strictEquality,
} from "../../../functions.js";
import DistinctUntilChangedMixin from "../../../utils/__mixins__/EventListeners/DistinctUntilChangedMixin.js";
import LiftedConsumerMixin, {
  LiftedConsumerLike,
} from "../../../utils/__mixins__/LiftedConsumerMixin.js";
import { LiftedEventListenerLike_notify } from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import { ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import { Producer_liftPure } from "./Producer.lift.js";

const Producer_distinctUntilChanged: Producer.Signature["distinctUntilChanged"] =
  /*@__PURE__*/ (<T>() => {
    const createDistinctUntilChangedConsumer: (
      delegate: ConsumerLike<T>,
      equality: Equality<T>,
    ) => ConsumerLike<T> = mixInstanceFactory(
      include(LiftedConsumerMixin(), DistinctUntilChangedMixin()),
      function DistinctUntilChangedConsumer(
        this: Pick<
          LiftedConsumerLike<T>,
          typeof LiftedEventListenerLike_notify
        >,
        delegate: ConsumerLike<T>,
        equality: Equality<T>,
      ): ConsumerLike<T> {
        init(LiftedConsumerMixin<T>(), this, delegate, none);
        init(DistinctUntilChangedMixin(), this, equality);

        return this;
      },
    );
    return (options?: { readonly equality?: Equality<T> }) =>
      pipe(
        createDistinctUntilChangedConsumer,
        partial(options?.equality ?? strictEquality),
        Producer_liftPure,
      );
  })() as Producer.Signature["distinctUntilChanged"];

export default Producer_distinctUntilChanged;

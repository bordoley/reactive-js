import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import { Factory, Reducer, none, partial, pipe } from "../../../functions.js";
import ScanMixin from "../../../utils/__mixins__/EventListeners/ScanMixin.js";
import LiftedConsumerMixin from "../../../utils/__mixins__/LiftedConsumerMixin.js";
import { ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import { Producer_liftPure } from "./Producer.lift.js";

const Producer_scan: Producer.Signature["scan"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const createScanConsumer = mixInstanceFactory(
    include(LiftedConsumerMixin(), ScanMixin()),
    function ScanConsumer(
      this: unknown,
      delegate: ConsumerLike<TAcc>,
      reducer: Reducer<T, TAcc>,
      initialValue: Factory<TAcc>,
    ): ConsumerLike<T> {
      init(LiftedConsumerMixin<T, TAcc>(), this, delegate, none);
      init(ScanMixin<T, TAcc>(), this, reducer, initialValue);

      return this;
    },
  );

  return (reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
    pipe(createScanConsumer, partial(reducer, initialValue), Producer_liftPure);
})() as Producer.Signature["scan"];

export default Producer_scan;

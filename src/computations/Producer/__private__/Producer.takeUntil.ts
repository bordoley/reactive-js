import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import { ProducerLike } from "../../../computations.js";
import { bindMethod, partial, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import LiftedConsumerMixin from "../../../utils/__mixins__/LiftedConsumerMixin.js";
import { ConsumerLike, SinkLike_complete } from "../../../utils.js";
import * as Producer from "../../Producer.js";
import Producer_forEach from "./Producer.forEach.js";
import Producer_lift from "./Producer.lift.js";
import Producer_subscribe from "./Producer.subscribe.js";

const Producer_takeUntil: Producer.Signature["takeUntil"] = /*@__PURE__*/ (<
  T,
>() => {
  const createTakeUntilConsumer = mixInstanceFactory(
    include(LiftedConsumerMixin()),
    function TakeUntilConsumer(
      this: unknown,
      delegate: ConsumerLike<T>,
      notifier: ProducerLike<unknown>,
    ): ConsumerLike<T> {
      init(LiftedConsumerMixin<T, T>(), this, delegate);

      pipe(
        notifier,
        Producer_forEach(bindMethod(this, SinkLike_complete)),
        Producer_subscribe(),
        Disposable.addTo(this),
      );

      return this;
    },
  );

  return (notifier: ProducerLike) =>
    pipe(createTakeUntilConsumer, partial(notifier), Producer_lift());
})() as Producer.Signature["takeUntil"];

export default Producer_takeUntil;

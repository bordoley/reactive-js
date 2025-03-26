import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { ProducerLike } from "../../../computations.js";
import { bindMethod, none, partial, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import {
  ConsumerLike,
  DisposableLike,
  DisposableLike_dispose,
} from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import {
  LiftedOperatorLike,
  LiftedOperatorLike_complete,
  LiftedOperatorLike_subscription,
} from "../../__internal__/LiftedSource.js";
import DelegatingLiftedOperatorMixin, {
  DelegatingLiftedOperatorLike,
  DelegatingLiftedOperatorLike_onCompleted,
} from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import Producer_forEach from "./Producer.forEach.js";
import Producer_lift from "./Producer.lift.js";
import Producer_subscribe from "./Producer.subscribe.js";

export const createTakeUntilOperator: <T>(
  delegate: LiftedOperatorLike<ConsumerLike, T>,
  notifier: ProducerLike,
) => LiftedOperatorLike<ConsumerLike, T> = /*@__PURE__*/ (<T>() => {
  const TakeUntilOperator_otherSubscription = Symbol(
    "TakeUntilOperator_otherSubscription",
  );

  type TProperties = {
    [TakeUntilOperator_otherSubscription]: DisposableLike;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedOperatorMixin<ConsumerLike, T>()),
    function TakeUntilOperator(
      this: Pick<
        DelegatingLiftedOperatorLike<ConsumerLike, T>,
        typeof DelegatingLiftedOperatorLike_onCompleted
      > &
        TProperties,
      delegate: LiftedOperatorLike<ConsumerLike, T>,
      notifier: ProducerLike,
    ): LiftedOperatorLike<ConsumerLike, T> {
      init(DelegatingLiftedOperatorMixin<ConsumerLike, T>(), this, delegate);

      const subscription = this[LiftedOperatorLike_subscription];
      this[TakeUntilOperator_otherSubscription] = pipe(
        notifier,
        Producer_forEach(bindMethod(this, LiftedOperatorLike_complete)),
        Producer_subscribe(),
        Disposable.addTo(subscription),
      );

      return this;
    },
    props<TProperties>({
      [TakeUntilOperator_otherSubscription]: none,
    }),
    proto({
      [DelegatingLiftedOperatorLike_onCompleted](this: TProperties) {
        this[TakeUntilOperator_otherSubscription][DisposableLike_dispose]();
      },
    }),
  );
})();

const Producer_takeUntil: Producer.Signature["takeUntil"] = ((
  notifier: ProducerLike,
) =>
  pipe(
    createTakeUntilOperator,
    partial(notifier),
    Producer_lift(),
  )) as Producer.Signature["takeUntil"];

export default Producer_takeUntil;

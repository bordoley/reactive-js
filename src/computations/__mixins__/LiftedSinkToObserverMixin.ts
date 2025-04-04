import { Mixin1, include, init, mix } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import DelegatingSchedulerMixin from "../../utils/__mixins__/DelegatingSchedulerMixin.js";

import { ObserverLike } from "../../utils.js";
import {
  LiftedSinkLike,
  LiftedSinkLike_subscription,
} from "../__internal__/LiftedSource.js";
import LiftedSinkToConsumerMixin, {
  LiftedSinkToConsumerLike,
} from "./LiftedSinkToConsumerMixin.js";

export interface LiftedSinkToObserverLike<TSubscription extends ObserverLike, T>
  extends LiftedSinkToConsumerLike<TSubscription, T>,
    ObserverLike<T> {}

type TReturn<TSubscription extends ObserverLike, T> = LiftedSinkToObserverLike<
  TSubscription,
  T
>;

const LiftedSinkToObserverMixin: <
  TSubscription extends ObserverLike,
  T,
>() => Mixin1<TReturn<TSubscription, T>, LiftedSinkLike<TSubscription, T>> =
  /*@__PURE__*/ (<TSubscription extends ObserverLike, T>() => {
    return returns(
      mix(
        include(DelegatingSchedulerMixin, LiftedSinkToConsumerMixin()),
        function LiftedSinkToObserverMixin(
          this: unknown,
          delegate: LiftedSinkLike<TSubscription, T>,
        ): TReturn<TSubscription, T> {
          const subscription = delegate[LiftedSinkLike_subscription];
          init(LiftedSinkToConsumerMixin<TSubscription, T>(), this, delegate);
          init(DelegatingSchedulerMixin, this, subscription);

          return this;
        },
      ),
    );
  })();

export default LiftedSinkToObserverMixin;

import { __DEV__ } from "../../__internal__/constants.js";
import {
  Mixin1,
  include,
  init,
  mix,
  props,
  proto,
} from "../../__internal__/mixins.js";
import { raiseIf, returns } from "../../functions.js";
import DelegatingSchedulerMixin from "../../utils/__mixins__/DelegatingSchedulerMixin.js";
import {
  EventListenerLike_notify,
  ObserverLike,
  ObserverLike_mustNotifyInSchedulerContinuation,
  SchedulerLike_inContinuation,
} from "../../utils.js";
import {
  LiftedSinkLike,
  LiftedSinkLike_subscription,
} from "../__internal__/LiftedSource.js";
import LiftedSinkToConsumerMixin, {
  LiftedSinkToConsumerLike,
} from "./LiftedSinkToConsumerMixin.js";
import { LiftedSinkToEventListenerLike_liftedSink } from "./LiftedSinkToEventListenerMixin.js";

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
    type TPrototype = Pick<
      ObserverLike<T>,
      | typeof ObserverLike_mustNotifyInSchedulerContinuation
      | typeof EventListenerLike_notify
    >;

    return returns(
      mix(
        include(DelegatingSchedulerMixin, LiftedSinkToConsumerMixin()),
        function LiftedSinkToObserverMixin(
          this: TPrototype,
          delegate: LiftedSinkLike<TSubscription, T>,
        ): TReturn<TSubscription, T> {
          const subscription = delegate[LiftedSinkLike_subscription];
          init(LiftedSinkToConsumerMixin<TSubscription, T>(), this, delegate);
          init(DelegatingSchedulerMixin, this, subscription);

          return this;
        },

        props(),
        proto<TPrototype>({
          [ObserverLike_mustNotifyInSchedulerContinuation]: true,
          [EventListenerLike_notify](
            this: LiftedSinkToObserverLike<TSubscription, T>,
            next: T,
          ) {
            if (__DEV__) {
              raiseIf(
                !this[SchedulerLike_inContinuation],
                "Can only notify a lifted observer from within a scheduler continuation",
              );
            }

            this[LiftedSinkToEventListenerLike_liftedSink][
              EventListenerLike_notify
            ](next);
          },
        }),
      ),
    );
  })();

export default LiftedSinkToObserverMixin;

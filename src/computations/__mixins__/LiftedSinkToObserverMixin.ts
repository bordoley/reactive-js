import {
  Mixin2,
  include,
  init,
  mix,
  props,
  proto,
} from "../../__internal__/mixins.js";
import { Optional, returns } from "../../functions.js";
import {
  ConsumerMixinLike_complete,
  ConsumerMixinLike_notify,
} from "../../utils/__mixins__/ConsumerMixin.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingSchedulerMixin from "../../utils/__mixins__/DelegatingSchedulerMixin.js";
import ObserverMixin from "../../utils/__mixins__/ObserverMixin.js";
import {
  BackpressureStrategy,
  EventListenerLike_notify,
  ObserverLike,
  SinkLike_complete,
} from "../../utils.js";
import {
  LiftedSinkLike,
  LiftedSinkLike_subscription,
} from "../__internal__/LiftedSource.js";
import { LiftedSinkToConsumerLike } from "./LiftedSinkToConsumerMixin.js";
import LiftedSinkToEventListenerMixin, {
  LiftedSinkToEventListenerLike,
  LiftedSinkToEventListenerLike_operator,
} from "./LiftedSinkToEventListenerMixin.js";

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
>() => Mixin2<
  TReturn<TSubscription, T>,
  LiftedSinkLike<TSubscription, T>,
  Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
  }>
> = /*@__PURE__*/ (<TSubscription extends ObserverLike, T>() => {
  return returns(
    mix(
      include(
        DelegatingDisposableMixin,
        DelegatingSchedulerMixin,
        LiftedSinkToEventListenerMixin(),
        ObserverMixin(),
      ),
      function LiftedSinkToObserverMixin(
        this: unknown,
        operator: LiftedSinkLike<TSubscription, T>,
        backPressure: Optional<{
          capacity?: number;
          backpressureStrategy?: BackpressureStrategy;
        }>,
      ): TReturn<TSubscription, T> {
        const delegate = operator[LiftedSinkLike_subscription];
        init(DelegatingDisposableMixin, this, delegate);
        init(DelegatingSchedulerMixin, this, delegate);
        init(
          LiftedSinkToEventListenerMixin<TSubscription, T>(),
          this,
          operator,
        );
        init(
          ObserverMixin<TSubscription, T>(),
          this,
          delegate,
          delegate,
          backPressure,
        );

        return this;
      },
      props(),
      proto({
        [ConsumerMixinLike_notify](
          this: LiftedSinkToEventListenerLike<TSubscription, T>,
          next: T,
        ) {
          this[LiftedSinkToEventListenerLike_operator][
            EventListenerLike_notify
          ](next);
        },

        [ConsumerMixinLike_complete](
          this: LiftedSinkToEventListenerLike<TSubscription, T>,
        ) {
          this[LiftedSinkToEventListenerLike_operator][SinkLike_complete]();
        },
      }),
    ),
  );
})();

export default LiftedSinkToObserverMixin;

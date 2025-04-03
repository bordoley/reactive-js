import {
  Mixin2,
  include,
  init,
  mix,
  props,
  proto,
} from "../../__internal__/mixins.js";
import { Optional, returns } from "../../functions.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingSchedulerMixin from "../../utils/__mixins__/DelegatingSchedulerMixin.js";
import ObserverMixin from "../../utils/__mixins__/ObserverMixin.js";
import {
  SinkMixinLike_doComplete,
  SinkMixinLike_doNotify,
} from "../../utils/__mixins__/SinkMixin.js";
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
  LiftedSinkToEventListenerLike_liftedSink,
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
        delegate: LiftedSinkLike<TSubscription, T>,
        backPressure: Optional<{
          capacity?: number;
          backpressureStrategy?: BackpressureStrategy;
        }>,
      ): TReturn<TSubscription, T> {
        const subscription = delegate[LiftedSinkLike_subscription];
        init(DelegatingDisposableMixin, this, subscription);
        init(DelegatingSchedulerMixin, this, subscription);
        init(
          LiftedSinkToEventListenerMixin<TSubscription, T>(),
          this,
          delegate,
        );
        init(
          ObserverMixin<TSubscription, T>(),
          this,
          subscription,
          subscription,
          backPressure,
        );

        return this;
      },
      props(),
      proto({
        [SinkMixinLike_doNotify](
          this: LiftedSinkToEventListenerLike<TSubscription, T>,
          next: T,
        ) {
          this[LiftedSinkToEventListenerLike_liftedSink][
            EventListenerLike_notify
          ](next);
        },

        [SinkMixinLike_doComplete](
          this: LiftedSinkToEventListenerLike<TSubscription, T>,
        ) {
          this[LiftedSinkToEventListenerLike_liftedSink][SinkLike_complete]();
        },
      }),
    ),
  );
})();

export default LiftedSinkToObserverMixin;

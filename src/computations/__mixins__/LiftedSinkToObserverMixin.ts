import {
  Mixin1,
  include,
  init,
  mix,
  props,
  proto,
} from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import DelegatingSchedulerMixin from "../../utils/__mixins__/DelegatingSchedulerMixin.js";
import ObserverMixin, {
  ObserverMixinLike_complete,
  ObserverMixinLike_notify,
} from "../../utils/__mixins__/ObserverMixin.js";
import {
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
>() => Mixin1<TReturn<TSubscription, T>, LiftedSinkLike<TSubscription, T>> =
  /*@__PURE__*/ (<TSubscription extends ObserverLike, T>() => {
    return returns(
      mix(
        include(
          DelegatingSchedulerMixin,
          LiftedSinkToEventListenerMixin(),
          ObserverMixin(),
        ),
        function LiftedSinkToObserverMixin(
          this: unknown,
          operator: LiftedSinkLike<TSubscription, T>,
        ): TReturn<TSubscription, T> {
          const delegate = operator[LiftedSinkLike_subscription];
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
            none,
          );

          return this;
        },
        props(),
        proto({
          [ObserverMixinLike_notify](
            this: LiftedSinkToEventListenerLike<TSubscription, T>,
            next: T,
          ) {
            this[LiftedSinkToEventListenerLike_operator][
              EventListenerLike_notify
            ](next);
          },

          [ObserverMixinLike_complete](
            this: LiftedSinkToEventListenerLike<TSubscription, T>,
          ) {
            this[LiftedSinkToEventListenerLike_operator][SinkLike_complete]();
          },
        }),
      ),
    );
  })();

export default LiftedSinkToObserverMixin;

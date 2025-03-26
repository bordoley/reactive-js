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
import { ObserverLike } from "../../utils.js";
import {
  LiftedOperatorLike,
  LiftedOperatorLike_complete,
  LiftedOperatorLike_notify,
  LiftedOperatorLike_subscription,
} from "../__internal__/LiftedSource.js";
import { LiftedOperatorToConsumerLike } from "./LiftedOperatorToConsumerMixin.js";
import LiftedOperatorToEventListenerMixin, {
  LiftedOperatorToEventListenerLike,
  LiftedOperatorToEventListenerLike_operator,
} from "./LiftedOperatorToEventListenerMixin.js";

export interface LiftedOperatorToObserverLike<
  TSubscription extends ObserverLike,
  T,
> extends LiftedOperatorToConsumerLike<TSubscription, T>,
    ObserverLike<T> {}

type TReturn<
  TSubscription extends ObserverLike,
  T,
> = LiftedOperatorToObserverLike<TSubscription, T>;

const LiftedOperatorToObserverMixin: <
  TSubscription extends ObserverLike,
  T,
>() => Mixin1<TReturn<TSubscription, T>, LiftedOperatorLike<TSubscription, T>> =
  /*@__PURE__*/ (<TSubscription extends ObserverLike, T>() => {
    return returns(
      mix(
        include(
          DelegatingSchedulerMixin,
          LiftedOperatorToEventListenerMixin(),
          ObserverMixin(),
        ),
        function LiftedOperatorToObserverMixin(
          this: unknown,
          operator: LiftedOperatorLike<TSubscription, T>,
        ): TReturn<TSubscription, T> {
          const delegate = operator[LiftedOperatorLike_subscription];
          init(DelegatingSchedulerMixin, this, delegate);
          init(
            LiftedOperatorToEventListenerMixin<TSubscription, T>(),
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
            this: LiftedOperatorToEventListenerLike<TSubscription, T>,
            next: T,
          ) {
            this[LiftedOperatorToEventListenerLike_operator][
              LiftedOperatorLike_notify
            ](next);
          },

          [ObserverMixinLike_complete](
            this: LiftedOperatorToEventListenerLike<TSubscription, T>,
          ) {
            this[LiftedOperatorToEventListenerLike_operator][
              LiftedOperatorLike_complete
            ]();
          },
        }),
      ),
    );
  })();

export default LiftedOperatorToObserverMixin;

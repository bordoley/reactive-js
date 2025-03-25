import {
  Mixin2,
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
} from "../__internal__/LiftedSource.js";
import { LiftedOperatorToConsumerLike } from "./LiftedOperatorToConsumerMixin.js";
import LiftedOperatorToEventListenerMixin, {
  LiftedOperatorToEventListenerLike,
  LiftedOperatorToEventListenerLike_operator,
} from "./LiftedOperatorToEventListenerMixin.js";

export interface LiftedOperatorToObserverLike<T, TDelegate extends ObserverLike>
  extends LiftedOperatorToConsumerLike<T, TDelegate>,
    ObserverLike<T> {}

type TReturn<T, TDelegate extends ObserverLike> = LiftedOperatorToObserverLike<
  T,
  TDelegate
>;

const LiftedOperatorToObserverMixin: <
  T,
  TDelegate extends ObserverLike,
>() => Mixin2<TReturn<T, TDelegate>, LiftedOperatorLike<T>, TDelegate> =
  /*@__PURE__*/ (<T, TDelegate extends ObserverLike>() => {
    return returns(
      mix(
        include(
          DelegatingSchedulerMixin,
          LiftedOperatorToEventListenerMixin(),
          ObserverMixin(),
        ),
        function LiftedOperatorToObserverMixin(
          this: unknown,
          operator: LiftedOperatorLike<T>,
          delegate: TDelegate,
        ): TReturn<T, TDelegate> {
          init(DelegatingSchedulerMixin, this, delegate);
          init(
            LiftedOperatorToEventListenerMixin<T, TDelegate>(),
            this,
            operator,
            delegate,
          );
          init(ObserverMixin<T, TDelegate>(), this, delegate, delegate, none);

          return this;
        },
        props(),
        proto({
          [ObserverMixinLike_notify](
            this: LiftedOperatorToEventListenerLike<T, TDelegate>,
            next: T,
          ) {
            this[LiftedOperatorToEventListenerLike_operator][
              LiftedOperatorLike_notify
            ](next);
          },

          [ObserverMixinLike_complete](
            this: LiftedOperatorToEventListenerLike<T, TDelegate>,
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

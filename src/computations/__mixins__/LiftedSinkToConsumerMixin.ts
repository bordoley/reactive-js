import {
  Mixin1,
  include,
  init,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { SideEffect1, returns } from "../../functions.js";
import {
  ConsumerLike,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
} from "../../utils.js";
import {
  LiftedSinkLike,
  LiftedSinkLike_subscription,
} from "../__internal__/LiftedSource.js";
import { LiftedSinkToEventListenerLike_liftedSink } from "./LiftedSinkToEventListenerMixin.js";
import LiftedSinkToSinkMixin, {
  LiftedSinkToSinkLike,
} from "./LiftedSinkToSinkMixin.js";

export interface LiftedSinkToConsumerLike<TSubscription extends ConsumerLike, T>
  extends LiftedSinkToSinkLike<TSubscription, T>,
    ConsumerLike<T> {}

type TReturn<TSubscription extends ConsumerLike, T> = LiftedSinkToConsumerLike<
  TSubscription,
  T
>;

type TPrototype<TSubscription extends ConsumerLike, T> = Pick<
  LiftedSinkToConsumerLike<TSubscription, T>,
  | typeof FlowControllerLike_isReady
  | typeof FlowControllerLike_addOnReadyListener
>;

const LiftedSinkToConsumerMixin: <
  TSubscription extends ConsumerLike,
  T,
>() => Mixin1<
  TReturn<TSubscription, T>,
  LiftedSinkLike<TSubscription, T>,
  TPrototype<TSubscription, T>
> = /*@__PURE__*/ (<TSubscription extends ConsumerLike, T>() => {
  return returns(
    mix(
      include(LiftedSinkToSinkMixin()),
      function LiftedSinkToConsumerMixin(
        this: TPrototype<TSubscription, T>,
        delegate: LiftedSinkLike<TSubscription, T>,
      ): TReturn<TSubscription, T> {
        init(LiftedSinkToSinkMixin<TSubscription, T>(), this, delegate);

        return this;
      },
      props(),
      proto<TPrototype<TSubscription, T>>({
        get [FlowControllerLike_isReady](): boolean {
          unsafeCast<LiftedSinkToConsumerLike<TSubscription, T>>(this);
          return this[LiftedSinkToEventListenerLike_liftedSink][
            LiftedSinkLike_subscription
          ][FlowControllerLike_isReady];
        },

        [FlowControllerLike_addOnReadyListener](
          this: LiftedSinkToConsumerLike<TSubscription, T>,
          callback: SideEffect1<void>,
        ) {
          return this[LiftedSinkToEventListenerLike_liftedSink][
            LiftedSinkLike_subscription
          ][FlowControllerLike_addOnReadyListener](callback);
        },
      }),
    ),
  );
})();

export default LiftedSinkToConsumerMixin;

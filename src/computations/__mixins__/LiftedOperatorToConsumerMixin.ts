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
  BackpressureStrategy,
  ConsumerLike,
  QueueableLike_addOnReadyListener,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_isReady,
} from "../../utils.js";
import {
  LiftedOperatorLike,
  LiftedOperatorLike_subscription,
} from "../__internal__/LiftedSource.js";
import { LiftedOperatorToEventListenerLike_operator } from "./LiftedOperatorToEventListenerMixin.js";
import LiftedOperatorToSinkMixin, {
  LiftedOperatorToSinkLike,
} from "./LiftedOperatorToSinkMixin.js";

export interface LiftedOperatorToConsumerLike<
  TSubscription extends ConsumerLike,
  T,
> extends LiftedOperatorToSinkLike<TSubscription, T>,
    ConsumerLike<T> {}

type TReturn<
  TSubscription extends ConsumerLike,
  T,
> = LiftedOperatorToConsumerLike<TSubscription, T>;

type TPrototype<TSubscription extends ConsumerLike, T> = Pick<
  LiftedOperatorToConsumerLike<TSubscription, T>,
  | typeof QueueableLike_isReady
  | typeof QueueableLike_backpressureStrategy
  | typeof QueueableLike_capacity
  | typeof QueueableLike_addOnReadyListener
>;

const LiftedOperatorToConsumerMixin: <
  TSubscription extends ConsumerLike,
  T,
>() => Mixin1<
  TReturn<TSubscription, T>,
  LiftedOperatorLike<TSubscription, T>,
  TPrototype<TSubscription, T>
> = /*@__PURE__*/ (<TSubscription extends ConsumerLike, T>() => {
  return returns(
    mix(
      include(LiftedOperatorToSinkMixin()),
      function LiftedOperatorToConsumerMixin(
        this: TPrototype<TSubscription, T>,
        operator: LiftedOperatorLike<TSubscription, T>,
      ): TReturn<TSubscription, T> {
        init(LiftedOperatorToSinkMixin<TSubscription, T>(), this, operator);

        return this;
      },
      props(),
      proto<TPrototype<TSubscription, T>>({
        get [QueueableLike_isReady](): boolean {
          unsafeCast<LiftedOperatorToConsumerLike<TSubscription, T>>(this);
          return this[LiftedOperatorToEventListenerLike_operator][
            LiftedOperatorLike_subscription
          ][QueueableLike_isReady];
        },

        get [QueueableLike_backpressureStrategy](): BackpressureStrategy {
          unsafeCast<LiftedOperatorToConsumerLike<TSubscription, T>>(this);
          return this[LiftedOperatorToEventListenerLike_operator][
            LiftedOperatorLike_subscription
          ][QueueableLike_backpressureStrategy];
        },

        get [QueueableLike_capacity](): number {
          unsafeCast<LiftedOperatorToConsumerLike<TSubscription, T>>(this);
          return this[LiftedOperatorToEventListenerLike_operator][
            LiftedOperatorLike_subscription
          ][QueueableLike_capacity];
        },

        [QueueableLike_addOnReadyListener](
          this: LiftedOperatorToConsumerLike<TSubscription, T>,
          callback: SideEffect1<void>,
        ) {
          return this[LiftedOperatorToEventListenerLike_operator][
            LiftedOperatorLike_subscription
          ][QueueableLike_addOnReadyListener](callback);
        },
      }),
    ),
  );
})();

export default LiftedOperatorToConsumerMixin;

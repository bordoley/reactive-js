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
  LiftedSinkLike,
  LiftedSinkLike_subscription,
} from "../__internal__/LiftedSource.js";
import { LiftedSinkToEventListenerLike_operator } from "./LiftedSinkToEventListenerMixin.js";
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
  | typeof QueueableLike_isReady
  | typeof QueueableLike_backpressureStrategy
  | typeof QueueableLike_capacity
  | typeof QueueableLike_addOnReadyListener
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
        operator: LiftedSinkLike<TSubscription, T>,
      ): TReturn<TSubscription, T> {
        init(LiftedSinkToSinkMixin<TSubscription, T>(), this, operator);

        return this;
      },
      props(),
      proto<TPrototype<TSubscription, T>>({
        get [QueueableLike_isReady](): boolean {
          unsafeCast<LiftedSinkToConsumerLike<TSubscription, T>>(this);
          return this[LiftedSinkToEventListenerLike_operator][
            LiftedSinkLike_subscription
          ][QueueableLike_isReady];
        },

        get [QueueableLike_backpressureStrategy](): BackpressureStrategy {
          unsafeCast<LiftedSinkToConsumerLike<TSubscription, T>>(this);
          return this[LiftedSinkToEventListenerLike_operator][
            LiftedSinkLike_subscription
          ][QueueableLike_backpressureStrategy];
        },

        get [QueueableLike_capacity](): number {
          unsafeCast<LiftedSinkToConsumerLike<TSubscription, T>>(this);
          return this[LiftedSinkToEventListenerLike_operator][
            LiftedSinkLike_subscription
          ][QueueableLike_capacity];
        },

        [QueueableLike_addOnReadyListener](
          this: LiftedSinkToConsumerLike<TSubscription, T>,
          callback: SideEffect1<void>,
        ) {
          return this[LiftedSinkToEventListenerLike_operator][
            LiftedSinkLike_subscription
          ][QueueableLike_addOnReadyListener](callback);
        },
      }),
    ),
  );
})();

export default LiftedSinkToConsumerMixin;

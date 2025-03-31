import {
  Mixin2,
  include,
  init,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { Optional, SideEffect1, returns } from "../../functions.js";
import ConsumerMixin, {
  ConsumerMixinLike_complete,
  ConsumerMixinLike_notify,
} from "../../utils/__mixins__/ConsumerMixin.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  BackPressureConfig_capacity,
  BackPressureConfig_strategy,
  BackpressureStrategy,
  ConsumerLike,
  EventListenerLike_notify,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  SinkLike_complete,
} from "../../utils.js";
import {
  LiftedSinkLike,
  LiftedSinkLike_subscription,
} from "../__internal__/LiftedSource.js";
import {
  LiftedSinkToEventListenerLike,
  LiftedSinkToEventListenerLike_liftedSink,
} from "./LiftedSinkToEventListenerMixin.js";
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
  | typeof BackPressureConfig_strategy
  | typeof BackPressureConfig_capacity
  | typeof FlowControllerLike_addOnReadyListener
>;

const LiftedSinkToConsumerMixin: <
  TSubscription extends ConsumerLike,
  T,
>() => Mixin2<
  TReturn<TSubscription, T>,
  LiftedSinkLike<TSubscription, T>,
  Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
  }>,
  TPrototype<TSubscription, T>
> = /*@__PURE__*/ (<TSubscription extends ConsumerLike, T>() => {
  return returns(
    mix(
      include(
        DelegatingDisposableMixin,
        LiftedSinkToSinkMixin(),
        ConsumerMixin(),
      ),
      function LiftedSinkToConsumerMixin(
        this: TPrototype<TSubscription, T>,
        operator: LiftedSinkLike<TSubscription, T>,
        backPressure: Optional<{
          capacity?: number;
          backpressureStrategy?: BackpressureStrategy;
        }>,
      ): TReturn<TSubscription, T> {
        const delegate = operator[LiftedSinkLike_subscription];
        init(DelegatingDisposableMixin, this, delegate);
        init(LiftedSinkToSinkMixin<TSubscription, T>(), this, operator);
        init(ConsumerMixin<TSubscription, T>(), this, delegate, backPressure);

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

        get [BackPressureConfig_strategy](): BackpressureStrategy {
          unsafeCast<LiftedSinkToConsumerLike<TSubscription, T>>(this);
          return this[LiftedSinkToEventListenerLike_liftedSink][
            LiftedSinkLike_subscription
          ][BackPressureConfig_strategy];
        },

        get [BackPressureConfig_capacity](): number {
          unsafeCast<LiftedSinkToConsumerLike<TSubscription, T>>(this);
          return this[LiftedSinkToEventListenerLike_liftedSink][
            LiftedSinkLike_subscription
          ][BackPressureConfig_capacity];
        },

        [FlowControllerLike_addOnReadyListener](
          this: LiftedSinkToConsumerLike<TSubscription, T>,
          callback: SideEffect1<void>,
        ) {
          return this[LiftedSinkToEventListenerLike_liftedSink][
            LiftedSinkLike_subscription
          ][FlowControllerLike_addOnReadyListener](callback);
        },

        [ConsumerMixinLike_notify](
          this: LiftedSinkToEventListenerLike<TSubscription, T>,
          next: T,
        ) {
          this[LiftedSinkToEventListenerLike_liftedSink][
            EventListenerLike_notify
          ](next);
        },

        [ConsumerMixinLike_complete](
          this: LiftedSinkToEventListenerLike<TSubscription, T>,
        ) {
          this[LiftedSinkToEventListenerLike_liftedSink][SinkLike_complete]();
        },
      }),
    ),
  );
})();

export default LiftedSinkToConsumerMixin;

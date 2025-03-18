import {
  Mixin1,
  include,
  init,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { SideEffect1, none, returns } from "../../functions.js";
import {
  ConsumerLike,
  ConsumerLike_addOnReadyListener,
  ConsumerLike_backpressureStrategy,
  ConsumerLike_capacity,
  ConsumerLike_isReady,
  DisposableLike,
  EventListenerLike_notify,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import {
  LiftedEventListenerLike_delegate,
  LiftedEventListenerLike_notify,
  LiftedEventListenerLike_notifyDelegate,
} from "./LiftedEventListenerMixin.js";
import LiftedSinkMixin, {
  LiftedSinkLike,
  LiftedSinkLike_complete,
  LiftedSinkLike_completeDelegate,
} from "./LiftedSinkMixin.js";

export const LiftedConsumerLike_isReady = Symbol("LiftedConsumerLike_isReady");
export const LiftedConsumerLike_consumer = Symbol(
  "LiftedConsumerLike_consumer",
);

export interface LiftedConsumerLike<
  TA = unknown,
  TB = TA,
  TDelegateConsumer extends ConsumerLike<TB> = ConsumerLike<TB>,
  TConsumer extends ConsumerLike = ConsumerLike,
> extends LiftedSinkLike<TA, TB, TDelegateConsumer>,
    ConsumerLike<TA> {
  readonly [LiftedConsumerLike_isReady]: boolean;
  readonly [LiftedConsumerLike_consumer]: TConsumer;
}

interface LiftedConsumerMixinModule {
  <
    TA,
    TB = TA,
    TDelegateConsumer extends ConsumerLike<TB> = ConsumerLike<TB>,
    TConsumer extends ConsumerLike = ConsumerLike,
  >(): Mixin1<
    LiftedConsumerLike<TA, TB, TDelegateConsumer, TConsumer>,
    TDelegateConsumer
  >;

  <
    T,
    TDelegateConsumer extends ConsumerLike<T> = ConsumerLike<T>,
    TConsumer extends ConsumerLike = ConsumerLike,
  >(): Mixin1<
    LiftedConsumerLike<T, T, TDelegateConsumer, TConsumer>,
    TDelegateConsumer
  >;
}

const LiftedConsumerMixin: LiftedConsumerMixinModule = /*@__PURE__*/ (<
  TA,
  TB = TA,
  TDelegateConsumer extends ConsumerLike<TB> = ConsumerLike<TB>,
  TConsumer extends ConsumerLike = ConsumerLike,
>() => {
  type TProperties = {
    [LiftedConsumerLike_consumer]: TConsumer;
  };
  return returns(
    mix(
      include(LiftedSinkMixin()),
      function LiftedConsumerMixin(
        this: TProperties &
          Omit<
            LiftedConsumerLike<TA, TB, TDelegateConsumer, TConsumer>,
            | keyof DisposableLike
            | typeof LiftedEventListenerLike_notify
            | typeof LiftedEventListenerLike_delegate
            | typeof EventListenerLike_notify
            | typeof LiftedEventListenerLike_notifyDelegate
            | typeof SinkLike_isCompleted
            | typeof SinkLike_complete
            | typeof LiftedSinkLike_complete
            | typeof LiftedSinkLike_completeDelegate
          >,
        delegate: TDelegateConsumer,
      ): LiftedConsumerLike<TA, TB, TDelegateConsumer, TConsumer> {
        init(LiftedSinkMixin<TA, TB, TDelegateConsumer>(), this, delegate);

        this[LiftedConsumerLike_consumer] =
          (delegate as unknown as TProperties)[LiftedConsumerLike_consumer] ??
          delegate;

        return this;
      },
      props<TProperties>({
        [LiftedConsumerLike_consumer]: none,
      }),
      proto({
        get [LiftedConsumerLike_isReady]() {
          unsafeCast<TProperties>(this);
          return this[LiftedConsumerLike_consumer][ConsumerLike_isReady];
        },
        get [ConsumerLike_isReady]() {
          unsafeCast<TProperties>(this);
          return this[LiftedConsumerLike_consumer][ConsumerLike_isReady];
        },

        get [ConsumerLike_backpressureStrategy]() {
          unsafeCast<TProperties>(this);
          return this[LiftedConsumerLike_consumer][
            ConsumerLike_backpressureStrategy
          ];
        },

        get [ConsumerLike_capacity](): number {
          unsafeCast<TProperties>(this);
          return this[LiftedConsumerLike_consumer][ConsumerLike_capacity];
        },

        [ConsumerLike_addOnReadyListener](
          this: TProperties,
          callback: SideEffect1<void>,
        ) {
          return this[LiftedConsumerLike_consumer][
            ConsumerLike_addOnReadyListener
          ](callback);
        },
      }),
    ),
  );
})();

export default LiftedConsumerMixin;

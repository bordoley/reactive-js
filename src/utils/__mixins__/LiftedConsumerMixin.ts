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
  DisposableLike,
  ListenerLike_notify,
  QueueableLike_addOnReadyListener,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_isReady,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import {
  LiftedListenerLike_delegate,
  LiftedListenerLike_notify,
  LiftedListenerLike_notifyDelegate,
} from "./LiftedListenerMixin.js";
import LiftedSinkMixin, {
  LiftedSinkLike,
  LiftedSinkLike_complete,
  LiftedSinkLike_completeDelegate,
  LiftedSinkLike_isDelegateCompleted,
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
            | typeof LiftedListenerLike_notify
            | typeof LiftedListenerLike_delegate
            | typeof ListenerLike_notify
            | typeof LiftedListenerLike_notifyDelegate
            | typeof SinkLike_isCompleted
            | typeof SinkLike_complete
            | typeof LiftedSinkLike_isDelegateCompleted
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
          return this[LiftedConsumerLike_consumer][QueueableLike_isReady];
        },
        get [QueueableLike_isReady]() {
          unsafeCast<TProperties>(this);
          return this[LiftedConsumerLike_consumer][QueueableLike_isReady];
        },

        get [QueueableLike_backpressureStrategy]() {
          unsafeCast<TProperties>(this);
          return this[LiftedConsumerLike_consumer][
            QueueableLike_backpressureStrategy
          ];
        },

        get [QueueableLike_capacity](): number {
          unsafeCast<TProperties>(this);
          return this[LiftedConsumerLike_consumer][QueueableLike_capacity];
        },

        [QueueableLike_addOnReadyListener](
          this: TProperties,
          callback: SideEffect1<void>,
        ) {
          return this[LiftedConsumerLike_consumer][
            QueueableLike_addOnReadyListener
          ](callback);
        },
      }),
    ),
  );
})();

export default LiftedConsumerMixin;

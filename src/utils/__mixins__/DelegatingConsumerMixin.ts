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
  DisposableLike,
  EventListenerLike_notify,
  QueueableLike_addOnReadyListener,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_isReady,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import { DelegatingEventListenerLike_delegate } from "./DelegatingEventListenerMixin.js";
import DelegatingSinkMixin, {
  DelegatingSinkLike,
} from "./DelegatingSinkMixin.js";

export interface DelegatingConsumerLike<
  T,
  TDelegateConsumer extends ConsumerLike<T> = ConsumerLike<T>,
> extends DelegatingSinkLike<T, TDelegateConsumer>,
    ConsumerLike<T> {}

type TReturn<
  T,
  TDelegateConsumer extends ConsumerLike<T> = ConsumerLike<T>,
> = Omit<DelegatingConsumerLike<T, TDelegateConsumer>, keyof DisposableLike>;

type TPrototype<
  T,
  TDelegateConsumer extends ConsumerLike<T> = ConsumerLike<T>,
> = Omit<
  DelegatingConsumerLike<T, TDelegateConsumer>,
  | keyof DisposableLike
  | typeof DelegatingEventListenerLike_delegate
  | typeof EventListenerLike_notify
  | typeof SinkLike_isCompleted
  | typeof SinkLike_complete
>;

const DelegatingConsumerMixin: <
  T,
  TDelegateConsumer extends ConsumerLike<T> = ConsumerLike<T>,
>() => Mixin1<
  TReturn<T, TDelegateConsumer>,
  TDelegateConsumer,
  TPrototype<T, TDelegateConsumer>
> = /*@__PURE__*/ (<
  T,
  TDelegateConsumer extends ConsumerLike<T> = ConsumerLike<T>,
>() => {
  return returns(
    mix(
      include(DelegatingSinkMixin()),
      function DelegatingConsumerMixin(
        this: TPrototype<T, TDelegateConsumer>,
        delegate: TDelegateConsumer,
      ): TReturn<T, TDelegateConsumer> {
        init(DelegatingSinkMixin<T, TDelegateConsumer>(), this, delegate);
        return this;
      },
      props(),
      proto({
        get [QueueableLike_isReady](): boolean {
          unsafeCast<DelegatingConsumerLike<T, TDelegateConsumer>>(this);
          return this[DelegatingEventListenerLike_delegate][
            QueueableLike_isReady
          ];
        },

        get [QueueableLike_backpressureStrategy](): BackpressureStrategy {
          unsafeCast<DelegatingConsumerLike<T, TDelegateConsumer>>(this);
          return this[DelegatingEventListenerLike_delegate][
            QueueableLike_backpressureStrategy
          ];
        },

        get [QueueableLike_capacity](): number {
          unsafeCast<DelegatingConsumerLike<T, TDelegateConsumer>>(this);
          return this[DelegatingEventListenerLike_delegate][
            QueueableLike_capacity
          ];
        },

        [QueueableLike_addOnReadyListener](
          this: DelegatingConsumerLike<T, TDelegateConsumer>,
          callback: SideEffect1<void>,
        ) {
          return this[DelegatingEventListenerLike_delegate][
            QueueableLike_addOnReadyListener
          ](callback);
        },
      }),
    ),
  );
})();

export default DelegatingConsumerMixin;

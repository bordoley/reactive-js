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
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_backpressureStrategy,
  FlowControllerLike_capacity,
  FlowControllerLike_isReady,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import { DelegatingEventListenerLike_delegate } from "./DelegatingEventListenerMixin.js";
import DelegatingSinkMixin, {
  DelegatingSinkLike,
} from "./DelegatingSinkMixin.js";

export interface DelegatingConsumerLike<
  T,
  TOut = T,
  TDelegateConsumer extends ConsumerLike<TOut> = ConsumerLike<TOut>,
> extends DelegatingSinkLike<T, TOut, TDelegateConsumer>,
    ConsumerLike<T> {}

type TReturn<
  T,
  TOut = T,
  TDelegateConsumer extends ConsumerLike<TOut> = ConsumerLike<TOut>,
> = Omit<
  DelegatingConsumerLike<T, TOut, TDelegateConsumer>,
  keyof DisposableLike
>;

type TPrototype<
  T,
  TOut = T,
  TDelegateConsumer extends ConsumerLike<TOut> = ConsumerLike<TOut>,
> = Omit<
  DelegatingConsumerLike<T, TOut, TDelegateConsumer>,
  | keyof DisposableLike
  | typeof DelegatingEventListenerLike_delegate
  | typeof EventListenerLike_notify
  | typeof SinkLike_isCompleted
  | typeof SinkLike_complete
>;

const DelegatingConsumerMixin: <
  T,
  TOut = T,
  TDelegateConsumer extends ConsumerLike<TOut> = ConsumerLike<TOut>,
>() => Mixin1<
  TReturn<T, TOut, TDelegateConsumer>,
  TDelegateConsumer,
  TPrototype<T, TOut, TDelegateConsumer>
> = /*@__PURE__*/ (<
  T,
  TOut = T,
  TDelegateConsumer extends ConsumerLike<TOut> = ConsumerLike<TOut>,
>() => {
  return returns(
    mix(
      include(DelegatingSinkMixin()),
      function DelegatingConsumerMixin(
        this: TPrototype<T, TOut, TDelegateConsumer>,
        delegate: TDelegateConsumer,
      ): TReturn<T, TOut, TDelegateConsumer> {
        init(DelegatingSinkMixin<T, TOut, TDelegateConsumer>(), this, delegate);
        return this;
      },
      props(),
      proto({
        get [FlowControllerLike_isReady](): boolean {
          unsafeCast<DelegatingConsumerLike<T, TOut, TDelegateConsumer>>(this);
          return this[DelegatingEventListenerLike_delegate][
            FlowControllerLike_isReady
          ];
        },

        get [FlowControllerLike_backpressureStrategy](): BackpressureStrategy {
          unsafeCast<DelegatingConsumerLike<T, TOut, TDelegateConsumer>>(this);
          return this[DelegatingEventListenerLike_delegate][
            FlowControllerLike_backpressureStrategy
          ];
        },

        get [FlowControllerLike_capacity](): number {
          unsafeCast<DelegatingConsumerLike<T, TOut, TDelegateConsumer>>(this);
          return this[DelegatingEventListenerLike_delegate][
            FlowControllerLike_capacity
          ];
        },

        [FlowControllerLike_addOnReadyListener](
          this: DelegatingConsumerLike<T, TOut, TDelegateConsumer>,
          callback: SideEffect1<void>,
        ) {
          return this[DelegatingEventListenerLike_delegate][
            FlowControllerLike_addOnReadyListener
          ](callback);
        },
      }),
    ),
  );
})();

export default DelegatingConsumerMixin;

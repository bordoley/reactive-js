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
  ConsumerLike_addOnReadyListener,
  ConsumerLike_backpressureStrategy,
  ConsumerLike_capacity,
  ConsumerLike_isReady,
  DisposableLike,
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

const DelegatingConsumerMixin: <
  T,
  TDelegateConsumer extends ConsumerLike<T> = ConsumerLike<T>,
>() => Mixin1<
  DelegatingConsumerLike<T, TDelegateConsumer>,
  TDelegateConsumer,
  DisposableLike
> = /*@__PURE__*/ (<
  T,
  TDelegateConsumer extends ConsumerLike<T> = ConsumerLike<T>,
>() => {
  return returns(
    mix<
      DelegatingConsumerLike<T, TDelegateConsumer>,
      ReturnType<typeof DelegatingSinkMixin>,
      unknown,
      Pick<
        DelegatingConsumerLike<T, TDelegateConsumer>,
        | typeof ConsumerLike_backpressureStrategy
        | typeof ConsumerLike_capacity
        | typeof ConsumerLike_isReady
        | typeof ConsumerLike_addOnReadyListener
      >,
      DisposableLike,
      TDelegateConsumer
    >(
      include(DelegatingSinkMixin()),
      function DelegatingConsumerMixin(
        this: Pick<
          DelegatingConsumerLike<T, TDelegateConsumer>,
          | typeof ConsumerLike_backpressureStrategy
          | typeof ConsumerLike_capacity
          | typeof ConsumerLike_isReady
          | typeof ConsumerLike_addOnReadyListener
        > &
          DisposableLike,
        delegate: TDelegateConsumer,
      ): DelegatingConsumerLike<T, TDelegateConsumer> {
        init(DelegatingSinkMixin<T, TDelegateConsumer>(), this, delegate);
        return this;
      },
      props(),
      proto({
        get [ConsumerLike_isReady](): boolean {
          unsafeCast<DelegatingConsumerLike<T, TDelegateConsumer>>(this);
          return this[DelegatingEventListenerLike_delegate][
            ConsumerLike_isReady
          ];
        },

        get [ConsumerLike_backpressureStrategy](): BackpressureStrategy {
          unsafeCast<DelegatingConsumerLike<T, TDelegateConsumer>>(this);
          return this[DelegatingEventListenerLike_delegate][
            ConsumerLike_backpressureStrategy
          ];
        },

        get [ConsumerLike_capacity](): number {
          unsafeCast<DelegatingConsumerLike<T, TDelegateConsumer>>(this);
          return this[DelegatingEventListenerLike_delegate][
            ConsumerLike_capacity
          ];
        },

        [ConsumerLike_addOnReadyListener](
          this: DelegatingConsumerLike<T, TDelegateConsumer>,
          callback: SideEffect1<void>,
        ) {
          return this[DelegatingEventListenerLike_delegate][
            ConsumerLike_addOnReadyListener
          ](callback);
        },
      }),
    ),
  );
})();

export default DelegatingConsumerMixin;

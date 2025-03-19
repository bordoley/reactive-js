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
  QueueableLike_addOnReadyListener,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_isReady,
} from "../../utils.js";
import { DelegatingListenerLike_delegate } from "./DelegatingListenerMixin.js";
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
      unknown,
      Pick<
        DelegatingConsumerLike<T, TDelegateConsumer>,
        | typeof QueueableLike_backpressureStrategy
        | typeof QueueableLike_capacity
        | typeof QueueableLike_isReady
        | typeof QueueableLike_addOnReadyListener
      >,
      DisposableLike,
      TDelegateConsumer
    >(
      include(DelegatingSinkMixin()),
      function DelegatingConsumerMixin(
        this: Pick<
          DelegatingConsumerLike<T, TDelegateConsumer>,
          | typeof QueueableLike_backpressureStrategy
          | typeof QueueableLike_capacity
          | typeof QueueableLike_isReady
          | typeof QueueableLike_addOnReadyListener
        > &
          DisposableLike,
        delegate: TDelegateConsumer,
      ): DelegatingConsumerLike<T, TDelegateConsumer> {
        init(DelegatingSinkMixin<T, TDelegateConsumer>(), this, delegate);
        return this;
      },
      props(),
      proto({
        get [QueueableLike_isReady](): boolean {
          unsafeCast<DelegatingConsumerLike<T, TDelegateConsumer>>(this);
          return this[DelegatingListenerLike_delegate][QueueableLike_isReady];
        },

        get [QueueableLike_backpressureStrategy](): BackpressureStrategy {
          unsafeCast<DelegatingConsumerLike<T, TDelegateConsumer>>(this);
          return this[DelegatingListenerLike_delegate][
            QueueableLike_backpressureStrategy
          ];
        },

        get [QueueableLike_capacity](): number {
          unsafeCast<DelegatingConsumerLike<T, TDelegateConsumer>>(this);
          return this[DelegatingListenerLike_delegate][QueueableLike_capacity];
        },

        [QueueableLike_addOnReadyListener](
          this: DelegatingConsumerLike<T, TDelegateConsumer>,
          callback: SideEffect1<void>,
        ) {
          return this[DelegatingListenerLike_delegate][
            QueueableLike_addOnReadyListener
          ](callback);
        },
      }),
    ),
  );
})();

export default DelegatingConsumerMixin;

import { Mixin1, mix, props } from "../../../__internal__/mixins.js";
import { QueueableDelegatingMixin_delegate } from "../../../__internal__/symbols.js";
import { none, returns, unsafeCast } from "../../../functions.js";
import {
  BufferLike_capacity,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../../../util.js";

export { QueueableDelegatingMixin_delegate };

export type TDelegatingQueueableMixinReturn<
  T,
  TDelegate extends QueueableLike<T> = QueueableLike<T>,
> = QueueableLike<T> & {
  readonly [QueueableDelegatingMixin_delegate]: TDelegate;
};

const Queueable_delegatingMixin: <
  T,
  TDelegate extends QueueableLike<T> = QueueableLike<T>,
>() => Mixin1<TDelegatingQueueableMixinReturn<T, TDelegate>, TDelegate> =
  /*@__PURE__*/ (<
    T,
    TDelegate extends QueueableLike<T> = QueueableLike<T>,
  >() => {
    type TProperties = {
      [QueueableDelegatingMixin_delegate]: TDelegate;
    };

    return returns(
      mix(
        function DelegatingQueueableMixin(
          instance: QueueableLike<T> & TProperties,
          delegate: TDelegate,
        ): TDelegatingQueueableMixinReturn<T, TDelegate> {
          instance[QueueableDelegatingMixin_delegate] = delegate;
          return instance;
        },
        props<TProperties>({
          [QueueableDelegatingMixin_delegate]: none,
        }),
        {
          get [QueueableLike_backpressureStrategy]() {
            unsafeCast<TProperties>(this);
            return this[QueueableDelegatingMixin_delegate][
              QueueableLike_backpressureStrategy
            ];
          },

          get [BufferLike_capacity](): number {
            unsafeCast<TProperties>(this);
            return this[QueueableDelegatingMixin_delegate][BufferLike_capacity];
          },

          [QueueableLike_enqueue](this: TProperties, v: T): boolean {
            return this[QueueableDelegatingMixin_delegate][
              QueueableLike_enqueue
            ](v);
          },
        },
      ),
    );
  })();

export default Queueable_delegatingMixin;

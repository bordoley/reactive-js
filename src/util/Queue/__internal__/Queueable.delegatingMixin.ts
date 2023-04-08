import { Mixin1, mix, props } from "../../../__internal__/mixins.js";
import { __DelegatingQueueableMixin_delegate } from "../../../__internal__/symbols.js";
import { none, returns, unsafeCast } from "../../../functions.js";
import {
  BufferLike_capacity,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../../../util.js";

const Queueable_delegatingMixin: <T>() => Mixin1<
  QueueableLike<T>,
  QueueableLike<T>
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [__DelegatingQueueableMixin_delegate]: QueueableLike<T>;
  };

  return returns(
    mix(
      function DelegatingQueueableMixin(
        instance: QueueableLike<T> & TProperties,
        delegate: QueueableLike<T>,
      ): QueueableLike<T> {
        instance[__DelegatingQueueableMixin_delegate] = delegate;
        return instance;
      },
      props<TProperties>({
        [__DelegatingQueueableMixin_delegate]: none,
      }),
      {
        get [QueueableLike_backpressureStrategy]() {
          unsafeCast<TProperties>(this);
          return this[__DelegatingQueueableMixin_delegate][
            QueueableLike_backpressureStrategy
          ];
        },

        get [BufferLike_capacity](): number {
          unsafeCast<TProperties>(this);
          return this[__DelegatingQueueableMixin_delegate][BufferLike_capacity];
        },

        [QueueableLike_enqueue](this: TProperties, v: T): boolean {
          return this[__DelegatingQueueableMixin_delegate][
            QueueableLike_enqueue
          ](v);
        },
      },
    ),
  );
})();

export default Queueable_delegatingMixin;

import { Mixin1, mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { __DelegatingQueueableMixin_delegate } from "../../__internal__/symbols.js";
import { none, returns } from "../../functions.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_enqueue,
} from "../../types.js";

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

        get [QueueableLike_capacity](): number {
          unsafeCast<TProperties>(this);
          return this[__DelegatingQueueableMixin_delegate][
            QueueableLike_capacity
          ];
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

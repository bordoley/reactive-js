import { Mixin1, mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_enqueue,
} from "../../utils.js";

const DelegatingQueueableMixin: <T>() => Mixin1<
  QueueableLike<T>,
  QueueableLike<T>
> = /*@__PURE__*/ (<T>() => {
  const DelegatingQueueableMixin_delegate = Symbol(
    "DelegatingQueueableMixin_delegate",
  );
  type TProperties = {
    [DelegatingQueueableMixin_delegate]: QueueableLike<T>;
  };

  return returns(
    mix(
      function DelegatingQueueableMixin(
        instance: QueueableLike<T> & TProperties,
        delegate: QueueableLike<T>,
      ): QueueableLike<T> {
        instance[DelegatingQueueableMixin_delegate] = delegate;
        return instance;
      },
      props<TProperties>({
        [DelegatingQueueableMixin_delegate]: none,
      }),
      {
        get [QueueableLike_backpressureStrategy]() {
          unsafeCast<TProperties>(this);
          return this[DelegatingQueueableMixin_delegate][
            QueueableLike_backpressureStrategy
          ];
        },

        get [QueueableLike_capacity](): number {
          unsafeCast<TProperties>(this);
          return this[DelegatingQueueableMixin_delegate][
            QueueableLike_capacity
          ];
        },

        [QueueableLike_enqueue](this: TProperties, v: T): boolean {
          return this[DelegatingQueueableMixin_delegate][QueueableLike_enqueue](
            v,
          );
        },
      },
    ),
  );
})();

export default DelegatingQueueableMixin;

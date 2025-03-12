import { Mixin1, mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import {
  DisposableContainerLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_complete,
  QueueableLike_enqueue,
  QueueableLike_isCompleted,
  QueueableLike_onReady,
} from "../../utils.js";

const DelegatingDispatcherMixin: <TReq>() => Mixin1<
  Omit<QueueableLike<TReq>, keyof DisposableContainerLike>,
  QueueableLike<TReq>
> = /*@__PURE__*/ (<TReq>() => {
  const DelegatingDispatcherMixin_delegate = Symbol(
    "DelegatingDispatcherMixin_delegate",
  );

  type TProperties = {
    [DelegatingDispatcherMixin_delegate]: QueueableLike<TReq>;
  };

  return returns(
    mix(
      function DelegatingDispatcherMixin(
        this: Pick<
          QueueableLike,
          | typeof QueueableLike_complete
          | typeof QueueableLike_backpressureStrategy
          | typeof QueueableLike_capacity
          | typeof QueueableLike_enqueue
          | typeof QueueableLike_isCompleted
          | typeof QueueableLike_onReady
        > &
          TProperties,
        delegate: QueueableLike<TReq>,
      ): Omit<QueueableLike<TReq>, keyof DisposableContainerLike> {
        this[DelegatingDispatcherMixin_delegate] = delegate;

        return this;
      },
      props<TProperties>({
        [DelegatingDispatcherMixin_delegate]: none,
      }),
      {
        get [QueueableLike_isCompleted]() {
          unsafeCast<TProperties>(this);
          return this[DelegatingDispatcherMixin_delegate][
            QueueableLike_isCompleted
          ];
        },

        get [QueueableLike_onReady]() {
          unsafeCast<TProperties>(this);
          return this[DelegatingDispatcherMixin_delegate][
            QueueableLike_onReady
          ];
        },

        get [QueueableLike_backpressureStrategy]() {
          unsafeCast<TProperties>(this);
          return this[DelegatingDispatcherMixin_delegate][
            QueueableLike_backpressureStrategy
          ];
        },

        get [QueueableLike_capacity](): number {
          unsafeCast<TProperties>(this);
          return this[DelegatingDispatcherMixin_delegate][
            QueueableLike_capacity
          ];
        },

        [QueueableLike_enqueue](this: TProperties, v: TReq): boolean {
          return this[DelegatingDispatcherMixin_delegate][
            QueueableLike_enqueue
          ](v);
        },

        [QueueableLike_complete](this: TProperties) {
          this[DelegatingDispatcherMixin_delegate][QueueableLike_complete]();
        },
      },
    ),
  );
})();

export default DelegatingDispatcherMixin;

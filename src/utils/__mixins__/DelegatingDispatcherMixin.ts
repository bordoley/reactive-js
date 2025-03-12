import { Mixin1, mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import {
  DispatcherLike,
  DispatcherLike_complete,
  DispatcherLike_isCompleted,
  DispatcherLike_onReady,
  DisposableContainerLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_enqueue,
} from "../../utils.js";

const DelegatingDispatcherMixin: <TReq>() => Mixin1<
  Omit<DispatcherLike<TReq>, keyof DisposableContainerLike>,
  DispatcherLike<TReq>
> = /*@__PURE__*/ (<TReq>() => {
  const DelegatingDispatcherMixin_delegate = Symbol(
    "DelegatingDispatcherMixin_delegate",
  );

  type TProperties = {
    [DelegatingDispatcherMixin_delegate]: DispatcherLike<TReq>;
  };

  return returns(
    mix(
      function DelegatingDispatcherMixin(
        this: Pick<
          DispatcherLike,
          | typeof DispatcherLike_complete
          | typeof QueueableLike_backpressureStrategy
          | typeof QueueableLike_capacity
          | typeof QueueableLike_enqueue
          | typeof DispatcherLike_isCompleted
          | typeof DispatcherLike_onReady
        > &
          TProperties,
        delegate: DispatcherLike<TReq>,
      ): Omit<DispatcherLike<TReq>, keyof DisposableContainerLike> {
        this[DelegatingDispatcherMixin_delegate] = delegate;

        return this;
      },
      props<TProperties>({
        [DelegatingDispatcherMixin_delegate]: none,
      }),
      {
        get [DispatcherLike_isCompleted]() {
          unsafeCast<TProperties>(this);
          return this[DelegatingDispatcherMixin_delegate][
            DispatcherLike_isCompleted
          ];
        },

        get [DispatcherLike_onReady]() {
          unsafeCast<TProperties>(this);
          return this[DelegatingDispatcherMixin_delegate][
            DispatcherLike_onReady
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

        [DispatcherLike_complete](this: TProperties) {
          this[DelegatingDispatcherMixin_delegate][DispatcherLike_complete]();
        },
      },
    ),
  );
})();

export default DelegatingDispatcherMixin;

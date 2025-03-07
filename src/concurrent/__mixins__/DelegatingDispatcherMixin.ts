import {
  Mixin1,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../__internal__/mixins.js";
import {
  DispatcherLike,
  DispatcherLike_complete,
  DispatcherLike_state,
} from "../../concurrent.js";
import { none, returns } from "../../functions.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_enqueue,
} from "../../utils.js";

const DelegatingDispatcherMixin: <TReq>() => Mixin1<
  DispatcherLike<TReq>,
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
      include(DelegatingDisposableMixin()),
      function DelegatingDispatcherMixin(
        instance: Pick<
          DispatcherLike,
          | typeof DispatcherLike_complete
          | typeof DispatcherLike_state
          | typeof QueueableLike_backpressureStrategy
          | typeof QueueableLike_capacity
          | typeof QueueableLike_enqueue
        > &
          TProperties,
        delegate: DispatcherLike<TReq>,
      ): DispatcherLike<TReq> {
        init(DelegatingDisposableMixin(), instance, delegate);
        instance[DelegatingDispatcherMixin_delegate] = delegate;

        return instance;
      },
      props<TProperties>({
        [DelegatingDispatcherMixin_delegate]: none,
      }),
      {
        get [DispatcherLike_state]() {
          unsafeCast<TProperties>(this);
          return this[DelegatingDispatcherMixin_delegate][DispatcherLike_state];
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

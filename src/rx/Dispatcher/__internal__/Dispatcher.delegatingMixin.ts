import { Mixin1, Mutable, mix, props } from "../../../__internal__/mixins.js";
import { DelegatingDispatcherMixin_delegate } from "../../../__internal__/symbols.js";
import { none, returns, unsafeCast } from "../../../functions.js";
import {
  DispatcherLike,
  DispatcherLike_complete,
  DispatcherLike_scheduler,
} from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  QueueableLike_backpressureStrategy,
  BufferLike_capacity,
  QueueableLike_enqueue,
} from "../../../util.js";

const Dispatcher_delegatingMixin: <TReq>() => Mixin1<
  DispatcherLike<TReq>,
  DispatcherLike<TReq>
> = /*@__PURE__*/ (<TReq>() => {
  type TProperties = {
    readonly [DelegatingDispatcherMixin_delegate]: DispatcherLike<TReq>;
  };

  return returns(
    mix(
      function DispatcherMixin(
        instance: DispatcherLike<TReq> & Mutable<TProperties>,
        delegate: DispatcherLike<TReq>,
      ): DispatcherLike<TReq> {
        instance[DelegatingDispatcherMixin_delegate] = delegate;

        return instance;
      },
      props<TProperties>({
        [DelegatingDispatcherMixin_delegate]: none,
      }),
      {
        get [DispatcherLike_scheduler](): SchedulerLike {
          unsafeCast<TProperties>(this);
          return this[DelegatingDispatcherMixin_delegate][
            DispatcherLike_scheduler
          ];
        },

        get [QueueableLike_backpressureStrategy]() {
          unsafeCast<TProperties>(this);
          return this[DelegatingDispatcherMixin_delegate][
            QueueableLike_backpressureStrategy
          ];
        },

        get [BufferLike_capacity](): number {
          unsafeCast<TProperties>(this);
          return this[DelegatingDispatcherMixin_delegate][
            BufferLike_capacity
          ];
        },

        [QueueableLike_enqueue](this: TProperties, req: TReq): boolean {
          return this[DelegatingDispatcherMixin_delegate][
            QueueableLike_enqueue
          ](req);
        },

        [DispatcherLike_complete](this: TProperties) {
          this[DelegatingDispatcherMixin_delegate][DispatcherLike_complete]();
        },
      },
    ),
  );
})();

export default Dispatcher_delegatingMixin;

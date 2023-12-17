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
  DispatcherLikeEventMap,
  DispatcherLike_complete,
} from "../../concurrent.js";
import {
  EventListenerLike,
  EventSourceLike_addEventListener,
} from "../../events.js";
import { none, returns } from "../../functions.js";
import {
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_enqueue,
} from "../../utils.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";

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
          | typeof EventSourceLike_addEventListener
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

        [EventSourceLike_addEventListener](
          this: TProperties,
          listener: EventListenerLike<
            DispatcherLikeEventMap[keyof DispatcherLikeEventMap]
          >,
        ): void {
          this[DelegatingDispatcherMixin_delegate][
            EventSourceLike_addEventListener
          ](listener);
        },
      },
    ),
  );
})();

export default DelegatingDispatcherMixin;

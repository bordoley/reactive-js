import {
  Mixin1,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import {
  EventListenerLike_notify,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_isReady,
  QueueableLike_onReady,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import DelegatingDisposableMixin from "./DelegatingDisposableMixin.js";

const DelegatingQueueableMixin: <TReq>() => Mixin1<
  QueueableLike<TReq>,
  QueueableLike<TReq>
> = /*@__PURE__*/ (<TReq>() => {
  const DelegatingQueueableMixin_delegate = Symbol(
    "DelegatingQueueableMixin_delegate",
  );

  type TProperties = {
    [DelegatingQueueableMixin_delegate]: QueueableLike<TReq>;
  };

  return returns(
    mix(
      include(DelegatingDisposableMixin),
      function DelegatingQueueableMixin(
        this: Pick<
          QueueableLike,
          | typeof SinkLike_complete
          | typeof QueueableLike_backpressureStrategy
          | typeof QueueableLike_capacity
          | typeof EventListenerLike_notify
          | typeof SinkLike_isCompleted
          | typeof QueueableLike_isReady
          | typeof QueueableLike_onReady
        > &
          TProperties,
        delegate: QueueableLike<TReq>,
      ): QueueableLike<TReq> {
        init(DelegatingDisposableMixin, this, delegate);
        this[DelegatingQueueableMixin_delegate] = delegate;

        return this;
      },
      props<TProperties>({
        [DelegatingQueueableMixin_delegate]: none,
      }),
      {
        get [SinkLike_isCompleted]() {
          unsafeCast<TProperties>(this);
          return this[DelegatingQueueableMixin_delegate][SinkLike_isCompleted];
        },

        get [QueueableLike_isReady]() {
          unsafeCast<TProperties>(this);
          return this[DelegatingQueueableMixin_delegate][QueueableLike_isReady];
        },

        get [QueueableLike_onReady]() {
          unsafeCast<TProperties>(this);
          return this[DelegatingQueueableMixin_delegate][QueueableLike_onReady];
        },

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

        [EventListenerLike_notify](this: TProperties, v: TReq) {
          this[DelegatingQueueableMixin_delegate][EventListenerLike_notify](v);
        },

        [SinkLike_complete](this: TProperties) {
          this[DelegatingQueueableMixin_delegate][SinkLike_complete]();
        },
      },
    ),
  );
})();

export default DelegatingQueueableMixin;

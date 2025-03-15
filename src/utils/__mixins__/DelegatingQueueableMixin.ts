import { Mixin1, mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { SideEffect1, none, returns } from "../../functions.js";
import {
  DisposableLike,
  EventListenerLike_notify,
  QueueableLike,
  QueueableLike_addOnReadyListener,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_isReady,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";

const DelegatingQueueableMixin: <TReq>() => Mixin1<
  Omit<QueueableLike<TReq>, keyof DisposableLike>,
  QueueableLike<TReq>,
  unknown,
  Omit<QueueableLike<TReq>, keyof DisposableLike>
> = /*@__PURE__*/ (<TReq>() => {
  const DelegatingQueueableMixin_delegate = Symbol(
    "DelegatingQueueableMixin_delegate",
  );

  type TProperties = {
    [DelegatingQueueableMixin_delegate]: QueueableLike<TReq>;
  };

  return returns(
    mix(
      function DelegatingQueueableMixin(
        this: Pick<
          QueueableLike,
          | typeof SinkLike_complete
          | typeof QueueableLike_backpressureStrategy
          | typeof QueueableLike_capacity
          | typeof EventListenerLike_notify
          | typeof SinkLike_isCompleted
          | typeof QueueableLike_isReady
          | typeof QueueableLike_addOnReadyListener
        > &
          TProperties,
        delegate: QueueableLike<TReq>,
      ): Omit<QueueableLike<TReq>, keyof DisposableLike> {
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

        [QueueableLike_addOnReadyListener](
          this: TProperties,
          callback: SideEffect1<void>,
        ) {
          return this[DelegatingQueueableMixin_delegate][
            QueueableLike_addOnReadyListener
          ](callback);
        },
      },
    ),
  );
})();

export default DelegatingQueueableMixin;

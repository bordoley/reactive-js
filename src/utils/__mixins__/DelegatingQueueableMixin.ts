import { Mixin1, mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import {
  DisposableContainerLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_isReady,
  QueueableLike_onReady,
  SinkLike_complete,
  SinkLike_isCompleted,
  SinkLike_push,
} from "../../utils.js";

const DelegatingQueueableMixin: <TReq>() => Mixin1<
  Omit<QueueableLike<TReq>, keyof DisposableContainerLike>,
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
      function DelegatingQueueableMixin(
        this: Pick<
          QueueableLike,
          | typeof SinkLike_complete
          | typeof QueueableLike_backpressureStrategy
          | typeof QueueableLike_capacity
          | typeof SinkLike_push
          | typeof SinkLike_isCompleted
          | typeof QueueableLike_isReady
          | typeof QueueableLike_onReady
        > &
          TProperties,
        delegate: QueueableLike<TReq>,
      ): Omit<QueueableLike<TReq>, keyof DisposableContainerLike> {
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

        [SinkLike_push](this: TProperties, v: TReq) {
          this[DelegatingQueueableMixin_delegate][SinkLike_push](v);
        },

        [SinkLike_complete](this: TProperties) {
          this[DelegatingQueueableMixin_delegate][SinkLike_complete]();
        },
      },
    ),
  );
})();

export default DelegatingQueueableMixin;

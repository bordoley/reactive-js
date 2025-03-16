import { Mixin1, mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { SideEffect1, none, returns } from "../../functions.js";
import {
  ConsumerLike,
  ConsumerLike_addOnReadyListener,
  ConsumerLike_backpressureStrategy,
  ConsumerLike_capacity,
  ConsumerLike_isReady,
  DisposableLike,
  EventListenerLike_notify,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";

const DelegatingConsumerMixin: <TReq>() => Mixin1<
  Omit<ConsumerLike<TReq>, keyof DisposableLike>,
  ConsumerLike<TReq>,
  unknown,
  Omit<ConsumerLike<TReq>, keyof DisposableLike>
> = /*@__PURE__*/ (<TReq>() => {
  const DelegatingConsumerMixin_delegate = Symbol(
    "DelegatingConsumerMixin_delegate",
  );

  type TProperties = {
    [DelegatingConsumerMixin_delegate]: ConsumerLike<TReq>;
  };

  return returns(
    mix(
      function DelegatingConsumerMixin(
        this: Pick<
          ConsumerLike,
          | typeof SinkLike_complete
          | typeof ConsumerLike_backpressureStrategy
          | typeof ConsumerLike_capacity
          | typeof EventListenerLike_notify
          | typeof SinkLike_isCompleted
          | typeof ConsumerLike_isReady
          | typeof ConsumerLike_addOnReadyListener
        > &
          TProperties,
        delegate: ConsumerLike<TReq>,
      ): Omit<ConsumerLike<TReq>, keyof DisposableLike> {
        this[DelegatingConsumerMixin_delegate] = delegate;

        return this;
      },
      props<TProperties>({
        [DelegatingConsumerMixin_delegate]: none,
      }),
      {
        get [SinkLike_isCompleted]() {
          unsafeCast<TProperties>(this);
          return this[DelegatingConsumerMixin_delegate][SinkLike_isCompleted];
        },

        get [ConsumerLike_isReady]() {
          unsafeCast<TProperties>(this);
          return this[DelegatingConsumerMixin_delegate][ConsumerLike_isReady];
        },

        get [ConsumerLike_backpressureStrategy]() {
          unsafeCast<TProperties>(this);
          return this[DelegatingConsumerMixin_delegate][
            ConsumerLike_backpressureStrategy
          ];
        },

        get [ConsumerLike_capacity](): number {
          unsafeCast<TProperties>(this);
          return this[DelegatingConsumerMixin_delegate][ConsumerLike_capacity];
        },

        [EventListenerLike_notify](this: TProperties, v: TReq) {
          this[DelegatingConsumerMixin_delegate][EventListenerLike_notify](v);
        },

        [SinkLike_complete](this: TProperties) {
          this[DelegatingConsumerMixin_delegate][SinkLike_complete]();
        },

        [ConsumerLike_addOnReadyListener](
          this: TProperties,
          callback: SideEffect1<void>,
        ) {
          return this[DelegatingConsumerMixin_delegate][
            ConsumerLike_addOnReadyListener
          ](callback);
        },
      },
    ),
  );
})();

export default DelegatingConsumerMixin;

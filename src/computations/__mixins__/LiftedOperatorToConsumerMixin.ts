import {
  Mixin2,
  include,
  init,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { SideEffect1, returns } from "../../functions.js";
import {
  BackpressureStrategy,
  ConsumerLike,
  QueueableLike_addOnReadyListener,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_isReady,
} from "../../utils.js";
import { LiftedOperatorLike } from "../__internal__/LiftedSource.js";
import { LiftedOperatorToEventListenerLike_delegate } from "./LiftedOperatorToEventListenerMixin.js";
import LiftedOperatorToSinkMixin, {
  LiftedOperatorToSinkLike,
} from "./LiftedOperatorToSinkMixin.js";

export interface LiftedOperatorToConsumerLike<T, TDelegate extends ConsumerLike>
  extends LiftedOperatorToSinkLike<T, TDelegate>,
    ConsumerLike<T> {}

type TReturn<T, TDelegate extends ConsumerLike> = LiftedOperatorToConsumerLike<
  T,
  TDelegate
>;

type TPrototype<T, TDelegate extends ConsumerLike> = Pick<
  LiftedOperatorToConsumerLike<T, TDelegate>,
  | typeof QueueableLike_isReady
  | typeof QueueableLike_backpressureStrategy
  | typeof QueueableLike_capacity
  | typeof QueueableLike_addOnReadyListener
>;

const LiftedOperatorToConsumerMixin: <
  T,
  TDelegate extends ConsumerLike,
>() => Mixin2<
  TReturn<T, TDelegate>,
  LiftedOperatorLike<T>,
  TDelegate,
  TPrototype<T, TDelegate>
> = /*@__PURE__*/ (<T, TDelegate extends ConsumerLike>() => {
  return returns(
    mix(
      include(LiftedOperatorToSinkMixin()),
      function LiftedOperatorToConsumerMixin(
        this: TPrototype<T, TDelegate>,
        operator: LiftedOperatorLike<T>,
        delegate: TDelegate,
      ): TReturn<T, TDelegate> {
        init(
          LiftedOperatorToSinkMixin<T, TDelegate>(),
          this,
          operator,
          delegate,
        );

        return this;
      },
      props(),
      proto<TPrototype<T, TDelegate>>({
        get [QueueableLike_isReady](): boolean {
          unsafeCast<LiftedOperatorToConsumerLike<T, TDelegate>>(this);
          return this[LiftedOperatorToEventListenerLike_delegate][
            QueueableLike_isReady
          ];
        },

        get [QueueableLike_backpressureStrategy](): BackpressureStrategy {
          unsafeCast<LiftedOperatorToConsumerLike<T, TDelegate>>(this);
          return this[LiftedOperatorToEventListenerLike_delegate][
            QueueableLike_backpressureStrategy
          ];
        },

        get [QueueableLike_capacity](): number {
          unsafeCast<LiftedOperatorToConsumerLike<T, TDelegate>>(this);
          return this[LiftedOperatorToEventListenerLike_delegate][
            QueueableLike_capacity
          ];
        },

        [QueueableLike_addOnReadyListener](
          this: LiftedOperatorToConsumerLike<T, TDelegate>,
          callback: SideEffect1<void>,
        ) {
          return this[LiftedOperatorToEventListenerLike_delegate][
            QueueableLike_addOnReadyListener
          ](callback);
        },
      }),
    ),
  );
})();

export default LiftedOperatorToConsumerMixin;

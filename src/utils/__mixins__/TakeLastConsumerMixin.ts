import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import {
  Mixin1,
  include,
  init,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { IterableLike } from "../../computations.js";
import { returns } from "../../functions.js";
import {
  ConsumerLike,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  DropOldestBackpressureStrategy,
  EventListenerLike_notify,
  FlowControllerLike_capacity,
  FlowControllerLike_isReady,
  FlowControllerQueueLike,
  FlowControllerQueueLike_enqueue,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import FlowControllerQueueMixin from "../__mixins__/FlowControllerQueueMixin.js";

const TakeLastConsumerMixin: <T>() => Mixin1<
  ConsumerLike<T> & IterableLike<T>,
  number
> = /*@__PURE__*/ (<T>() => {
  type TPrototype = Pick<
    ConsumerLike<T>,
    | typeof EventListenerLike_notify
    | typeof SinkLike_complete
    | typeof SinkLike_isCompleted
    | typeof FlowControllerLike_isReady
    | typeof FlowControllerLike_capacity
  >;

  return returns(
    mix(
      include(DisposableMixin, FlowControllerQueueMixin()),
      function TakeLastConsumerMixin(
        this: TPrototype,
        capacity: number,
      ): ConsumerLike<T> & IterableLike<T> {
        init(DisposableMixin, this);
        init(FlowControllerQueueMixin<T>(), this, {
          backpressureStrategy: DropOldestBackpressureStrategy,
          capacity,
        });
        return this;
      },
      props(),
      proto<TPrototype>({
        get [FlowControllerLike_isReady](): boolean {
          unsafeCast<ConsumerLike<T>>(this);
          const isCompleted = this[SinkLike_isCompleted];

          return !isCompleted;
        },

        get [FlowControllerLike_capacity](): number {
          return MAX_SAFE_INTEGER;
        },

        get [SinkLike_isCompleted]() {
          unsafeCast<DisposableLike>(this);
          return this[DisposableLike_isDisposed];
        },

        [EventListenerLike_notify](this: FlowControllerQueueLike<T>, item: T) {
          if (!this[DisposableLike_isDisposed]) {
            this[FlowControllerQueueLike_enqueue](item);
          }
        },

        [SinkLike_complete](this: DisposableLike) {
          this[DisposableLike_dispose]();
        },
      }),
    ),
  );
})();

export default TakeLastConsumerMixin;

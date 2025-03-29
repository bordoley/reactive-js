import {
  Mixin1,
  include,
  init,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { Optional, returns } from "../../functions.js";
import {
  BackpressureStrategy,
  CollectionEnumeratorLike,
  ConsumerLike,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  FlowControllerQueueLike,
  FlowControllerQueueLike_enqueue,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import DisposableMixin from "./DisposableMixin.js";
import FlowControllerQueueMixin from "./FlowControllerQueueMixin.js";

export const ConsumerQueueMixin: <T>() => Mixin1<
  ConsumerLike<T> & CollectionEnumeratorLike<T>,
  Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
  }>
> = /*@__PURE__*/ (<T>() => {
  type TPrototype = Pick<
    SinkLike<T>,
    | typeof EventListenerLike_notify
    | typeof SinkLike_complete
    | typeof SinkLike_isCompleted
  >;

  return returns(
    mix(
      include(DisposableMixin, FlowControllerQueueMixin()),
      function ConsumerQueue(
        this: TPrototype,
        options: Optional<{
          capacity?: number;
          backpressureStrategy?: BackpressureStrategy;
        }>,
      ): ConsumerLike<T> & CollectionEnumeratorLike<T> {
        init(DisposableMixin, this);
        init(FlowControllerQueueMixin<T>(), this, options);

        return this;
      },
      props(),
      proto<TPrototype>({
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

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
import { returns } from "../../functions.js";
import {
  BackPressureConfig_capacity,
  CollectionEnumeratorLike,
  ConsumerLike,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  DropOldestBackpressureStrategy,
  EventListenerLike_notify,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  QueueLike,
  QueueLike_enqueue,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import QueueMixin from "./QueueMixin.js";

const TakeLastConsumerMixin: <T>() => Mixin1<
  ConsumerLike<T> & CollectionEnumeratorLike<T>,
  number
> = /*@__PURE__*/ (<T>() => {
  type TPrototype = Pick<
    ConsumerLike<T>,
    | typeof EventListenerLike_notify
    | typeof SinkLike_complete
    | typeof SinkLike_isCompleted
    | typeof FlowControllerLike_isReady
    | typeof BackPressureConfig_capacity
    | typeof FlowControllerLike_addOnReadyListener
  >;

  return returns(
    mix(
      include(DisposableMixin, QueueMixin()),
      function TakeLastConsumerMixin(
        this: TPrototype,
        capacity: number,
      ): ConsumerLike<T> & CollectionEnumeratorLike<T> {
        init(DisposableMixin, this);
        init(QueueMixin<T>(), this, {
          backpressureStrategy: DropOldestBackpressureStrategy,
          capacity,
        });
        return this;
      },
      props(),
      proto<TPrototype>({
        get [FlowControllerLike_isReady](): boolean {
          unsafeCast<ConsumerLike<T>>(this);
          return !this[DisposableLike_isDisposed];
        },

        get [BackPressureConfig_capacity](): number {
          return MAX_SAFE_INTEGER;
        },

        get [SinkLike_isCompleted]() {
          unsafeCast<DisposableLike>(this);
          return this[DisposableLike_isDisposed];
        },

        [EventListenerLike_notify](this: QueueLike<T>, item: T) {
          if (!this[DisposableLike_isDisposed]) {
            this[QueueLike_enqueue](item);
          }
        },

        [SinkLike_complete](this: DisposableLike) {
          this[DisposableLike_dispose]();
        },

        [FlowControllerLike_addOnReadyListener](this: DisposableLike) {
          return Disposable.disposed;
        },
      }),
    ),
  );
})();

export default TakeLastConsumerMixin;

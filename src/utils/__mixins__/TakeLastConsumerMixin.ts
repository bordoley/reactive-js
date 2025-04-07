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
  CollectionEnumeratorLike,
  ConsumerLike,
  DisposableLike,
  DisposableLike_isDisposed,
  DropOldestBackpressureStrategy,
  EventListenerLike_notify,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  QueueLike,
  QueueableLike_enqueue,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import DisposeOnCompleteSinkMixin from "./DisposeOnCompleteSinkMixin.js";
import QueueMixin from "./QueueMixin.js";

const TakeLastConsumerMixin: <T>() => Mixin1<
  ConsumerLike<T> & CollectionEnumeratorLike<T>,
  number
> = /*@__PURE__*/ (<T>() => {
  type TPrototype = Pick<
    ConsumerLike<T>,
    | typeof EventListenerLike_notify
    | typeof FlowControllerLike_isReady
    | typeof FlowControllerLike_addOnReadyListener
  >;

  return returns(
    mix(
      include(DisposableMixin, QueueMixin(), DisposeOnCompleteSinkMixin()),
      function TakeLastConsumerMixin(
        this: TPrototype,
        capacity: number,
      ): ConsumerLike<T> & CollectionEnumeratorLike<T> {
        init(DisposableMixin, this);
        init(QueueMixin<T>(), this, {
          backpressureStrategy: DropOldestBackpressureStrategy,
          capacity,
        });
        init(DisposeOnCompleteSinkMixin(), this);
        return this;
      },
      props(),
      proto<TPrototype>({
        get [FlowControllerLike_isReady](): boolean {
          unsafeCast<ConsumerLike<T>>(this);
          return !this[DisposableLike_isDisposed];
        },

        [EventListenerLike_notify](this: QueueLike<T>, item: T) {
          if (!this[DisposableLike_isDisposed]) {
            this[QueueableLike_enqueue](item);
          }
        },

        [FlowControllerLike_addOnReadyListener](this: DisposableLike) {
          return Disposable.disposed;
        },
      }),
    ),
  );
})();

export default TakeLastConsumerMixin;

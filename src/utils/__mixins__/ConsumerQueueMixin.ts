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
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  QueueLike,
  QueueLike_enqueue,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import DisposableMixin from "./DisposableMixin.js";
import DisposeOnCompleteSinkMixin from "./DisposeOnCompleteSinkMixin.js";
import QueueMixin from "./QueueMixin.js";

export const ConsumerQueueMixin: <T>() => Mixin1<
  ConsumerLike<T> & CollectionEnumeratorLike<T>,
  Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
  }>
> = /*@__PURE__*/ (<T>() => {
  type TPrototype = Pick<
    ConsumerLike<T>,
    | typeof EventListenerLike_notify
    | typeof FlowControllerLike_addOnReadyListener
    | typeof FlowControllerLike_isReady
  >;

  return returns(
    mix(
      include(DisposableMixin, QueueMixin(), DisposeOnCompleteSinkMixin()),
      function ConsumerQueue(
        this: TPrototype,
        options: Optional<{
          capacity?: number;
          backpressureStrategy?: BackpressureStrategy;
        }>,
      ): ConsumerLike<T> & CollectionEnumeratorLike<T> {
        init(DisposableMixin, this);
        init(QueueMixin<T>(), this, options);
        init(DisposeOnCompleteSinkMixin(), this);

        return this;
      },
      props(),
      proto<TPrototype>({
        get [FlowControllerLike_isReady]() {
          unsafeCast<DisposableLike>(this);
          return !this[DisposableLike_isDisposed];
        },

        [EventListenerLike_notify](this: QueueLike<T>, item: T) {
          if (!this[DisposableLike_isDisposed]) {
            this[QueueLike_enqueue](item);
          }
        },

        [FlowControllerLike_addOnReadyListener](this: DisposableLike) {
          return Disposable.disposed;
        },
      }),
    ),
  );
})();

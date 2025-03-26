import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import {
  Mixin1,
  include,
  init,
  mix,
  props,
  proto,
  super_,
  unsafeCast,
} from "../../__internal__/mixins.js";
import Broadcaster_addEventHandler from "../../computations/Broadcaster/__private__/Broadcaster.addEventHandler.js";
import Broadcaster_keep from "../../computations/Broadcaster/__private__/Broadcaster.keep.js";
import Broadcaster_map from "../../computations/Broadcaster/__private__/Broadcaster.map.js";
import * as Publisher from "../../computations/Publisher.js";
import { PublisherLike } from "../../computations.js";
import {
  Comparator,
  Optional,
  SideEffect1,
  alwaysNone,
  isEqualTo,
  newInstance,
  none,
  pipe,
  raiseError,
  returns,
} from "../../functions.js";
import { clampPositiveInteger } from "../../math.js";
import {
  BackPressureError,
  BackpressureStrategy,
  CollectionEnumeratorLike_count,
  CollectionEnumeratorLike_peek,
  DisposableLike,
  DisposableLike_isDisposed,
  DropLatestBackpressureStrategy,
  DropOldestBackpressureStrategy,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_moveNext,
  EventListenerLike_notify,
  FlowControllerEnumeratorLike_addOnDataAvailableListener,
  FlowControllerEnumeratorLike_isDataAvailable,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_backpressureStrategy,
  FlowControllerLike_capacity,
  FlowControllerLike_isReady,
  FlowControllerQueueLike,
  FlowControllerQueueLike_enqueue,
  OverflowBackpressureStrategy,
  QueueLike,
  QueueLike_enqueue,
  ThrowBackpressureStrategy,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import QueueMixin from "./QueueMixin.js";

type TReturn<T> = Omit<FlowControllerQueueLike<T>, keyof DisposableLike>;
type TPrototype<T> = Omit<
  FlowControllerQueueLike<T>,
  | keyof DisposableLike
  | typeof CollectionEnumeratorLike_count
  | typeof EnumeratorLike_current
  | typeof EnumeratorLike_hasCurrent
  | typeof FlowControllerLike_capacity
  | typeof FlowControllerLike_backpressureStrategy
  | typeof CollectionEnumeratorLike_peek
  | typeof Symbol.iterator
>;

type TConfig<T> = Optional<{
  comparator?: Comparator<T>;
  backpressureStrategy?: BackpressureStrategy;
  capacity?: number;
}>;

const FlowControlledQueueMixin: <T>() => Mixin1<
  TReturn<T>,
  TConfig<T>,
  TPrototype<T>
> = /*@__PURE__*/ (<T>() => {
  const FlowControlledQueueMixin_onReadyPublisher = Symbol(
    "FlowControlledQueueMixin_onReadyPublisher",
  );

  type TProperties = {
    [FlowControllerLike_capacity]: number;
    [FlowControllerLike_backpressureStrategy]: BackpressureStrategy;
    [FlowControllerLike_capacity]: number;
    [EnumeratorLike_current]: T;
    [EnumeratorLike_hasCurrent]: boolean;
    [CollectionEnumeratorLike_count]: number;
    [FlowControlledQueueMixin_onReadyPublisher]: Optional<
      PublisherLike<"ready" | "data_ready">
    >;
  };

  return returns(
    mix(
      include(QueueMixin()),
      function FlowControlledQueueMixin(
        this: TPrototype<T> & TProperties,
        config: TConfig<T>,
      ): TReturn<T> {
        init(QueueMixin<T>(), this, config);

        this[FlowControllerLike_backpressureStrategy] =
          config?.backpressureStrategy ?? OverflowBackpressureStrategy;
        this[FlowControllerLike_capacity] = clampPositiveInteger(
          config?.capacity ?? MAX_SAFE_INTEGER,
        );

        return this;
      },
      props<TProperties>({
        [FlowControllerLike_capacity]: MAX_SAFE_INTEGER,
        [FlowControllerLike_backpressureStrategy]: OverflowBackpressureStrategy,
        [EnumeratorLike_current]: none,
        [EnumeratorLike_hasCurrent]: false,
        [CollectionEnumeratorLike_count]: 0,
        [FlowControlledQueueMixin_onReadyPublisher]: none,
      }),
      proto<TPrototype<T>>({
        get [FlowControllerLike_isReady]() {
          unsafeCast<TProperties & FlowControllerQueueLike<T>>(this);
          const count = this[CollectionEnumeratorLike_count];
          const capacity = this[FlowControllerLike_capacity];
          const isDisposed = this[DisposableLike_isDisposed];

          return count < capacity && !isDisposed;
        },

        get [FlowControllerEnumeratorLike_isDataAvailable](): boolean {
          unsafeCast<TProperties>(this);
          const count = this[CollectionEnumeratorLike_count];
          return count > 0;
        },

        [EnumeratorLike_moveNext](
          this: TProperties & FlowControllerQueueLike<T>,
        ) {
          const count = this[CollectionEnumeratorLike_count];
          const capacity = this[FlowControllerLike_capacity];
          const isDisposed = this[DisposableLike_isDisposed];
          const onReadySignal = this[FlowControlledQueueMixin_onReadyPublisher];
          const shouldNotifyReady =
            count === capacity && capacity > 0 && !isDisposed;

          const result = super_(QueueMixin(), this, EnumeratorLike_moveNext);

          shouldNotifyReady &&
            onReadySignal?.[EventListenerLike_notify]("ready");

          return result;
        },

        [FlowControllerQueueLike_enqueue](
          this: TProperties & FlowControllerQueueLike<T> & QueueLike<T>,
          item: T,
        ) {
          const isDisposed = this[DisposableLike_isDisposed];
          const backpressureStrategy =
            this[FlowControllerLike_backpressureStrategy];
          const capacity = this[FlowControllerLike_capacity];
          const applyBackpressure =
            this[CollectionEnumeratorLike_count] >= capacity;
          const oldCount = this[CollectionEnumeratorLike_count];

          if (
            (backpressureStrategy === DropLatestBackpressureStrategy &&
              applyBackpressure) ||
            // Special case the 0 capacity queue so that we don't fall through
            // to pushing an item onto the queue
            (backpressureStrategy === DropOldestBackpressureStrategy &&
              capacity === 0) ||
            isDisposed
          ) {
            return;
          } else if (
            backpressureStrategy === DropOldestBackpressureStrategy &&
            applyBackpressure
          ) {
            // We want to pop off the oldest value first, before enqueueing
            // to avoid unintentionally growing the queue.

            this[EnumeratorLike_moveNext]();
          } else if (
            backpressureStrategy === ThrowBackpressureStrategy &&
            applyBackpressure
          ) {
            raiseError(newInstance(BackPressureError, this));
          }

          this[QueueLike_enqueue](item);

          const newCount = this[CollectionEnumeratorLike_count];
          const shouldNotify = oldCount < 1 && newCount >= 1;

          shouldNotify &&
            this[FlowControlledQueueMixin_onReadyPublisher]?.[
              EventListenerLike_notify
            ]("data_ready");
        },

        [FlowControllerEnumeratorLike_addOnDataAvailableListener](
          this: TProperties & DisposableLike,
          callback: SideEffect1<void>,
        ) {
          const publisher =
            this[FlowControlledQueueMixin_onReadyPublisher] ??
            (() => {
              const publisher = pipe(
                Publisher.create<"ready" | "data_ready">(),
                Disposable.addTo(this),
              );
              this[FlowControlledQueueMixin_onReadyPublisher] = publisher;
              return publisher;
            })();

          // FIXME: Could memoize
          return pipe(
            publisher,
            Broadcaster_keep(isEqualTo("data_ready")),
            Broadcaster_map(alwaysNone),
            Broadcaster_addEventHandler(callback),
            Disposable.addTo(this),
          );
        },

        [FlowControllerLike_addOnReadyListener](
          this: TProperties & DisposableLike,
          callback: SideEffect1<void>,
        ) {
          const publisher =
            this[FlowControlledQueueMixin_onReadyPublisher] ??
            (() => {
              const publisher = pipe(
                Publisher.create<"ready" | "data_ready">(),
                Disposable.addTo(this),
              );
              this[FlowControlledQueueMixin_onReadyPublisher] = publisher;
              return publisher;
            })();

          // FIXME: Could memoize
          return pipe(
            publisher,
            Broadcaster_keep(isEqualTo("ready")),
            Broadcaster_map(alwaysNone),
            Broadcaster_addEventHandler(callback),
            Disposable.addTo(this),
          );
        },
      }),
    ),
  );
})();

export default FlowControlledQueueMixin;

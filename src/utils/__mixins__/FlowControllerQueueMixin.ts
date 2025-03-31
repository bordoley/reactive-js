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
  call,
  isEqualTo,
  none,
  pipe,
  returns,
} from "../../functions.js";
import {
  BackPressureConfig_capacity,
  BackPressureConfig_strategy,
  BackpressureStrategy,
  CollectionEnumeratorLike_count,
  CollectionEnumeratorLike_peek,
  DisposableLike,
  DisposableLike_isDisposed,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_moveNext,
  EventListenerLike_notify,
  FlowControllerEnumeratorLike_addOnDataAvailableListener,
  FlowControllerEnumeratorLike_isDataAvailable,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  FlowControllerQueueLike,
  QueueLike,
  QueueLike_enqueue,
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
  | typeof BackPressureConfig_capacity
  | typeof BackPressureConfig_strategy
  | typeof CollectionEnumeratorLike_peek
  | typeof Symbol.iterator
>;

type TConfig<T> = Optional<{
  comparator?: Comparator<T>;
  backpressureStrategy?: BackpressureStrategy;
  capacity?: number;
}>;

const FlowControllerQueueMixin: <T>() => Mixin1<
  TReturn<T>,
  TConfig<T>,
  TPrototype<T>
> = /*@__PURE__*/ (<T>() => {
  const FlowControllerQueueMixin_onReadyPublisher = Symbol(
    "FlowControllerQueueMixin_onReadyPublisher",
  );

  type TProperties = {
    [EnumeratorLike_current]: T;
    [EnumeratorLike_hasCurrent]: boolean;
    [CollectionEnumeratorLike_count]: number;
    [FlowControllerQueueMixin_onReadyPublisher]: Optional<
      PublisherLike<"ready" | "data_ready">
    >;
  };

  function createPublisher(
    this: TProperties & DisposableLike,
  ): PublisherLike<"ready" | "data_ready"> {
    const publisher = pipe(
      // FIXME: Maybe we should have a constructor flag to set this
      // to use an async publisher. Better for real work, harder for tests.
      Publisher.create<"ready" | "data_ready">(),
      Disposable.addTo(this),
    );
    this[FlowControllerQueueMixin_onReadyPublisher] = publisher;
    return publisher;
  }

  return returns(
    mix(
      include(QueueMixin()),
      function FlowControllerQueueMixin(
        this: TPrototype<T> & TProperties,
        config: TConfig<T>,
      ): TReturn<T> {
        init(QueueMixin<T>(), this, config);

        return this;
      },
      props<TProperties>({
        [EnumeratorLike_current]: none,
        [EnumeratorLike_hasCurrent]: false,
        [CollectionEnumeratorLike_count]: 0,
        [FlowControllerQueueMixin_onReadyPublisher]: none,
      }),
      proto<TPrototype<T>>({
        get [FlowControllerLike_isReady]() {
          unsafeCast<TProperties & FlowControllerQueueLike<T>>(this);
          const count = this[CollectionEnumeratorLike_count];
          const capacity = this[BackPressureConfig_capacity];
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
          const capacity = this[BackPressureConfig_capacity];
          const isDisposed = this[DisposableLike_isDisposed];
          const onReadySignal = this[FlowControllerQueueMixin_onReadyPublisher];
          const shouldNotifyReady =
            count === capacity && capacity > 0 && !isDisposed;

          const result = super_(QueueMixin(), this, EnumeratorLike_moveNext);

          shouldNotifyReady &&
            onReadySignal?.[EventListenerLike_notify]("ready");

          return result;
        },

        [QueueLike_enqueue](
          this: TProperties & FlowControllerQueueLike<T> & QueueLike<T>,
          item: T,
        ) {
          const oldCount = this[CollectionEnumeratorLike_count];

          super_(QueueMixin(), this, QueueLike_enqueue, item);

          const newCount = this[CollectionEnumeratorLike_count];
          const shouldNotify = oldCount < 1 && newCount >= 1;

          shouldNotify &&
            this[FlowControllerQueueMixin_onReadyPublisher]?.[
              EventListenerLike_notify
            ]("data_ready");
        },

        [FlowControllerEnumeratorLike_addOnDataAvailableListener](
          this: TProperties & DisposableLike,
          callback: SideEffect1<void>,
        ) {
          const publisher =
            this[FlowControllerQueueMixin_onReadyPublisher] ??
            call(createPublisher, this);

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
            this[FlowControllerQueueMixin_onReadyPublisher] ??
            call(createPublisher, this);

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

export default FlowControllerQueueMixin;

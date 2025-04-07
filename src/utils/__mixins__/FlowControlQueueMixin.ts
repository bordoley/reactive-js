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
  bind,
  call,
  isEqualTo,
  none,
  pipe,
  returns,
} from "../../functions.js";
import {
  AsyncEnumeratorLike_current,
  AsyncEnumeratorLike_hasCurrent,
  AsyncEnumeratorLike_moveNext,
  BackpressureStrategy,
  CollectionEnumeratorLike_count,
  CollectionEnumeratorLike_peek,
  ConsumableEnumeratorLike_addOnDataAvailableListener,
  ConsumableEnumeratorLike_isDataAvailable,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_moveNext,
  EventListenerLike_notify,
  FlowControlQueueLike,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  QueueLike,
  QueueLike_backpressureStrategy,
  QueueLike_capacity,
  QueueableLike_enqueue,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as DisposableContainer from "../DisposableContainer.js";
import QueueMixin from "./QueueMixin.js";

type TReturn<T> = Omit<FlowControlQueueLike<T>, keyof DisposableLike>;
type TPrototype<T> = Omit<
  FlowControlQueueLike<T>,
  | keyof DisposableLike
  | typeof CollectionEnumeratorLike_count
  | typeof EnumeratorLike_current
  | typeof EnumeratorLike_hasCurrent
  | typeof QueueLike_capacity
  | typeof QueueLike_backpressureStrategy
  | typeof CollectionEnumeratorLike_peek
  | typeof Symbol.iterator
>;

type TConfig<T> = Optional<{
  comparator?: Comparator<T>;
  backpressureStrategy?: BackpressureStrategy;
  capacity?: number;
}>;

const FlowControlQueueMixin: <T>() => Mixin1<
  TReturn<T>,
  TConfig<T>,
  TPrototype<T>
> = /*@__PURE__*/ (<T>() => {
  const FlowControlQueueMixin_onReadyPublisher = Symbol(
    "FlowControlQueueMixin_onReadyPublisher",
  );

  type TProperties = {
    [EnumeratorLike_current]: T;
    [EnumeratorLike_hasCurrent]: boolean;
    [CollectionEnumeratorLike_count]: number;
    [FlowControlQueueMixin_onReadyPublisher]: Optional<
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
    this[FlowControlQueueMixin_onReadyPublisher] = publisher;
    return publisher;
  }

  function asyncEnumeratorMoveNext<T>(
    this: FlowControlQueueLike<T>,
    resolve: (value: boolean) => void,
    reject: (reason?: any) => void,
  ) {
    if (this[EnumeratorLike_moveNext]()) {
      resolve(true);
      return;
    }

    const disposable = pipe(
      Disposable.create(),
      Disposable.add(
        this[ConsumableEnumeratorLike_addOnDataAvailableListener](async () => {
          disposable[DisposableLike_dispose]();
        }),
      ),
      DisposableContainer.onError(reject),
      DisposableContainer.onComplete(() => {
        const hasNext = this[EnumeratorLike_moveNext]();
        resolve(hasNext);
      }),
      Disposable.addTo(this),
    );
  }

  return returns(
    mix(
      include(QueueMixin()),
      function FlowControlQueueMixin(
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
        [FlowControlQueueMixin_onReadyPublisher]: none,
      }),
      proto<TPrototype<T>>({
        get [FlowControllerLike_isReady]() {
          unsafeCast<TProperties & FlowControlQueueLike<T>>(this);
          const count = this[CollectionEnumeratorLike_count];
          const capacity = this[QueueLike_capacity];
          const isDisposed = this[DisposableLike_isDisposed];

          return count < capacity && !isDisposed;
        },

        get [ConsumableEnumeratorLike_isDataAvailable](): boolean {
          unsafeCast<TProperties>(this);
          const count = this[CollectionEnumeratorLike_count];
          return count > 0;
        },

        get [AsyncEnumeratorLike_current]() {
          unsafeCast<TProperties>(this);
          return this[EnumeratorLike_current];
        },

        get [AsyncEnumeratorLike_hasCurrent]() {
          unsafeCast<TProperties>(this);
          return this[EnumeratorLike_hasCurrent];
        },

        [AsyncEnumeratorLike_moveNext](this: TProperties) {
          return new Promise(bind(asyncEnumeratorMoveNext, this));
        },

        [EnumeratorLike_moveNext](this: TProperties & FlowControlQueueLike<T>) {
          const count = this[CollectionEnumeratorLike_count];
          const capacity = this[QueueLike_capacity];
          const isDisposed = this[DisposableLike_isDisposed];
          const onReadySignal = this[FlowControlQueueMixin_onReadyPublisher];
          const shouldNotifyReady =
            count === capacity && capacity > 0 && !isDisposed;

          const result = super_(QueueMixin(), this, EnumeratorLike_moveNext);

          shouldNotifyReady &&
            onReadySignal?.[EventListenerLike_notify]("ready");

          return result;
        },

        [QueueableLike_enqueue](
          this: TProperties & FlowControlQueueLike<T> & QueueLike<T>,
          item: T,
        ) {
          const oldCount = this[CollectionEnumeratorLike_count];

          super_(QueueMixin(), this, QueueableLike_enqueue, item);

          const newCount = this[CollectionEnumeratorLike_count];
          const shouldNotify = oldCount < 1 && newCount >= 1;

          shouldNotify &&
            this[FlowControlQueueMixin_onReadyPublisher]?.[
              EventListenerLike_notify
            ]("data_ready");
        },

        [ConsumableEnumeratorLike_addOnDataAvailableListener](
          this: TProperties & DisposableLike,
          callback: SideEffect1<void>,
        ) {
          const publisher =
            this[FlowControlQueueMixin_onReadyPublisher] ??
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
            this[FlowControlQueueMixin_onReadyPublisher] ??
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

export default FlowControlQueueMixin;

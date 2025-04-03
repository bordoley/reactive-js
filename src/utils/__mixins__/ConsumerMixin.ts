import {
  Mixin2,
  include,
  init,
  mix,
  props,
  proto,
} from "../../__internal__/mixins.js";
import { Optional, bind, call, pipe, returns } from "../../functions.js";
import {
  BackpressureStrategy,
  ConsumerLike,
  DisposableLike,
  DisposableLike_isDisposed,
  EnumeratorLike_current,
  EnumeratorLike_moveNext,
  EventListenerLike_notify,
  FlowControllerEnumeratorLike_addOnDataAvailableListener,
  FlowControllerEnumeratorLike_isDataAvailable,
  FlowControllerLike,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  FlowControllerQueueLike,
  QueueLike_enqueue,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import FlowControllerQueueMixin from "./FlowControllerQueueMixin.js";
import SinkMixin, {
  SinkMixinLike,
  SinkMixinLike_delegate,
  SinkMixinLike_doComplete,
  SinkMixinLike_doNotify,
  SinkMixinLike_isCompleted,
} from "./SinkMixin.js";

type TReturn<TConsumer extends ConsumerLike, T> = SinkMixinLike<TConsumer, T> &
  Omit<ConsumerLike<T>, keyof DisposableLike>;

type TPrototype<TConsumer extends ConsumerLike, T> = Omit<
  ConsumerLike<T> & SinkMixinLike<TConsumer, T>,
  | keyof DisposableLike
  | keyof FlowControllerLike
  | typeof SinkMixinLike_delegate
  | typeof SinkLike_isCompleted
  | typeof SinkMixinLike_doNotify
  | typeof SinkMixinLike_doComplete
  | typeof SinkMixinLike_isCompleted
>;

const ConsumerMixin: <TConsumer extends ConsumerLike<T>, T>() => Mixin2<
  TReturn<TConsumer, T>,
  TConsumer,
  Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
  }>,
  TPrototype<TConsumer, T>,
  DisposableLike
> = /*@__PURE__*/ (<TConsumer extends ConsumerLike<T>, T>() => {
  async function drainQueue(this: TThis) {
    const consumer = this[SinkMixinLike_delegate];
    const isConsumerReady = consumer[FlowControllerLike_isReady];
    const isDraininig = this[ConsumerMixin_isDraining];

    if (isDraininig || !isConsumerReady) {
      return;
    }
    this[ConsumerMixin_isDraining] = true;

    while (
      this[FlowControllerEnumeratorLike_isDataAvailable] &&
      !consumer[SinkLike_isCompleted] &&
      !this[DisposableLike_isDisposed]
    ) {
      // Avoid dequeing values if the downstream consumer
      // is applying backpressure.
      if (!consumer[FlowControllerLike_isReady]) {
        break;
      }

      this[EnumeratorLike_moveNext]();
      const next = this[EnumeratorLike_current] as T;
      this[SinkMixinLike_doNotify](next);

      await Promise.resolve();
    }

    if (this[SinkLike_isCompleted]) {
      this[SinkMixinLike_doComplete]();
    }
    this[ConsumerMixin_isDraining] = false;
  }

  const ConsumerMixin_isDraining = Symbol("ConsumerMixin_isDraining");

  type TProperties = {
    [ConsumerMixin_isDraining]: boolean;
  };

  type TThis = TProperties &
    ConsumerLike<T> &
    FlowControllerQueueLike<T> &
    SinkMixinLike<TConsumer, T>;

  return returns(
    mix<
      TReturn<TConsumer, T>,
      ReturnType<typeof FlowControllerQueueMixin>,
      TProperties,
      TPrototype<TConsumer, T>,
      DisposableLike,
      TConsumer,
      Optional<{
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
      }>
    >(
      include(FlowControllerQueueMixin(), SinkMixin()),
      function ConsumerMixin(
        this: TProperties & TPrototype<TConsumer, T> & DisposableLike,
        consumer: TConsumer,
        options: Optional<{
          capacity?: number;
          backpressureStrategy?: BackpressureStrategy;
        }>,
      ): TReturn<TConsumer, T> {
        init(FlowControllerQueueMixin<T>(), this, options);
        init(SinkMixin<TConsumer, T>(), this, consumer);

        this[FlowControllerEnumeratorLike_addOnDataAvailableListener](
          bind(drainQueue, this),
        );

        pipe(
          this,
          Disposable.add(
            consumer[FlowControllerLike_addOnReadyListener](
              bind(drainQueue, this),
            ),
          ),
        );

        return this;
      },
      props<TProperties>({
        [ConsumerMixin_isDraining]: false,
      }),
      proto<TPrototype<TConsumer, T>>({
        [EventListenerLike_notify](this: TThis, next: T) {
          const isCompleted = this[SinkLike_isCompleted];

          // Make queueing decisions based upon whether the root non-lifted consumer
          // wants to apply back pressure, as lifted sinks just pass through
          // notifications and never queue.
          const consumer = this[SinkMixinLike_delegate];
          const isDelegateReady = consumer[FlowControllerLike_isReady];
          const hasQueuedEvents =
            this[FlowControllerEnumeratorLike_isDataAvailable];

          const shouldNotify =
            !isCompleted && isDelegateReady && !hasQueuedEvents;

          if (shouldNotify) {
            this[SinkMixinLike_doNotify](next);
          } else if (!isCompleted) {
            this[QueueLike_enqueue](next);
          }
        },

        [SinkLike_complete](this: TThis) {
          const isCompleted = this[SinkLike_isCompleted];
          this[SinkMixinLike_isCompleted] = true;

          const hasQueuedEvents =
            this[FlowControllerEnumeratorLike_isDataAvailable];

          if (isCompleted) {
            return;
          }

          if (!hasQueuedEvents) {
            this[SinkMixinLike_doComplete]();
          } else {
            call(drainQueue, this);
          }
        },
      }),
    ),
  );
})();

export default ConsumerMixin;

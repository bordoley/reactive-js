import {
  Mixin2,
  include,
  init,
  mix,
  props,
  proto,
} from "../../__internal__/mixins.js";
import { Optional, bind, call, none, pipe, returns } from "../../functions.js";
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
  FlowControllerQueueLike_enqueue,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as DisposableContainer from "../DisposableContainer.js";
import FlowControllerQueueMixin from "./FlowControllerQueueMixin.js";

export const ConsumerMixinLike_notify = Symbol("ConsumerMixinLike_notify");
export const ConsumerMixinLike_complete = Symbol("ConsumerMixinLike_complete");
export const ConsumerMixinLike_consumer = Symbol("ConsumerMixinLike_consumer");

export interface ConsumerMixinLike<TConsumer extends ConsumerLike, T> {
  readonly [ConsumerMixinLike_consumer]: TConsumer;
  [ConsumerMixinLike_notify](next: T): void;
  [ConsumerMixinLike_complete](): void;
}

type TReturn<TConsumer extends ConsumerLike, T> = ConsumerMixinLike<
  TConsumer,
  T
> &
  Omit<ConsumerLike<T>, keyof DisposableLike>;

type TPrototype<TConsumer extends ConsumerLike, T> = Omit<
  ConsumerLike<T> & ConsumerMixinLike<TConsumer, T>,
  | keyof DisposableLike
  | keyof FlowControllerLike
  | typeof SinkLike_isCompleted
  | typeof ConsumerMixinLike_consumer
>;

const ConsumerMixin: <TConsumer extends ConsumerLike, T>() => Mixin2<
  TReturn<TConsumer, T>,
  TConsumer,
  Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
  }>,
  TPrototype<TConsumer, T>,
  DisposableLike
> = /*@__PURE__*/ (<TConsumer extends ConsumerLike, T>() => {
  async function drainQueue(this: TThis) {
    const consumer = this[ConsumerMixinLike_consumer];
    const isConsumerReady = consumer[FlowControllerLike_isReady];
    const isDraininig = this[ConsumerMixin_isDraining];

    if (isDraininig || !isConsumerReady) {
      return;
    }
    this[ConsumerMixin_isDraining] = true;

    while (
      this[FlowControllerEnumeratorLike_isDataAvailable] &&
      !this[DisposableLike_isDisposed]
    ) {
      // Avoid dequeing values if the downstream consumer
      // is applying backpressure.
      if (!consumer[FlowControllerLike_isReady]) {
        break;
      }

      this[EnumeratorLike_moveNext]();
      const next = this[EnumeratorLike_current] as T;
      this[ConsumerMixinLike_notify](next);

      await Promise.resolve();
    }

    if (this[SinkLike_isCompleted]) {
      this[ConsumerMixinLike_complete]();
    }
    this[ConsumerMixin_isDraining] = false;
  }

  function onConsumerDisposed(this: TProperties) {
    this[SinkLike_isCompleted] = true;
  }

  const ConsumerMixin_isDraining = Symbol("ConsumerMixin_isDraining");

  type TProperties = {
    [ConsumerMixinLike_consumer]: TConsumer;
    [SinkLike_isCompleted]: boolean;
    [ConsumerMixin_isDraining]: boolean;
  };

  type TThis = TProperties &
    ConsumerLike<T> &
    FlowControllerQueueLike<T> &
    ConsumerMixinLike<TConsumer, T>;

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
      include(FlowControllerQueueMixin()),
      function ConsumerMixin(
        this: TProperties & TPrototype<TConsumer, T> & DisposableLike,
        consumer: TConsumer,
        options: Optional<{
          capacity?: number;
          backpressureStrategy?: BackpressureStrategy;
        }>,
      ): TReturn<TConsumer, T> {
        init(FlowControllerQueueMixin<T>(), this, options);
        this[ConsumerMixinLike_consumer] = consumer;

        this[FlowControllerEnumeratorLike_addOnDataAvailableListener](
          bind(drainQueue, this),
        );

        pipe(
          this,
          DisposableContainer.onDisposed(onConsumerDisposed),
          Disposable.add(
            consumer[FlowControllerLike_addOnReadyListener](
              bind(drainQueue, this),
            ),
          ),
        );

        return this;
      },
      props<TProperties>({
        [ConsumerMixinLike_consumer]: none,
        [SinkLike_isCompleted]: false,
        [ConsumerMixin_isDraining]: false,
      }),
      proto<TPrototype<TConsumer, T>>({
        [EventListenerLike_notify](this: TThis, next: T) {
          const isCompleted = this[SinkLike_isCompleted];

          // Make queueing decisions based upon whether the root non-lifted consumer
          // wants to apply back pressure, as lifted sinks just pass through
          // notifications and never queue.
          const consumer = this[ConsumerMixinLike_consumer];
          const isDelegateReady = consumer[FlowControllerLike_isReady];
          const hasQueuedEvents =
            this[FlowControllerEnumeratorLike_isDataAvailable];

          const shouldNotify =
            !isCompleted && isDelegateReady && !hasQueuedEvents;

          if (shouldNotify) {
            this[ConsumerMixinLike_notify](next);
          } else if (!isCompleted) {
            this[FlowControllerQueueLike_enqueue](next);
          }
        },

        [SinkLike_complete](this: TThis) {
          const isCompleted = this[SinkLike_isCompleted];
          this[SinkLike_isCompleted] = true;

          const hasQueuedEvents =
            this[FlowControllerEnumeratorLike_isDataAvailable];

          if (isCompleted) {
            return;
          }

          if (!hasQueuedEvents) {
            this[ConsumerMixinLike_complete]();
          } else {
            call(drainQueue, this);
          }
        },

        [ConsumerMixinLike_notify](_next: T) {},

        [ConsumerMixinLike_complete]() {},
      }),
    ),
  );
})();

export default ConsumerMixin;

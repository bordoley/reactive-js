import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import {
  Mixin1,
  createInstanceFactory,
  include,
  init,
  mix,
  mixInstanceFactory,
  props,
  proto,
} from "../__internal__/mixins.js";
import { Function1, none, pipe, returns } from "../functions.js";
import {
  BackpressureStrategy,
  ConsumerLike,
  ConsumerLike_addOnReadyListener,
  ConsumerLike_backpressureStrategy,
  ConsumerLike_capacity,
  ConsumerLike_isReady,
  DisposableLike,
  DisposableLike_dispose,
  EventListenerLike,
  EventListenerLike_notify,
  ObserverLike,
  OverflowBackpressureStrategy,
  SchedulerLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../utils.js";
import * as Disposable from "./Disposable.js";
import DelegatingDisposableMixin from "./__mixins__/DelegatingDisposableMixin.js";
import DelegatingSchedulerMixin from "./__mixins__/DelegatingSchedulerMixin.js";

export interface ConsumerModule {
  toConsumer<T>(): Function1<EventListenerLike<T>, ConsumerLike<T>>;
  toObserver<T>(
    scheduler: SchedulerLike,
  ): Function1<EventListenerLike<T>, ObserverLike<T>>;
}

export type Signature = ConsumerModule;

const EventListenerToConsumerMixin: <T>() => Mixin1<
  ConsumerLike<T>,
  EventListenerLike<T>
> = /*@__PURE__*/ (<T>() => {
  const EventListenerToConsumer_delegate = Symbol(
    "EventListenerToConsumer_delegate",
  );

  type TProperties = {
    [EventListenerToConsumer_delegate]: EventListenerLike<T>;
    [SinkLike_isCompleted]: boolean;
  };

  return returns(
    mix(
      include(DelegatingDisposableMixin),
      function EventListenerToConsumer(
        this: TProperties &
          Omit<ConsumerLike<T>, keyof DisposableLike | keyof SchedulerLike>,
        listener: EventListenerLike<T>,
      ): ConsumerLike<T> {
        init(DelegatingDisposableMixin, this, listener);

        this[EventListenerToConsumer_delegate] = listener;

        return this;
      },
      props<TProperties>({
        [EventListenerToConsumer_delegate]: none,
        [SinkLike_isCompleted]: false,
      }),
      proto({
        [ConsumerLike_isReady]: true,
        [ConsumerLike_backpressureStrategy]:
          OverflowBackpressureStrategy as BackpressureStrategy,
        [ConsumerLike_capacity]: MAX_SAFE_INTEGER,

        [ConsumerLike_addOnReadyListener]() {
          return Disposable.disposed;
        },
        [EventListenerLike_notify](this: TProperties, next: T) {
          if (!this[SinkLike_isCompleted]) {
            this[EventListenerToConsumer_delegate][EventListenerLike_notify](
              next,
            );
          }
        },
        [SinkLike_complete](this: TProperties & ConsumerLike<T>) {
          this[SinkLike_isCompleted] = true;
          this[DisposableLike_dispose]();
        },
      }),
    ),
  );
})();

export const toConsumer: Signature["toConsumer"] = /*@__PURE__*/ (<T>() => {
  const createSinkObserver = createInstanceFactory(
    EventListenerToConsumerMixin<T>(),
  );
  return returns(createSinkObserver);
})();

export const toObserver: Signature["toObserver"] = /*@__PURE__*/ (<T>() => {
  const createSinkObserver = mixInstanceFactory(
    include(
      DelegatingDisposableMixin,
      DelegatingSchedulerMixin,
      EventListenerToConsumerMixin(),
    ),
    function EventListenerToObserver(
      this: unknown,
      listener: EventListenerLike<T>,
      scheduler: SchedulerLike,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, listener);
      init(DelegatingSchedulerMixin, this, scheduler);
      init(EventListenerToConsumerMixin(), this, listener);

      return this;
    },
  );

  return (scheduler: SchedulerLike) => (sink: EventListenerLike<T>) =>
    pipe(
      createSinkObserver(sink, scheduler),
      Disposable.addToContainer(scheduler),
    );
})();

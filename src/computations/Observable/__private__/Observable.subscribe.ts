import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import {
  ObservableLike,
  ObservableLike_observe,
} from "../../../computations.js";
import {
  Method1,
  Optional,
  SideEffect1,
  bind,
  identity,
  isSome,
  none,
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import {
  BackpressureStrategy,
  ContinuationContextLike,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  ObserverLike,
  OverflowBackpressureStrategy,
  QueueableLike,
  QueueableLike_addOnReadyListener,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_isReady,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";

const Observable_subscribe: Observable.Signature["subscribe"] = /*@__PURE__*/ (<
  T,
>() => {
  const SubscribeObserver_scheduler = Symbol("SubscribeObserver_scheduler");
  const SubscribeObserver_schedulerCallback = Symbol(
    "SubscribeObserver_schedulerCallback",
  );

  const SubscribeObserver_consumer = Symbol("SubscribeObserver_consumer");

  type TProperties = {
    [SubscribeObserver_scheduler]: SchedulerLike;
    [SubscribeObserver_schedulerCallback]: Method1<
      SideEffect1<ContinuationContextLike>,
      ContinuationContextLike
    >;
    [SchedulerLike_inContinuation]: boolean;
    [SubscribeObserver_consumer]: Optional<QueueableLike<T>>;
  };

  const createObserver = mixInstanceFactory(
    include(DisposableMixin),
    function SubscribeObserver(
      this: TProperties & Omit<ObserverLike<T>, keyof DisposableLike>,
      scheduler: SchedulerLike,
      consumer: Optional<QueueableLike<T>>,
    ): ObserverLike<T> {
      init(DisposableMixin, this);
      this[SubscribeObserver_scheduler] = scheduler;
      this[SubscribeObserver_consumer] = consumer;

      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const instance = this;
      this[SubscribeObserver_schedulerCallback] =
        function SubscribeObserverchedulerCallback(
          this: SideEffect1<ContinuationContextLike>,
          ctx: ContinuationContextLike,
        ) {
          instance[SchedulerLike_inContinuation] = true;
          this(ctx);
          instance[SchedulerLike_inContinuation] = false;
        };

      return this;
    },
    props<TProperties>({
      [SubscribeObserver_scheduler]: none,
      [SubscribeObserver_schedulerCallback]: none,
      [SchedulerLike_inContinuation]: false,
      [SubscribeObserver_consumer]: none,
    }),
    proto({
      [QueueableLike_capacity]: MAX_SAFE_INTEGER,
      [QueueableLike_backpressureStrategy]:
        OverflowBackpressureStrategy as BackpressureStrategy,

      get [SinkLike_isCompleted]() {
        unsafeCast<DisposableLike & TProperties>(this);
        return (
          this[SubscribeObserver_consumer]?.[SinkLike_isCompleted] ??
          this[DisposableLike_isDisposed]
        );
      },

      get [QueueableLike_isReady](): boolean {
        unsafeCast<QueueableLike & TProperties>(this);
        return (
          this[SubscribeObserver_consumer]?.[QueueableLike_isReady] ??
          !this[DisposableLike_isDisposed]
        );
      },

      get [SchedulerLike_now]() {
        unsafeCast<TProperties>(this);
        return this[SubscribeObserver_scheduler][SchedulerLike_now];
      },

      get [SchedulerLike_shouldYield]() {
        unsafeCast<TProperties>(this);
        return this[SubscribeObserver_scheduler][SchedulerLike_shouldYield];
      },

      get [SchedulerLike_maxYieldInterval]() {
        unsafeCast<TProperties>(this);
        return this[SubscribeObserver_scheduler][
          SchedulerLike_maxYieldInterval
        ];
      },

      [QueueableLike_addOnReadyListener](
        this: TProperties,
        callback: SideEffect1<void>,
      ): DisposableLike {
        return (
          this[SubscribeObserver_consumer]?.[QueueableLike_addOnReadyListener](
            callback,
          ) ?? Disposable.disposed
        );
      },

      [EventListenerLike_notify](this: TProperties, next: T) {
        this[SubscribeObserver_consumer]?.[EventListenerLike_notify](next);
      },

      [SinkLike_complete](this: DisposableLike & TProperties) {
        this[SubscribeObserver_consumer]?.[SinkLike_complete]();
        this[DisposableLike_dispose]();
      },

      [SchedulerLike_requestYield](this: TProperties) {
        return this[SubscribeObserver_scheduler][SchedulerLike_requestYield]();
      },

      [SchedulerLike_schedule](
        this: TProperties & DisposableLike,
        continuation: SideEffect1<ContinuationContextLike>,
        options?: {
          readonly delay?: number;
        },
      ): DisposableLike {
        return pipe(
          this[SubscribeObserver_scheduler][SchedulerLike_schedule](
            bind(this[SubscribeObserver_schedulerCallback], continuation),
            options,
          ),
          Disposable.addToContainer(this),
        );
      },
    }),
  );

  return (
      scheduler: SchedulerLike,
      options?: {
        subscriber?: QueueableLike<T>;
      },
    ) =>
    (observable: ObservableLike<T>) => {
      const { subscriber } = options ?? {};

      const observer = pipe(
        createObserver(scheduler, subscriber),
        Disposable.addToContainer(scheduler),
        isSome(subscriber) ? Disposable.addTo(subscriber) : identity,
      );

      observable[ObservableLike_observe](observer);

      return observer;
    };
})();

export default Observable_subscribe;

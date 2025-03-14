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
  SideEffect1,
  bind,
  newInstance,
  none,
  pipe,
  raise,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import {
  BackPressureError,
  BackpressureStrategy,
  ContinuationContextLike,
  DisposableContainerLike_add,
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
  ThrowBackpressureStrategy,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";

const createObserver: <T>(
  scheduler: SchedulerLike,
  config: Pick<
    QueueableLike,
    typeof QueueableLike_capacity | typeof QueueableLike_backpressureStrategy
  >,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const SubscribeObserver_scheduler = Symbol("SubscribeObserver_scheduler");
  const SubscribeObserver_schedulerCallback = Symbol(
    "SubscribeObserver_schedulerCallback",
  );

  type TProperties = {
    [SubscribeObserver_scheduler]: SchedulerLike;
    [SubscribeObserver_schedulerCallback]: Method1<
      SideEffect1<ContinuationContextLike>,
      ContinuationContextLike
    >;
    [SchedulerLike_inContinuation]: boolean;
    [QueueableLike_capacity]: number;
    [QueueableLike_backpressureStrategy]: BackpressureStrategy;
  };

  return mixInstanceFactory(
    include(DisposableMixin),
    function SubscribeObserver(
      this: TProperties & Omit<ObserverLike<T>, keyof DisposableLike>,
      scheduler: SchedulerLike,
      config: Pick<
        QueueableLike,
        | typeof QueueableLike_capacity
        | typeof QueueableLike_backpressureStrategy
      >,
    ): ObserverLike<T> {
      init(DisposableMixin, this);
      this[SubscribeObserver_scheduler] = scheduler;
      this[QueueableLike_capacity] = config[QueueableLike_capacity];
      this[QueueableLike_backpressureStrategy] =
        config[QueueableLike_backpressureStrategy];

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
      [QueueableLike_capacity]: MAX_SAFE_INTEGER,
      [QueueableLike_backpressureStrategy]: OverflowBackpressureStrategy,
    }),
    proto({
      get [SinkLike_isCompleted]() {
        unsafeCast<DisposableLike>(this);
        return this[DisposableLike_isDisposed];
      },

      get [QueueableLike_isReady]() {
        unsafeCast<QueueableLike>(this);
        return (
          this[QueueableLike_capacity] > 0 && !this[DisposableLike_isDisposed]
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
        _callback: SideEffect1<void>,
      ): DisposableLike {
        return Disposable.disposed;
      },

      [EventListenerLike_notify](this: QueueableLike) {
        const capacity = this[QueueableLike_capacity];
        const backpressureStrategy = this[QueueableLike_backpressureStrategy];

        if (
          capacity === 0 &&
          backpressureStrategy === ThrowBackpressureStrategy
        ) {
          raise(newInstance(BackPressureError, capacity, backpressureStrategy));
        }
      },

      [SinkLike_complete](this: DisposableLike) {
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
})();

const Observable_subscribe: Observable.Signature["subscribe"] =
  (
    scheduler: SchedulerLike,
    config?: {
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
    } & Partial<
      Pick<
        QueueableLike,
        | typeof QueueableLike_backpressureStrategy
        | typeof QueueableLike_capacity
      >
    >,
  ) =>
  (observable: ObservableLike) => {
    const queueConfig = {
      [QueueableLike_capacity]:
        config?.[QueueableLike_capacity] ??
        config?.capacity ??
        MAX_SAFE_INTEGER,
      [QueueableLike_backpressureStrategy]:
        config?.[QueueableLike_backpressureStrategy] ??
        config?.backpressureStrategy ??
        OverflowBackpressureStrategy,
    };

    const observer = createObserver(scheduler, queueConfig);
    scheduler[DisposableContainerLike_add](observer);
    observable[ObservableLike_observe](observer);
    return observer;
  };

export default Observable_subscribe;

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
  EventSourceLike,
  ObservableLike,
  ObservableLike_observe,
} from "../../../computations.js";
import { Method1, SideEffect1, bind, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import {
  BackpressureStrategy,
  ContinuationContextLike,
  DisposableContainerLike_add,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  ObserverLike,
  OverflowBackpressureStrategy,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_isReady,
  QueueableLike_onReady,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  SinkLike_complete,
  SinkLike_isCompleted,
  SinkLike_next,
} from "../../../utils.js";
import EventSource_never from "../../EventSource/__private__/EventSource.never.js";

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
    [QueueableLike_onReady]: EventSourceLike<void>;
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

      this[QueueableLike_onReady] = EventSource_never();

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
      [QueueableLike_onReady]: none,
    }),
    proto({
      get [SinkLike_isCompleted]() {
        unsafeCast<DisposableLike>(this);
        return this[DisposableLike_isDisposed];
      },

      get [QueueableLike_isReady]() {
        unsafeCast<DisposableLike>(this);
        return !this[DisposableLike_isDisposed];
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

      [SinkLike_next]() {
        return true;
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

const Observable_subscribeWithConfig =
  (
    scheduler: SchedulerLike,
    config: Pick<
      QueueableLike,
      typeof QueueableLike_capacity | typeof QueueableLike_backpressureStrategy
    >,
  ) =>
  (observable: ObservableLike) => {
    const observer = createObserver(scheduler, config);
    scheduler[DisposableContainerLike_add](observer);
    observable[ObservableLike_observe](observer);
    return observer;
  };

export default Observable_subscribeWithConfig;

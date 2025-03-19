import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { IterableLike } from "../../computations.js";
import { Optional, pipe } from "../../functions.js";
import {
  BackpressureStrategy,
  CollectionEnumeratorLike,
  DisposableLike_dispose,
  DropOldestBackpressureStrategy,
  ObserverLike,
  QueueLike,
  QueueableLike_capacity,
  QueueableLike_isReady,
  SchedulerLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import * as DefaultScheduler from "../DefaultScheduler.js";
import * as Disposable from "../Disposable.js";
import DelegatingConsumerMixin from "../__mixins__/DelegatingConsumerMixin.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingObserverMixin from "../__mixins__/DelegatingObserverMixin.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import QueueingConsumerMixin from "../__mixins__/QueueingConsumerMixin.js";

export const create: <T>(options?: {
  autoDispose?: boolean;
  capacity?: number;
  backpressureStrategy?: BackpressureStrategy;
  scheduler?: SchedulerLike;
}) => ObserverLike<T> & CollectionEnumeratorLike<T> = /*@__PURE__*/ (<T>() => {
  const createQueue = mixInstanceFactory(
    include(DisposableMixin, QueueingConsumerMixin()),
    function ConsumerQueue(
      this: unknown,
      options: Optional<{
        autoDispose?: boolean;
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
        scheduler?: SchedulerLike;
      }>,
    ): ObserverLike<T> & QueueLike<T> {
      const scheduler = options?.scheduler ?? DefaultScheduler.get();
      init(DisposableMixin, this);
      init(QueueingConsumerMixin<T>(), this, options);
      init(DelegatingSchedulerMixin, this, scheduler);

      pipe(this, Disposable.addToContainer(scheduler));

      return this;
    },
  );

  return (options?: {
    autoDispose?: boolean;
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
  }) => createQueue(options);
})();

export const createDropOldestWithoutBackpressure: <T>(
  capacity: number,
  options?: {
    autoDispose?: boolean;
    scheduler?: SchedulerLike;
  },
) => ObserverLike<T> & CollectionEnumeratorLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(DisposableMixin, QueueingConsumerMixin()),
    function ConsumerQueueDropOldestWithoutBackpressur(
      this: unknown,
      capacity: number,
      options: Optional<{
        autoDispose?: boolean;
        scheduler?: SchedulerLike;
      }>,
    ): ObserverLike<T> & QueueLike<T> & IterableLike<T> {
      const scheduler = options?.scheduler ?? DefaultScheduler.get();

      init(DisposableMixin, this);
      init(QueueingConsumerMixin<T>(), this, {
        autoDispose: options?.autoDispose,
        backpressureStrategy: DropOldestBackpressureStrategy,
        capacity,
      });
      init(DelegatingSchedulerMixin, this, scheduler);

      pipe(this, Disposable.addToContainer(scheduler));

      return this;
    },
    props(),
    proto({
      get [QueueableLike_isReady](): boolean {
        unsafeCast<ObserverLike<T>>(this);
        const isCompleted = this[SinkLike_isCompleted];

        return !isCompleted;
      },

      get [QueueableLike_capacity](): number {
        return MAX_SAFE_INTEGER;
      },
    }),
  ))();

export const createDelegating: <T>(o: ObserverLike<T>) => ObserverLike<T> =
  /*@__PURE__*/ (<T>() => {
    return mixInstanceFactory(
      include(
        DelegatingDisposableMixin,
        DelegatingConsumerMixin(),
        DelegatingSchedulerMixin,
      ),
      function DelegatingObserver(
        this: unknown,
        delegate: ObserverLike<T>,
      ): ObserverLike<T> {
        init(DelegatingDisposableMixin, this, delegate);
        init(DelegatingConsumerMixin(), this, delegate);
        init(DelegatingSchedulerMixin, this, delegate);

        return this;
      },
    );
  })();

export const createDelegatingNotifyOnlyNonCompletingNonDisposing: <T>(
  o: ObserverLike<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(DisposableMixin, DelegatingObserverMixin()),
    function NonDisposingDelegatingObserver(
      this: unknown,
      delegate: ObserverLike<T>,
    ): ObserverLike<T> {
      init(DisposableMixin, this);
      init(DelegatingObserverMixin(), this, delegate);

      return this;
    },
    props(),
    proto({
      [SinkLike_complete](this: ObserverLike<T>) {
        this[DisposableLike_dispose]();
      },
    }),
  ))();

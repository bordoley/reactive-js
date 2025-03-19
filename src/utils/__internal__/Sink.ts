import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { Function1, Optional, SideEffect1 } from "../../functions.js";
import {
  BackpressureStrategy,
  CollectionEnumeratorLike,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  ListenerLike_notify,
  ObserverLike,
  OverflowBackpressureStrategy,
  QueueLike,
  QueueLike_enqueue,
  QueueableLike_addOnReadyListener,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_isReady,
  SchedulerLike,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import DelegatingSinkMixin, {
  DelegatingSinkLike,
} from "../__mixins__/DelegatingSinkMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import QueueMixin from "../__mixins__/QueueMixin.js";

export const createDelegatingNotifyOnlyNonCompletingNonDisposing: <T>(
  o: SinkLike<T>,
) => DelegatingSinkLike<T, SinkLike<T>> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(DisposableMixin, DelegatingSinkMixin()),
    function NonDisposingDelegatingSink(
      this: unknown,
      delegate: SinkLike<T>,
    ): DelegatingSinkLike<T, SinkLike<T>> {
      init(DisposableMixin, this);
      init(DelegatingSinkMixin(), this, delegate);

      return this;
    },
    props(),
    proto({
      [SinkLike_complete](this: SinkLike<T>) {
        this[DisposableLike_dispose]();
      },
    }),
  ))();

export const createQueueSink: <T>(options?: {
  capacity?: number;
  backpressureStrategy?: BackpressureStrategy;
}) => SinkLike<T> & CollectionEnumeratorLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(DisposableMixin, QueueMixin()),
    function ConsumerQueue(
      this: Omit<SinkLike<T>, keyof DisposableLike>,
      options: Optional<{
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
      }>,
    ): SinkLike<T> & QueueLike<T> {
      init(DisposableMixin, this);
      init(QueueMixin<T>(), this, options);

      return this;
    },
    props(),
    proto({
      get [SinkLike_isCompleted](): boolean {
        unsafeCast<SinkLike>(this);
        return this[DisposableLike_isDisposed];
      },

      [ListenerLike_notify](this: QueueLike<T>, next: T) {
        this[QueueLike_enqueue](next);
      },

      [SinkLike_complete](this: SinkLike<T>) {
        this[DisposableLike_dispose]();
      },
    }),
  ))();

export const toObserver: <T>(
  scheduler: SchedulerLike,
) => Function1<SinkLike<T>, ObserverLike<T>> = /*@__PURE__*/ (<T>() => {
  const createSinkObserver = mixInstanceFactory(
    include(
      DelegatingDisposableMixin,
      DelegatingSchedulerMixin,
      DelegatingSinkMixin(),
    ),
    function SinkObserver(
      this: Pick<
        ObserverLike<T>,
        | typeof QueueableLike_addOnReadyListener
        | typeof QueueableLike_backpressureStrategy
        | typeof QueueableLike_capacity
        | typeof QueueableLike_isReady
      >,
      scheduler: SchedulerLike,
      sink: SinkLike<T>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, sink);
      init(DelegatingSchedulerMixin, this, scheduler);
      init(DelegatingSinkMixin<T>(), this, sink);

      return this;
    },
    props(),
    proto({
      [QueueableLike_capacity]: MAX_SAFE_INTEGER,
      [QueueableLike_backpressureStrategy]:
        OverflowBackpressureStrategy as BackpressureStrategy,

      get [QueueableLike_isReady](): boolean {
        unsafeCast<SinkLike>(this);
        return !this[SinkLike_isCompleted];
      },

      [QueueableLike_addOnReadyListener](_: SideEffect1<void>): DisposableLike {
        return Disposable.disposed;
      },
    }),
  );

  return (scheduler: SchedulerLike) => (sink: SinkLike<T>) =>
    createSinkObserver(scheduler, sink);
})();

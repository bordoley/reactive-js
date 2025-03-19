import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import {
  Function1,
  SideEffect1,
  bindMethod,
  none,
  pipe,
} from "../../functions.js";
import {
  BackpressureStrategy,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  ListenerLike,
  ListenerLike_notify,
  ObserverLike,
  OverflowBackpressureStrategy,
  QueueableLike_addOnReadyListener,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_isReady,
  SchedulerLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as DisposableContainer from "../DisposableContainer.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingListenerMixin from "../__mixins__/DelegatingListenerMixin.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";

export const create: <T>(
  notify: (this: ListenerLike<T>, a: T) => void,
) => ListenerLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [ListenerLike_notify]: SideEffect1<T>;
  };

  return mixInstanceFactory(
    include(DisposableMixin),
    function Sink(
      this: TProperties & Omit<ListenerLike<T>, keyof DisposableLike>,
      notify: (this: ListenerLike<T>, a: T) => void,
    ): ListenerLike<T> {
      init(DisposableMixin, this);

      this[ListenerLike_notify] = notify;

      return this;
    },
    props<TProperties>({
      [ListenerLike_notify]: none,
    }),
    proto({
      get [SinkLike_isCompleted]() {
        unsafeCast<DisposableLike>(this);
        return this[DisposableLike_isDisposed];
      },
      [SinkLike_complete](this: DisposableLike) {
        this[DisposableLike_dispose]();
      },
    }),
  );
})();

export const toObserver: <T>(
  scheduler: SchedulerLike,
) => Function1<ListenerLike<T>, ObserverLike<T>> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [SinkLike_isCompleted]: boolean;
  };
  const createSinkObserver = mixInstanceFactory(
    include(
      DelegatingDisposableMixin,
      DelegatingSchedulerMixin,
      DelegatingListenerMixin(),
    ),
    function ListenerObserver(
      this: TProperties &
        Pick<
          ObserverLike<T>,
          | typeof QueueableLike_addOnReadyListener
          | typeof QueueableLike_backpressureStrategy
          | typeof QueueableLike_capacity
          | typeof QueueableLike_isReady
          | typeof SinkLike_isCompleted
          | typeof SinkLike_complete
        >,
      scheduler: SchedulerLike,
      sink: ListenerLike<T>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, sink);
      init(DelegatingSchedulerMixin, this, scheduler);
      init(DelegatingListenerMixin<T>(), this, sink);

      pipe(
        this,
        DisposableContainer.onDisposed(bindMethod(this, SinkLike_complete)),
      );

      return this;
    },
    props<TProperties>({
      [SinkLike_isCompleted]: false,
    }),
    proto({
      [QueueableLike_capacity]: MAX_SAFE_INTEGER,
      [QueueableLike_backpressureStrategy]:
        OverflowBackpressureStrategy as BackpressureStrategy,

      get [QueueableLike_isReady](): boolean {
        unsafeCast<DisposableLike>(this);
        return !this[DisposableLike_isDisposed];
      },

      [QueueableLike_addOnReadyListener](_: SideEffect1<void>): DisposableLike {
        return Disposable.disposed;
      },

      [SinkLike_complete](this: TProperties & DisposableLike) {
        this[SinkLike_isCompleted] = true;
        this[DisposableLike_dispose]();
      },
    }),
  );

  return (scheduler: SchedulerLike) => (sink: ListenerLike<T>) =>
    createSinkObserver(scheduler, sink);
})();

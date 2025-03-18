import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../__internal__/mixins.js";
import { Function1, SideEffect1 } from "../functions.js";
import {
  BackpressureStrategy,
  ConsumerLike_addOnReadyListener,
  ConsumerLike_backpressureStrategy,
  ConsumerLike_capacity,
  ConsumerLike_isReady,
  DisposableLike,
  DisposableLike_isDisposed,
  ObserverLike,
  OverflowBackpressureStrategy,
  SchedulerLike,
  SinkLike,
} from "../utils.js";
import * as Disposable from "./Disposable.js";
import DelegatingDisposableMixin from "./__mixins__/DelegatingDisposableMixin.js";
import DelegatingSchedulerMixin from "./__mixins__/DelegatingSchedulerMixin.js";
import DelegatingSinkMixin from "./__mixins__/DelegatingSinkMixin.js";

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
        | typeof ConsumerLike_addOnReadyListener
        | typeof ConsumerLike_backpressureStrategy
        | typeof ConsumerLike_capacity
        | typeof ConsumerLike_isReady
      >,
      scheduler: SchedulerLike,
      consumer: SinkLike<T>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, consumer);
      init(DelegatingSchedulerMixin, this, scheduler);
      init(DelegatingSinkMixin(), this, consumer);

      return this;
    },
    props(),
    proto({
      [ConsumerLike_capacity]: MAX_SAFE_INTEGER,
      [ConsumerLike_backpressureStrategy]:
        OverflowBackpressureStrategy as BackpressureStrategy,

      get [ConsumerLike_isReady](): boolean {
        unsafeCast<DisposableLike>(this);
        return !this[DisposableLike_isDisposed];
      },

      [ConsumerLike_addOnReadyListener](_: SideEffect1<void>): DisposableLike {
        return Disposable.disposed;
      },
    }),
  );

  return (scheduler: SchedulerLike) => (sink: SinkLike<T>) =>
    createSinkObserver(scheduler, sink);
})();

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
import { SideEffect1, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingSchedulerMixin from "../../../utils/__mixins__/DelegatingSchedulerMixin.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import {
  BackpressureStrategy,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  ObserverLike,
  OverflowBackpressureStrategy,
  QueueableLike_addOnReadyListener,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_isReady,
  SchedulerLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";

const Observable_subscribe: Observable.Signature["subscribe"] = /*@__PURE__*/ (<
  T,
>() => {
  const createSubscribeObserver = mixInstanceFactory(
    include(DisposableMixin, DelegatingSchedulerMixin),
    function SubscribeObserver(
      this: Omit<ObserverLike<T>, keyof DisposableLike | keyof SchedulerLike>,
      scheduler: SchedulerLike,
    ): ObserverLike<T> {
      init(DisposableMixin, this);
      init(DelegatingSchedulerMixin, this, scheduler);

      return this;
    },
    props(),
    proto({
      [QueueableLike_capacity]: MAX_SAFE_INTEGER,
      [QueueableLike_backpressureStrategy]:
        OverflowBackpressureStrategy as BackpressureStrategy,

      get [SinkLike_isCompleted]() {
        unsafeCast<DisposableLike>(this);
        return this[DisposableLike_isDisposed];
      },

      get [QueueableLike_isReady](): boolean {
        unsafeCast<DisposableLike>(this);
        return !this[DisposableLike_isDisposed];
      },

      [QueueableLike_addOnReadyListener](_: SideEffect1<void>): DisposableLike {
        return Disposable.disposed;
      },

      [EventListenerLike_notify](_: T) {},

      [SinkLike_complete](this: DisposableLike) {
        this[DisposableLike_dispose]();
      },
    }),
  );

  return (scheduler: SchedulerLike) => (observable: ObservableLike<T>) => {
    const observer = pipe(
      createSubscribeObserver(scheduler),
      Disposable.addToContainer(scheduler),
    );

    observable[ObservableLike_observe](observer);

    return observer;
  };
})();

export default Observable_subscribe;

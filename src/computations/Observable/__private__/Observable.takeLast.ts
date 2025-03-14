import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import {
  Optional,
  bind,
  isSome,
  none,
  partial,
  pipe,
} from "../../../functions.js";
import { clampPositiveInteger } from "../../../math.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Queue from "../../../utils/Queue.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_complete,
  LiftedObserverLike_completeDelegate,
  LiftedObserverLike_isReady,
  LiftedObserverLike_notify,
  LiftedObserverLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  DropOldestBackpressureStrategy,
  EventListenerLike_notify,
  ObserverLike,
  QueueLike,
  QueueLike_count,
  QueueLike_dequeue,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

const createTakeLastObserver: <T>(
  delegate: ObserverLike<T>,
  takeLastCount: number,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const TakeLastObserver_queue = Symbol("TakeLastObserver_queue");

  type TProperties = {
    [TakeLastObserver_queue]: QueueLike<T>;
  };

  function notifyDelegate(
    this: TProperties & LiftedObserverLike<T>,
    ctx: ContinuationContextLike,
  ) {
    const queue = this[TakeLastObserver_queue];

    let v: Optional<T> = none;
    while (((v = queue[QueueLike_dequeue]()), isSome(v))) {
      if (!this[LiftedObserverLike_isReady]) {
        this[SchedulerLike_requestYield]();
        ctx[ContinuationContextLike_yield]();
      }

      this[LiftedObserverLike_notifyDelegate](v);

      if (!this[LiftedObserverLike_isReady]) {
        this[SchedulerLike_requestYield]();
      }

      if (queue[QueueLike_count] > 0) {
        ctx[ContinuationContextLike_yield]();
      }
    }

    this[LiftedObserverLike_completeDelegate]();
  }

  return mixInstanceFactory(
    include(DelegatingDisposableMixin, LiftedObserverMixin()),
    function TakeLastObserver(
      this: Pick<LiftedObserverLike<T>, typeof LiftedObserverLike_notify> &
        TProperties,
      delegate: ObserverLike<T>,
      takeLastCount: number,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(LiftedObserverMixin<T>(), this, delegate, none);

      this[TakeLastObserver_queue] = pipe(
        Queue.create<T>({
          capacity: takeLastCount,
          backpressureStrategy: DropOldestBackpressureStrategy,
        }),
        Disposable.addTo(this),
      );

      return this;
    },
    props<TProperties>({
      [TakeLastObserver_queue]: none,
    }),
    proto({
      [LiftedObserverLike_notify](
        this: TProperties & LiftedObserverLike<T>,
        next: T,
      ) {
        this[TakeLastObserver_queue][EventListenerLike_notify](next);
      },
      [LiftedObserverLike_complete](this: TProperties & LiftedObserverLike<T>) {
        const count = this[TakeLastObserver_queue][QueueLike_count];

        if (count === 0) {
          this[LiftedObserverLike_completeDelegate]();
        }

        this[SchedulerLike_schedule](bind(notifyDelegate, this));
      },
    }),
  );
})();

const Observable_takeLast: Observable.Signature["takeLast"] = <T>(
  options: { readonly count?: number } = {},
) =>
  pipe(
    createTakeLastObserver<T>,
    partial(clampPositiveInteger(options.count ?? 1)),
    Observable_liftPureDeferred,
  );

export default Observable_takeLast;

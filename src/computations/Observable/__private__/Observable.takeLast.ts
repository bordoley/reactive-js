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
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import Observer_assertObserverState from "../../../utils/Observer/__internal__/Observer.assertObserverState.js";
import * as Queue from "../../../utils/Queue.js";
import DelegatingObserverMixin from "../../../utils/__mixins__/DelegatingObserverMixin.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  DisposableLike_dispose,
  DropOldestBackpressureStrategy,
  ObserverLike,
  ObserverLike_notify,
  QueueLike,
  QueueLike_count,
  QueueLike_dequeue,
  QueueableLike_enqueue,
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
    const delegate = this[LiftedObserverLike_delegate];

    let v: Optional<T> = none;
    while (((v = queue[QueueLike_dequeue]()), isSome(v))) {
      delegate[ObserverLike_notify](v);

      if (queue[QueueLike_count] > 0) {
        ctx[ContinuationContextLike_yield]();
      }
    }

    delegate[DisposableLike_dispose]();
  }

  function onTakeLastObserverComplete(
    this: TProperties & LiftedObserverLike<T>,
  ) {
    const count = this[TakeLastObserver_queue][QueueLike_count];

    if (count === 0) {
      return;
    }

    const delegate = this[LiftedObserverLike_delegate];
    pipe(
      delegate[SchedulerLike_schedule](bind(notifyDelegate, this)),
      Disposable.addTo(delegate),
    );
  }

  return mixInstanceFactory(
    include(DisposableMixin, DelegatingObserverMixin(), LiftedObserverMixin()),
    function TakeLastObserver(
      this: Pick<ObserverLike<T>, typeof ObserverLike_notify> & TProperties,
      delegate: ObserverLike<T>,
      takeLastCount: number,
    ): ObserverLike<T> {
      init(DisposableMixin, this);
      init(DelegatingObserverMixin(), this, delegate);
      init(LiftedObserverMixin(), this, delegate);

      this[TakeLastObserver_queue] = Queue.create({
        capacity: takeLastCount,
        backpressureStrategy: DropOldestBackpressureStrategy,
      });

      pipe(this, DisposableContainer.onComplete(onTakeLastObserverComplete));

      return this;
    },
    props<TProperties>({
      [TakeLastObserver_queue]: none,
    }),
    proto({
      [ObserverLike_notify]: Observer_assertObserverState(function (
        this: TProperties & LiftedObserverLike<T>,
        next: T,
      ) {
        this[TakeLastObserver_queue][QueueableLike_enqueue](next);
      }),
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

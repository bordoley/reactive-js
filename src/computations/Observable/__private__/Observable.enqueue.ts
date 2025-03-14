import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_complete,
  LiftedObserverLike_delegate,
  LiftedObserverLike_notify,
  LiftedObserverLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  ObserverLike,
  QueueableLike,
  QueueableLike_isReady,
  SchedulerLike_requestYield,
  SinkLike_complete,
  SinkLike_next,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";

const Observer_createEnqueueObserver: <T>(
  delegate: ObserverLike<T>,
  queue: QueueableLike<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const EnqueueObserver_queue = Symbol("EnqueueObserver_queue");

  type TProperties = {
    readonly [EnqueueObserver_queue]: QueueableLike<T>;
  };

  return mixInstanceFactory(
    include(DelegatingDisposableMixin, LiftedObserverMixin()),
    function EnqueueObserver(
      this: Pick<LiftedObserverLike<T>, typeof LiftedObserverLike_notify> &
        Mutable<TProperties>,
      delegate: ObserverLike<T>,
      queue: QueueableLike<T>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(LiftedObserverMixin<T>(), this, delegate, none);

      this[EnqueueObserver_queue] = queue;

      return this;
    },
    props<TProperties>({
      [EnqueueObserver_queue]: none,
    }),
    proto({
      [LiftedObserverLike_notify](
        this: TProperties & LiftedObserverLike<T>,
        next: T,
      ) {
        const queue = this[EnqueueObserver_queue];
        queue[SinkLike_next](next);
        if (!queue[QueueableLike_isReady]) {
          this[SchedulerLike_requestYield]();
        }

        this[LiftedObserverLike_notifyDelegate](next);
      },
      [LiftedObserverLike_complete](
        this: TProperties & LiftedObserverLike<T, readonly T[]>,
      ) {
        // FIXME: maybe we shouldn't complete
        this[EnqueueObserver_queue][SinkLike_complete]();
        this[LiftedObserverLike_delegate][SinkLike_complete]();
      },
    }),
  );
})();

const Observable_enqueue: Observable.Signature["enqueue"] = <T>(
  queue: QueueableLike<T>,
) =>
  pipe(
    Observer_createEnqueueObserver<T>,
    partial(queue),
    Observable_liftWithSideEffects,
  );

export default Observable_enqueue;

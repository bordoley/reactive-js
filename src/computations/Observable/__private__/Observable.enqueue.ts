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
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  ObserverLike,
  QueueableLike,
  QueueableLike_complete,
  QueueableLike_enqueue,
  SchedulerLike_requestYield,
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
        const delegate = this[LiftedObserverLike_delegate];

        if (!this[EnqueueObserver_queue][QueueableLike_enqueue](next)) {
          this[SchedulerLike_requestYield]();
        }
        return (
          delegate?.[LiftedObserverLike_notify]?.(next) ??
          delegate[QueueableLike_enqueue](next)
        );
      },
      [LiftedObserverLike_complete](
        this: TProperties & LiftedObserverLike<T, readonly T[]>,
      ) {
        // FIXME: maybe we shouldn't complete
        this[EnqueueObserver_queue][QueueableLike_complete]();
        this[LiftedObserverLike_delegate][QueueableLike_complete]();
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

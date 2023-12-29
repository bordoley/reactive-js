import { clampPositiveInteger } from "../../../__internal__/math.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  ContinuationContextLike_yield,
  ObserverLike,
  SchedulerLike_schedule,
} from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { none, partial, pipe } from "../../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  IndexedQueueLike,
  IndexedQueueLike_get,
  QueueLike,
  QueueableLike_count,
  QueueableLike_enqueue,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as IndexedQueue from "../../../utils/IndexedQueue.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import type * as Observable from "../../Observable.js";
import DelegatingObserverMixin from "../../__mixins__/DelegatingObserverMixin.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observer_createTakeLastObserver = /*@__PURE__*/ (<T>() => {
  const TakeLastObserver_queue = Symbol("TakeLastObserver_queue");

  type TProperties = {
    [TakeLastObserver_queue]: IndexedQueueLike<T>;
  };

  return createInstanceFactory(
    mix(
      include(DisposableMixin, DelegatingObserverMixin()),
      function TakeLastObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> & TProperties,
        delegate: ObserverLike<T>,
        takeLastCount: number,
      ): ObserverLike<T> {
        init(DisposableMixin, instance);
        init(DelegatingObserverMixin(), instance, delegate);

        instance[TakeLastObserver_queue] = IndexedQueue.create({
          capacity: takeLastCount,
          backpressureStrategy: "drop-oldest",
        });

        pipe(
          instance,
          Disposable.onComplete(() => {
            const queue = instance[TakeLastObserver_queue];
            let index = 0;
            const count = queue[QueueableLike_count];

            if (count === 0) {
              return;
            }

            delegate[SchedulerLike_schedule](ctx => {
              while (index < count) {
                const v = queue[IndexedQueueLike_get](index);
                delegate[SinkLike_notify](v);

                index++;

                if (index < count) {
                  ctx[ContinuationContextLike_yield]();
                }
              }
              delegate[DisposableLike_dispose]();
            });
          }),
        );

        return instance;
      },
      props<TProperties>({
        [TakeLastObserver_queue]: none,
      }),
      {
        [SinkLike_notify](
          this: TProperties & DisposableLike & QueueLike<T>,
          next: T,
        ) {
          this[TakeLastObserver_queue][QueueableLike_enqueue](next);
        },
      },
    ),
  );
})();

const Observable_takeLast: Observable.Signature["takeLast"] = (
  options: { readonly count?: number } = {},
) =>
  pipe(
    Observer_createTakeLastObserver,
    partial(clampPositiveInteger(options.count ?? 1)),
    Observable_liftPure,
  );

export default Observable_takeLast;

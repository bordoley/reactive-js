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
  ObserverLike_notify,
  SchedulerLike_schedule,
} from "../../../concurrent.js";
import { none, partial, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as IndexedQueue from "../../../utils/IndexedQueue.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DropOldestBackpressureStrategy,
  IndexedQueueLike,
  IndexedQueueLike_get,
  QueueLike,
  QueueLike_count,
  QueueableLike_enqueue,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import DelegatingObserverMixin from "../../__mixins__/DelegatingObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

const createTakeLastObserver = /*@__PURE__*/ (<T>() => {
  const TakeLastObserver_queue = Symbol("TakeLastObserver_queue");

  type TProperties = {
    [TakeLastObserver_queue]: IndexedQueueLike<T>;
  };

  return createInstanceFactory(
    decorateNotifyWithObserverStateAssert(
      mix(
        include(DisposableMixin, DelegatingObserverMixin()),
        function TakeLastObserver(
          instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
            TProperties,
          delegate: ObserverLike<T>,
          takeLastCount: number,
        ): ObserverLike<T> {
          init(DisposableMixin, instance);
          init(DelegatingObserverMixin(), instance, delegate);

          instance[TakeLastObserver_queue] = IndexedQueue.create({
            capacity: takeLastCount,
            backpressureStrategy: DropOldestBackpressureStrategy,
          });

          pipe(
            instance,
            DisposableContainer.onComplete(() => {
              const queue = instance[TakeLastObserver_queue];
              let index = 0;
              const count = queue[QueueLike_count];

              if (count === 0) {
                return;
              }

              delegate[SchedulerLike_schedule](ctx => {
                while (index < count) {
                  const v = queue[IndexedQueueLike_get](index);
                  delegate[ObserverLike_notify](v);

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
          [ObserverLike_notify](
            this: TProperties & DisposableLike & QueueLike<T>,
            next: T,
          ) {
            this[TakeLastObserver_queue][QueueableLike_enqueue](next);
          },
        },
      ),
    ),
  );
})();

const Observable_takeLast: Observable.Signature["takeLast"] = (
  options: { readonly count?: number } = {},
) =>
  pipe(
    createTakeLastObserver,
    partial(clampPositiveInteger(options.count ?? 1)),
    Observable_liftPureDeferred,
  );

export default Observable_takeLast;

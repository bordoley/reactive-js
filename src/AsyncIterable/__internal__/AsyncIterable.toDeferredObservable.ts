import type * as AsyncIterable from "../../AsyncIterable.js";
import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import { error, pipe } from "../../functions.js";
import {
  DispatcherLike_complete,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  ObserverLike,
  QueueableLike_enqueue,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_schedule,
} from "../../types.js";

const AsyncIterable_toDeferredObservable: AsyncIterable.Signature["toDeferredObservable"] =

    <T>() =>
    (iterable: AsyncIterable<T>) =>
      DeferredObservable_create<T>((observer: ObserverLike<T>) => {
        const iterator = iterable[Symbol.asyncIterator]();
        const maxYieldInterval = observer[SchedulerLike_maxYieldInterval];

        const continuation = async () => {
          const startTime = observer[SchedulerLike_now];

          try {
            while (
              !observer[DisposableLike_isDisposed] &&
              observer[SchedulerLike_now] - startTime < maxYieldInterval
            ) {
              const next = await iterator.next();

              if (next.done) {
                observer[DispatcherLike_complete]();
                break;
              } else if (!observer[QueueableLike_enqueue](next.value)) {
                // An async iterable can produce resolved promises which are immediately
                // scheduled on the microtask queue. This prevents the observer's scheduler
                // from running and draining dispatched events.
                //
                // Check the observer's buffer size so we can avoid queueing forever
                // in this situation.
                break;
              }
            }
          } catch (e) {
            observer[DisposableLike_dispose](error(e));
          }

          pipe(
            observer[SchedulerLike_schedule](continuation),
            Disposable_addTo(observer),
          );
        };

        pipe(
          observer[SchedulerLike_schedule](continuation),
          Disposable_addTo(observer),
        );
      });

export default AsyncIterable_toDeferredObservable;

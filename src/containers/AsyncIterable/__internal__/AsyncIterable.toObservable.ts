import { AsyncIterableLike } from "../../../containers.js";
import { error, pipe } from "../../../functions.js";
import {
  DispatcherLike_complete,
  DispatcherLike_scheduler,
  ObserverLike,
  ToObservable,
} from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observer_schedule from "../../../rx/Observer/__internal__/Observer.schedule.js";
import {
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
} from "../../../scheduling.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueableLike_enqueue,
} from "../../../util.js";

const AsyncIterable_toObservable: ToObservable<AsyncIterableLike>["toObservable"] =

    <T>() =>
    (iterable: AsyncIterableLike<T>) =>
      Observable_create<T>((observer: ObserverLike<T>) => {
        const iterator = iterable[Symbol.asyncIterator]();
        const scheduler = observer[DispatcherLike_scheduler];
        const maxYieldInterval = scheduler[SchedulerLike_maxYieldInterval];

        const continuation = async () => {
          const startTime = scheduler[SchedulerLike_now];

          try {
            while (
              !observer[DisposableLike_isDisposed] &&
              scheduler[SchedulerLike_now] - startTime < maxYieldInterval
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

          pipe(observer, Observer_schedule(continuation));
        };

        pipe(observer, Observer_schedule(continuation));
      });

export default AsyncIterable_toObservable;

import {
  Iterator_done,
  Iterator_next,
  Iterator_value,
} from "../../../__internal__/constants.js";
import { error, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import {
  DispatcherLike_complete,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  ObserverLike,
  QueueableLike_enqueue,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_schedule,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_create from "./Observable.create.js";

const Observable_fromAsyncIterable: Observable.Signature["fromAsyncIterable"] =
  <T>() =>
  (iterable: AsyncIterable<T>) =>
    Observable_create<T>((observer: ObserverLike<T>) => {
      const iterator = iterable[Symbol.asyncIterator]();
      const maxYieldInterval = observer[SchedulerLike_maxYieldInterval];

      const continuation = async () => {
        const startTime = observer[SchedulerLike_now];

        // Initialized to true so that we don't reschedule
        // unless we enter the loop.
        let done = true;

        try {
          while (
            !observer[DisposableLike_isDisposed] &&
            observer[SchedulerLike_now] - startTime < maxYieldInterval
          ) {
            done = false;
            const next = await iterator[Iterator_next]();

            if (next[Iterator_done]) {
              observer[DispatcherLike_complete]();
              done = true;
              break;
            } else if (!observer[QueueableLike_enqueue](next[Iterator_value])) {
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

        if (!done) {
          pipe(
            observer[SchedulerLike_schedule](continuation),
            Disposable.addTo(observer),
          );
        }
      };

      pipe(
        observer[SchedulerLike_schedule](continuation),
        Disposable.addTo(observer),
      );
    });

export default Observable_fromAsyncIterable;

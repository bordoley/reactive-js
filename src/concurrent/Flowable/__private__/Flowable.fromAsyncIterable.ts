import {
  DispatcherLike_complete,
  ObservableLike,
  ObserverLike,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_schedule,
} from "../../../concurrent.js";
import { bindMethod, error, pipe } from "../../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueableLike_enqueue,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Flowable from "../../Flowable.js";
import Observable_create from "../../Observable/__private__/Observable.create.js";
import Observable_forEach from "../../Observable/__private__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__private__/Observable.subscribeWithConfig.js";
import Flowable_create from "./Flowable.create.js";

const Flowable_fromAsyncIterable: Flowable.Signature["fromAsyncIterable"] =
  <T>() =>
  (iterable: AsyncIterable<T>) =>
    Flowable_create<T>((modeObs: ObservableLike<boolean>) =>
      Observable_create((observer: ObserverLike<T>) => {
        const iterator = iterable[Symbol.asyncIterator]();
        const maxYieldInterval = observer[SchedulerLike_maxYieldInterval];

        let isPaused = true;

        const continuation = async () => {
          const startTime = observer[SchedulerLike_now];

          try {
            while (
              !observer[DisposableLike_isDisposed] &&
              !isPaused &&
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

          if (!isPaused) {
            pipe(
              observer[SchedulerLike_schedule](continuation),
              Disposable.addTo(observer),
            );
          }
        };

        pipe(
          modeObs,
          Observable_forEach((mode: boolean) => {
            const wasPaused = isPaused;
            isPaused = mode;

            if (!isPaused && wasPaused) {
              pipe(
                observer[SchedulerLike_schedule](continuation),
                Disposable.addTo(observer),
              );
            }
          }),
          Observable_subscribeWithConfig(observer, observer),
          Disposable.addTo(observer),
          Disposable.onComplete(bindMethod(observer, DispatcherLike_complete)),
        );
      }),
    );

export default Flowable_fromAsyncIterable;

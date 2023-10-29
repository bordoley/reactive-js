import {
  DispatcherLike_complete,
  MulticastObservableLike,
  ObserverLike,
  SchedulerLike,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_schedule,
} from "../../../concurrent.js";
import { bindMethod, error, isSome, pipe } from "../../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Disposable_addTo from "../../../utils/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../utils/Disposable/__internal__/Disposable.onComplete.js";
import type * as Observable from "../../Observable.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";
import Observable_createPauseable from "./Observable.createPauseable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

const Observable_fromAsyncIterable: Observable.Signature["fromAsyncIterable"] =
  (<T>(
      scheduler?: SchedulerLike,
      options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
      },
    ) =>
    (iterable: AsyncIterable<T>) =>
      isSome(scheduler)
        ? Observable_createPauseable<T>(
            (modeObs: MulticastObservableLike<boolean>) =>
              Observable_create((observer: ObserverLike<T>) => {
                const iterator = iterable[Symbol.asyncIterator]();
                const maxYieldInterval =
                  observer[SchedulerLike_maxYieldInterval];

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
                      Disposable_addTo(observer),
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
                        Disposable_addTo(observer),
                      );
                    }
                  }),
                  Observable_subscribeWithConfig(observer, observer),
                  Disposable_addTo(observer),
                  Disposable_onComplete(
                    bindMethod(observer, DispatcherLike_complete),
                  ),
                );
              }),
            scheduler,
            options,
          )
        : Observable_create<T>((observer: ObserverLike<T>) => {
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
                Disposable.addTo(observer),
              );
            };

            pipe(
              observer[SchedulerLike_schedule](continuation),
              Disposable.addTo(observer),
            );
          })) as Observable.Signature["fromAsyncIterable"];

export default Observable_fromAsyncIterable;

import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import PauseableObservable_create from "../../PauseableObservable/__internal__/PauseableObservable.create.js";
import {
  AsyncIterableContainer,
  ObservableContainer,
} from "../../containers.js";
import { bindMethod, error, pipe } from "../../functions.js";
import {
  DispatcherLike_complete,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  ObservableLike,
  ObserverLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
  SchedulerLike,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_schedule,
} from "../../types.js";

const AsyncIterable_flow: AsyncIterableContainer.TypeClass["flow"] =
  <T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ) =>
  (iterable: AsyncIterable<T>) => {
    const op = (modeObs: ObservableLike<boolean>) =>
      DeferredObservable_create((observer: ObserverLike<T>) => {
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
              Disposable_addTo(observer),
            );
          }
        };

        pipe(
          modeObs,
          Observable_forEach<ObservableContainer.Type, boolean>(
            (mode: boolean) => {
              const wasPaused = isPaused;
              isPaused = mode;

              if (!isPaused && wasPaused) {
                pipe(
                  observer[SchedulerLike_schedule](continuation),
                  Disposable_addTo(observer),
                );
              }
            },
          ),
          Observable_subscribeWithConfig(observer, observer),
          Disposable_addTo(observer),
          Disposable_onComplete(bindMethod(observer, DispatcherLike_complete)),
        );
      });

    return PauseableObservable_create<T>(op, scheduler, options);
  };

export default AsyncIterable_flow;

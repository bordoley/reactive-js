import { AsyncIterableLike } from "../../../containers.js";
import { bindMethod, error, pipe } from "../../../functions.js";
import {
  DispatcherLike_complete,
  DispatcherLike_scheduler,
  ObservableLike,
  ObserverLike,
} from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithMaxBufferSize from "../../../rx/Observable/__internal__/Observable.subscribeWithMaxBufferSize.js";
import Observer_schedule from "../../../rx/Observer/__internal__/Observer.schedule.js";
import {
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
} from "../../../scheduling.js";
import { ToFlowable } from "../../../streaming.js";
import Flowable_create from "../../../streaming/Flowable/__internal__/Flowable.create.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueableLike_capacity,
  QueueableLike_enqueue,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";

const AsyncIterable_toFlowable: ToFlowable<AsyncIterableLike>["toFlowable"] =
  <T>() =>
  (iterable: AsyncIterableLike<T>) =>
    Flowable_create((modeObs: ObservableLike<boolean>) =>
      Observable_create<T>((observer: ObserverLike<T>) => {
        const iterator = iterable[Symbol.asyncIterator]();
        const scheduler = observer[DispatcherLike_scheduler];
        const maxYieldInterval = scheduler[SchedulerLike_maxYieldInterval];

        let isPaused = true;

        const continuation = async () => {
          const startTime = scheduler[SchedulerLike_now];

          try {
            while (
              !observer[DisposableLike_isDisposed] &&
              !isPaused &&
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

          if (!isPaused) {
            pipe(observer, Observer_schedule(continuation));
          }
        };

        pipe(
          modeObs,
          Observable_forEach<ObservableLike, boolean>((mode: boolean) => {
            const wasPaused = isPaused;
            isPaused = mode;

            if (!isPaused && wasPaused) {
              pipe(observer, Observer_schedule(continuation));
            }
          }),
          Observable_subscribeWithMaxBufferSize(
            scheduler,
            observer[QueueableLike_capacity],
          ),
          Disposable_addTo(observer),
          Disposable_onComplete(bindMethod(observer, DispatcherLike_complete)),
        );
      }),
    );

export default AsyncIterable_toFlowable;

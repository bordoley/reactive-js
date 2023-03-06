import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { AsyncIterableLike } from "../../../containers.js";
import { error, pipe } from "../../../functions.js";
import { ObservableLike, ObserverLike } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_subscribe from "../../../rx/Observable/__internal__/Observable.subscribe.js";
import Observer_getDispatcher from "../../../rx/Observer/__internal__/Observer.getDispatcher.js";
import {
  DispatcherLike_scheduler,
  PauseableState,
  PauseableState_paused,
  SchedulerLike_now,
} from "../../../scheduling.js";
import Scheduler_schedule from "../../../scheduling/Scheduler/__internal__/Scheduler.schedule.js";
import { ToFlowable } from "../../../streaming.js";
import Flowable_createLifted from "../../../streaming/Flowable/__internal__/Flowable.createLifted.js";
import {
  DisposableLike_isDisposed,
  QueueLike_count,
  QueueLike_push,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";

const AsyncIterable_toFlowable: ToFlowable<
  AsyncIterableLike,
  { maxBuffer?: number }
>["toFlowable"] =
  <T>(o?: { maxBuffer?: number; maxYieldInterval?: number }) =>
  (iterable: AsyncIterableLike<T>) =>
    Flowable_createLifted((modeObs: ObservableLike<PauseableState>) =>
      Observable_create<T>((observer: ObserverLike<T>) => {
        const { maxBuffer = MAX_SAFE_INTEGER, maxYieldInterval = 300 } =
          o ?? {};

        const dispatcher = Observer_getDispatcher(observer);
        const iterator = iterable[Symbol.asyncIterator]();
        const scheduler = dispatcher[DispatcherLike_scheduler];

        let isPaused = true;

        const continuation = async () => {
          const startTime = scheduler[SchedulerLike_now];

          try {
            while (
              !dispatcher[DisposableLike_isDisposed] &&
              // An async iterable can produce resolved promises which are immediately
              // scheduled on the microtask queue. This prevents the observer's scheduler
              // from running and draining dispatched events.
              //
              // Check the dispatcher's buffer size so we can avoid queueing forever
              // in this situation.
              !isPaused &&
              dispatcher[QueueLike_count] < maxBuffer &&
              scheduler[SchedulerLike_now] - startTime < maxYieldInterval
            ) {
              const next = await iterator.next();

              if (!next.done && !dispatcher[DisposableLike_isDisposed]) {
                dispatcher[QueueLike_push](next.value);
              } else {
                pipe(dispatcher, Disposable_dispose());
              }
            }
          } catch (e) {
            pipe(dispatcher, Disposable_dispose(error(e)));
          }

          if (!dispatcher[DisposableLike_isDisposed] && !isPaused) {
            pipe(
              scheduler,
              Scheduler_schedule(continuation),
              Disposable_addTo(observer),
            );
          }
        };

        pipe(
          modeObs,
          Observable_forEach<ObservableLike, PauseableState>(
            (mode: PauseableState) => {
              const wasPaused = isPaused;
              isPaused = mode === PauseableState_paused;

              if (!isPaused && wasPaused) {
                pipe(
                  scheduler,
                  Scheduler_schedule(continuation),
                  Disposable_addTo(observer),
                );
              }
            },
          ),
          Observable_subscribe(scheduler),
          Disposable_bindTo(observer),
        );
      }),
    );

export default AsyncIterable_toFlowable;

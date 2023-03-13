import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { AsyncIterableLike } from "../../../containers.js";
import { error, pipe } from "../../../functions.js";
import {
  DispatcherLike_complete,
  DispatcherLike_scheduler,
  ObservableLike,
  ObserverLike,
} from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_subscribe from "../../../rx/Observable/__internal__/Observable.subscribe.js";
import {
  SchedulerLike_now,
  SchedulerLike_schedule,
} from "../../../scheduling.js";
import {
  FlowableState,
  FlowableState_paused,
  ToFlowable,
} from "../../../streaming.js";
import Flowable_createLifted from "../../../streaming/Flowable/__internal__/Flowable.createLifted.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueableLike_count,
  QueueableLike_push,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";

const AsyncIterable_toFlowable: ToFlowable<
  AsyncIterableLike,
  { maxBuffer?: number }
>["toFlowable"] =
  <T>(o?: { maxBuffer?: number; maxYieldInterval?: number }) =>
  (iterable: AsyncIterableLike<T>) =>
    Flowable_createLifted(
      (modeObs: ObservableLike<FlowableState>) =>
        Observable_create<T>((observer: ObserverLike<T>) => {
          const { maxBuffer = MAX_SAFE_INTEGER, maxYieldInterval = 300 } =
            o ?? {};

          const iterator = iterable[Symbol.asyncIterator]();
          const scheduler = observer[DispatcherLike_scheduler];

          let isPaused = true;

          const continuation = async () => {
            const startTime = scheduler[SchedulerLike_now];

            try {
              while (
                !observer[DisposableLike_isDisposed] &&
                // An async iterable can produce resolved promises which are immediately
                // scheduled on the microtask queue. This prevents the observer's scheduler
                // from running and draining dispatched events.
                //
                // Check the observer's buffer size so we can avoid queueing forever
                // in this situation.
                !isPaused &&
                observer[QueueableLike_count] < maxBuffer &&
                scheduler[SchedulerLike_now] - startTime < maxYieldInterval
              ) {
                const next = await iterator.next();

                if (!next.done) {
                  observer[QueueableLike_push](next.value);
                } else {
                  observer[DispatcherLike_complete]();
                }
              }
            } catch (e) {
              observer[DisposableLike_dispose](error(e));
            }

            if (!observer[DisposableLike_isDisposed] && !isPaused) {
              pipe(
                scheduler[SchedulerLike_schedule](continuation),
                Disposable_addTo(observer),
              );
            }
          };

          pipe(
            modeObs,
            Observable_forEach<ObservableLike, FlowableState>(
              (mode: FlowableState) => {
                const wasPaused = isPaused;
                isPaused = mode === FlowableState_paused;

                if (!isPaused && wasPaused) {
                  pipe(
                    scheduler[SchedulerLike_schedule](continuation),
                    Disposable_addTo(observer),
                  );
                }
              },
            ),
            Observable_subscribe(scheduler),
            Disposable_addTo(observer),
            Disposable_onComplete(() => observer[DispatcherLike_complete]()),
          );
        }),
      false,
    );

export default AsyncIterable_toFlowable;

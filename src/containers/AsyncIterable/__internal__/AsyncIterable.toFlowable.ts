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
import Observable_subscribeWithMaxBufferSize from "../../../rx/Observable/__internal__/Observable.subscribeWithMaxBufferSize.js";
import {
  SchedulerLike_now,
  SchedulerLike_schedule,
} from "../../../scheduling.js";
import {
  FlowableState,
  FlowableState_paused,
  ToFlowable,
} from "../../../streaming.js";
import Flowable_create from "../../../streaming/Flowable/__internal__/Flowable.create.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueableLike_maxBufferSize,
  QueueableLike_push,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";

const AsyncIterable_toFlowable: ToFlowable<
  AsyncIterableLike,
  { maxYieldInterval?: number }
>["toFlowable"] =
  <T>(o?: { maxYieldInterval?: number }) =>
  (iterable: AsyncIterableLike<T>) =>
    Flowable_create((modeObs: ObservableLike<FlowableState>) =>
      Observable_create<T>((observer: ObserverLike<T>) => {
        const { maxYieldInterval = 300 } = o ?? {};

        const iterator = iterable[Symbol.asyncIterator]();
        const scheduler = observer[DispatcherLike_scheduler];

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
              } else if (!observer[QueueableLike_push](next.value)) {
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
          Observable_subscribeWithMaxBufferSize(
            scheduler,
            observer[QueueableLike_maxBufferSize],
          ),
          Disposable_addTo(observer),
          Disposable_onComplete(() => observer[DispatcherLike_complete]()),
        );
      }),
    );

export default AsyncIterable_toFlowable;

import {
  Iterator_done,
  Iterator_next,
  Iterator_value,
} from "../../../__internal__/constants.js";
import * as EventSource from "../../../computations/EventSource.js";
import {
  DispatcherLike_complete,
  EventSourceLike,
  ObserverLike,
} from "../../../computations.js";
import { bindMethod, error, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueableLike_enqueue,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_schedule,
} from "../../../utils.js";
import type * as Flowable from "../../Flowable.js";
import * as Observable from "../../Observable.js";
import Flowable_create from "./Flowable.create.js";

const Flowable_fromAsyncIterable: Flowable.Signature["fromAsyncIterable"] =
  <T>() =>
  (iterable: AsyncIterable<T>) =>
    Flowable_create<T>((modeObs: EventSourceLike<boolean>) =>
      Observable.create((observer: ObserverLike<T>) => {
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
              const next = await iterator[Iterator_next]();

              if (next[Iterator_done]) {
                observer[DispatcherLike_complete]();
                break;
              } else if (
                !observer[QueueableLike_enqueue](next[Iterator_value])
              ) {
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
          EventSource.addEventHandler((mode: boolean) => {
            const wasPaused = isPaused;
            isPaused = mode;

            if (!isPaused && wasPaused) {
              pipe(
                observer[SchedulerLike_schedule](continuation),
                Disposable.addTo(observer),
              );
            }
          }),
          Disposable.addTo(observer),
          DisposableContainer.onComplete(
            bindMethod(observer, DispatcherLike_complete),
          ),
        );
      }),
    );

export default Flowable_fromAsyncIterable;

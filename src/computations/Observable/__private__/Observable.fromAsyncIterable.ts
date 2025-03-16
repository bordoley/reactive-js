import {
  Iterator_done,
  Iterator_next,
  Iterator_value,
} from "../../../__internal__/constants.js";
import { AsyncIterableLike } from "../../../computations.js";
import { error, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import {
  ConsumerLike_addOnReadyListener,
  ConsumerLike_isReady,
  DisposableLike_dispose,
  EventListenerLike_notify,
  ObserverLike,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_schedule,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Observable from "../../Observable.js";
import Observable_create from "./Observable.create.js";
import Observable_createPureDeferredObservable from "./Observable.createPureDeferredObservable.js";

const Observable_fromAsyncIterable: Observable.Signature["fromAsyncIterable"] =
  (<T>() =>
    (iterable: AsyncIterableLike<T>) => {
      const create = Computation.isPure(iterable)
        ? Observable_createPureDeferredObservable
        : Observable_create;
      return create<T>((observer: ObserverLike<T>) => {
        const iterator = iterable[Symbol.asyncIterator]();
        const maxYieldInterval = observer[SchedulerLike_maxYieldInterval];

        let continuationIsActive = false;
        const continuation = async () => {
          try {
            const startTime = observer[SchedulerLike_now];
            // Initialized to true so that we don't reschedule
            // unless we enter the loop.
            let done = true;

            while (
              !observer[SinkLike_isCompleted] &&
              observer[ConsumerLike_isReady] &&
              observer[SchedulerLike_now] - startTime < maxYieldInterval
            ) {
              done = false;
              const next = await iterator[Iterator_next]();

              if (next[Iterator_done]) {
                observer[SinkLike_complete]();
                done = true;
                break;
              } else if (
                (observer[EventListenerLike_notify](next[Iterator_value]),
                !observer[ConsumerLike_isReady])
              ) {
                // An async iterable can produce resolved promises which are immediately
                // scheduled on the microtask queue. This prevents the observer's scheduler
                // from running and draining queued events.
                //
                // Check the observer's buffer size so we can avoid queueing forever
                // in this situation.
                break;
              }
            }
            continuationIsActive = false;

            if (!done && observer[ConsumerLike_isReady]) {
              pipe(
                observer[SchedulerLike_schedule](continuation),
                Disposable.addTo(observer),
              );
              continuationIsActive = true;
            }
          } catch (e) {
            observer[DisposableLike_dispose](error(e));
            return;
          }
        };

        observer[ConsumerLike_addOnReadyListener](() => {
          if (!continuationIsActive) {
            pipe(
              observer[SchedulerLike_schedule](continuation),
              Disposable.addTo(observer),
            );
            continuationIsActive = true;
          }
        });

        pipe(
          observer[SchedulerLike_schedule](continuation),
          Disposable.addTo(observer),
        );
        continuationIsActive = true;
      });
    }) as Observable.Signature["fromAsyncIterable"];

export default Observable_fromAsyncIterable;

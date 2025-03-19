import {
  Iterator_done,
  Iterator_next,
  Iterator_return,
  Iterator_value,
} from "../../../__internal__/constants.js";
import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import {
  Factory,
  Optional,
  bindMethod,
  error,
  none,
  pipe,
  pipeLazy,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import {
  DisposableLike_dispose,
  ListenerLike_notify,
  ObserverLike,
  QueueableLike_addOnReadyListener,
  QueueableLike_isReady,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_schedule,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as Source from "../../__internal__/Source.js";

const genFactory =
  <T>(factory: Factory<AsyncIterator<T>>) =>
  (observer: ObserverLike<T>) => {
    const iter = factory();
    const maxYieldInterval = observer[SchedulerLike_maxYieldInterval];

    pipe(
      observer,
      DisposableContainer.onDisposed(() => iter[Iterator_return]?.(none)),
    );

    let isActive = false;
    let hasValueToNotify = false;
    let valueToNotify: Optional<T> = none;

    const continue_ = async () => {
      if (isActive) {
        return;
      }
      isActive = true;

      let isReady = observer[QueueableLike_isReady];
      let isCompleted = observer[SinkLike_isCompleted];
      let iterIsDone = false;

      try {
        const startTime = observer[SchedulerLike_now];
        // Initialized to true so that we don't reschedule
        // unless we enter the loop.

        if (hasValueToNotify && isReady && !isCompleted) {
          observer[ListenerLike_notify](valueToNotify as T);
          isReady = observer[QueueableLike_isReady];
          isCompleted = observer[SinkLike_isCompleted];

          hasValueToNotify = false;
          valueToNotify = none;
        }

        while (
          !isCompleted &&
          isReady &&
          observer[SchedulerLike_now] - startTime < maxYieldInterval
        ) {
          const next = await iter[Iterator_next]();
          iterIsDone = next[Iterator_done] ?? false;

          if (!isReady && !isCompleted) {
            hasValueToNotify = true;
            valueToNotify = next[Iterator_value];
          } else if (!iterIsDone && !isCompleted && isReady) {
            const v = next[Iterator_value];
            observer[ListenerLike_notify](v);
            isReady = observer[QueueableLike_isReady];
            isCompleted = observer[SinkLike_isCompleted];
          }

          if (!isReady || isCompleted) {
            // An async iterable can produce resolved promises which are immediately
            // scheduled on the microtask queue. This prevents the observer's scheduler
            // from running and draining queued events.
            //
            // Check the observer's buffer size so we can avoid queueing forever
            // in this situation.
            break;
          }
        }

        if (isReady || isCompleted) {
          observer[SinkLike_complete]();
          isReady = false;
          isCompleted = true;
        }
        isActive = false;
      } catch (e) {
        observer[DisposableLike_dispose](error(e));
        isReady = false;
      }

      if (isReady) {
        // We still have more data to produce, but yield back to the scheduler
        // to get rescheduled on the macro task queue.
        pipe(
          continue_,
          bindMethod(observer, SchedulerLike_schedule),
          Disposable.addTo(observer),
        );
      }
    };

    observer[QueueableLike_addOnReadyListener](
      pipeLazy(
        continue_,
        bindMethod(observer, SchedulerLike_schedule),
        Disposable.addTo(observer),
      ),
    );

    pipe(
      continue_,
      bindMethod(observer, SchedulerLike_schedule),
      Disposable.addTo(observer),
    );
  };

export const Observable_genAsync: Observable.Signature["genAsync"] = (factory =>
  Source.create(genFactory(factory), {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: true,
  })) as Observable.Signature["genAsync"];

export const Observable_genPureAsync: Observable.Signature["genPureAsync"] =
  (factory =>
    Source.create(genFactory(factory), {
      [ComputationLike_isPure]: true,
      [ComputationLike_isSynchronous]: true,
    })) as Observable.Signature["genPureAsync"];

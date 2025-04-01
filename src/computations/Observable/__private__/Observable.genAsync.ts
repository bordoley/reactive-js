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
import * as AsyncIterator from "../../../utils/__internal__/AsyncIterator.js";
import {
  AsyncEnumeratorLike_current,
  AsyncEnumeratorLike_moveNext,
  DisposableLike_dispose,
  EventListenerLike_notify,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  ObserverLike,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_schedule,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";

const genFactory =
  <T>(factory: Factory<AsyncIterator<T>>) =>
  (observer: ObserverLike<T>) => {
    const maxYieldInterval = observer[SchedulerLike_maxYieldInterval];
    const enumerator = pipe(
      factory(),
      AsyncIterator.toAsyncEnumerator(),
      Disposable.addTo(observer),
    );

    let isActive = false;
    let hasValueToNotify = false;
    let valueToNotify: Optional<T> = none;

    const continue_ = async () => {
      const startTime = observer[SchedulerLike_now];
      let isReady = observer[FlowControllerLike_isReady];
      let isCompleted = observer[SinkLike_isCompleted];
      let shouldYield = false;

      if (isActive || isCompleted) {
        return;
      }
      isActive = true;

      try {
        if (hasValueToNotify && isReady && !isCompleted) {
          observer[EventListenerLike_notify](valueToNotify as T);
          isReady = observer[FlowControllerLike_isReady];
          isCompleted = observer[SinkLike_isCompleted];
          shouldYield =
            observer[SchedulerLike_now] - startTime < maxYieldInterval &&
            isReady &&
            !isCompleted;

          hasValueToNotify = false;
          valueToNotify = none;
        }

        while (
          isReady &&
          !isCompleted &&
          !shouldYield &&
          (await enumerator[AsyncEnumeratorLike_moveNext]())
        ) {
          // Reassign because these values may change after
          // hopping the micro task queue
          isReady = observer[FlowControllerLike_isReady];
          isCompleted = observer[SinkLike_isCompleted];

          const value = enumerator[AsyncEnumeratorLike_current];

          if (!isReady && !isCompleted) {
            hasValueToNotify = true;
            valueToNotify = value;

            // In this case we explicitly don't want to reschedule
            shouldYield = false;
          } else if (!isCompleted) {
            observer[EventListenerLike_notify](value);
            isReady = observer[FlowControllerLike_isReady];
            isCompleted = observer[SinkLike_isCompleted];

            // Only request a yield if the observer is ready
            // to accept more notifications, but we are choosing
            // to yield back to the main scheduler anyway because
            // we exceeded the yield interval
            shouldYield =
              observer[SchedulerLike_now] - startTime < maxYieldInterval &&
              isReady &&
              !isCompleted;
          }
        }

        if (!shouldYield && !hasValueToNotify && !isCompleted) {
          observer[SinkLike_complete]();
        }
      } catch (e) {
        observer[DisposableLike_dispose](error(e));
      }

      if (shouldYield) {
        // We still have more data to produce, but want to
        // reschedule onto the macro task scheduler to avoid
        // starving the microtask queue.
        pipe(
          continue_,
          bindMethod(observer, SchedulerLike_schedule),
          Disposable.addTo(observer),
        );
      }

      isActive = false;
    };

    observer[FlowControllerLike_addOnReadyListener](
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
  DeferredReactiveSource.create(genFactory(factory), {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: true,
  })) as Observable.Signature["genAsync"];

export const Observable_genPureAsync: Observable.Signature["genPureAsync"] =
  (factory =>
    DeferredReactiveSource.create(genFactory(factory), {
      [ComputationLike_isPure]: true,
      [ComputationLike_isSynchronous]: true,
    })) as Observable.Signature["genPureAsync"];

import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import { Factory, error, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Queue from "../../../utils/Queue.js";
import * as AsyncIterator from "../../../utils/__internal__/AsyncIterator.js";
import {
  AsyncEnumeratorLike_current,
  AsyncEnumeratorLike_moveNext,
  ClockLike_now,
  ConsumableEnumeratorLike_addOnDataAvailableListener,
  ConsumableEnumeratorLike_isDataAvailable,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumeratorLike_current,
  EnumeratorLike_moveNext,
  EventListenerLike_notify,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  ObserverLike,
  OverflowBackpressureStrategy,
  QueueableLike_enqueue,
  SchedulerLike,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";

const genFactory =
  <T>(
    factory: Factory<AsyncIterator<T>>,
    options?: {
      bufferSize?: number;
    },
  ) =>
  async (observer: ObserverLike<T>) => {
    const enumerator = pipe(
      factory(),
      AsyncIterator.toAsyncEnumerator(),
      Disposable.addTo(observer),
    );

    const queue = pipe(
      Queue.createWithFlowControl<T>({
        backpressureStrategy: OverflowBackpressureStrategy,
        capacity: options?.bufferSize ?? 32,
      }),
      Disposable.addTo(observer),
    );

    let isCompleted = false;
    let dispatchSubscription = Disposable.disposed;

    function* dispatchEvents(scheduler: SchedulerLike) {
      let observerIsReady = observer[FlowControllerLike_isReady];
      let observerIsCompleted = observer[SinkLike_isCompleted];
      while (
        observerIsReady &&
        !observerIsCompleted &&
        queue[EnumeratorLike_moveNext]()
      ) {
        const next = queue[EnumeratorLike_current];
        observer[EventListenerLike_notify](next);

        const shouldYield = scheduler[SchedulerLike_shouldYield];
        const hasMoreData = queue[ConsumableEnumeratorLike_isDataAvailable];
        if (shouldYield && hasMoreData) {
          yield;
        }

        observerIsReady = observer[FlowControllerLike_isReady];
        observerIsCompleted = observer[SinkLike_isCompleted];
      }

      const hasMoreData = queue[ConsumableEnumeratorLike_isDataAvailable];
      if (!hasMoreData && isCompleted) {
        observer[SinkLike_complete]();
      }
    }

    const scheduleDispatcher = () => {
      if (!dispatchSubscription[DisposableLike_isDisposed]) {
        return;
      }

      dispatchSubscription = pipe(
        observer[SchedulerLike_schedule](dispatchEvents),
        Disposable.addTo(observer),
      );
    };

    queue[ConsumableEnumeratorLike_addOnDataAvailableListener](
      scheduleDispatcher,
    );

    let enumerateIsActive = false;
    const enumerate = async () => {
      const maxYieldInterval = observer[SchedulerLike_maxYieldInterval];
      const startTime = observer[ClockLike_now];

      let elapsedTime = 0;
      let queueIsReady = queue[FlowControllerLike_isReady];
      let observerIsReady = observer[FlowControllerLike_isReady];
      let observerIsCompleted = observer[SinkLike_isCompleted];

      if (enumerateIsActive || observerIsCompleted) {
        return;
      }
      enumerateIsActive = true;

      try {
        while (
          queueIsReady &&
          observerIsReady &&
          !observerIsCompleted &&
          elapsedTime < maxYieldInterval &&
          (await enumerator[AsyncEnumeratorLike_moveNext]())
        ) {
          const value = enumerator[AsyncEnumeratorLike_current];
          queue[QueueableLike_enqueue](value);

          // Reassign because these values may change after
          // hopping the micro task queue
          elapsedTime = observer[ClockLike_now] - startTime;
          queueIsReady = queue[FlowControllerLike_isReady];
          observerIsReady = observer[FlowControllerLike_isReady];
          observerIsCompleted = observer[SinkLike_isCompleted];
        }

        if (
          queueIsReady &&
          observerIsReady &&
          elapsedTime < maxYieldInterval &&
          !observerIsCompleted
        ) {
          isCompleted = true;
          scheduleDispatcher();
        }
      } catch (e) {
        observer[DisposableLike_dispose](error(e));
      }
      enumerateIsActive = false;
      // Return and let the onReadySink reschedule
      // the continuation
    };

    observer[FlowControllerLike_addOnReadyListener](enumerate);
    queue[FlowControllerLike_addOnReadyListener](enumerate);

    await Promise.resolve();

    enumerate();
  };

export const Observable_genAsync: Observable.Signature["genAsync"] = ((
  factory,
  options,
) =>
  DeferredEventSource.create(genFactory(factory, options), {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: true,
  })) as Observable.Signature["genAsync"];

export const Observable_genPureAsync: Observable.Signature["genPureAsync"] = ((
  factory,
  options,
) =>
  DeferredEventSource.create(genFactory(factory, options), {
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: true,
  })) as Observable.Signature["genPureAsync"];

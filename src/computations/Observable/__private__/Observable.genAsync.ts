import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import { Factory, error, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as AsyncIterator from "../../../utils/__internal__/AsyncIterator.js";
import * as FlowControllerQueue from "../../../utils/__internal__/FlowControllerQueue.js";
import {
  AsyncEnumeratorLike_current,
  AsyncEnumeratorLike_moveNext,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumeratorLike_current,
  EnumeratorLike_moveNext,
  EventListenerLike_notify,
  FlowControllerEnumeratorLike_addOnDataAvailableListener,
  FlowControllerEnumeratorLike_isDataAvailable,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  ObserverLike,
  OverflowBackpressureStrategy,
  QueueLike_enqueue,
  SchedulerLike,
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

    // FIXME need backpressure options;
    const queue = pipe(
      FlowControllerQueue.create<T>({
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
        const hasMoreData = queue[FlowControllerEnumeratorLike_isDataAvailable];
        if (shouldYield && hasMoreData) {
          yield;
        }

        observerIsReady = observer[FlowControllerLike_isReady];
        observerIsCompleted = observer[SinkLike_isCompleted];
      }

      const hasMoreData = queue[FlowControllerEnumeratorLike_isDataAvailable];
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

    queue[FlowControllerEnumeratorLike_addOnDataAvailableListener](
      scheduleDispatcher,
    );

    let enumerateIsActive = false;
    const enumerate = async () => {
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
          (await enumerator[AsyncEnumeratorLike_moveNext]())
        ) {
          const value = enumerator[AsyncEnumeratorLike_current];
          queue[QueueLike_enqueue](value);

          // Reassign because these values may change after
          // hopping the micro task queue
          queueIsReady = queue[FlowControllerLike_isReady];
          observerIsReady = observer[FlowControllerLike_isReady];
          observerIsCompleted = observer[SinkLike_isCompleted];
        }

        if (queueIsReady && observerIsReady && !observerIsCompleted) {
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

import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ProducerWithSideEffectsLike,
  PureProducerLike,
} from "../../../computations.js";
import { Factory, error, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Queue from "../../../utils/Queue.js";
import {
  AsyncEnumeratorLike,
  AsyncEnumeratorLike_moveNext,
  ConsumableEnumeratorLike_addOnDataAvailableListener,
  ConsumableEnumeratorLike_isDataAvailable,
  ConsumerLike,
  DisposableLike_dispose,
  EnumeratorLike_current,
  EventListenerLike_notify,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  OverflowBackpressureStrategy,
  QueueableLike_enqueue,
  SinkLike_complete,
  SinkLike_isCompleted,
  SyncEnumeratorLike_moveNext,
} from "../../../utils.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";

const genOnSubscribe =
  <T>(
    factory: Factory<AsyncEnumeratorLike<T>>,
    options?: {
      bufferSize?: number;
    },
  ) =>
  async (consumer: ConsumerLike<T>) => {
    const enumerator = pipe(factory(), Disposable.addTo(consumer));

    const queue = pipe(
      Queue.createWithFlowControl<T>({
        backpressureStrategy: OverflowBackpressureStrategy,
        capacity: options?.bufferSize ?? 32,
      }),
      Disposable.addTo(consumer),
    );

    let isCompleted = false;

    let dispatcherIsActive = false;
    const dispatchEvents = async () => {
      let consumerIsReady = consumer[FlowControllerLike_isReady];
      let consumerIsCompleted = consumer[SinkLike_isCompleted];

      if (dispatcherIsActive) {
        return;
      }
      dispatcherIsActive = true;

      await Promise.resolve();

      try {
        while (
          consumerIsReady &&
          !consumerIsCompleted &&
          queue[SyncEnumeratorLike_moveNext]()
        ) {
          const next = queue[EnumeratorLike_current];
          consumer[EventListenerLike_notify](next);
          await Promise.resolve();

          consumerIsReady = consumer[FlowControllerLike_isReady];
          consumerIsCompleted = consumer[SinkLike_isCompleted];
        }

        const hasMoreData = queue[ConsumableEnumeratorLike_isDataAvailable];
        if (!hasMoreData && isCompleted) {
          consumer[SinkLike_complete]();
        }
      } catch (e) {
        consumer[DisposableLike_dispose](error(e));
      }

      dispatcherIsActive = false;
    };

    queue[ConsumableEnumeratorLike_addOnDataAvailableListener](dispatchEvents);

    let enumerateIsActive = false;
    const enumerate = async () => {
      let queueIsReady = queue[FlowControllerLike_isReady];
      let consumerIsReady = consumer[FlowControllerLike_isReady];
      let consumerIsCompleted = consumer[SinkLike_isCompleted];

      if (enumerateIsActive || consumerIsCompleted) {
        return;
      }
      enumerateIsActive = true;

      try {
        while (
          queueIsReady &&
          consumerIsReady &&
          !consumerIsCompleted &&
          (await enumerator[AsyncEnumeratorLike_moveNext]())
        ) {
          const value = enumerator[EnumeratorLike_current];
          queue[QueueableLike_enqueue](value);

          queueIsReady = queue[FlowControllerLike_isReady];
          consumerIsReady = consumer[FlowControllerLike_isReady];
          consumerIsCompleted = consumer[SinkLike_isCompleted];
        }

        if (queueIsReady && consumerIsReady && !consumerIsCompleted) {
          isCompleted = true;
          dispatchEvents();
        }
      } catch (e) {
        consumer[DisposableLike_dispose](error(e));
      }
      enumerateIsActive = false;
      // Return and let the onReadySink reschedule
      // the continuation
    };

    consumer[FlowControllerLike_addOnReadyListener](enumerate);
    queue[FlowControllerLike_addOnReadyListener](enumerate);

    await Promise.resolve();

    enumerate();
  };

export const Producer_genAsyncEnumerator = <T>(
  factory: Factory<AsyncEnumeratorLike<T>>,
): ProducerWithSideEffectsLike<T> =>
  DeferredEventSource.create(genOnSubscribe(factory), {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: false,
  });

export const Producer_genPureAsyncEnumerator = <T>(
  factory: Factory<AsyncEnumeratorLike<T>>,
): PureProducerLike<T> =>
  DeferredEventSource.create(genOnSubscribe(factory), {
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: false,
  });

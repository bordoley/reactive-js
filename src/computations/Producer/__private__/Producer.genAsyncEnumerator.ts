import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ProducerWithSideEffectsLike,
  PureProducerLike,
} from "../../../computations.js";
import { Factory, Optional, error, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import {
  AsyncEnumeratorLike,
  AsyncEnumeratorLike_current,
  AsyncEnumeratorLike_moveNext,
  ConsumerLike,
  DisposableLike_dispose,
  EventListenerLike_notify,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";

const genOnSubscribe =
  <T>(factory: Factory<AsyncEnumeratorLike<T>>) =>
  async (consumer: ConsumerLike<T>) => {
    const enumerator = pipe(factory(), Disposable.addTo(consumer));

    let isActive = false;
    let hasValueToNotify = false;
    let valueToNotify: Optional<T> = none;

    const continue_ = async () => {
      let isReady = consumer[FlowControllerLike_isReady];
      let isCompleted = consumer[SinkLike_isCompleted];

      if (isActive || isCompleted) {
        return;
      }
      isActive = true;

      try {
        if (hasValueToNotify && isReady && !isCompleted) {
          consumer[EventListenerLike_notify](valueToNotify as T);
          isReady = consumer[FlowControllerLike_isReady];
          isCompleted = consumer[SinkLike_isCompleted];

          hasValueToNotify = false;
          valueToNotify = none;
        }

        while (
          isReady &&
          !isCompleted &&
          (await enumerator[AsyncEnumeratorLike_moveNext]())
        ) {
          // Reassign because these values may change after
          // hopping the micro task queue
          isReady = consumer[FlowControllerLike_isReady];
          isCompleted = consumer[SinkLike_isCompleted];

          const value = enumerator[AsyncEnumeratorLike_current];

          if (!isReady && !isCompleted) {
            hasValueToNotify = true;
            valueToNotify = value;
          } else if (!isCompleted) {
            consumer[EventListenerLike_notify](value);
            isReady = consumer[FlowControllerLike_isReady];
            isCompleted = consumer[SinkLike_isCompleted];
          }
        }

        if (!hasValueToNotify && !isCompleted) {
          consumer[SinkLike_complete]();
        }
      } catch (e) {
        consumer[DisposableLike_dispose](error(e));
      }
      isActive = false;
      // Return and let the onReadySink reschedule
      // the continuation
    };

    consumer[FlowControllerLike_addOnReadyListener](async () => {
      await Promise.resolve();
      continue_;
    });

    await Promise.resolve();

    continue_();
  };

export const Producer_genAsyncEnumerator = <T>(
  factory: Factory<AsyncEnumeratorLike<T>>,
): ProducerWithSideEffectsLike<T> =>
  DeferredSource.create(genOnSubscribe(factory), {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: false,
  });

export const Producer_genPureAsyncEnumerator = <T>(
  factory: Factory<AsyncEnumeratorLike<T>>,
): PureProducerLike<T> =>
  DeferredSource.create(genOnSubscribe(factory), {
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: false,
  });

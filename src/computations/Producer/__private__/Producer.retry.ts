import {
  EventSourceLike_subscribe,
  ProducerLike,
} from "../../../computations.js";
import { alwaysTrue, error, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import {
  ConsumerLike,
  DisposableLike_dispose,
  SinkLike_isCompleted,
} from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";

const Producer_retry: Producer.Signature["retry"] = (<T>(
    shouldRetry?: (count: number, error: Error) => boolean,
  ) =>
  (src: ProducerLike<T>) =>
    DeferredEventSource.create<T, ConsumerLike<T>>(
      (consumer: ConsumerLike<T>) => {
        const retryFunction = shouldRetry ?? alwaysTrue;

        let count = 0;

        const onDelegateConsumerError = (e: Error) => {
          const consumerIsCompleted = consumer[SinkLike_isCompleted];
          if (consumerIsCompleted) {
            return;
          }

          count++;

          try {
            const shouldRetry = retryFunction(count, e);

            if (shouldRetry) {
              src[EventSourceLike_subscribe](createDelegateConsumer());
            } else {
              consumer[DisposableLike_dispose](e);
            }
          } catch (eRetry) {
            consumer[DisposableLike_dispose](error([e, eRetry]));
          }
        };

        const createDelegateConsumer = () =>
          pipe(
            consumer,
            Consumer.createDelegatingCatchError,
            DisposableContainer.onError(onDelegateConsumerError),
          );
        src[EventSourceLike_subscribe](createDelegateConsumer());
      },
      src,
    )) as Producer.Signature["retry"];

export default Producer_retry;

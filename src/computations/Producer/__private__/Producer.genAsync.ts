import * as CurrentTime from "../../../__internal__/CurrentTime.js";
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
import { Factory, Optional, error, none, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import {
  ConsumerLike,
  DisposableLike_dispose,
  ListenerLike_notify,
  QueueableLike_addOnReadyListener,
  QueueableLike_isReady,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as Source from "../../__internal__/Source.js";

const genFactory =
  <T>(
    factory: Factory<AsyncIterator<T>>,
    options?: { maxYieldInterval?: number },
  ) =>
  async (consumer: ConsumerLike<T>) => {
    const iter = factory();
    const maxYieldInterval = options?.maxYieldInterval ?? 5;

    pipe(
      consumer,
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

      let isReady = consumer[QueueableLike_isReady];
      let isCompleted = consumer[SinkLike_isCompleted];
      let iterIsDone = false;

      try {
        const startTime = CurrentTime.now();

        if (hasValueToNotify && isReady && !isCompleted) {
          consumer[ListenerLike_notify](valueToNotify as T);
          isReady = consumer[QueueableLike_isReady];
          isCompleted = consumer[SinkLike_isCompleted];

          hasValueToNotify = false;
          valueToNotify = none;
        }

        while (
          !isCompleted &&
          isReady &&
          CurrentTime.now() - startTime < maxYieldInterval
        ) {
          const next = await iter[Iterator_next]();
          iterIsDone = next[Iterator_done] ?? false;

          isReady = consumer[QueueableLike_isReady];
          isCompleted = consumer[SinkLike_isCompleted];

          if (!isReady && !isCompleted) {
            hasValueToNotify = true;
            valueToNotify = next[Iterator_value];
          } else if (!iterIsDone && !isCompleted && isReady) {
            const v = next[Iterator_value];
            consumer[ListenerLike_notify](v);
            isReady = consumer[QueueableLike_isReady];
            isCompleted = consumer[SinkLike_isCompleted];
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
          consumer[SinkLike_complete]();
          isReady = false;
          isCompleted = true;
        }
        isActive = false;
      } catch (e) {
        consumer[DisposableLike_dispose](error(e));
        isReady = false;
      }
      // Wait for the onReadyListener to reschedule us
    };

    consumer[QueueableLike_addOnReadyListener](continue_);

    await Promise.resolve();

    continue_();
  };

export const Producer_genAsync: Producer.Signature["genAsync"] = ((
  factory,
  options,
) =>
  Source.create(genFactory(factory, options), {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: false,
  })) as Producer.Signature["genAsync"];

export const Producer_genPureAsync: Producer.Signature["genPureAsync"] = ((
  factory,
  options,
) =>
  Source.create(genFactory(factory, options), {
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: false,
  })) as Producer.Signature["genPureAsync"];

import {
  Iterator_done,
  Iterator_next,
  Iterator_return,
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
  <T>(factory: Factory<Iterator<T>>) =>
  async (consumer: ConsumerLike<T>) => {
    const iter = factory();

    pipe(
      consumer,
      DisposableContainer.onDisposed(() => iter[Iterator_return]?.(none)),
    );

    let isActive = false;
    const continue_ = async () => {
      if (isActive) {
        return;
      }

      isActive = true;

      let isReady = consumer[QueueableLike_isReady];
      let isCompleted = consumer[SinkLike_isCompleted];

      try {
        let v: Optional<IteratorResult<T, any>> = none;
        while (
          isReady &&
          !isCompleted &&
          ((v = iter[Iterator_next]()), v[Iterator_done] !== true)
        ) {
          consumer[ListenerLike_notify](v.value);

          isReady = consumer[QueueableLike_isReady];
          isCompleted = consumer[SinkLike_isCompleted];

          if (!isReady || isCompleted) {
            break;
          }

          await Promise.resolve();
        }

        // Reassign because these values may change after
        // hopping the micro task queue
        isReady = consumer[QueueableLike_isReady];
        isCompleted = consumer[SinkLike_isCompleted];
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
      // Return and let the onReadySink reschedule
      // the continuation
    };

    consumer[QueueableLike_addOnReadyListener](async () => {
      await Promise.resolve();
      continue_;
    });

    await Promise.resolve();

    continue_();
  };

export const Producer_gen: Producer.Signature["gen"] = (factory =>
  Source.create(genFactory(factory), {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: false,
  })) as Producer.Signature["gen"];

export const Producer_genPure: Producer.Signature["genPure"] = (factory =>
  Source.create(genFactory(factory), {
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: false,
  })) as Producer.Signature["genPure"];

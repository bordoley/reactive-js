import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import { Factory, error, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as AsyncIterator from "../../../utils/__internal__/AsyncIterator.js";
import {
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
import type * as Producer from "../../Producer.js";
import * as Source from "../../__internal__/DeferredSource.js";

// FIXME: Maybe we should just use a single implementation between
// this and gen and turn normal iterators into async enumerators
const genFactory =
  <T>(factory: Factory<AsyncIterator<T>>) =>
  async (consumer: ConsumerLike<T>) => {
    const enumerator = pipe(
      factory(),
      AsyncIterator.toAsyncEnumerator(),
      Disposable.addTo(consumer),
    );

    let isActive = false;
    const continue_ = async () => {
      if (isActive) {
        return;
      }

      isActive = true;

      let isReady = consumer[FlowControllerLike_isReady];
      let isCompleted = consumer[SinkLike_isCompleted];

      try {
        while (
          isReady &&
          !isCompleted &&
          (await enumerator[AsyncEnumeratorLike_moveNext]())
        ) {
          const value = enumerator[AsyncEnumeratorLike_current];
          consumer[EventListenerLike_notify](value);

          isReady = consumer[FlowControllerLike_isReady];
          isCompleted = consumer[SinkLike_isCompleted];

          if (!isReady || isCompleted) {
            break;
          }

          await Promise.resolve();
        }

        // Reassign because these values may change after
        // hopping the micro task queue
        isReady = consumer[FlowControllerLike_isReady];
        isCompleted = consumer[SinkLike_isCompleted];
        if (isReady || !isCompleted) {
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

    consumer[FlowControllerLike_addOnReadyListener](async () => {
      await Promise.resolve();
      continue_;
    });

    await Promise.resolve();

    continue_();
  };

export const Producer_genAsync: Producer.Signature["genAsync"] = (factory =>
  Source.create(genFactory(factory), {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: false,
  })) as Producer.Signature["genAsync"];

export const Producer_genPureAsync: Producer.Signature["genPureAsync"] =
  (factory =>
    Source.create(genFactory(factory), {
      [ComputationLike_isPure]: true,
      [ComputationLike_isSynchronous]: false,
    })) as Producer.Signature["genPureAsync"];

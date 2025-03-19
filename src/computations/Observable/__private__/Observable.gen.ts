import {
  Iterator_done,
  Iterator_next,
  Iterator_return,
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
  ContinuationContextLike,
  ContinuationContextLike_yield,
  DisposableLike_dispose,
  ListenerLike_notify,
  ObserverLike,
  QueueableLike_addOnReadyListener,
  QueueableLike_isReady,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as Source from "../../__internal__/Source.js";

const genFactory =
  <T>(
    factory: Factory<Iterator<T>>,
    options?: {
      delay?: number;
      delayStart?: boolean;
    },
  ) =>
  (observer: ObserverLike<T>) => {
    const { delay = 0, delayStart = false } = options ?? {};
    const iter = factory();

    pipe(
      observer,
      DisposableContainer.onDisposed(() => iter[Iterator_return]?.(none)),
    );

    let isActive = false;
    const continue_ = (ctx: ContinuationContextLike) => {
      if (isActive) {
        return;
      }

      isActive = true;

      let shouldYield = false;
      let isReady = observer[QueueableLike_isReady];
      let isCompleted = observer[SinkLike_isCompleted];

      try {
        let v: Optional<IteratorResult<T, any>> = none;
        while (
          isReady &&
          !isCompleted &&
          ((v = iter[Iterator_next]()), v[Iterator_done] !== true)
        ) {
          observer[ListenerLike_notify](v.value);

          shouldYield = delay > 0 || observer[SchedulerLike_shouldYield];
          isReady = observer[QueueableLike_isReady];
          isCompleted = observer[SinkLike_isCompleted];

          if (shouldYield || !isReady || isCompleted) {
            break;
          }
        }

        if (!shouldYield && (isReady || isCompleted)) {
          observer[SinkLike_complete]();
          isReady = false;
          isCompleted = true;
        }
        isActive = false;
      } catch (e) {
        observer[DisposableLike_dispose](error(e));
        isReady = false;
      }

      if (shouldYield && isReady) {
        ctx[ContinuationContextLike_yield](delay);
        // Will throw a yield exception and we'll exit the continuation
      }
      // Otherwise return and let the onReadySink reschedule
      // the continuations
    };

    observer[QueueableLike_addOnReadyListener](
      pipeLazy(
        continue_,
        bindMethod(observer, SchedulerLike_schedule),
        Disposable.addTo(observer),
      ),
    );

    pipe(
      observer[SchedulerLike_schedule](continue_, delayStart ? options : none),
      Disposable.addTo(observer),
    );
  };

export const Observable_gen: Observable.Signature["gen"] = (factory =>
  Source.create(genFactory(factory), {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: true,
  })) as Observable.Signature["gen"];

export const Observable_genPure: Observable.Signature["genPure"] = (factory =>
  Source.create(genFactory(factory), {
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: true,
  })) as Observable.Signature["genPure"];

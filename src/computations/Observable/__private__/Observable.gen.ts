import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import {
  Factory,
  bindMethod,
  error,
  none,
  pipe,
  pipeLazy,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Iterator from "../../../utils/__internal__/Iterator.js";
import {
  DisposableLike_dispose,
  EnumeratorLike_current,
  EnumeratorLike_moveNext,
  EventListenerLike_notify,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  ObserverLike,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";

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
    const enumerator = pipe(
      factory(),
      Iterator.toEnumerator(),
      Disposable.addTo(observer),
    );

    let isActive = false;
    function* continue_() {
      if (isActive) {
        return;
      }

      isActive = true;

      let isReady = observer[FlowControllerLike_isReady];
      let isCompleted = observer[SinkLike_isCompleted];

      try {
        while (
          isReady &&
          !isCompleted &&
          enumerator[EnumeratorLike_moveNext]()
        ) {
          const value = enumerator[EnumeratorLike_current];
          observer[EventListenerLike_notify](value);

          isReady = observer[FlowControllerLike_isReady];
          isCompleted = observer[SinkLike_isCompleted];

          // Only request a yield if the observer is ready
          // to accept more notifications, but the scheduler
          // has requested a yield or we want to intentionally delay
          const shouldYield =
            (delay > 0 || observer[SchedulerLike_shouldYield]) &&
            isReady &&
            !isCompleted;

          if (shouldYield) {
            yield delay;
          }

          isReady = observer[FlowControllerLike_isReady];
          isCompleted = observer[SinkLike_isCompleted];
        }

        if (isReady && !isCompleted) {
          observer[SinkLike_complete]();
        }
      } catch (e) {
        observer[DisposableLike_dispose](error(e));
        isReady = false;
      }

      isActive = false;
      // let the onReadySink reschedule the continuations
    }

    observer[FlowControllerLike_addOnReadyListener](
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

export const Observable_gen: Observable.Signature["gen"] = ((
  factory,
  options,
) =>
  DeferredEventSource.create(genFactory(factory, options), {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: true,
  })) as Observable.Signature["gen"];

export const Observable_genPure: Observable.Signature["genPure"] = ((
  factory,
  options,
) =>
  DeferredEventSource.create(genFactory(factory, options), {
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: true,
  })) as Observable.Signature["genPure"];

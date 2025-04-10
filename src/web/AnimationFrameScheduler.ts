import * as CurrentTime from "../__internal__/CurrentTime.js";
import { globalObject } from "../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../__internal__/mixins.js";
import { Optional, isNone, none, pipe, raiseIfNone } from "../functions.js";
import * as DefaultScheduler from "../utils/DefaultScheduler.js";
import * as Disposable from "../utils/Disposable.js";
import * as Queue from "../utils/Queue.js";
import SchedulerMixin, {
  SchedulerContinuationLike,
  SchedulerContinuationLike_dueTime,
  SchedulerContinuationLike_run,
  SchedulerMixinHostLike,
  SchedulerMixinHostLike_schedule,
  SchedulerMixinHostLike_shouldYield,
} from "../utils/__mixins__/SchedulerMixin.js";
import {
  ClockLike_now,
  CollectionEnumeratorLike_count,
  DisposableLike,
  EnumeratorLike_current,
  QueueLike,
  QueueableLike_enqueue,
  SchedulerLike,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  SyncEnumeratorLike_moveNext,
  delayMs,
} from "../utils.js";

interface Signature {
  get(): SchedulerLike;
}

export const get: Signature["get"] = /*@__PURE__*/ (() => {
  const raf = globalObject.requestAnimationFrame;

  raiseIfNone(
    raf,
    "requestAnimationFrame is not defined in the current environment",
  );

  const AnimationFrameScheduler_rafQueue = Symbol("RafScheduler_rafQueue");
  const AnimationFrameScheduler_rafIsRunning = Symbol(
    "RafScheduler_rafIsRunning",
  );

  type TProperties = {
    [AnimationFrameScheduler_rafIsRunning]: boolean;
    [AnimationFrameScheduler_rafQueue]: QueueLike<SchedulerContinuationLike>;
  };

  const rafCallback = () => {
    const startTime = CurrentTime.now();
    const animationFrameScheduler =
      globalAnimationFrameScheduler as unknown as TProperties;
    const workQueue = animationFrameScheduler[AnimationFrameScheduler_rafQueue];

    animationFrameScheduler[AnimationFrameScheduler_rafQueue] = Queue.create();

    let continuation: Optional<SchedulerContinuationLike> = none;
    while (workQueue[SyncEnumeratorLike_moveNext]()) {
      continuation = workQueue[EnumeratorLike_current];
      continuation[SchedulerContinuationLike_run]();

      const elapsedTime = CurrentTime.now() - startTime;
      if (elapsedTime > 5 /*ms*/) {
        break;
      }
    }

    const continuationsCount = workQueue[CollectionEnumeratorLike_count];
    const newWorkQueue =
      animationFrameScheduler[AnimationFrameScheduler_rafQueue];
    const newContinuationsCount = newWorkQueue[CollectionEnumeratorLike_count];

    if (continuationsCount > 0 && newContinuationsCount === 0) {
      animationFrameScheduler[AnimationFrameScheduler_rafQueue] = workQueue;
    } else if (continuationsCount > 0) {
      // Merge the job queues copying the newly enqueued jobs
      // onto the original queue.
      while (newWorkQueue[SyncEnumeratorLike_moveNext]()) {
        const continuation = newWorkQueue[EnumeratorLike_current];
        workQueue[QueueableLike_enqueue](continuation);
      }
      animationFrameScheduler[AnimationFrameScheduler_rafQueue] = workQueue;
    }

    const continuationsQueueCount =
      animationFrameScheduler[AnimationFrameScheduler_rafQueue][
        CollectionEnumeratorLike_count
      ];
    if (continuationsQueueCount > 0) {
      raf(rafCallback);
    } else {
      animationFrameScheduler[AnimationFrameScheduler_rafIsRunning] = false;
    }
  };

  const createAnimationFrameScheduler = mixInstanceFactory(
    include(SchedulerMixin),
    function AnimationFrameScheduler(
      this: Omit<SchedulerMixinHostLike, typeof ClockLike_now> & TProperties,
    ): SchedulerLike & DisposableLike {
      init(SchedulerMixin, this);

      this[AnimationFrameScheduler_rafQueue] =
        Queue.create<SchedulerContinuationLike>();

      return this;
    },
    props<TProperties>({
      [AnimationFrameScheduler_rafIsRunning]: false,
      [AnimationFrameScheduler_rafQueue]: none,
    }),
    {
      [SchedulerLike_maxYieldInterval]: 5,
      [SchedulerMixinHostLike_shouldYield]: true,
      [SchedulerLike_shouldYield]: true,

      [SchedulerMixinHostLike_schedule](
        this: SchedulerLike & SchedulerMixinHostLike & TProperties,
        continuation: SchedulerContinuationLike,
      ) {
        const now = this[ClockLike_now];
        const dueTime = continuation[SchedulerContinuationLike_dueTime];
        const delay = dueTime - now;

        // The frame time is 16 ms at 60 fps so just ignore the delay
        // if its not more than a frame.
        if (delay > 16) {
          // eslint-disable-next-line @typescript-eslint/no-this-alias
          const self = this;
          const subscription = DefaultScheduler.get()[SchedulerLike_schedule](
            function* () {
              yield delayMs(delay);
              self[SchedulerMixinHostLike_schedule](continuation);
            },
          );

          pipe(subscription, Disposable.addTo(continuation));
        } else {
          this[AnimationFrameScheduler_rafQueue][QueueableLike_enqueue](
            continuation,
          );

          if (!this[AnimationFrameScheduler_rafIsRunning]) {
            this[AnimationFrameScheduler_rafIsRunning] = true;
            raf(rafCallback);
          }
        }
      },
    },
  );

  let globalAnimationFrameScheduler: Optional<SchedulerLike> = none;

  return () => {
    if (isNone(globalAnimationFrameScheduler)) {
      const scheduler = createAnimationFrameScheduler();
      globalAnimationFrameScheduler = scheduler;
    }

    return globalAnimationFrameScheduler;
  };
})();

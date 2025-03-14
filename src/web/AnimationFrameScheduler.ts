import * as CurrentTime from "../__internal__/CurrentTime.js";
import { globalObject } from "../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../__internal__/mixins.js";
import {
  Optional,
  invoke,
  isNone,
  isSome,
  none,
  pipe,
  pipeLazy,
  raiseIfNone,
} from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as HostScheduler from "../utils/HostScheduler.js";
import * as Queue from "../utils/Queue.js";
import CurrentTimeSchedulerMixin from "../utils/__mixins__/CurrentTimeSchedulerMixin.js";
import {
  SchedulerContinuationLike,
  SchedulerContinuationLike_dueTime,
  SchedulerContinuationLike_run,
  SchedulerMixinHostLike,
  SchedulerMixinHostLike_schedule,
  SchedulerMixinHostLike_shouldYield,
} from "../utils/__mixins__/SchedulerMixin.js";
import {
  DisposableLike,
  QueueLike,
  QueueLike_count,
  QueueLike_dequeue,
  SchedulerLike,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  SinkLike_next,
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
    while (
      ((continuation = workQueue[QueueLike_dequeue]()), isSome(continuation))
    ) {
      continuation[SchedulerContinuationLike_run]();

      const elapsedTime = CurrentTime.now() - startTime;
      if (elapsedTime > 5 /*ms*/) {
        break;
      }
    }

    const continuationsCount = workQueue[QueueLike_count];
    const newWorkQueue =
      animationFrameScheduler[AnimationFrameScheduler_rafQueue];
    const newContinuationsCount = newWorkQueue[QueueLike_count];

    if (continuationsCount > 0 && newContinuationsCount === 0) {
      animationFrameScheduler[AnimationFrameScheduler_rafQueue] = workQueue;
    } else if (continuationsCount > 0) {
      // Merge the job queues copying the newly enqueued jobs
      // onto the original queue.
      let continuation: Optional<SchedulerContinuationLike> = none;
      while (
        ((continuation = newWorkQueue[QueueLike_dequeue]()),
        isSome(continuation))
      ) {
        workQueue[SinkLike_next](continuation);
      }
      animationFrameScheduler[AnimationFrameScheduler_rafQueue] = workQueue;
    }

    const continuationsQueueCount =
      animationFrameScheduler[AnimationFrameScheduler_rafQueue][
        QueueLike_count
      ];
    if (continuationsQueueCount > 0) {
      raf(rafCallback);
    } else {
      animationFrameScheduler[AnimationFrameScheduler_rafIsRunning] = false;
    }
  };

  const createAnimationFrameScheduler = mixInstanceFactory(
    include(CurrentTimeSchedulerMixin),
    function AnimationFrameScheduler(
      this: Omit<SchedulerMixinHostLike, typeof SchedulerLike_now> &
        TProperties,
    ): SchedulerLike & DisposableLike {
      init(CurrentTimeSchedulerMixin, this);

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
        this: SchedulerMixinHostLike & TProperties,
        continuation: SchedulerContinuationLike,
      ) {
        const now = this[SchedulerLike_now];
        const dueTime = continuation[SchedulerContinuationLike_dueTime];
        const delay = dueTime - now;

        // The frame time is 16 ms at 60 fps so just ignore the delay
        // if its not more than a frame.
        if (delay > 16) {
          pipe(
            HostScheduler.get(),
            invoke(
              SchedulerLike_schedule,
              pipeLazy(
                this,
                invoke(SchedulerMixinHostLike_schedule, continuation),
              ),
              { delay },
            ),
            Disposable.addTo(continuation),
          );
        } else {
          this[AnimationFrameScheduler_rafQueue][SinkLike_next](continuation);

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

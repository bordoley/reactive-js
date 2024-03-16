import * as CurrentTime from "../../__internal__/CurrentTime.js";
import {
  Map_delete,
  Map_get,
  Map_set,
  globalObject,
} from "../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../__internal__/mixins.js";
import {
  ContinuationLike,
  ContinuationLike_dueTime,
  ContinuationLike_run,
} from "../../concurrent/__internal__/Continuation.js";
import {
  ContinuationSchedulerLike,
  ContinuationSchedulerLike_schedule,
  ContinuationSchedulerLike_shouldYield,
} from "../../concurrent/__internal__/ContinuationScheduler.js";
import CurrentTimeSchedulerMixin from "../../concurrent/__mixins__/CurrentTimeSchedulerMixin.js";
import {
  SchedulerLike,
  SchedulerLike_now,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../concurrent.js";
import {
  Optional,
  invoke,
  isSome,
  newInstance,
  none,
  pipe,
  pipeLazy,
  raiseIfNone,
} from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import * as IndexedQueue from "../../utils/IndexedQueue.js";
import {
  DisposableContainerLike_add,
  DisposableLike,
  IndexedQueueLike,
  QueueLike_count,
  QueueLike_dequeue,
  QueueableLike_enqueue,
} from "../../utils.js";

interface Signature {
  get(delayScheduler: SchedulerLike): SchedulerLike;
}

const create = /*@__PURE__*/ (() => {
  const AnimationFrameScheduler_delayScheduler = Symbol(
    "AnimationFrameScheduler_delayScheduler",
  );

  const RafScheduler_schedule = Symbol("RafScheduler_schedule");

  const raf = globalObject.requestAnimationFrame;

  raiseIfNone(
    raf,
    "requestAnimationFrame is not defined in the current environment",
  );

  type TProperties = {
    [AnimationFrameScheduler_delayScheduler]: SchedulerLike;
  };

  interface RafScheduler {
    [RafScheduler_schedule](continuation: ContinuationLike): void;
  }

  const rafScheduler: RafScheduler = (() => {
    const RafScheduler_rafQueue = Symbol("RafScheduler_rafQueue");

    const RafScheduler_rafIsRunning = Symbol("RafScheduler_rafIsRunning");

    interface RafSchedulerImpl {
      [RafScheduler_rafQueue]: IndexedQueueLike<ContinuationLike>;
      [RafScheduler_rafIsRunning]: boolean;
      [RafScheduler_schedule](continuation: ContinuationLike): void;
    }

    const rafCallback = () => {
      const startTime = CurrentTime.now();
      const workQueue = rafScheduler[RafScheduler_rafQueue];

      rafScheduler[RafScheduler_rafQueue] = IndexedQueue.create();

      let continuation: Optional<ContinuationLike> = none;
      while (
        ((continuation = workQueue[QueueLike_dequeue]()), isSome(continuation))
      ) {
        continuation[ContinuationLike_run]();

        const elapsedTime = CurrentTime.now() - startTime;
        if (elapsedTime > 5 /*ms*/) {
          break;
        }
      }

      const continuationsCount = workQueue[QueueLike_count];
      const newWorkQueue = rafScheduler[RafScheduler_rafQueue];
      const newContinuationsCount = newWorkQueue[QueueLike_count];

      if (continuationsCount > 0 && newContinuationsCount === 0) {
        rafScheduler[RafScheduler_rafQueue] = workQueue;
      } else if (continuationsCount > 0) {
        // Merge the job queues copying the newly enqueued jobs
        // onto the original queue.
        let continuation: Optional<ContinuationLike> = none;
        while (
          ((continuation = newWorkQueue[QueueLike_dequeue]()),
          isSome(continuation))
        ) {
          workQueue[QueueableLike_enqueue](continuation);
        }
        rafScheduler[RafScheduler_rafQueue] = workQueue;
      }

      const continuationsQueueCount =
        rafScheduler[RafScheduler_rafQueue][QueueLike_count];
      if (continuationsQueueCount > 0) {
        raf(rafCallback);
      } else {
        rafScheduler[RafScheduler_rafIsRunning] = false;
      }
    };

    const rafScheduler: RafSchedulerImpl = {
      [RafScheduler_rafQueue]: IndexedQueue.create<ContinuationLike>(),
      [RafScheduler_rafIsRunning]: false,
      [RafScheduler_schedule](
        this: RafSchedulerImpl,
        continuation: ContinuationLike,
      ) {
        this[RafScheduler_rafQueue][QueueableLike_enqueue](continuation);

        if (!this[RafScheduler_rafIsRunning]) {
          this[RafScheduler_rafIsRunning] = true;
          raf(rafCallback);
        }
      },
    };

    return rafScheduler;
  })();

  return mixInstanceFactory(
    include(CurrentTimeSchedulerMixin),
    function AnimationFrameScheduler(
      instance: Omit<ContinuationSchedulerLike, typeof SchedulerLike_now> &
        TProperties,
      hostScheduler: SchedulerLike,
    ): SchedulerLike & DisposableLike {
      init(CurrentTimeSchedulerMixin, instance, 5);

      instance[AnimationFrameScheduler_delayScheduler] = hostScheduler;

      hostScheduler[DisposableContainerLike_add](instance);

      return instance;
    },
    props<TProperties>({
      [AnimationFrameScheduler_delayScheduler]: none,
    }),
    {
      [ContinuationSchedulerLike_shouldYield]: true,
      [SchedulerLike_shouldYield]: true,

      [ContinuationSchedulerLike_schedule](
        this: ContinuationSchedulerLike & TProperties,
        continuation: ContinuationLike,
      ) {
        const now = this[SchedulerLike_now];
        const dueTime = continuation[ContinuationLike_dueTime];
        const delay = dueTime - now;

        // The frame time is 16 ms at 60 fps so just ignore the delay
        // if its not more than a frame.
        if (delay > 16) {
          pipe(
            this[AnimationFrameScheduler_delayScheduler],
            invoke(
              SchedulerLike_schedule,
              pipeLazy(
                this,
                invoke(ContinuationSchedulerLike_schedule, continuation),
              ),
              { delay },
            ),
            Disposable.addTo(continuation),
          );
        } else {
          rafScheduler[RafScheduler_schedule](continuation);
        }
      },
    },
  );
})();

export const get: Signature["get"] = /*@__PURE__*/ (() => {
  const schedulerCache: Map<SchedulerLike, SchedulerLike> =
    newInstance<Map<SchedulerLike, SchedulerLike>>(Map);

  return (scheduler: SchedulerLike) =>
    schedulerCache[Map_get](scheduler) ??
    (() => {
      const animationFrameScheduler = create(scheduler);
      schedulerCache[Map_set](scheduler, animationFrameScheduler);

      return pipe(
        animationFrameScheduler,
        DisposableContainer.onDisposed(_ =>
          schedulerCache[Map_delete](scheduler),
        ),
      );
    })();
})();

import * as CurrentTime from "../../../../__internal__/CurrentTime.js";
import { MAX_SAFE_INTEGER } from "../../../../__internal__/constants.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../../__internal__/mixins.js";
import { CollectionLike_count } from "../../../../collections.js";
import {
  ContinuationLike,
  ContinuationSchedulerLike_schedule,
  SchedulerLike,
  SchedulerLike_now,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../../../concurrent.js";
import ContinuationSchedulerMixin, {
  ContinuationSchedulerImplementationLike,
  ContinuationSchedulerImplementationLike_scheduleContinuation,
  ContinuationSchedulerImplementationLike_shouldYield,
  ContinuationSchedulerMixinLike,
  ContinuationSchedulerMixinLike_runContinuation,
} from "../../../../concurrent/__mixins__/ContinuationSchedulerMixin.js";
import {
  Optional,
  SideEffect,
  invoke,
  isSome,
  none,
  pipe,
  pipeLazy,
} from "../../../../functions.js";
import {
  DisposableLike,
  QueueLike_dequeue,
  QueueableLike_enqueue,
} from "../../../../utils.js";
import * as Disposable from "../../../../utils/Disposable.js";
import * as IndexedQueue from "../../../../utils/IndexedQueue.js";
import type * as AnimationFrameScheduler from "../../AnimationFrameScheduler.js";

const AnimationFrameScheduler_host = Symbol("AnimationFrameScheduler_host");

const AnimationFrameScheduler_create: AnimationFrameScheduler.Signature["create"] =
  /*@__PURE__*/ (() => {
    let rafQueue = IndexedQueue.create<SideEffect>(
      MAX_SAFE_INTEGER,
      "overflow",
    );
    let rafIsRunning = false;

    const rafCallback = () => {
      const startTime = CurrentTime.now();
      const workQueue = rafQueue;

      rafQueue = IndexedQueue.create(MAX_SAFE_INTEGER, "overflow");

      let job: Optional<SideEffect> = none;
      while (((job = workQueue[QueueLike_dequeue]()), isSome(job))) {
        job();

        const elapsedTime = CurrentTime.now() - startTime;
        if (elapsedTime > 5 /*ms*/) {
          break;
        }
      }

      const jobsCount = workQueue[CollectionLike_count];
      const newWorkQueue = rafQueue;
      const newJobsCount = newWorkQueue[CollectionLike_count];

      if (jobsCount > 0 && newJobsCount === 0) {
        rafQueue = workQueue;
      } else if (jobsCount > 0) {
        // Merge the job queues copying the newly enqueued jobs
        // onto the original queue.
        let job: Optional<SideEffect> = none;
        while (((job = newWorkQueue[QueueLike_dequeue]()), isSome(job))) {
          workQueue[QueueableLike_enqueue](job);
        }
        rafQueue = workQueue;
      }

      const workQueueCount = rafQueue[CollectionLike_count];
      if (workQueueCount > 0) {
        requestAnimationFrame(rafCallback);
      } else {
        rafIsRunning = false;
      }
    };

    type TProperties = {
      [AnimationFrameScheduler_host]: SchedulerLike;
    };

    return createInstanceFactory(
      mix(
        include(ContinuationSchedulerMixin),
        function AnimationFrameScheduler(
          instance: ContinuationSchedulerImplementationLike & TProperties,
          hostScheduler: SchedulerLike,
        ): SchedulerLike & DisposableLike {
          init(ContinuationSchedulerMixin, instance, 5);

          instance[AnimationFrameScheduler_host] = hostScheduler;

          return instance;
        },
        props<TProperties>({
          [AnimationFrameScheduler_host]: none,
        }),
        {
          get [SchedulerLike_now](): number {
            return CurrentTime.now();
          },

          [ContinuationSchedulerImplementationLike_shouldYield]: true,
          [SchedulerLike_shouldYield]: true,

          [ContinuationSchedulerImplementationLike_scheduleContinuation](
            this: ContinuationSchedulerMixinLike & TProperties,
            continuation: ContinuationLike,
            delay: number,
          ) {
            // The frame time is 16 ms at 60 fps so just ignore the delay
            // if its not more than a frame.
            if (delay > 16) {
              pipe(
                this[AnimationFrameScheduler_host],
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
              rafQueue[QueueableLike_enqueue](() =>
                this[ContinuationSchedulerMixinLike_runContinuation](
                  continuation,
                ),
              );

              if (!rafIsRunning) {
                rafIsRunning = true;
                requestAnimationFrame(rafCallback);
              }
            }
          },
        },
      ),
    );
  })();

export default AnimationFrameScheduler_create;

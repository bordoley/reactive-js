import {
  MAX_SAFE_INTEGER,
  MIN_SAFE_INTEGER,
} from "../__internal__/constants.js";
import { clampPositiveNonZeroInteger, max } from "../__internal__/math.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../__internal__/mixins.js";
import {
  SchedulerLike,
  SchedulerLike_now,
  VirtualTimeSchedulerLike,
  VirtualTimeSchedulerLike_run,
} from "../concurrent.js";
import {
  SchedulerTaskLike,
  SchedulerTaskLike_continuation,
  SchedulerTaskLike_dueTime,
  SchedulerTaskLike_id,
  SchedulerTask_comparator,
} from "../concurrent/__private__.js";
import { Optional, isSome, none } from "../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  QueueLike,
  QueueLike_count,
  QueueLike_dequeue,
  QueueLike_head,
  QueueableLike_enqueue,
} from "../utils.js";
import * as PriorityQueue from "../utils/PriorityQueue.js";
import ContinuationSchedulerMixin, {
  ContinuationLike,
  ContinuationLike_run,
  ContinuationSchedulerLike,
  ContinuationSchedulerLike_scheduleContinuation,
  ContinuationSchedulerLike_shouldYield,
} from "./__mixins__/ContinuationSchedulerMixin.js";

interface Signature {
  create(options?: {
    readonly maxMicroTaskTicks?: number;
  }): VirtualTimeSchedulerLike;
}

const VirtualTimeScheduler_maxMicroTaskTicks = Symbol(
  "VirtualTimeScheduler_maxMicroTaskTicks",
);
const VirtualTimeScheduler_microTaskTicks = Symbol(
  "VirtualTimeScheduler_microTaskTicks",
);
const VirtualTimeScheduler_taskIDCount = Symbol(
  "VirtualTimeScheduler_taskIDCount",
);

const VirtualTimeScheduler_queue = Symbol("VirtualTimeScheduler_queue");

type TProperties = {
  [SchedulerLike_now]: number;
  readonly [VirtualTimeScheduler_maxMicroTaskTicks]: number;
  [VirtualTimeScheduler_microTaskTicks]: number;
  [VirtualTimeScheduler_taskIDCount]: number;
  [VirtualTimeScheduler_queue]: QueueLike<SchedulerTaskLike>;
};

const createVirtualTimeSchedulerInstance = /*@__PURE__*/ (() =>
  createInstanceFactory(
    mix(
      include(ContinuationSchedulerMixin),
      function VirtualTimeScheduler(
        instance: Pick<
          VirtualTimeSchedulerLike,
          typeof VirtualTimeSchedulerLike_run
        > &
          Mutable<TProperties> &
          ContinuationSchedulerLike,
        maxMicroTaskTicks: number,
      ): VirtualTimeSchedulerLike {
        init(ContinuationSchedulerMixin, instance, 1);

        instance[VirtualTimeScheduler_maxMicroTaskTicks] = maxMicroTaskTicks;
        instance[VirtualTimeScheduler_queue] = PriorityQueue.create(
          SchedulerTask_comparator,
        );

        return instance;
      },
      props<TProperties>({
        [SchedulerLike_now]: 0,
        [VirtualTimeScheduler_maxMicroTaskTicks]: MAX_SAFE_INTEGER,
        [VirtualTimeScheduler_microTaskTicks]: 0,
        [VirtualTimeScheduler_taskIDCount]: 0,
        [VirtualTimeScheduler_queue]: none,
      }),
      {
        get [ContinuationSchedulerLike_shouldYield]() {
          unsafeCast<TProperties>(this);

          this[VirtualTimeScheduler_microTaskTicks]++;

          return (
            this[VirtualTimeScheduler_microTaskTicks] >=
            this[VirtualTimeScheduler_maxMicroTaskTicks]
          );
        },
        [VirtualTimeSchedulerLike_run](
          this: TProperties & ContinuationSchedulerLike & DisposableLike,
        ) {
          let queue: Optional<QueueLike<SchedulerTaskLike>> = none;
          while (
            ((queue = this[VirtualTimeScheduler_queue]),
            queue[QueueLike_count] > 0)
          ) {
            this[VirtualTimeScheduler_queue] = PriorityQueue.create(
              SchedulerTask_comparator,
            );

            const currentTime = this[SchedulerLike_now];

            let task: Optional<SchedulerTaskLike> = none;

            while (((task = queue[QueueLike_dequeue]()), isSome(task))) {
              if (task[SchedulerTaskLike_dueTime] > currentTime) {
                // copy the task and all other remaining tasks back to the scheduler queue

                this[VirtualTimeScheduler_queue][QueueableLike_enqueue](task);
                while (((task = queue[QueueLike_dequeue]()), isSome(task))) {
                  this[VirtualTimeScheduler_queue][QueueableLike_enqueue](task);
                }
              } else {
                this[VirtualTimeScheduler_microTaskTicks] = 0;
                task[SchedulerTaskLike_continuation][ContinuationLike_run]();
              }
            }

            const queueHeadDueTime =
              this[VirtualTimeScheduler_queue][QueueLike_head]?.[
                SchedulerTaskLike_dueTime
              ] ?? MIN_SAFE_INTEGER;

            this[SchedulerLike_now] = max(queueHeadDueTime, currentTime + 1);
          }

          this[DisposableLike_dispose]();
        },
        [ContinuationSchedulerLike_scheduleContinuation](
          this: TProperties & QueueLike<SchedulerTaskLike> & SchedulerLike,
          continuation: ContinuationLike,
          delay: number,
        ) {
          this[VirtualTimeScheduler_queue][QueueableLike_enqueue]({
            [SchedulerTaskLike_id]: this[VirtualTimeScheduler_taskIDCount]++,
            [SchedulerTaskLike_dueTime]: this[SchedulerLike_now] + delay,
            [SchedulerTaskLike_continuation]: continuation,
          });
        },
      },
    ),
  ))();

export const create: Signature["create"] = (
  options: { readonly maxMicroTaskTicks?: number } = {},
) => {
  const maxMicroTaskTicks = clampPositiveNonZeroInteger(
    options?.maxMicroTaskTicks ?? MAX_SAFE_INTEGER,
  );
  return createVirtualTimeSchedulerInstance(maxMicroTaskTicks);
};

import {
  MAX_SAFE_INTEGER,
  MIN_SAFE_INTEGER,
} from "../__internal__/constants.js";
import { clampPositiveNonZeroInteger, max } from "../__internal__/math.js";
import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
  unsafeCast,
} from "../__internal__/mixins.js";
import {
  SchedulerLike,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  VirtualTimeSchedulerLike,
  VirtualTimeSchedulerLike_run,
} from "../concurrent.js";
import { Optional, isSome, none } from "../functions.js";
import * as Queue from "../utils/Queue.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  QueueLike,
  QueueLike_count,
  QueueLike_dequeue,
  QueueLike_head,
  QueueableLike_enqueue,
} from "../utils.js";
import {
  ContinuationLike,
  ContinuationLike_dueTime,
  ContinuationLike_run,
} from "./__internal__/Continuation.js";
import * as Continuation from "./__internal__/Continuation.js";
import SchedulerMixin, {
  SchedulerMixinBaseLike,
  SchedulerMixinBaseLike_schedule,
  SchedulerMixinBaseLike_shouldYield,
} from "./__mixins__/SchedulerMixin.js";

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

const VirtualTimeScheduler_queue = Symbol("VirtualTimeScheduler_queue");

type TProperties = {
  [SchedulerLike_now]: number;
  readonly [VirtualTimeScheduler_maxMicroTaskTicks]: number;
  [VirtualTimeScheduler_microTaskTicks]: number;
  [VirtualTimeScheduler_queue]: QueueLike<ContinuationLike>;
};

const createVirtualTimeSchedulerInstance = /*@__PURE__*/ (() =>
  mixInstanceFactory(
    include(SchedulerMixin),
    function VirtualTimeScheduler(
      instance: Pick<
        VirtualTimeSchedulerLike,
        typeof VirtualTimeSchedulerLike_run
      > &
        Mutable<TProperties> &
        SchedulerMixinBaseLike,
      maxMicroTaskTicks: number,
    ): VirtualTimeSchedulerLike {
      init(SchedulerMixin, instance);

      instance[VirtualTimeScheduler_maxMicroTaskTicks] = maxMicroTaskTicks;
      instance[VirtualTimeScheduler_queue] = Queue.create({
        comparator: Continuation.compare,
      });

      return instance;
    },
    props<TProperties>({
      [SchedulerLike_now]: 0,
      [VirtualTimeScheduler_maxMicroTaskTicks]: MAX_SAFE_INTEGER,
      [VirtualTimeScheduler_microTaskTicks]: 0,
      [VirtualTimeScheduler_queue]: none,
    }),
    {
      [SchedulerLike_maxYieldInterval]: 1,

      get [SchedulerMixinBaseLike_shouldYield]() {
        unsafeCast<TProperties>(this);

        this[VirtualTimeScheduler_microTaskTicks]++;

        return (
          this[VirtualTimeScheduler_microTaskTicks] >=
          this[VirtualTimeScheduler_maxMicroTaskTicks]
        );
      },
      [VirtualTimeSchedulerLike_run](
        this: TProperties & SchedulerMixinBaseLike & DisposableLike,
      ) {
        let queue: Optional<QueueLike<ContinuationLike>> = none;
        while (
          ((queue = this[VirtualTimeScheduler_queue]),
          queue[QueueLike_count] > 0)
        ) {
          this[VirtualTimeScheduler_queue] = Queue.create({
            comparator: Continuation.compare,
          });

          const currentTime = this[SchedulerLike_now];

          let continuation: Optional<ContinuationLike> = none;

          while (
            ((continuation = queue[QueueLike_dequeue]()), isSome(continuation))
          ) {
            if (continuation[ContinuationLike_dueTime] > currentTime) {
              // copy the task and all other remaining tasks back to the scheduler queue

              this[VirtualTimeScheduler_queue][QueueableLike_enqueue](
                continuation,
              );
              while (
                ((continuation = queue[QueueLike_dequeue]()),
                isSome(continuation))
              ) {
                this[VirtualTimeScheduler_queue][QueueableLike_enqueue](
                  continuation,
                );
              }
            } else {
              this[VirtualTimeScheduler_microTaskTicks] = 0;
              continuation[ContinuationLike_run]();
            }
          }

          const queueHeadDueTime =
            this[VirtualTimeScheduler_queue][QueueLike_head]?.[
              ContinuationLike_dueTime
            ] ?? MIN_SAFE_INTEGER;

          this[SchedulerLike_now] = max(queueHeadDueTime, currentTime + 1);
        }

        this[DisposableLike_dispose]();
      },
      [SchedulerMixinBaseLike_schedule](
        this: TProperties & QueueLike<ContinuationLike> & SchedulerLike,
        continuation: ContinuationLike,
      ) {
        this[VirtualTimeScheduler_queue][QueueableLike_enqueue](continuation);
      },
    },
  ))();

export const create: Signature["create"] = (
  options: { readonly maxMicroTaskTicks?: number } = {},
) => {
  const maxMicroTaskTicks = clampPositiveNonZeroInteger(
    options?.maxMicroTaskTicks ?? MAX_SAFE_INTEGER,
  );
  return createVirtualTimeSchedulerInstance(maxMicroTaskTicks);
};

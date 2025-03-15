import {
  MAX_SAFE_INTEGER,
  MIN_SAFE_INTEGER,
} from "../__internal__/constants.js";
import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
  unsafeCast,
} from "../__internal__/mixins.js";
import { Optional, isSome, none } from "../functions.js";
import { clampPositiveNonZeroInteger, max } from "../math.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  EventListenerLike_notify,
  QueueLike,
  QueueLike_count,
  QueueLike_dequeue,
  QueueLike_head,
  SchedulerLike,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  VirtualTimeSchedulerLike,
  VirtualTimeSchedulerLike_run,
} from "../utils.js";
import * as Queue from "./Queue.js";
import SchedulerMixin, {
  SchedulerContinuation,
  SchedulerContinuationLike,
  SchedulerContinuationLike_dueTime,
  SchedulerContinuationLike_run,
  SchedulerMixinHostLike,
  SchedulerMixinHostLike_schedule,
  SchedulerMixinHostLike_shouldYield,
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
  [VirtualTimeScheduler_queue]: QueueLike<SchedulerContinuationLike>;
};

const createVirtualTimeSchedulerInstance = /*@__PURE__*/ (() =>
  mixInstanceFactory(
    include(SchedulerMixin),
    function VirtualTimeScheduler(
      this: Pick<
        VirtualTimeSchedulerLike,
        typeof VirtualTimeSchedulerLike_run
      > &
        Mutable<TProperties> &
        SchedulerMixinHostLike,
      maxMicroTaskTicks: number,
    ): VirtualTimeSchedulerLike {
      init(SchedulerMixin, this);

      this[VirtualTimeScheduler_maxMicroTaskTicks] = maxMicroTaskTicks;
      this[VirtualTimeScheduler_queue] = Queue.createSorted(
        SchedulerContinuation.compare,
      );

      return this;
    },
    props<TProperties>({
      [SchedulerLike_now]: 0,
      [VirtualTimeScheduler_maxMicroTaskTicks]: MAX_SAFE_INTEGER,
      [VirtualTimeScheduler_microTaskTicks]: 0,
      [VirtualTimeScheduler_queue]: none,
    }),
    {
      [SchedulerLike_maxYieldInterval]: 1,

      get [SchedulerMixinHostLike_shouldYield]() {
        unsafeCast<TProperties>(this);

        this[VirtualTimeScheduler_microTaskTicks]++;

        return (
          this[VirtualTimeScheduler_microTaskTicks] >=
          this[VirtualTimeScheduler_maxMicroTaskTicks]
        );
      },
      [VirtualTimeSchedulerLike_run](
        this: TProperties & SchedulerMixinHostLike & DisposableLike,
      ) {
        let queue: Optional<QueueLike<SchedulerContinuationLike>> = none;
        while (
          ((queue = this[VirtualTimeScheduler_queue]),
          queue[QueueLike_count] > 0)
        ) {
          this[VirtualTimeScheduler_queue] = Queue.createSorted(
            SchedulerContinuation.compare,
          );

          const currentTime = this[SchedulerLike_now];

          let continuation: Optional<SchedulerContinuationLike> = none;

          while (
            ((continuation = queue[QueueLike_dequeue]()), isSome(continuation))
          ) {
            if (continuation[SchedulerContinuationLike_dueTime] > currentTime) {
              // copy the task and all other remaining tasks back to the scheduler queue

              this[VirtualTimeScheduler_queue][EventListenerLike_notify](
                continuation,
              );
              while (
                ((continuation = queue[QueueLike_dequeue]()),
                isSome(continuation))
              ) {
                this[VirtualTimeScheduler_queue][EventListenerLike_notify](
                  continuation,
                );
              }
            } else {
              this[VirtualTimeScheduler_microTaskTicks] = 0;
              continuation[SchedulerContinuationLike_run]();
            }
          }

          const queueHeadDueTime =
            this[VirtualTimeScheduler_queue][QueueLike_head]?.[
              SchedulerContinuationLike_dueTime
            ] ?? MIN_SAFE_INTEGER;

          this[SchedulerLike_now] = max(queueHeadDueTime, currentTime + 1);
        }

        this[DisposableLike_dispose]();
      },
      [SchedulerMixinHostLike_schedule](
        this: TProperties &
          QueueLike<SchedulerContinuationLike> &
          SchedulerLike,
        continuation: SchedulerContinuationLike,
      ) {
        this[VirtualTimeScheduler_queue][EventListenerLike_notify](
          continuation,
        );
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

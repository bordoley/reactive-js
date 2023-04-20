import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../../../__internal__/math.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ContinuationLike } from "../../../__internal__/scheduling.js";
import {
  __VirtualTask_continuation,
  __VirtualTask_dueTime,
  __VirtualTask_id,
  __VirtualTimeScheduler_maxMicroTaskTicks,
  __VirtualTimeScheduler_microTaskTicks,
  __VirtualTimeScheduler_taskIDCount,
} from "../../../__internal__/symbols.js";
import { QueueLike, QueueLike_dequeue } from "../../../__internal__/util.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../../containers.js";
import MutableEnumerator_mixin, {
  MutableEnumeratorLike,
} from "../../../containers/Enumerator/__internal__/MutableEnumerator.mixin.js";
import { isSome, unsafeCast } from "../../../functions.js";
import {
  SchedulerLike_now,
  VirtualTimeSchedulerLike,
  VirtualTimeSchedulerLike_run,
} from "../../../scheduling.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueableLike_enqueue,
} from "../../../util.js";
import Queue_priorityQueueMixin from "../../../util/Queue/__internal__/Queue.priorityQueueMixin.js";
import {
  PrioritySchedulerImplementationLike,
  PrioritySchedulerImplementationLike_runContinuation,
  PrioritySchedulerImplementationLike_scheduleContinuation,
  PrioritySchedulerImplementationLike_shouldYield,
  PriorityScheduler_mixin,
} from "./Scheduler.mixin.js";

type VirtualTask = {
  readonly [__VirtualTask_continuation]: ContinuationLike;
  [__VirtualTask_dueTime]: number;
  [__VirtualTask_id]: number;
};

const comparator = (a: VirtualTask, b: VirtualTask) => {
  const diff = a[__VirtualTask_dueTime] - b[__VirtualTask_dueTime];
  return diff !== 0 ? diff : a[__VirtualTask_id] - b[__VirtualTask_id];
};

type TProperties = {
  [SchedulerLike_now]: number;
  readonly [__VirtualTimeScheduler_maxMicroTaskTicks]: number;
  [__VirtualTimeScheduler_microTaskTicks]: number;
  [__VirtualTimeScheduler_taskIDCount]: number;
};

const createVirtualTimeSchedulerInstance = /*@__PURE__*/ (() =>
  createInstanceFactory(
    mix(
      include(
        PriorityScheduler_mixin,
        MutableEnumerator_mixin<VirtualTask>(),
        Queue_priorityQueueMixin<VirtualTask>(),
      ),
      function VirtualTimeScheduler(
        instance: Pick<
          VirtualTimeSchedulerLike,
          typeof VirtualTimeSchedulerLike_run
        > &
          Mutable<TProperties>,
        maxMicroTaskTicks: number,
      ): VirtualTimeSchedulerLike {
        init(PriorityScheduler_mixin, instance, 1);
        init(MutableEnumerator_mixin<VirtualTask>(), instance);
        init(
          Queue_priorityQueueMixin<VirtualTask>(),
          instance,
          comparator,
          MAX_SAFE_INTEGER,
          "overflow",
        );

        instance[__VirtualTimeScheduler_maxMicroTaskTicks] = maxMicroTaskTicks;

        return instance;
      },
      props<TProperties>({
        [SchedulerLike_now]: 0,
        [__VirtualTimeScheduler_maxMicroTaskTicks]: MAX_SAFE_INTEGER,
        [__VirtualTimeScheduler_microTaskTicks]: 0,
        [__VirtualTimeScheduler_taskIDCount]: 0,
      }),
      {
        get [PrioritySchedulerImplementationLike_shouldYield]() {
          unsafeCast<TProperties>(this);

          this[__VirtualTimeScheduler_microTaskTicks]++;

          return (
            this[__VirtualTimeScheduler_microTaskTicks] >=
            this[__VirtualTimeScheduler_maxMicroTaskTicks]
          );
        },
        [VirtualTimeSchedulerLike_run](
          this: TProperties &
            EnumeratorLike<VirtualTask> &
            PrioritySchedulerImplementationLike,
        ) {
          while (
            !this[DisposableLike_isDisposed] &&
            this[EnumeratorLike_move]()
          ) {
            const task = this[EnumeratorLike_current];
            const {
              [__VirtualTask_dueTime]: dueTime,
              [__VirtualTask_continuation]: continuation,
            } = task;

            this[__VirtualTimeScheduler_microTaskTicks] = 0;
            this[SchedulerLike_now] = dueTime;

            this[PrioritySchedulerImplementationLike_runContinuation](
              continuation,
            );
          }
        },
        [PrioritySchedulerImplementationLike_scheduleContinuation](
          this: TProperties &
            DisposableLike &
            QueueLike<VirtualTask> &
            PrioritySchedulerImplementationLike,
          continuation: ContinuationLike,
          delay: number,
        ) {
          this[QueueableLike_enqueue]({
            [__VirtualTask_id]: this[__VirtualTimeScheduler_taskIDCount]++,
            [__VirtualTask_dueTime]: this[SchedulerLike_now] + delay,
            [__VirtualTask_continuation]: continuation,
          });
        },
        [EnumeratorLike_move](
          this: TProperties &
            MutableEnumeratorLike<VirtualTask> &
            QueueLike<VirtualTask> &
            DisposableLike,
        ): boolean {
          const task = this[QueueLike_dequeue]();

          if (isSome(task)) {
            this[EnumeratorLike_current] = task;
          } else {
            this[DisposableLike_dispose]();
          }

          return this[EnumeratorLike_hasCurrent];
        },
      },
    ),
  ))();

const Scheduler_createVirtualTimeScheduler = (
  options: { readonly maxMicroTaskTicks?: number } = {},
): VirtualTimeSchedulerLike => {
  const maxMicroTaskTicks = clampPositiveNonZeroInteger(
    options.maxMicroTaskTicks ?? MAX_SAFE_INTEGER,
  );
  return createVirtualTimeSchedulerInstance(maxMicroTaskTicks);
};

export default Scheduler_createVirtualTimeScheduler;

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
import {
  ContinuationLike,
  SchedulerTaskLike,
  SchedulerTaskLike_continuation,
  SchedulerTaskLike_dueTime,
  SchedulerTaskLike_id,
} from "../../../__internal__/scheduling.js";
import {
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

const comparator = (a: SchedulerTaskLike, b: SchedulerTaskLike) => {
  const diff = a[SchedulerTaskLike_dueTime] - b[SchedulerTaskLike_dueTime];
  return diff !== 0 ? diff : a[SchedulerTaskLike_id] - b[SchedulerTaskLike_id];
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
        MutableEnumerator_mixin<SchedulerTaskLike>(),
        Queue_priorityQueueMixin<SchedulerTaskLike>(),
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
        init(MutableEnumerator_mixin<SchedulerTaskLike>(), instance);
        init(
          Queue_priorityQueueMixin<SchedulerTaskLike>(),
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
            EnumeratorLike<SchedulerTaskLike> &
            PrioritySchedulerImplementationLike,
        ) {
          while (
            !this[DisposableLike_isDisposed] &&
            this[EnumeratorLike_move]()
          ) {
            const task = this[EnumeratorLike_current];
            const {
              [SchedulerTaskLike_dueTime]: dueTime,
              [SchedulerTaskLike_continuation]: continuation,
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
            QueueLike<SchedulerTaskLike> &
            PrioritySchedulerImplementationLike,
          continuation: ContinuationLike,
          delay: number,
        ) {
          this[QueueableLike_enqueue]({
            [SchedulerTaskLike_id]: this[__VirtualTimeScheduler_taskIDCount]++,
            [SchedulerTaskLike_dueTime]: this[SchedulerLike_now] + delay,
            [SchedulerTaskLike_continuation]: continuation,
          });
        },
        [EnumeratorLike_move](
          this: TProperties &
            MutableEnumeratorLike<SchedulerTaskLike> &
            QueueLike<SchedulerTaskLike> &
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

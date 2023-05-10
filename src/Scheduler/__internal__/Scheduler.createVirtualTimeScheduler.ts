import MutableEnumerator_mixin, {
  MutableEnumeratorLike,
} from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";
import Queue_priorityQueueMixin from "../../Queue/__internal__/Queue.priorityQueueMixin.js";
import type * as Scheduler from "../../Scheduler.js";
import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../../__internal__/math.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  __VirtualTimeScheduler_maxMicroTaskTicks,
  __VirtualTimeScheduler_microTaskTicks,
  __VirtualTimeScheduler_taskIDCount,
} from "../../__internal__/symbols.js";
import {
  ContinuationLike,
  QueueLike,
  QueueLike_dequeue,
  SchedulerTaskLike,
  SchedulerTaskLike_continuation,
  SchedulerTaskLike_dueTime,
  SchedulerTaskLike_id,
} from "../../__internal__/types.js";
import { isSome, unsafeCast } from "../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
  QueueableLike_enqueue,
  SchedulerLike_now,
  VirtualTimeSchedulerLike,
  VirtualTimeSchedulerLike_run,
} from "../../types.js";
import {
  SchedulerImplementationLike,
  SchedulerImplementationLike_runContinuation,
  SchedulerImplementationLike_scheduleContinuation,
  SchedulerImplementationLike_shouldYield,
  SchedulerImplementation_mixin,
} from "./SchedulerImplementation.mixin.js";

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
        SchedulerImplementation_mixin,
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
        init(SchedulerImplementation_mixin, instance, 1);
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
        get [SchedulerImplementationLike_shouldYield]() {
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
            SchedulerImplementationLike,
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

            this[SchedulerImplementationLike_runContinuation](continuation);
          }
        },
        [SchedulerImplementationLike_scheduleContinuation](
          this: TProperties &
            DisposableLike &
            QueueLike<SchedulerTaskLike> &
            SchedulerImplementationLike,
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

const Scheduler_createVirtualTimeScheduler: Scheduler.Signature["createVirtualTimeScheduler"] =
  (options: { readonly maxMicroTaskTicks?: number } = {}) => {
    const maxMicroTaskTicks = clampPositiveNonZeroInteger(
      options.maxMicroTaskTicks ?? MAX_SAFE_INTEGER,
    );
    return createVirtualTimeSchedulerInstance(maxMicroTaskTicks);
  };

export default Scheduler_createVirtualTimeScheduler;

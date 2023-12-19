import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../__internal__/math.js";
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
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../collections.js";
import MutableEnumeratorMixin, {
  MutableEnumeratorLike,
} from "../collections/__mixins__/MutableEnumeratorMixin.js";
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
} from "../concurrent/__private__.js";
import { isSome, none } from "../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueLike,
  QueueLike_dequeue,
  QueueableLike_enqueue,
} from "../utils.js";
import PriorityQueueMixin from "../utils/__mixins__/PriorityQueueMixin.js";
import ContinuationSchedulerMixin, {
  ContinuationLike,
  ContinuationLike_run,
  ContinuationSchedulerImplementationLike,
  ContinuationSchedulerImplementationLike_scheduleContinuation,
  ContinuationSchedulerImplementationLike_shouldYield,
  ContinuationSchedulerLike,
} from "./__mixins__/ContinuationSchedulerMixin.js";

interface Signature {
  create(options?: {
    readonly maxMicroTaskTicks?: number;
  }): VirtualTimeSchedulerLike;
}

const comparator = (a: SchedulerTaskLike, b: SchedulerTaskLike) => {
  const diff = a[SchedulerTaskLike_dueTime] - b[SchedulerTaskLike_dueTime];
  return diff !== 0 ? diff : a[SchedulerTaskLike_id] - b[SchedulerTaskLike_id];
};

const VirtualTimeScheduler_maxMicroTaskTicks = Symbol(
  "VirtualTimeScheduler_maxMicroTaskTicks",
);
const VirtualTimeScheduler_microTaskTicks = Symbol(
  "VirtualTimeScheduler_microTaskTicks",
);
const VirtualTimeScheduler_taskIDCount = Symbol(
  "VirtualTimeScheduler_taskIDCount",
);

type TProperties = {
  [SchedulerLike_now]: number;
  readonly [VirtualTimeScheduler_maxMicroTaskTicks]: number;
  [VirtualTimeScheduler_microTaskTicks]: number;
  [VirtualTimeScheduler_taskIDCount]: number;
};

const createVirtualTimeSchedulerInstance = /*@__PURE__*/ (() =>
  createInstanceFactory(
    mix(
      include(
        ContinuationSchedulerMixin,
        MutableEnumeratorMixin<SchedulerTaskLike>(),
        PriorityQueueMixin<SchedulerTaskLike>(),
      ),
      function VirtualTimeScheduler(
        instance: Pick<
          VirtualTimeSchedulerLike,
          typeof VirtualTimeSchedulerLike_run
        > &
          Mutable<TProperties> &
          ContinuationSchedulerImplementationLike,
        maxMicroTaskTicks: number,
      ): VirtualTimeSchedulerLike {
        init(ContinuationSchedulerMixin, instance, 1);
        init(MutableEnumeratorMixin<SchedulerTaskLike>(), instance);
        init(
          PriorityQueueMixin<SchedulerTaskLike>(),
          instance,
          comparator,
          none,
        );

        instance[VirtualTimeScheduler_maxMicroTaskTicks] = maxMicroTaskTicks;

        return instance;
      },
      props<TProperties>({
        [SchedulerLike_now]: 0,
        [VirtualTimeScheduler_maxMicroTaskTicks]: MAX_SAFE_INTEGER,
        [VirtualTimeScheduler_microTaskTicks]: 0,
        [VirtualTimeScheduler_taskIDCount]: 0,
      }),
      {
        get [ContinuationSchedulerImplementationLike_shouldYield]() {
          unsafeCast<TProperties>(this);

          this[VirtualTimeScheduler_microTaskTicks]++;

          return (
            this[VirtualTimeScheduler_microTaskTicks] >=
            this[VirtualTimeScheduler_maxMicroTaskTicks]
          );
        },
        [VirtualTimeSchedulerLike_run](
          this: TProperties &
            EnumeratorLike<SchedulerTaskLike> &
            ContinuationSchedulerLike,
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

            this[VirtualTimeScheduler_microTaskTicks] = 0;
            this[SchedulerLike_now] = dueTime;

            continuation[ContinuationLike_run]();
          }
        },
        [ContinuationSchedulerImplementationLike_scheduleContinuation](
          this: TProperties & QueueLike<SchedulerTaskLike> & SchedulerLike,
          continuation: ContinuationLike,
          delay: number,
        ) {
          this[QueueableLike_enqueue]({
            [SchedulerTaskLike_id]: this[VirtualTimeScheduler_taskIDCount]++,
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

export const create: Signature["create"] = (
  options: { readonly maxMicroTaskTicks?: number } = {},
) => {
  const maxMicroTaskTicks = clampPositiveNonZeroInteger(
    options.maxMicroTaskTicks ?? MAX_SAFE_INTEGER,
  );
  return createVirtualTimeSchedulerInstance(maxMicroTaskTicks);
};

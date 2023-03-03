import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { MAX_SAFE_INTEGER } from "../../../constants.js";
import { isSome, pipe, unsafeCast } from "../../../functions.js";
import {
  ContinuationLike,
  ContinuationLike_run,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  VirtualTimeSchedulerLike,
  VirtualTimeSchedulerLike_run,
} from "../../../scheduling.js";
import {
  DisposableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
  QueueLike_push,
} from "../../../util.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Enumerator_getCurrent from "../../../util/Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerator_move from "../../../util/Enumerator/__internal__/Enumerator.move.js";
import MutableEnumerator_mixin from "../../../util/Enumerator/__internal__/MutableEnumerator.mixin.js";
import PullableQueue_priorityQueueMixin from "../../../util/PullableQueue/__internal__/PullableQueue.priorityQueueMixin.js";
import PullableQueue_pull from "../../../util/PullableQueue/__internal__/PullableQueue.pull.js";
import {
  MutableEnumeratorLike,
  PullableQueueLike,
} from "../../../util/__internal__/util.internal.js";
import getCurrentTime from "../../Scheduler/__internal__/Scheduler.getCurrentTime.js";
import { getDelay } from "../../__internal__/Scheduler.options.js";

const VirtualTask_continuation = Symbol("VirtualTask_continuation");
const VirtualTask_dueTime = Symbol("VirtualTask_dueTime");
const VirtualTask_id = Symbol("VirtualTask_id");

type VirtualTask = {
  readonly [VirtualTask_continuation]: ContinuationLike;
  [VirtualTask_dueTime]: number;
  [VirtualTask_id]: number;
};

const comparator = (a: VirtualTask, b: VirtualTask) => {
  const diff = a[VirtualTask_dueTime] - b[VirtualTask_dueTime];
  return diff !== 0 ? diff : a[VirtualTask_id] - b[VirtualTask_id];
};

const typedMutableEnumeratorMixin =
  /*@__PURE__*/ MutableEnumerator_mixin<VirtualTask>();

const VirtualTimeScheduler_maxMicroTaskTicks = Symbol(
  "VirtualTimeScheduler_maxMicroTaskTicks",
);
const VirtualTimeScheduler_microTaskTicks = Symbol(
  "VirtualTimeScheduler_microTaskTicks",
);
const VirtualTimeScheduler_taskIDCount = Symbol(
  "VirtualTimeScheduler_taskIDCount",
);
const VirtualTimeScheduler_yieldRequested = Symbol(
  "VirtualTimeScheduler_yieldRequested",
);

type TProperties = {
  [SchedulerLike_inContinuation]: boolean;
  [SchedulerLike_now]: number;
  readonly [VirtualTimeScheduler_maxMicroTaskTicks]: number;
  [VirtualTimeScheduler_microTaskTicks]: number;
  [VirtualTimeScheduler_taskIDCount]: number;
  [VirtualTimeScheduler_yieldRequested]: boolean;
};

const createVirtualTimeSchedulerInstance = /*@__PURE__*/ createInstanceFactory(
  mix(
    include(
      Disposable_mixin,
      typedMutableEnumeratorMixin,
      PullableQueue_priorityQueueMixin<VirtualTask>(),
    ),
    function VirtualTimeScheduler(
      instance: Pick<
        VirtualTimeSchedulerLike,
        | typeof VirtualTimeSchedulerLike_run
        | typeof SchedulerLike_shouldYield
        | typeof SchedulerLike_requestYield
        | typeof SchedulerLike_schedule
      > &
        Mutable<TProperties>,
      maxMicroTaskTicks: number,
    ): VirtualTimeSchedulerLike {
      init(Disposable_mixin, instance);
      init(typedMutableEnumeratorMixin, instance);
      init(
        PullableQueue_priorityQueueMixin<VirtualTask>(),
        instance,
        comparator,
      );

      instance[VirtualTimeScheduler_maxMicroTaskTicks] = maxMicroTaskTicks;

      return instance;
    },
    props<TProperties>({
      [SchedulerLike_inContinuation]: false,
      [SchedulerLike_now]: 0,
      [VirtualTimeScheduler_maxMicroTaskTicks]: MAX_SAFE_INTEGER,
      [VirtualTimeScheduler_microTaskTicks]: 0,
      [VirtualTimeScheduler_taskIDCount]: 0,
      [VirtualTimeScheduler_yieldRequested]: false,
    }),
    {
      get [SchedulerLike_shouldYield]() {
        unsafeCast<TProperties>(this);

        const {
          [VirtualTimeScheduler_yieldRequested]: yieldRequested,
          [SchedulerLike_inContinuation]: inContinuation,
        } = this;

        if (inContinuation) {
          this[VirtualTimeScheduler_microTaskTicks]++;
          this[VirtualTimeScheduler_yieldRequested] = false;
        }

        return (
          inContinuation &&
          (yieldRequested ||
            this[VirtualTimeScheduler_microTaskTicks] >=
              this[VirtualTimeScheduler_maxMicroTaskTicks])
        );
      },
      [VirtualTimeSchedulerLike_run](
        this: TProperties & EnumeratorLike<VirtualTask>,
      ) {
        while (Enumerator_move(this)) {
          const task = Enumerator_getCurrent(this);
          const {
            [VirtualTask_dueTime]: dueTime,
            [VirtualTask_continuation]: continuation,
          } = task;

          this[VirtualTimeScheduler_microTaskTicks] = 0;
          this[SchedulerLike_now] = dueTime;
          this[SchedulerLike_inContinuation] = true;
          continuation[ContinuationLike_run]();
          this[SchedulerLike_inContinuation] = false;
        }
      },
      [SchedulerLike_requestYield](this: TProperties): void {
        this[VirtualTimeScheduler_yieldRequested] = true;
      },
      [SchedulerLike_schedule](
        this: TProperties &
          DisposableLike &
          PullableQueueLike<VirtualTask> &
          SchedulerLike,
        continuation: ContinuationLike,
        options?: { readonly delay?: number },
      ) {
        const delay = getDelay(options);

        pipe(this, Disposable_addIgnoringChildErrors(continuation));

        if (!Disposable_isDisposed(continuation)) {
          this[QueueLike_push]({
            [VirtualTask_id]: this[VirtualTimeScheduler_taskIDCount]++,
            [VirtualTask_dueTime]: getCurrentTime(this) + delay,
            [VirtualTask_continuation]: continuation,
          });
        }
      },
      [EnumeratorLike_move](
        this: TProperties &
          MutableEnumeratorLike<VirtualTask> &
          PullableQueueLike<VirtualTask>,
      ): void {
        if (Disposable_isDisposed(this)) {
          return;
        }

        const task = PullableQueue_pull(this);

        if (isSome(task)) {
          this[EnumeratorLike_current] = task;
        } else {
          pipe(this, Disposable_dispose());
        }
      },
    },
  ),
);

const VirtualTimeScheduler_create = (
  options: { readonly maxMicroTaskTicks?: number } = {},
): VirtualTimeSchedulerLike => {
  const { maxMicroTaskTicks = MAX_SAFE_INTEGER } = options;
  return createVirtualTimeSchedulerInstance(maxMicroTaskTicks);
};

export default VirtualTimeScheduler_create;

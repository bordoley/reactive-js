import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { MAX_SAFE_INTEGER } from "../../../constants";
import { isSome, none, pipe, unsafeCast } from "../../../functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
} from "../../../ix";
import Enumerator_getCurrent from "../../../ix/__internal__/Enumerator/Enumerator.getCurrent";
import Enumerator_move from "../../../ix/__internal__/Enumerator/Enumerator.move";
import MutableEnumerator_mixin from "../../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin";
import { MutableEnumeratorLike } from "../../../ix/__internal__/ix.internal";
import {
  ContinuationLike,
  ContinuationLike_run,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  VirtualTimeSchedulerLike,
} from "../../../scheduling";
import { DisposableLike } from "../../../util";
import Disposable_addIgnoringChildErrors from "../../../util/__internal__/Disposable/Disposable.addIgnoringChildErrors";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Queue_create from "../../../util/__internal__/Queue/Queue.create";
import Queue_pop from "../../../util/__internal__/Queue/Queue.pop";
import Queue_push from "../../../util/__internal__/Queue/Queue.push";
import { QueueLike } from "../../../util/__internal__/util.internal";
import { getDelay } from "../Scheduler.options";
import getCurrentTime from "../Scheduler/Scheduler.getCurrentTime";

type VirtualTask = {
  readonly continuation: ContinuationLike;
  dueTime: number;
  id: number;
};

const comparator = (a: VirtualTask, b: VirtualTask) => {
  let diff = 0;
  diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
  diff = diff !== 0 ? diff : a.id - b.id;
  return diff;
};

const typedMutableEnumeratorMixin =
  /*@__PURE__*/ MutableEnumerator_mixin<VirtualTask>();

type TProperties = {
  [SchedulerLike_inContinuation]: boolean;
  [SchedulerLike_now]: number;
  readonly maxMicroTaskTicks: number;
  microTaskTicks: number;
  taskIDCount: number;
  yieldRequested: boolean;
  readonly taskQueue: QueueLike<VirtualTask>;
};

const createVirtualTimeSchedulerInstance = /*@__PURE__*/ createInstanceFactory(
  mix(
    include(Disposable_mixin, typedMutableEnumeratorMixin),
    function VirtualTimeScheduler(
      instance: Pick<
        VirtualTimeSchedulerLike,
        | typeof ContinuationLike_run
        | typeof SchedulerLike_shouldYield
        | typeof SchedulerLike_requestYield
        | typeof SchedulerLike_schedule
      > &
        Mutable<TProperties>,
      maxMicroTaskTicks: number,
    ): VirtualTimeSchedulerLike {
      init(Disposable_mixin, instance);
      init(typedMutableEnumeratorMixin, instance);

      instance.maxMicroTaskTicks = maxMicroTaskTicks;
      instance.taskQueue = Queue_create(comparator);

      return instance;
    },
    props<TProperties>({
      [SchedulerLike_inContinuation]: false,
      [SchedulerLike_now]: 0,
      maxMicroTaskTicks: MAX_SAFE_INTEGER,
      microTaskTicks: 0,
      taskIDCount: 0,
      yieldRequested: false,
      taskQueue: none,
    }),
    {
      get [SchedulerLike_shouldYield]() {
        unsafeCast<TProperties>(this);

        const {
          yieldRequested,
          [SchedulerLike_inContinuation]: inContinuation,
        } = this;

        if (inContinuation) {
          this.microTaskTicks++;
          this.yieldRequested = false;
        }

        return (
          inContinuation &&
          (yieldRequested || this.microTaskTicks >= this.maxMicroTaskTicks)
        );
      },
      [ContinuationLike_run](this: TProperties & EnumeratorLike<VirtualTask>) {
        while (Enumerator_move(this)) {
          const task = Enumerator_getCurrent(this);
          const { dueTime, continuation } = task;

          this.microTaskTicks = 0;
          this[SchedulerLike_now] = dueTime;
          this[SchedulerLike_inContinuation] = true;
          continuation[ContinuationLike_run]();
          this[SchedulerLike_inContinuation] = false;
        }
      },
      [SchedulerLike_requestYield](this: TProperties): void {
        this.yieldRequested = true;
      },
      [SchedulerLike_schedule](
        this: TProperties & DisposableLike,
        continuation: ContinuationLike,
        options?: { readonly delay?: number },
      ) {
        const delay = getDelay(options);

        pipe(this, Disposable_addIgnoringChildErrors(continuation));

        if (!Disposable_isDisposed(continuation)) {
          Queue_push(this.taskQueue, {
            id: this.taskIDCount++,
            dueTime: getCurrentTime(this) + delay,
            continuation,
          });
        }
      },
      [SourceLike_move](
        this: TProperties & MutableEnumeratorLike<VirtualTask>,
      ): void {
        const taskQueue = this.taskQueue;

        if (Disposable_isDisposed(this)) {
          return;
        }

        const task = Queue_pop(taskQueue);

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

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { getDelay } from "../../../__internal__/scheduling/SchedulerLike.options";
import { isSome, none, pipe, unsafeCast } from "../../../functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
} from "../../../ix";
import EnumeratorLike__getCurrent from "../../../ix/__internal__/EnumeratorLike/EnumeratorLike.getCurrent";
import EnumeratorLike__move from "../../../ix/__internal__/EnumeratorLike/EnumeratorLike.move";
import MutableEnumeratorLike__mixin from "../../../ix/__internal__/MutableEnumeratorLike/MutableEnumeratorLike.mixin";
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
import DisposableLike__addIgnoringChildErrors from "../../../util/__internal__/DisposableLike/DisposableLike.addIgnoringChildErrors";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__isDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import QueueLike__create from "../../../util/__internal__/QueueLike/QueueLike.create";
import QueueLike__pop from "../../../util/__internal__/QueueLike/QueueLike.pop";
import QueueLike__push from "../../../util/__internal__/QueueLike/QueueLike.push";
import { QueueLike } from "../../../util/__internal__/util.internal";
import ContinuationLike__run from "../ContinuationLike/ContinuationLike.run";
import getCurrentTime from "../SchedulerLike/SchedulerLike.getCurrentTime";

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
  /*@__PURE__*/ MutableEnumeratorLike__mixin<VirtualTask>();

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
    include(DisposableLike__mixin, typedMutableEnumeratorMixin),
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
      init(DisposableLike__mixin, instance);
      init(typedMutableEnumeratorMixin, instance);

      instance.maxMicroTaskTicks = maxMicroTaskTicks;
      instance.taskQueue = QueueLike__create(comparator);

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
        while (EnumeratorLike__move(this)) {
          const task = EnumeratorLike__getCurrent(this);
          const { dueTime, continuation } = task;

          this.microTaskTicks = 0;
          this[SchedulerLike_now] = dueTime;
          this[SchedulerLike_inContinuation] = true;
          ContinuationLike__run(continuation);
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

        pipe(this, DisposableLike__addIgnoringChildErrors(continuation));

        if (!DisposableLike__isDisposed(continuation)) {
          QueueLike__push(this.taskQueue, {
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

        if (DisposableLike__isDisposed(this)) {
          return;
        }

        const task = QueueLike__pop(taskQueue);

        if (isSome(task)) {
          this[EnumeratorLike_current] = task;
        } else {
          pipe(this, DisposableLike__dispose());
        }
      },
    },
  ),
);

const VirtualTimeSchedulerLike__create = (
  options: { readonly maxMicroTaskTicks?: number } = {},
): VirtualTimeSchedulerLike => {
  const { maxMicroTaskTicks = MAX_SAFE_INTEGER } = options;
  return createVirtualTimeSchedulerInstance(maxMicroTaskTicks);
};

export default VirtualTimeSchedulerLike__create;

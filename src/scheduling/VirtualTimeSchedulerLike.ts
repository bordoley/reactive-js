import { MAX_SAFE_INTEGER } from "../__internal__/env";
import {
  MutableEnumeratorLike,
  properties as enumeratorProperties,
  prototype as enumeratorPrototype,
} from "../__internal__/ix/Enumerator";
import { getDelay } from "../__internal__/optionalArgs";
import { runContinuation } from "../__internal__/scheduling";
import {
  QueueLike,
  createPriorityQueue,
} from "../__internal__/scheduling/queue";
import {
  properties as disposableProperties,
  prototype as disposablePrototype,
} from "../__internal__/util/Disposable";
import {
  Object_init,
  createObjectFactory,
  init,
} from "../__internal__/util/Object";
import { Function1, pipe } from "../functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  InteractiveSourceLike_move,
} from "../ix";
import { getCurrent } from "../ix/EnumeratorLike";
import { move } from "../ix/InteractiveSourceLike";
import {
  ContinuationLike,
  ContinuationLike_run,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  VirtualTimeSchedulerLike,
} from "../scheduling";
import { DisposableLike } from "../util";
import {
  addIgnoringChildErrors,
  dispose,
  isDisposed,
} from "../util/DisposableLike";
import { isSome, none } from "../util/Option";
import { getCurrentTime } from "./SchedulerLike";

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

const properties = {
  ...disposableProperties,
  ...enumeratorProperties,
  [SchedulerLike_inContinuation]: false,
  [SchedulerLike_now]: 0 as number,
  maxMicroTaskTicks: MAX_SAFE_INTEGER,
  microTaskTicks: 0,
  taskIDCount: 0,
  yieldRequested: false,
  taskQueue: none as unknown as QueueLike<VirtualTask>,
};

const prototype = {
  ...disposablePrototype,
  ...enumeratorPrototype,
  [ContinuationLike_run](
    this: typeof properties & EnumeratorLike<VirtualTask>,
  ) {
    while (move(this)) {
      const task = getCurrent(this);
      const { dueTime, continuation } = task;

      this.microTaskTicks = 0;
      this[SchedulerLike_now] = dueTime;
      pipe(this, runContinuation(continuation));
    }
  },
  [InteractiveSourceLike_move](
    this: typeof properties & MutableEnumeratorLike<VirtualTask>,
  ): void {
    const taskQueue = this.taskQueue;

    if (isDisposed(this)) {
      return;
    }

    const task = taskQueue.pop();

    if (isSome(task)) {
      this[EnumeratorLike_current] = task;
    } else {
      pipe(this, dispose());
    }
  },
  [Object_init](this: typeof properties, maxMicroTaskTicks: number) {
    init(disposablePrototype, this);
    this.maxMicroTaskTicks = maxMicroTaskTicks;
    this.taskQueue = createPriorityQueue(comparator);
  },
  get [SchedulerLike_shouldYield]() {
    const self = this as unknown as typeof properties;

    const { yieldRequested, [SchedulerLike_inContinuation]: inContinuation } =
      self;

    if (inContinuation) {
      self.microTaskTicks++;
      self.yieldRequested = false;
    }

    return (
      inContinuation &&
      (yieldRequested || self.microTaskTicks >= self.maxMicroTaskTicks)
    );
  },
  [SchedulerLike_requestYield](this: typeof properties): void {
    this.yieldRequested = true;
  },
  [SchedulerLike_schedule](
    this: typeof properties & DisposableLike,
    continuation: ContinuationLike,
    options?: { readonly delay?: number },
  ) {
    const delay = getDelay(options);

    pipe(this, addIgnoringChildErrors(continuation));

    if (!isDisposed(continuation)) {
      this.taskQueue.push({
        id: this.taskIDCount++,
        dueTime: getCurrentTime(this) + delay,
        continuation,
      });
    }
  },
};

const createInstance: Function1<number, VirtualTimeSchedulerLike> =
  /*@__PURE__*/ createObjectFactory<
    typeof prototype,
    typeof properties,
    number
  >(prototype, properties);

/**
 * Creates a new virtual time scheduler instance.
 *
 * @param maxMicroTaskTicks The max number of times
 * shouldYield should return false before returning true. Useful
 * for testing cooperative multitasking.
 */
export const create = (
  options: { readonly maxMicroTaskTicks?: number } = {},
): VirtualTimeSchedulerLike => {
  const { maxMicroTaskTicks = MAX_SAFE_INTEGER } = options;
  return createInstance(maxMicroTaskTicks);
};

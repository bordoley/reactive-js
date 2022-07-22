import { MAX_SAFE_INTEGER } from "../__internal__/env";
import {
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
  init as disposableInit,
  properties as disposableProperties,
  prototype as disposablePrototype,
} from "../__internal__/util/Disposable";
import { createObjectFactory } from "../__internal__/util/Object";
import { EnumeratorLike, EnumeratorLike_current } from "../ix/EnumeratorLike";
import { InteractiveSourceLike_move } from "../ix/InteractiveSourceLike";
import {
  DisposableLike,
  addIgnoringChildErrors,
  dispose,
  isDisposed,
} from "../util/DisposableLike";
import { isSome, none } from "../util/Option";
import { pipe } from "../util/functions";
import { ContinuationLike } from "./ContinuationLike";
import {
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  getCurrentTime,
} from "./SchedulerLike";

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
  [InteractiveSourceLike_move](
    this: typeof properties &
      DisposableLike & { [EnumeratorLike_current]: void },
  ): void {
    const taskQueue = this.taskQueue;

    if (!isDisposed(this)) {
      const task = taskQueue.pop();

      if (isSome(task)) {
        const { dueTime, continuation } = task;

        this.microTaskTicks = 0;
        this[SchedulerLike_now] = dueTime;
        this[EnumeratorLike_current] = none;

        pipe(this, runContinuation(continuation));
      } else {
        pipe(this, dispose());
      }
    }
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

const createInstance = /*@__PURE__*/ createObjectFactory(prototype, properties);

export interface VirtualTimeSchedulerLike
  extends EnumeratorLike<void>,
    SchedulerLike {}

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
  const instance = createInstance();
  disposableInit(instance);
  instance.maxMicroTaskTicks = maxMicroTaskTicks;
  instance.taskQueue = createPriorityQueue(comparator);
  return instance as VirtualTimeSchedulerLike;
};

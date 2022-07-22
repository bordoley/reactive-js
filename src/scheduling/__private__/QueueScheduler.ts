import { MAX_SAFE_INTEGER } from "../../__internal__/env";
import {
  properties as enumeratorProperties,
  prototype as enumeratorPrototype,
} from "../../__internal__/ix/Enumerator";
import { getDelay } from "../../__internal__/optionalArgs";
import { runContinuation } from "../../__internal__/scheduling";
import {
  init as disposableInit,
  properties as disposableProperties,
  prototype as disposablePrototype,
} from "../../__internal__/util/Disposable";
import { MutableRefLike_current } from "../../__internal__/util/MutableRefLike";
import { createObjectFactory } from "../../__internal__/util/Object";
import {
  SerialDisposableLike,
  init as serialDisposableInit,
  properties as serialDisposableProperties,
  prototype as serialDisposablePrototype,
} from "../../__internal__/util/SerialDisposable";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  getCurrent,
  hasCurrent,
} from "../../ix/EnumeratorLike";
import {
  InteractiveSourceLike_move,
  move,
} from "../../ix/InteractiveSourceLike";
import {
  DisposableLike,
  addIgnoringChildErrors,
  disposed,
  isDisposed,
} from "../../util/DisposableLike";
import { Option, isNone, isSome, none } from "../../util/Option";
import {
  PauseableLike,
  PauseableLike_pause,
  PauseableLike_resume,
} from "../../util/PauseableLike";
import { Function1, max, pipe } from "../../util/functions";
import { ContinuationLike } from "../ContinuationLike";
import { PrioritySchedulerLike } from "../PrioritySchedulerLike";
import {
  PauseableSchedulerLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  __yield,
  getCurrentTime,
  isInContinuation,
  schedule,
  shouldYield,
} from "../SchedulerLike";
import { QueueLike, createPriorityQueue } from "./queue";

export type QueueTask = {
  readonly continuation: ContinuationLike;
  dueTime: number;
  readonly priority: number;
  taskID: number;
};

const delayedComparator = (a: QueueTask, b: QueueTask) => {
  let diff = 0;
  diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
  diff = diff !== 0 ? diff : a.taskID - b.taskID;
  return diff;
};

const taskComparator = (a: QueueTask, b: QueueTask) => {
  let diff = 0;
  diff = diff !== 0 ? diff : a.priority - b.priority;
  diff = diff !== 0 ? diff : a.taskID - b.taskID;
  return diff;
};

const peek = (self: typeof properties): Option<QueueTask> => {
  const { delayed, queue } = self;
  const now = getCurrentTime(self.host);

  while (true) {
    const task = delayed.peek();

    if (isNone(task)) {
      break;
    }

    const taskIsDispose = isDisposed(task.continuation);
    if (task.dueTime > now && !taskIsDispose) {
      break;
    }

    delayed.pop();

    if (!taskIsDispose) {
      queue.push(task);
    }
  }

  let task: Option<QueueTask> = none;
  while (true) {
    task = queue.peek();

    if (isNone(task)) {
      break;
    }

    if (!isDisposed(task.continuation)) {
      break;
    }

    queue.pop();
  }

  return task ?? delayed.peek();
};

const priorityShouldYield = (
  self: typeof properties & EnumeratorLike<QueueTask>,
  next: QueueTask,
): boolean => {
  const { [EnumeratorLike_current]: current } = self;

  return (
    current !== next &&
    next.dueTime <= getCurrentTime(self.host) &&
    next.priority > current.priority
  );
};

const scheduleOnHost = (self: typeof properties & SerialDisposableLike) => {
  const task = peek(self);

  const continuationActive =
    !isDisposed(self[MutableRefLike_current]) &&
    isSome(task) &&
    self.dueTime <= task.dueTime;

  if (isNone(task) || continuationActive || self.isPaused) {
    return;
  }

  const dueTime = task.dueTime;
  const delay = max(dueTime - getCurrentTime(self.host), 0);
  self.dueTime = dueTime;

  self[MutableRefLike_current] = pipe(
    self.host,
    schedule(self.hostContinuation, { delay }),
  );
};

const properties = {
  ...disposableProperties,
  ...enumeratorProperties,
  ...serialDisposableProperties,
  [SchedulerLike_inContinuation]: false,
  delayed: none as unknown as QueueLike<QueueTask>,
  dueTime: 0,
  host: none as unknown as SchedulerLike,
  hostContinuation: () => {},
  isPaused: false,
  queue: none as unknown as QueueLike<QueueTask>,
  taskIDCounter: 0,
  yieldRequested: false,
};

const prototype = {
  ...disposablePrototype,
  ...enumeratorPrototype,
  ...serialDisposablePrototype,
  get [SchedulerLike_now](): number {
    const self = this as unknown as typeof properties;
    return getCurrentTime(self.host);
  },
  get [SchedulerLike_shouldYield](): boolean {
    const self = this as unknown as typeof properties &
      EnumeratorLike<QueueTask>;

    const { [SchedulerLike_inContinuation]: inContinuation, yieldRequested } =
      self;

    if (inContinuation) {
      self.yieldRequested = false;
    }

    const next = peek(self);

    return (
      inContinuation &&
      (yieldRequested ||
        isDisposed(self) ||
        !hasCurrent(self) ||
        self.isPaused ||
        (isSome(next) ? priorityShouldYield(self, next) : false) ||
        shouldYield(self.host))
    );
  },
  [InteractiveSourceLike_move](
    this: typeof properties & {
      [EnumeratorLike_current]: QueueTask;
    },
  ): void {
    // First fast forward through any disposed tasks.
    peek(this);
    const task = this.queue.pop();

    if (isSome(task)) {
      this[EnumeratorLike_current] = task;
    }
  },
  [SchedulerLike_requestYield](this: typeof properties): void {
    this.yieldRequested = true;
  },
  [PauseableLike_pause](this: typeof properties & SerialDisposableLike) {
    this.isPaused = true;
    this[MutableRefLike_current] = disposed;
  },
  [PauseableLike_resume](this: typeof properties & SerialDisposableLike) {
    this.isPaused = false;
    scheduleOnHost(this);
  },
  [SchedulerLike_schedule](
    this: typeof properties & SerialDisposableLike & EnumeratorLike<QueueTask>,
    continuation: ContinuationLike,
    options?: QueueSchedulerOptions,
  ) {
    const delay = getDelay(options);
    const { priority } = options ?? {};
    pipe(this, addIgnoringChildErrors(continuation));

    if (!isDisposed(continuation)) {
      const now = getCurrentTime(this.host);
      const dueTime = max(now + delay, now);

      const task =
        isInContinuation(this) &&
        hasCurrent(this) &&
        getCurrent(this).continuation === continuation &&
        delay <= 0
          ? getCurrent(this)
          : {
              taskID: this.taskIDCounter++,
              continuation,
              dueTime,
              priority: isSome(priority)
                ? max(priority as number, 0)
                : MAX_SAFE_INTEGER,
            };

      const { delayed, queue } = this;
      const targetQueue = dueTime > now ? delayed : queue;
      targetQueue.push(task);

      scheduleOnHost(this);
    }
  },
};

export type QueueSchedulerOptions = {
  readonly priority?: number;
  readonly delay?: number;
};

/**
 * A scheduler which schedules work according to it's priority.
 *
 * @noInheritDoc
 */
export interface QueueSchedulerLike extends DisposableLike, PauseableLike {
  readonly [SchedulerLike_inContinuation]: boolean;
  readonly [SchedulerLike_now]: number;
  readonly [SchedulerLike_shouldYield]: boolean;

  /**
   * Request the scheduler to yield.
   */
  [SchedulerLike_requestYield](): void;

  [SchedulerLike_schedule](
    continuation: ContinuationLike,
    options?: QueueSchedulerOptions,
  ): void;
}

const init = (
  instance: typeof properties & typeof prototype,
  host: SchedulerLike,
) => {
  disposableInit(instance);
  serialDisposableInit(instance, disposed);

  instance.delayed = createPriorityQueue(delayedComparator);
  instance.queue = createPriorityQueue(taskComparator);
  instance.host = host;
  instance.hostContinuation = () => {
    for (
      let task = peek(instance);
      isSome(task) && !isDisposed(instance);
      task = peek(instance)
    ) {
      const { continuation, dueTime } = task;
      const delay = max(dueTime - getCurrentTime(instance), 0);

      if (delay === 0) {
        move(instance);
        pipe(instance, runContinuation(continuation));
      } else {
        instance.dueTime = getCurrentTime(instance) + delay;
      }
      __yield({ delay });
    }
  };
};

const createInstance = /*@__PURE__*/ createObjectFactory(prototype, properties);

const create = (scheduler: SchedulerLike) => {
  const instance = createInstance();
  init(instance, scheduler);
  return instance;
};

export const createPauseableScheduler: Function1<
  SchedulerLike,
  PauseableSchedulerLike
> = create;

export const createPriorityScheduler: Function1<
  SchedulerLike,
  PrioritySchedulerLike
> = create;

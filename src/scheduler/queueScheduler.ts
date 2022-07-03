import { DisposableRef } from "../__internal__.disposable";
import { AbstractEnumerator, reset } from "../__internal__.enumerator";
import { getDelay } from "../__internal__.optionalArgs";
import {
  SchedulerImplementationLike,
  runContinuation,
} from "../__internal__.schedulerImplementation";
import { add, isDisposed } from "../disposable";
import { getCurrent, hasCurrent, move } from "../enumerator";
import { max, newInstance, pipe } from "../functions";
import { Option, isNone, isSome, none } from "../option";
import { SchedulerContinuationLike, SchedulerLike } from "../scheduler";
import { QueueLike, createPriorityQueue } from "./queue";
import { getNow, isInContinuation, shouldYield } from "./scheduler";
import { __yield, schedule } from "./schedulerContinuation";

const peek = <TTask extends QueueTask>(
  scheduler: AbstractQueueScheduler<TTask>,
): Option<TTask> => {
  const { delayed, queue } = scheduler;
  const now = getNow(scheduler);

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

  let task: Option<TTask> = none;
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

const delayedComparator = <TTask extends QueueTask>(a: TTask, b: TTask) => {
  let diff = 0;
  diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
  diff = diff !== 0 ? diff : a.taskID - b.taskID;
  return diff;
};

export type QueueTask = {
  readonly continuation: SchedulerContinuationLike;
  dueTime: number;
  taskID: number;
};

export abstract class AbstractQueueScheduler<
    TTask extends QueueTask = QueueTask,
  >
  extends AbstractEnumerator<TTask>
  implements SchedulerImplementationLike
{
  readonly delayed: QueueLike<TTask> = createPriorityQueue(delayedComparator);
  abstract readonly queue: QueueLike<TTask>;
  abstract isPaused: boolean;

  inContinuation = false;

  private dueTime = 0;
  private taskIDCounter = 0;
  private yieldRequested = false;
  readonly currentRef = newInstance(DisposableRef, this);

  constructor(readonly host: SchedulerLike) {
    super();
  }

  get now(): number {
    return getNow(this.host);
  }

  abstract _shouldYield(next: TTask): boolean;

  get shouldYield(): boolean {
    const { inContinuation, yieldRequested } = this;
    if (inContinuation) {
      this.yieldRequested = false;
    }

    const next = peek(this);

    return (
      inContinuation &&
      (yieldRequested ||
        isDisposed(this) ||
        !hasCurrent(this) ||
        this.isPaused ||
        (isSome(next) ? this._shouldYield(next) : false) ||
        shouldYield(this.host))
    );
  }

  move(): boolean {
    reset(this);

    // First fast forward through any disposed tasks.
    peek(this);
    const task = this.queue.pop();

    if (isSome(task)) {
      this.current = task;
    }

    return hasCurrent(this);
  }

  requestYield(): void {
    this.yieldRequested = true;
  }

  private readonly hostContinuation = () => {
    for (
      let task = peek(this);
      isSome(task) && !isDisposed(this);
      task = peek(this)
    ) {
      const { continuation, dueTime } = task;
      const delay = max(dueTime - getNow(this), 0);

      if (delay === 0) {
        move(this);
        pipe(this, runContinuation(continuation));
      } else {
        this.dueTime = getNow(this) + delay;
      }
      __yield({ delay });
    }
  };

  scheduleOnHost() {
    const task = peek(this);

    const continuationActive =
      !isDisposed(this.currentRef.current) &&
      isSome(task) &&
      this.dueTime <= task.dueTime;

    if (isNone(task) || continuationActive || this.isPaused) {
      return;
    }

    const dueTime = task.dueTime;
    const delay = max(dueTime - getNow(this), 0);
    this.dueTime = dueTime;

    this.currentRef.current = pipe(
      this.host,
      schedule(this.hostContinuation, { delay }),
    );
  }

  abstract createTask(
    task: {
      taskID: number;
      continuation: SchedulerContinuationLike;
      dueTime: number;
    },
    options?: Record<string, unknown>,
  ): TTask;

  schedule(
    continuation: SchedulerContinuationLike,
    options?: {
      readonly delay?: number;
    },
  ) {
    const delay = getDelay(options);
    pipe(this, add(continuation, true));

    if (!isDisposed(continuation)) {
      const { now } = this;
      const dueTime = max(now + delay, now);

      const task =
        isInContinuation(this) &&
        hasCurrent(this) &&
        getCurrent(this).continuation === continuation &&
        delay <= 0
          ? getCurrent(this)
          : this.createTask(
              {
                taskID: this.taskIDCounter++,
                continuation,
                dueTime,
              },
              options,
            );

      const { delayed, queue } = this;
      const targetQueue = dueTime > now ? delayed : queue;
      targetQueue.push(task);

      this.scheduleOnHost();
    }
  }
}

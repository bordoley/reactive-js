import { DisposableLike, add, disposed, isDisposed } from "../disposable";
import {
  AbstractEnumerator,
  current,
  hasCurrent,
  move,
  reset,
} from "../enumerator";
import { pipe } from "../functions";
import { Option, isNone, isSome, none } from "../option";
import {
  SchedulerContinuationLike,
  SchedulerImplementationLike,
  SchedulerLike,
} from "../scheduler";
import { QueueLike, createPriorityQueue } from "./queue";
import {
  inContinuation,
  runContinuation,
  now as schedulerNow,
} from "./scheduler";
import { __yield, schedule } from "./schedulerContinuation";

const peek = <TTask extends QueueTask>(
  scheduler: AbstractQueueScheduler<TTask>,
): Option<TTask> => {
  const { delayed, queue } = scheduler;
  const now = schedulerNow(scheduler);

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
  private _inner = disposed;

  constructor(readonly host: SchedulerLike) {
    super();
  }

  get inner(): DisposableLike {
    return this._inner;
  }

  set inner(newInner: DisposableLike) {
    const { _inner: oldInner } = this;
    if (oldInner !== newInner) {
      oldInner.dispose();
      this._inner = newInner;
    }
  }

  get now(): number {
    return schedulerNow(this.host);
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
        this.host.shouldYield)
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
      const delay = Math.max(dueTime - schedulerNow(this), 0);

      if (delay === 0) {
        move(this);
        pipe(this, runContinuation(continuation));
      } else {
        this.dueTime = schedulerNow(this) + delay;
      }
      __yield({ delay });
    }
  };

  scheduleOnHost() {
    const task = peek(this);

    const continuationActive =
      !isDisposed(this.inner) && isSome(task) && this.dueTime <= task.dueTime;

    if (isNone(task) || continuationActive || this.isPaused) {
      return;
    }

    const dueTime = task.dueTime;
    const delay = Math.max(dueTime - schedulerNow(this), 0);
    this.dueTime = dueTime;

    this.inner = pipe(this.host, schedule(this.hostContinuation, { delay }));
  }

  abstract createTask(
    task: {
      taskID: number;
      continuation: SchedulerContinuationLike;
      dueTime: number;
    },
    options: Record<string, unknown>,
  ): TTask;

  schedule(
    continuation: SchedulerContinuationLike,
    options: {
      readonly delay?: number;
    } = {},
  ) {
    const { delay = Math.max(options.delay ?? 0, 0) } = options;
    pipe(this, add(continuation, true));

    if (!isDisposed(continuation)) {
      const { now } = this;
      const dueTime = Math.max(now + delay, now);

      const task =
        inContinuation(this) &&
        hasCurrent(this) &&
        current(this).continuation === continuation &&
        delay <= 0
          ? current(this)
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

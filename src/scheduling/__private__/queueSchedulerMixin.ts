/*
import {getCurrentTime, isInContinuation, schedule, SchedulerLike, SchedulerLike_inContinuation, shouldYield, __yield} from "../SchedulerLike";
import {isNone, isSome, none, Option} from "../../util/Option";
import { addIgnoringChildErrors, isDisposed } from "../../util/DisposableLike";
import { ContinuationLike } from "../ContinuationLike";
import { QueueLike, createPriorityQueue } from "./queue";
import { max, pipe } from "../../util/functions";
import { getCurrent, hasCurrent } from "../../ix/EnumeratorLike";
import { move } from "../../ix/InteractiveSourceLike";
import { runContinuation } from "../SchedulerImplementationLike";
import { getDelay } from "../../__internal__/optionalArgs";
import { DisposableMixin } from "../../__internal__/util/disposables";
import { EnumeratorMixin_current, EnumeratorMixin_hasCurrent } from "../../__internal__/ix/enumerators";


export const QueueSchedulerMixin_delayed = Symbol("QueueSchedulerMixin_delayed");
export const QueueSchedulerMixin_tasks = Symbol("QueueSchedulerMixin_tasks");
export const QueueSchedulerMixin_isPaused = Symbol("QueueSchedulerMixin_isPaused");
export const QueueSchedulerMixin_dueTime = Symbol("QueueSchedulerMixin_dueTime");
export const QueueSchedulerMixin_host = Symbol("QueueSchedulerMixin_host");
export const QueueSchedulerMixin_taskIDCounter = Symbol("QueueSchedulerMixin_taskIDCounter");
export const QueueSchedulerMixin_yieldRequested = Symbol("QueueSchedulerMixin_yieldRequested");

export interface QueueSchedulerMixin<TTask extends QueueTask = QueueTask> extends DisposableMixin {
  [EnumeratorMixin_current]: Option<TTask>;
  [EnumeratorMixin_hasCurrent]: boolean;
  [SchedulerLike_inContinuation]: boolean;
  readonly [QueueSchedulerMixin_delayed]: QueueLike<TTask>;
  readonly [QueueSchedulerMixin_tasks]: QueueLike<TTask>;
  readonly [QueueSchedulerMixin_host]: SchedulerLike
  [QueueSchedulerMixin_isPaused]: boolean;
  [QueueSchedulerMixin_dueTime]: number;
  [QueueSchedulerMixin_taskIDCounter]: number;
  [QueueSchedulerMixin_yieldRequested]: boolean;
}


const peek = <TTask extends QueueTask>(
  scheduler: QueueSchedulerMixin<TTask> & SchedulerLike,
): Option<TTask> => {
  const { [QueueSchedulerMixin_delayed]: delayed, [QueueSchedulerMixin_tasks]:queue } = scheduler;
  const now = getCurrentTime(scheduler);

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
  readonly continuation: ContinuationLike;
  dueTime: number;
  taskID: number;
};

export abstract class AbstractQueueScheduler<
    TTask extends QueueTask = QueueTask,
  >
{
  constructor(readonly host: SchedulerLike) {
  }

  get now(): number {
    return getCurrentTime(this.host);
  }

  abstract _shouldYield(next: TTask): boolean;

  get shouldYield(): boolean {
    const { inContinuation,  yieldRequested } = this;
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
      const delay = max(dueTime - getCurrentTime(this), 0);

      if (delay === 0) {
        move(this);
        pipe(this, runContinuation(continuation));
      } else {
        this.dueTime = getCurrentTime(this) + delay;
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
    const delay = max(dueTime - getCurrentTime(this), 0);
    this.dueTime = dueTime;

    this.currentRef.current = pipe(
      this.host,
      schedule(this.hostContinuation, { delay }),
    );
  }

  abstract createTask(
    task: {
      taskID: number;
      continuation: ContinuationLike;
      dueTime: number;
    },
    options?: Record<string, unknown>,
  ): TTask;

  schedule(
    continuation: ContinuationLike,
    options?: {
      readonly delay?: number;
    },
  ) {
    const delay = getDelay(options);
    pipe(this, addIgnoringChildErrors(continuation));

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
*/

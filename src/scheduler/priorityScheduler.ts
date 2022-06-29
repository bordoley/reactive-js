import { addTo, onDisposed } from "../disposable";
import { MAX_SAFE_INTEGER } from "../env";
import { max, pipe } from "../functions";
import { isSome } from "../option";
import {
  PrioritySchedulerLike,
  SchedulerContinuationLike,
  SchedulerLike,
} from "../scheduler";
import { QueueLike, createPriorityQueue } from "./queue";
import { AbstractQueueScheduler } from "./queueScheduler";
import { now as schedulerNow } from "./scheduler";

type PriorityTask = {
  readonly continuation: SchedulerContinuationLike;
  dueTime: number;
  readonly priority: number;
  taskID: number;
};

const comparator = (a: PriorityTask, b: PriorityTask) => {
  let diff = 0;
  diff = diff !== 0 ? diff : a.priority - b.priority;
  diff = diff !== 0 ? diff : a.taskID - b.taskID;
  return diff;
};

class PriorityScheduler
  extends AbstractQueueScheduler<PriorityTask>
  implements PriorityScheduler
{
  isPaused = false;

  readonly queue: QueueLike<PriorityTask> = createPriorityQueue(comparator);

  _shouldYield(next: PriorityTask): boolean {
    const { current } = this;

    return (
      current !== next &&
      next.dueTime <= schedulerNow(this) &&
      next.priority > current.priority
    );
  }

  createTask(
    task: {
      taskID: number;
      continuation: SchedulerContinuationLike;
      dueTime: number;
    },
    options: Record<string, unknown> = {},
  ): PriorityTask {
    const { priority } = options;
    return {
      ...task,
      priority: isSome(priority)
        ? max(priority as number, 0)
        : MAX_SAFE_INTEGER,
    };
  }
}

/**
 * Creates a new priority scheduler which schedules work using the provided
 * host scheduler.
 *
 * @param hostScheduler The underlying platform scheduler used by the priority
 * scheduler to schedule work.
 */
export const createPriorityScheduler = (
  hostScheduler: SchedulerLike,
): PrioritySchedulerLike => {
  const scheduler = pipe(
    new PriorityScheduler(hostScheduler),
    addTo(hostScheduler, true),
    onDisposed(() => {
      scheduler.queue.clear();
      scheduler.delayed.clear();
    }),
  );
  return scheduler;
};

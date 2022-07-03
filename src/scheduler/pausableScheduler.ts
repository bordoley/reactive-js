import { addTo, disposed, onDisposed } from "../disposable";
import { newInstanceWith, pipe } from "../functions";
import {
  PausableSchedulerLike,
  SchedulerContinuationLike,
  SchedulerLike,
} from "../scheduler";
import { QueueLike, createPriorityQueue } from "./queue";
import { AbstractQueueScheduler, QueueTask } from "./queueScheduler";
import { __yield } from "./schedulerContinuation";

const comparator = (a: QueueTask, b: QueueTask) => {
  let diff = 0;
  diff = diff !== 0 ? diff : a.taskID - b.taskID;
  return diff;
};

class PausableScheduler extends AbstractQueueScheduler {
  isPaused = false;

  pause() {
    this.isPaused = true;
    this.currentRef.current = disposed;
  }

  resume() {
    this.isPaused = false;
    this.scheduleOnHost();
  }

  readonly queue: QueueLike<QueueTask> = createPriorityQueue(comparator);

  _shouldYield(): boolean {
    return false;
  }

  createTask(
    task: {
      taskID: number;
      continuation: SchedulerContinuationLike;
      dueTime: number;
    },
    _?: Record<string, unknown>,
  ): QueueTask {
    return task;
  }
}

export const createPausableScheduler = (
  hostScheduler: SchedulerLike,
): PausableSchedulerLike => {
  const scheduler = pipe(
    PausableScheduler,
    newInstanceWith(hostScheduler),
    addTo(hostScheduler, true),
    onDisposed(() => {
      scheduler.queue.clear();
      scheduler.delayed.clear();
    }),
  );
  scheduler.pause();
  return scheduler;
};

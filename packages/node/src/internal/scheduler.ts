import { createDisposable, DisposableLike } from "@reactive-js/disposable";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  createPrioritySchedulerResource,
  createSchedulerWithPriority as createSchedulerWithPriorityImpl,
  HostSchedulerContinuation,
  HostSchedulerLike,
} from "@reactive-js/schedulers";

class NodeSchedulerHost implements HostSchedulerLike {
  timeout: number = 500;
  private startTime: number = 0;

  get now(): number {
    const hr = process.hrtime();
    return hr[0] * 1000 + hr[1] / 1e6;
  }

  get shouldYield(): boolean {
    return this.now > this.startTime + this.timeout;
  }

  schedule(
    continuation: HostSchedulerContinuation,
    delay: number = 0,
  ): DisposableLike {
    const scheduledContinuation = async () => {
      this.startTime = this.now;

      let result: HostSchedulerContinuation | undefined = continuation;
      while (result !== undefined) {
        result = continuation();

        // Not sure this is really necessary, but let's yield back
        // to the JS microtask queue between continuation executions
        // to avoid hogging too much cpu.
        await Promise.resolve();
      }
    };

    const disposable = createDisposable();
    if (delay > 0 ) {
      const timeout = setTimeout(scheduledContinuation, delay);
      disposable.add(() => clearTimeout(timeout));
    } else {
      const immediate = setImmediate(scheduledContinuation);
      disposable.add(() => clearImmediate(immediate));
    }
    return disposable;
  }
}

const schedulerHost = new NodeSchedulerHost();
const priorityScheduler = createPrioritySchedulerResource(schedulerHost);

export const setSchedulerTimeout = (timeout: number) => {
  schedulerHost.timeout = timeout;
};

export const createSchedulerWithPriority = (priority: number): SchedulerLike =>
  createSchedulerWithPriorityImpl(priorityScheduler, priority);

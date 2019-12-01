import { createDisposable, DisposableLike } from "@reactive-js/disposable";
import {
  createPriorityScheduler,
  PrioritySchedulerHostConfig,
  PrioritySchedulerResourceLike,
} from "@reactive-js/schedulers";

const nodeConfig: PrioritySchedulerHostConfig = {
  get now(): number {
    return performance.now();
  },
  get shouldYield(): boolean {
    return false;
  },
  schedule(continuation: () => void, delay: number = 0): DisposableLike {
    const disposable = createDisposable();
    if (delay > 0) {
      const timeout = setInterval(continuation, delay);
      disposable.add(() => clearInterval(timeout));
    } else {
      const immediate = setImmediate(continuation);
      disposable.add(() => clearImmediate(immediate));
    }
    return disposable;
  },
};

export const createNodePriorityScheduler = (): PrioritySchedulerResourceLike =>
  createPriorityScheduler(nodeConfig);

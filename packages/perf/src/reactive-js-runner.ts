import { connect, ObservableLike } from "@reactive-js/rx-core";
import { Disposable, DisposableLike } from "@reactive-js/disposables";
import { VirtualTimeScheduler } from "@reactive-js/virtualtime-scheduler";
import { SchedulerContinuation, SchedulerLike } from "@reactive-js/scheduler";

const shouldYield = () => false;

// This is a level the playing ground scheduler
// that doesn't honor the true contract of scheduler
// but does the minimal amount of work to give an
// apples to apples comparison vs other synchronous implementations
class PerfTestScheduler implements SchedulerLike {
  private readonly queue: SchedulerContinuation[] = [];

  get now() {
    return 0;
  }

  schedule(
    continuation: SchedulerContinuation,
    delay: number = 0,
    priority: number = 0,
  ): DisposableLike {
    this.queue.push(continuation);
    return Disposable.empty();
  }

  run() {
    let next;
    while ((next = this.queue.shift()) !== undefined) {
      next(shouldYield);
    }
  }
}

export const run = <T>(observable: ObservableLike<T>) => {
  const scheduler = new PerfTestScheduler();
  connect(observable, scheduler);
  scheduler.run();
};

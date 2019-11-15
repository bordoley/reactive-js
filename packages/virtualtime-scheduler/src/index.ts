import { SchedulerContinuation, SchedulerLike } from "@reactive-js/scheduler";
import { Disposable, DisposableLike } from "@reactive-js/disposables";

export interface VirtualTimeSchedulerLike extends SchedulerLike {
  run(): void;
}

class VirtualTimeSchedulerImpl implements VirtualTimeSchedulerLike {
  private readonly timeQueue: { [key: number]: Array<() => void> } = {};
  private _now = -1;

  get now(): number {
    return this._now;
  }

  private moveNext() {
    delete this.timeQueue[this.now];
    this._now++;
    for (let key in this.timeQueue) {
      if (this.timeQueue.hasOwnProperty(key)) return true;
    }
    return false;
  }

  private schedulWorkAtTime(work: () => void, scheduledTime: number) {
    const queueAtScheduledTime = this.timeQueue[scheduledTime];
    if (queueAtScheduledTime !== undefined) {
      queueAtScheduledTime.push(work);
    } else {
      this.timeQueue[scheduledTime] = [work];
    }
  }

  private createWorkCallback(
    disposable: DisposableLike,
    shouldYield: () => boolean,
    continuation: SchedulerContinuation,
  ) {
    const continuationCallback = () => {
      if (!disposable.isDisposed) {
        const result = continuation(shouldYield);

        if (result === continuation) {
          this.schedulWorkAtTime(continuationCallback, this.now);
        } else if (result instanceof Function) {
          this.schedulWorkAtTime(
            this.createWorkCallback(disposable, shouldYield, result),
            this.now,
          );
        } else if (result !== undefined) {
          const [resultContinuation, delay] = result;
          const callback =
            resultContinuation === continuation
              ? continuationCallback
              : this.createWorkCallback(disposable, shouldYield, continuation);

          const scheduledTime = this.now + delay;
          this.schedulWorkAtTime(callback, scheduledTime);
        }
      }
    };
    return continuationCallback;
  }

  schedule(
    continuation: SchedulerContinuation,
    delay: number = 0,
  ): DisposableLike {
    const disposable = Disposable.empty();
    const shouldYield = () => disposable.isDisposed;
    const now = this.now;
    const scheduledTime = now + delay + 1;
    const work = this.createWorkCallback(disposable, shouldYield, continuation);

    this.schedulWorkAtTime(work, scheduledTime);
    return disposable;
  }

  private get next() {
    const now = this.now;
    return this.timeQueue[now] || [];
  }

  run() {
    while (this.moveNext()) {
      const workQueue = this.next;

      while (workQueue.length > 0) {
        const work = workQueue.shift() as () => void;
        work();
      }
    }
  }
}

const create = (): VirtualTimeSchedulerLike => new VirtualTimeSchedulerImpl();

export const VirtualTimeScheduler = {
  create,
};

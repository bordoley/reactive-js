import { SchedulerContinuation, SchedulerLike, SchedulerContinuationResult } from '@rx-min/rx-core';
import { Disposable, DisposableLike } from '@rx-min/rx-disposables';

export interface VirtualTimeSchedulerLike extends SchedulerLike {
  run(): void;
}

class VirtualTimeSchedulerImpl implements VirtualTimeSchedulerLike {
  private readonly timeQueue: { [key: number]: Array<() => void> } = {};
  private _now = 0;

  get now(): number {
    return this._now;
  }

  private get hasMoreWork() {
    for (let key in this.timeQueue) {
      if (this.timeQueue.hasOwnProperty(key))
        return true;
    }
    return false;
  }

  private scheduleInternal(work: () => void, delay: number | void) {
    const now = this.now;
    const scheduledTime = now + (delay || 0);

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
    const continuationCallback: () => void = () => {
      if (!disposable.isDisposed) {
        const result = continuation(shouldYield);
        if (result === continuation) {
          return continuationCallback;
        } else if (result instanceof Function) {
          return () => this.createWorkCallback(disposable, shouldYield, result);
        } else if (result !== undefined) {
          const [resultContinuation, delay] = result;
          const callback = resultContinuation === continuation
            ? continuationCallback
            : this.createWorkCallback(disposable, shouldYield, continuation);
          this.scheduleInternal(
            callback,
            delay
          );
        }
      }
    }
    return continuationCallback;
  };

  schedule(continuation: SchedulerContinuation, delay: number | void): DisposableLike {
    const disposable = Disposable.empty();

    const shouldYield = () =>
      disposable.isDisposed;

    this.scheduleInternal(
      this.createWorkCallback(disposable, shouldYield, continuation),
      delay,
    );

    return disposable;
  }

  private advance() {
    const now = this.now;
    const workQueue = this.timeQueue[now] || []
    while (workQueue.length > 0) {
      const work = (workQueue.shift() as () => void);
      work();
    };

    delete this.timeQueue[now];
    this._now++;
  }

  run() {
    while (this.hasMoreWork) {
      this.advance();
    }
  }
}

const create = (): VirtualTimeSchedulerLike => new VirtualTimeSchedulerImpl();

export const VirtualTimeScheduler = {
  create,
};
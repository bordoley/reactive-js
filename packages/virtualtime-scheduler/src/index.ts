import {
  SchedulerContinuation,
  SchedulerResourceLike,
} from "@reactive-js/scheduler";
import {
  Disposable,
  DisposableLike,
  throwIfDisposed,
} from "@reactive-js/disposables";

export interface VirtualTimeSchedulerLike extends SchedulerResourceLike {
  run(): void;
}

type SchedulerCtx = {
  continuation: SchedulerContinuation;
  delay: number;
  microtaskCount: number;
  readonly disposable: DisposableLike;
  readonly shouldYield: () => boolean;
};

class VirtualTimeSchedulerImpl implements VirtualTimeSchedulerLike {
  private readonly maxMicroTaskCount: number;
  private readonly disposable = Disposable.create(() => {
    for (let key in this.timeQueue) {
      if (this.timeQueue.hasOwnProperty(key)) {
        delete this.timeQueue[key];
      }
    }
  });
  private readonly timeQueue: { [key: number]: Array<SchedulerCtx> } = {};
  private _now = -1;

  constructor(maxMicroTaskCount: number) {
    this.maxMicroTaskCount = maxMicroTaskCount;
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  get now(): number {
    return this._now;
  }

  private get next() {
    const now = this.now;
    return this.timeQueue[now] || [];
  }

  dispose() {
    this.disposable.dispose();
  }

  private moveNext() {
    delete this.timeQueue[this.now];
    this._now++;
    for (let key in this.timeQueue) {
      if (this.timeQueue.hasOwnProperty(key)) return true;
    }
    return false;
  }

  private executeContinuation(ctx: SchedulerCtx) {
    const { continuation, shouldYield } = ctx;
    ctx.microtaskCount = 0;
    const result = continuation(shouldYield);

   if (result !== undefined) {
      const { continuation: resultContinuation, delay: resultDelay = 0} = result;

      ctx.continuation = resultContinuation;
      ctx.delay = Math.max(resultDelay, 0);

      const scheduledTime = this.now + ctx.delay;
      this.schedulWorkAtTime(ctx, scheduledTime);
    }
  }

  private schedulWorkAtTime(ctx: SchedulerCtx, scheduledTime: number) {
    const queueAtScheduledTime = this.timeQueue[scheduledTime];
    if (queueAtScheduledTime !== undefined) {
      queueAtScheduledTime.push(ctx);
    } else {
      this.timeQueue[scheduledTime] = [ctx];
    }
  }

  schedule(
    continuation: SchedulerContinuation,
    delay: number = 0,
    _priority?: number,
  ): DisposableLike {
    throwIfDisposed(this);

    const disposable = Disposable.empty();

    const ctx = {
      continuation,
      delay: Math.max(delay, 0),
      disposable,
      microtaskCount: 0,
      shouldYield: (): boolean => {
        ctx.microtaskCount++;
        return (
          disposable.isDisposed || ctx.microtaskCount >= this.maxMicroTaskCount
        );
      },
    };

    const now = Math.max(this.now, 0);
    const scheduledTime = now + delay;
    this.schedulWorkAtTime(ctx, scheduledTime);
    return ctx.disposable;
  }

  run() {
    throwIfDisposed(this);

    while (this.moveNext()) {
      const workQueue = this.next;

      while (workQueue.length > 0) {
        const ctx = workQueue.shift() as SchedulerCtx;
        this.executeContinuation(ctx);
      }
    }

    this.dispose();
  }
}

const create = (
  maxMicroTaskCount: number = Number.MAX_SAFE_INTEGER,
): VirtualTimeSchedulerLike => new VirtualTimeSchedulerImpl(maxMicroTaskCount);

export const VirtualTimeScheduler = {
  create,
};

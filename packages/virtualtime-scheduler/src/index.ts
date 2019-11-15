import { SchedulerContinuation, SchedulerResourceLike } from "@reactive-js/scheduler";
import { Disposable, DisposableLike } from "@reactive-js/disposables";

export interface VirtualTimeSchedulerLike extends SchedulerResourceLike {
  run(): void;
}

type SchedulerCtx = {
  continuation: SchedulerContinuation;
  delay: number;
  readonly disposable: DisposableLike;
  readonly scheduler: VirtualTimeSchedulerImpl;
  readonly shouldYield: () => boolean;
};

class VirtualTimeSchedulerImpl implements VirtualTimeSchedulerLike {
  private readonly disposable = Disposable.empty();
  private readonly timeQueue: { [key: number]: Array<SchedulerCtx> } = {};
  private _now = -1;

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  get now(): number {
    return this._now;
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

  private async executeContinuation(ctx: SchedulerCtx) {
    const { continuation, shouldYield } = ctx;
    const result = continuation(shouldYield);

    if (result instanceof Function) {
      ctx.continuation = result;
      ctx.delay = 0;
      this.schedulWorkAtTime(ctx, this.now);
    } else if (result !== undefined) {
      const [resultContinuation, resultDelay] = result;

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
  ): DisposableLike {
    const disposable = Disposable.empty();
    const shouldYield = (): boolean => disposable.isDisposed;

    const ctx = {
      continuation,
      delay: Math.max(delay, 0),
      disposable,
      scheduler: this,
      shouldYield,
    };

    const now = Math.max(this.now, 0);
    const scheduledTime = now + delay;
    this.schedulWorkAtTime(ctx, scheduledTime);
    return ctx.disposable;
  }

  private get next() {
    const now = this.now;
    return this.timeQueue[now] || [];
  }

  run() {
    while (this.moveNext()) {
      const workQueue = this.next;

      while (workQueue.length > 0) {
        const ctx = workQueue.shift() as SchedulerCtx;
        this.executeContinuation(ctx);
      }
    }
  }
}

const create = (): VirtualTimeSchedulerLike => new VirtualTimeSchedulerImpl();

export const VirtualTimeScheduler = {
  create,
};

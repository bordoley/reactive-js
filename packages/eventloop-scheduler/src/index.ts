import { SchedulerContinuation, SchedulerLike } from "@reactive-js/scheduler";
import {
  Disposable,
  SerialDisposable,
  DisposableLike,
  SerialDisposableLike,
} from "@reactive-js/disposables";

type SchedulerCtx = {
  continuation: SchedulerContinuation;
  delay: number;
  readonly disposable: SerialDisposableLike;
  readonly shouldYield: () => boolean;
};

class EventLoopSchedulerImpl implements SchedulerLike {
  private readonly timeout: number;
  private startTime: number = this.now;

  constructor(timeout: number) {
    this.timeout = timeout;
  }

  get now() {
    return Date.now();
  }

  private executeContinuation(ctx: SchedulerCtx) {
    const { continuation, shouldYield } = ctx;

    this.startTime = this.now;
    const result = continuation(shouldYield);

    if (result instanceof Function) {
      ctx.continuation = result;
      ctx.delay = 0;
      this.scheduleInternal(ctx);
    } else if (result !== undefined) {
      const [resultContinuation, resultDelay] = result;
      ctx.continuation = resultContinuation;

      if (resultDelay !== ctx.delay && resultDelay > 0) {
        ctx.delay = resultDelay;
        this.scheduleInternal(ctx);
      } else if (resultDelay <= 0) {
        ctx.delay = 0;
        this.scheduleInternal(ctx);
      }
      // else reuse the existing setInterval delay
    } else {
      ctx.disposable.innerDisposable.dispose();
    }
  }

  private async scheduleInternal(ctx: SchedulerCtx) {
    ctx.disposable.innerDisposable.dispose();

    if (ctx.delay > 0) {
      const timeout = setInterval(() => {
        this.executeContinuation(ctx);
      }, ctx.delay);
      ctx.disposable.innerDisposable = Disposable.create(() =>
        clearInterval(timeout),
      );
    } else {
      await Promise.resolve();
      this.executeContinuation(ctx);
    }
  }

  schedule(
    continuation: SchedulerContinuation,
    delay: number = 0,
  ): DisposableLike {
    const disposable = SerialDisposable.create();
    const shouldYield = () =>
      disposable.isDisposed || this.startTime + this.timeout < this.now;

    const ctx: SchedulerCtx = {
      continuation,
      delay: Math.max(delay, 0),
      disposable,
      shouldYield,
    };

    this.scheduleInternal(ctx);
    return disposable;
  }
}

const create = (timeout: number): SchedulerLike =>
  new EventLoopSchedulerImpl(timeout);

export const EventLoopScheduler = {
  create,
};

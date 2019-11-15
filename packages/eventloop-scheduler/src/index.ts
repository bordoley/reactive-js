import { SchedulerContinuation, SchedulerLike } from "@reactive-js/scheduler";
import {
  Disposable,
  SerialDisposable,
  DisposableLike,
  SerialDisposableLike,
} from "@reactive-js/disposables";

type SchedulerCtx = {
  continuation: SchedulerContinuation;
  delay: number | void;
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
      this.scheduleNow(ctx);
    } else if (result !== undefined) {
      const [resultContinuation, resultDelay] = result;
      ctx.continuation = resultContinuation;

      if (resultDelay !== ctx.delay) {
        this.scheduleDelayed(ctx, resultDelay);
      }
      // else reuse the existing setInterval delay
    } else {
      ctx.disposable.innerDisposable.dispose();
    }
  }

  private async scheduleNow(ctx: SchedulerCtx) {
    ctx.disposable.innerDisposable.dispose();
    ctx.delay = undefined;

    await Promise.resolve();
    this.executeContinuation(ctx);
  }

  private scheduleDelayed(ctx: SchedulerCtx, delay: number) {
    ctx.disposable.innerDisposable.dispose();
    ctx.delay = delay;

    const timeout = setInterval(() => {
      this.executeContinuation(ctx);
    }, delay);

    ctx.disposable.innerDisposable = Disposable.create(() =>
      clearInterval(timeout),
    );
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
      delay,
      disposable,
      shouldYield,
    };

    if (delay > 0) {
      this.scheduleDelayed(ctx, delay);
    } else {
      this.scheduleNow(ctx);
    }

    return disposable;
  }
}

const create = (timeout: number): SchedulerLike =>
  new EventLoopSchedulerImpl(timeout);

export const EventLoopScheduler = {
  create,
};

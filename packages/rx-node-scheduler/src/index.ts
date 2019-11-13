import {
  connect as connectOnScheduler,
  ObservableLike,
  SchedulerContinuation,
  SchedulerContinuationResult,
  SchedulerLike,
} from "@rx-min/rx-core";
import {
  Disposable,
  SerialDisposable,
  DisposableLike,
  SerialDisposableLike,
} from "@rx-min/rx-disposables";

// This is a tremendously poor scheduler because it allows task to run until they've been
// disposed. It would be better to do something similar to the react scheduler which maintains
// internally a queue of work to do and then interrupts running work to yield the runloop to other
// tasks both in progress and scheduled.

type SchedulerCtx = {
  continuation: SchedulerContinuation;
  delay: number | void;
  readonly disposable: SerialDisposableLike;
  readonly shouldYield: () => boolean;
};

class RxNodeScheduler implements SchedulerLike {
  get now() {
    return Date.now();
  }

  private handleSchedulerContinuation(
    ctx: SchedulerCtx,
    result: SchedulerContinuationResult,
  ) {
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

    const { continuation, shouldYield } = ctx;
    await Promise.resolve();
    const result = continuation(shouldYield);
    this.handleSchedulerContinuation(ctx, result);
  }

  private scheduleDelayed(ctx: SchedulerCtx, delay: number) {
    ctx.disposable.innerDisposable.dispose();
    ctx.delay = delay;

    const { continuation, disposable, shouldYield } = ctx;
    const timeout = setInterval(() => {
      const result = continuation(shouldYield);
      this.handleSchedulerContinuation(ctx, result);
    }, delay);

    disposable.innerDisposable = Disposable.create(() =>
      clearInterval(timeout),
    );
  }

  schedule(
    continuation: SchedulerContinuation,
    delay: number | void,
  ): DisposableLike {
    const disposable = SerialDisposable.create();
    const shouldYield = () => !disposable.isDisposed;

    const ctx: SchedulerCtx = {
      continuation,
      delay,
      disposable,
      shouldYield,
    };

    if (delay !== undefined && delay > 0) {
      this.scheduleDelayed(ctx, delay);
    } else {
      this.scheduleNow(ctx);
    }

    return disposable;
  }
}

export const scheduler = new RxNodeScheduler();

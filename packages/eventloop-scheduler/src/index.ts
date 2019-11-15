import {
  SchedulerContinuation,
  SchedulerResourceLike,
} from "@reactive-js/scheduler";
import {
  Disposable,
  SerialDisposable,
  DisposableLike,
  SerialDisposableLike,
} from "@reactive-js/disposables";
import { createReadStream } from "fs";

type SchedulerCtx = {
  continuation: SchedulerContinuation;
  delay: number;
  readonly disposable: SerialDisposableLike;
  readonly shouldYield: () => boolean;
};

class EventLoopSchedulerImpl implements SchedulerResourceLike {
  private readonly disposable: DisposableLike;
  private readonly workqueue: SchedulerCtx[] = [];
  private readonly timeout: number;
  private startTime: number = this.now;

  constructor(timeout: number) {
    this.timeout = timeout;
    this.disposable = Disposable.create(() => {
      this.workqueue.length = 0;
    });
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  dispose() {
    this.disposable.dispose();
  }

  get now() {
    return Date.now();
  }

  private async executeContinuation(ctx: SchedulerCtx) {
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

      if (resultDelay !== ctx.delay || ctx.delay === 0) {
        ctx.delay = Math.max(resultDelay, 0);
        this.scheduleInternal(ctx);
      }
      // else reuse the existing setInterval delay
    } else {
      ctx.disposable.innerDisposable.dispose();
    }
  }

  private async drainQueue() {
    while (this.workqueue.length > 0 && !this.isDisposed) {
      const ctx = this.workqueue.shift();
      if (ctx !== undefined) {
        this.executeContinuation(ctx);
      }
      // Not sure this is really necessary, but let's yield back
      // to the JS microtask queue between continuation executions
      // to avoid hogging too much cpu.
      await Promise.resolve();
    }
  }

  private scheduleInternal(ctx: SchedulerCtx) {
    ctx.disposable.innerDisposable.dispose();

    const callback = () => {
      if (!this.isDisposed) {
        this.workqueue.push(ctx);
        if (this.workqueue.length === 1) {
          this.drainQueue();
        }
      }
    };

    if (!this.isDisposed) {
      // Schedule continuations on the JS task queue to avoid a greedy producer
      // from hogging the scheduler and preventing other users of delays etc.
      // from scheduling work. For instance consider this pathological example:
      //
      //   Observable.lift(
      //     generate(x => x + 1, 0),
      //     map(x => fromArray([x, x, x, x])),
      //     exhaust(),
      //     onNext(console.log),
      //    );
      //
      // which doesn't work with then the result of generate are scheduled as
      // microtasks.

      if (ctx.delay > 0) {
        const timeout = setInterval(callback, ctx.delay);
        ctx.disposable.innerDisposable = Disposable.create(() =>
          clearInterval(timeout),
        );
      } else {
        const immediate = setImmediate(callback);
        ctx.disposable.innerDisposable = Disposable.create(() =>
          clearImmediate(immediate),
        );
      }
    }
  }

  schedule(
    continuation: SchedulerContinuation,
    delay: number = 0,
  ): DisposableLike {
    if (this.isDisposed) {
      throw new Error("Scheduler is disposed");
    }

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

const create = (timeout: number): SchedulerResourceLike =>
  new EventLoopSchedulerImpl(timeout);

export const EventLoopScheduler = {
  create,
};

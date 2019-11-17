import {
  SchedulerContinuation,
  SchedulerResourceLike,
} from "@reactive-js/scheduler";

import {
  Disposable,
  SerialDisposable,
  DisposableLike,
  SerialDisposableLike,
  throwIfDisposed,
} from "@reactive-js/disposables";

type SchedulerCtx = {
  continuation: SchedulerContinuation;
  delay: number;
  readonly disposable: SerialDisposableLike;
  readonly scheduler: EventLoopSchedulerImpl;
  readonly shouldYield: () => boolean;
};

class EventLoopSchedulerImpl implements SchedulerResourceLike {
  private static callback(ctx: SchedulerCtx) {
    if (!ctx.scheduler.isDisposed) {
      ctx.scheduler.workqueue.push(ctx);
      if (ctx.scheduler.workqueue.length === 1) {
        ctx.scheduler.drainQueue();
      }
    }
  }

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

    if (result !== undefined) {
      const {continuation: resultContinuation, delay: resultDelay = 0 } = result;
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
        const timeout = setInterval(
          EventLoopSchedulerImpl.callback,
          ctx.delay,
          ctx,
        );
        ctx.disposable.innerDisposable = Disposable.create(() =>
          clearInterval(timeout),
        );
      } else {
        // FIXME: Shim setImmediate for the browser case or require a polyfill.
        const immediate = setImmediate(EventLoopSchedulerImpl.callback, ctx);
        ctx.disposable.innerDisposable = Disposable.create(() =>
          clearImmediate(immediate),
        );
      }
    }
  }

  schedule(
    continuation: SchedulerContinuation,
    delay: number = 0,
    _priority?: number,
  ): DisposableLike {
    throwIfDisposed(this);

    const disposable = SerialDisposable.create();
    const shouldYield = (): boolean =>
      disposable.isDisposed || this.startTime + this.timeout < this.now;

    const ctx = {
      continuation,
      delay: Math.max(delay, 0),
      disposable,
      scheduler: this,
      shouldYield,
    };

    this.scheduleInternal(ctx);
    return ctx.disposable;
  }
}

const create = (timeout: number): SchedulerResourceLike =>
  new EventLoopSchedulerImpl(timeout);

export const EventLoopScheduler = {
  create,
};

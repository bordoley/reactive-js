import {
  SchedulerContinuation,
  SchedulerResourceLike,
} from "@reactive-js/scheduler";

import {
  Disposable,
  SerialDisposable,
  DisposableLike,
  DisposableOrTeardown,
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
    if (!ctx.scheduler.disposable.isDisposed) {
      ctx.scheduler.workqueue.push(ctx);
      if (ctx.scheduler.workqueue.length === 1) {
        ctx.scheduler.drainQueue();
      }
    }
  }

  private readonly disposable: DisposableLike;
  private readonly workqueue: SchedulerCtx[] = [];
  private readonly timeout: number;
  private _inScheduledContinuation = false;
  private startTime: number = this.now;

  constructor(timeout: number) {
    this.timeout = timeout;
    this.disposable = Disposable.create()
    this.disposable.add(() => {
      this.workqueue.length = 0;
    });
  }

  add(disposable: DisposableOrTeardown) {
    this.disposable.add(disposable);
  }

  remove(disposable: DisposableOrTeardown) {
    this.disposable.remove(disposable);
  }

  dispose() {
    return this.disposable.dispose();
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  get inScheduledContinuation(): boolean {
    return this._inScheduledContinuation;
  }

  get now() {
    return Date.now();
  }

  private async executeContinuation(ctx: SchedulerCtx) {
    const { continuation, shouldYield } = ctx;

    this.startTime = this.now;
    this._inScheduledContinuation = true;
    const result = continuation(shouldYield);
    this._inScheduledContinuation = false;

    if (result !== undefined) {
      const {
        continuation: resultContinuation,
        delay: resultDelay = 0,
      } = result;
      ctx.continuation = resultContinuation;

      const reuseSetInterval = resultDelay === ctx.delay && ctx.delay !== 0;
      ctx.delay = Math.max(resultDelay, 0);

      if (!reuseSetInterval) {
        this.scheduleInternal(ctx);
      }
    } else {
      ctx.disposable.dispose();
    }
  }

  private async drainQueue() {
    while (this.workqueue.length > 0 && !this.disposable.isDisposed) {
      const ctx = this.workqueue.shift();
      this.executeContinuation(ctx as SchedulerCtx);

      // Not sure this is really necessary, but let's yield back
      // to the JS microtask queue between continuation executions
      // to avoid hogging too much cpu.
      await Promise.resolve();
    }
  }

  private scheduleInternal(ctx: SchedulerCtx) {
    ctx.disposable.disposable.dispose();

    if (this.disposable.isDisposed) {
      return;
    }

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
      ctx.disposable.disposable = Disposable.create();
      ctx.disposable.disposable.add(() =>
        clearInterval(timeout),
      );
    } else {
      // FIXME: Shim setImmediate for the browser case or require a polyfill.
      const immediate = setImmediate(EventLoopSchedulerImpl.callback, ctx);
      ctx.disposable.disposable = Disposable.create();
      ctx.disposable.disposable.add(() =>
        clearImmediate(immediate),
      );
    }
  }

  schedule(
    continuation: SchedulerContinuation,
    delay: number = 0,
    _priority?: number,
  ): DisposableLike {
    throwIfDisposed(this.disposable);

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

const create = (timeout: number = 500): SchedulerResourceLike =>
  new EventLoopSchedulerImpl(timeout);

export const EventLoopScheduler = {
  create,
};

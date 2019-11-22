import {
  SchedulerContinuation,
  SchedulerResourceLike,
} from "@reactive-js/scheduler";
import {
  Disposable,
  DisposableLike,
  DisposableOrTeardown,
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

  private readonly disposable: DisposableLike;

  private readonly timeQueue: { [key: number]: Array<SchedulerCtx> } = {};

  private _now = -1;

  private _inScheduledContinuation = false;

  constructor(maxMicroTaskCount: number) {
    this.maxMicroTaskCount = maxMicroTaskCount;

    this.disposable = Disposable.create();
    this.disposable.add(() => {
      for (let key in this.timeQueue) {
        if (this.timeQueue.hasOwnProperty(key)) {
          delete this.timeQueue[key];
        }
      }
    });
  }

  dispose() {
    this.disposable.dispose();
  }

  get inScheduledContinuation(): boolean {
    return this._inScheduledContinuation;
  }

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  get now(): number {
    return this._now;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.add.apply(this.disposable, [disposable, ...disposables]);
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.remove.apply(this.disposable, [disposable, ...disposables]);
  }

  private executeContinuation(ctx: SchedulerCtx) {
    const { continuation, shouldYield } = ctx;
    ctx.microtaskCount = 0;

    this._inScheduledContinuation = true;
    const result = continuation(shouldYield);
    this._inScheduledContinuation = false;

    if (result !== undefined) {
      const {
        continuation: resultContinuation,
        delay: resultDelay = 0,
      } = result;

      ctx.continuation = resultContinuation;
      ctx.delay = Math.max(resultDelay, 0);

      const scheduledTime = this.now + ctx.delay;
      this.schedulWorkAtTime(ctx, scheduledTime);
    } else {
      ctx.disposable.dispose();
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
    throwIfDisposed(this.disposable);

    const disposable = Disposable.create();

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

  private get next() {
    const now = this.now;
    return this.timeQueue[now] || [];
  }

  private moveNext() {
    delete this.timeQueue[this.now];
    this._now++;
    for (let key in this.timeQueue) {
      if (this.timeQueue.hasOwnProperty(key)) return true;
    }
    return false;
  }

  run() {
    throwIfDisposed(this.disposable);

    while (this.moveNext()) {
      const workQueue = this.next;

      while (workQueue.length > 0) {
        const ctx = workQueue.shift() as SchedulerCtx;
        this.executeContinuation(ctx);
      }
    }

    this.disposable.dispose();
  }
}

export const VirtualTimeScheduler = {
  create: (
    maxMicroTaskCount: number = Number.MAX_SAFE_INTEGER,
  ): VirtualTimeSchedulerLike =>
    new VirtualTimeSchedulerImpl(maxMicroTaskCount),
};

class PerfTestingSchedulerImpl implements VirtualTimeSchedulerLike {
  private readonly disposable: DisposableLike;
  private readonly queue: SchedulerContinuation[] = [];
  readonly now = 0;
  readonly inScheduledContinuation = true;

  constructor() {
    this.disposable = Disposable.create();
    this.disposable.add(() => {
      this.queue.length = 0;
    });
  }

  static shouldYield = () => false;

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.add.apply(this.disposable, [disposable, ...disposables]);
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.remove.apply(this.disposable, [disposable, ...disposables]);
  }

  dispose() {
    this.disposable.dispose();
  }

  schedule(
    continuation: SchedulerContinuation,
    delay: number = 0,
    priority: number = 0,
  ): DisposableLike {
    this.queue.push(continuation);
    return Disposable.create();
  }

  run() {
    throwIfDisposed(this.disposable);

    for (
      let next = this.queue.shift();
      next !== undefined;
      next = this.queue.shift()
    ) {
      next(PerfTestingSchedulerImpl.shouldYield);
    }

    this.disposable.dispose();
  }
}

export const PerfTestingScheduler = {
  create: (): VirtualTimeSchedulerLike => new PerfTestingSchedulerImpl(),
};

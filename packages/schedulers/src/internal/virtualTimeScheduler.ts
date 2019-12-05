import {
  createDisposable,
  DisposableLike,
  DisposableOrTeardown,
  throwIfDisposed,
} from "@reactive-js/disposable";
import {
  createPrioritySchedulerResource,
  HostSchedulerContinuationLike,
  HostSchedulerLike,
  PrioritySchedulerResourceLike,
} from "./prioritySchedulerResource";

import {
  SchedulerContinuation,
  SchedulerLike,
  SchedulerResourceLike,
} from "@reactive-js/scheduler";
import { createPriorityQueue, PriorityQueueLike } from "./priorityQueue";
import { createSchedulerWithPriority } from "./schedulerWithPriority";

interface VirtualTask {
  continuation: HostSchedulerContinuationLike;
  disposable: DisposableLike;
  dueTime: number;
  id: number;
}

const comparator = (a: VirtualTask, b: VirtualTask) => {
  let diff = 0;
  diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
  diff = diff !== 0 ? diff : a.id - b.id;
  return diff;
};

class VirtualTimeSchedulerHostResource
  implements HostSchedulerLike, DisposableLike {
  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  get now(): number {
    return this._now;
  }

  get shouldYield(): boolean {
    this.microTaskTicks++;
    return this.microTaskTicks >= this.maxMicroTaskTicks;
  }
  private _now = 0;
  private readonly disposable = createDisposable();
  private readonly maxMicroTaskTicks: number;
  private microTaskTicks = 0;

  private taskIDCount = 0;
  private readonly taskQueue: PriorityQueueLike<
    VirtualTask
  > = createPriorityQueue(comparator);

  constructor(maxMicroTaskTicks: number) {
    this.maxMicroTaskTicks = maxMicroTaskTicks;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ): void {
    this.disposable.add(disposable, ...disposables);
  }
  dispose(): void {
    this.disposable.dispose();
  }
  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ): void {
    this.disposable.remove(disposable, ...disposables);
  }

  run() {
    while (this.taskQueue.count > 0) {
      const {
        dueTime,
        continuation,
        disposable,
      } = this.taskQueue.pop() as VirtualTask;
      this._now = dueTime;
      this.microTaskTicks = 0;

      if (!disposable.isDisposed) {
        let result: HostSchedulerContinuationLike | undefined = continuation;
        while (result !== undefined) {
          result = continuation();
        }
      }
    }
  }

  schedule(continuation: HostSchedulerContinuationLike, delay = 0): DisposableLike {
    const disposable = createDisposable();
    const work: VirtualTask = {
      id: this.taskIDCount++,
      dueTime: this.now + delay,
      continuation,
      disposable,
    };
    this.taskQueue.push(work);
    return disposable;
  }
}

interface VirtualTimePrioritySchedulerResourceLike
  extends PrioritySchedulerResourceLike {
  run(): void;
}

class VirtualTimePrioritySchedulerResource
  implements VirtualTimePrioritySchedulerResourceLike {
  get isDisposed(): boolean {
    return this.priorityScheduler.isDisposed;
  }
  get now(): number {
    return this.priorityScheduler.now;
  }
  get shouldYield(): boolean {
    return this.priorityScheduler.shouldYield;
  }

  private readonly hostScheduler: VirtualTimeSchedulerHostResource;
  private readonly priorityScheduler: PrioritySchedulerResourceLike;

  constructor(maxMicroTaskTicks: number) {
    this.hostScheduler = new VirtualTimeSchedulerHostResource(
      maxMicroTaskTicks,
    );
    this.priorityScheduler = createPrioritySchedulerResource(
      this.hostScheduler,
    );
    this.hostScheduler.add(this.priorityScheduler);
    this.priorityScheduler.add(() =>
      this.hostScheduler.remove(this.priorityScheduler),
    );
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ): void {
    this.hostScheduler.add(disposable, ...disposables);
  }

  dispose(): void {
    this.hostScheduler.dispose();
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ): void {
    this.hostScheduler.remove(disposable, ...disposables);
  }

  run(): void {
    throwIfDisposed(this);
    this.hostScheduler.run();
    this.dispose();
  }

  schedule(continuation: () => void, priority: number, delay?: number): void {
    this.priorityScheduler.schedule(continuation, priority, delay);
  }
}

const createVirtualTimePriorityScheduler = (
  maxMicroTaskTicks: number,
): VirtualTimePrioritySchedulerResourceLike =>
  new VirtualTimePrioritySchedulerResource(maxMicroTaskTicks);

/** @noInheritDoc */
export interface VirtualTimeSchedulerLike extends SchedulerResourceLike {
  run(): void;
}

class VirtualTimeSchedulerImpl implements VirtualTimeSchedulerLike {
  get inScheduledContinuation(): boolean {
    return this.scheduler.inScheduledContinuation;
  }

  get isDisposed(): boolean {
    return this.priorityScheduler.isDisposed;
  }

  get now(): number {
    return this.scheduler.now;
  }
  private readonly priorityScheduler: VirtualTimePrioritySchedulerResourceLike;
  private readonly scheduler: SchedulerLike;

  constructor(priorityScheduler: VirtualTimePrioritySchedulerResourceLike) {
    this.priorityScheduler = priorityScheduler;
    this.scheduler = createSchedulerWithPriority(priorityScheduler, 0);
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ): void {
    this.priorityScheduler.add(disposable, ...disposables);
  }

  dispose(): void {
    this.priorityScheduler.dispose();
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ): void {
    this.priorityScheduler.remove(disposable, ...disposables);
  }

  run(): void {
    this.priorityScheduler.run();
  }

  schedule(
    continuation: SchedulerContinuation,
    delay?: number,
  ): DisposableLike {
    return this.scheduler.schedule(continuation, delay);
  }
}

export const createVirtualTimeScheduler = (
  maxMicroTaskTicks: number = Number.MAX_SAFE_INTEGER,
): VirtualTimeSchedulerLike =>
  new VirtualTimeSchedulerImpl(
    createVirtualTimePriorityScheduler(maxMicroTaskTicks),
  );

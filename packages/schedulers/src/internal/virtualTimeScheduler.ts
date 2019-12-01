import {
  createDisposable,
  DisposableLike,
  DisposableOrTeardown,
  throwIfDisposed,
} from "@reactive-js/disposable";
import {
  createPrioritySchedulerResource,
  PrioritySchedulerHostLike,
  PrioritySchedulerResourceLike,
} from "./prioritySchedulerResource";

import {
  SchedulerLike,
  SchedulerContinuation,
  SchedulerResourceLike,
} from "@reactive-js/scheduler";
import { createPriorityQueue, PriorityQueueLike } from "./priorityQueue";
import { createSchedulerWithPriority } from "./priorityScheduler";

interface VirtualTimePrioritySchedulerResourceLike
  extends PrioritySchedulerResourceLike {
  run(): void;
}

type VirtualTask = [number, () => void, DisposableLike];
const comparator = ([tA]: VirtualTask, [tB]: VirtualTask) => tA - tB;

class VirtualTimeSchedulerHostResource
  implements PrioritySchedulerHostLike, DisposableLike {
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

  private _now: number = 0;
  private readonly disposable = createDisposable();
  private readonly maxMicroTaskTicks: number;
  private microTaskTicks: number = 0;
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
      const [now, work, disposable] = (this.taskQueue.pop() as VirtualTask);
      this._now = now;
      this.microTaskTicks = 0;

      if (!disposable.isDisposed) {
        work();
      }
    }
  }

  schedule(continuation: () => void, delay: number = 0): DisposableLike {
    const disposable = createDisposable();
    const work: VirtualTask = [this.now + delay, continuation, disposable];
    this.taskQueue.push(work);
    return disposable;
  }
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

  private readonly hostConfig: VirtualTimeSchedulerHostResource;
  private readonly priorityScheduler: PrioritySchedulerResourceLike;

  constructor(maxMicroTaskTicks: number) {
    this.hostConfig = new VirtualTimeSchedulerHostResource(maxMicroTaskTicks);
    this.priorityScheduler = createPrioritySchedulerResource(this.hostConfig);
    this.hostConfig.add(this.priorityScheduler);
    this.priorityScheduler.add(() =>
      this.hostConfig.remove(this.priorityScheduler),
    );
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ): void {
    this.hostConfig.add(disposable, ...disposables);
  }

  dispose(): void {
    this.hostConfig.dispose();
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ): void {
    this.hostConfig.remove(disposable, ...disposables);
  }

  run(): void {
    throwIfDisposed(this);
    this.hostConfig.run();
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

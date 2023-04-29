import { Optional } from "../functions.js";
import {
  CollectionLike,
  DisposableLike,
  IndexedCollectionLike,
  KeyedCollectionLike,
  QueueableLike,
  SchedulerLike,
} from "../util.js";
import {
  __ContinuationLike_activeChild as ContinuationLike_activeChild,
  __ContinuationLike_parent as ContinuationLike_parent,
  __ContinuationLike_run as ContinuationLike_run,
  __ContinuationLike_scheduler as ContinuationLike_scheduler,
  __ContinuationSchedulerLike_schedule as ContinuationSchedulerLike_schedule,
  __DelegatingLike_delegate as DelegatingLike_delegate,
  __MutableKeyedCollectionLike_set as MutableKeyedCollectionLike_set,
  __QueueLike_dequeue as QueueLike_dequeue,
  __QueueLike_head as QueueLike_head,
  __SchedulerTaskLike_continuation as SchedulerTaskLike_continuation,
  __SchedulerTaskLike_dueTime as SchedulerTaskLike_dueTime,
  __SchedulerTaskLike_id as SchedulerTaskLike_id,
  __SerialDisposableLike_current as SerialDisposableLike_current,
  __StackLike_head as StackLike_head,
  __StackLike_pop as StackLike_pop,
} from "./symbols.js";

export {
  ContinuationLike_activeChild,
  ContinuationLike_parent,
  ContinuationLike_run,
  ContinuationLike_scheduler,
  ContinuationSchedulerLike_schedule,
  DelegatingLike_delegate,
  MutableKeyedCollectionLike_set,
  QueueLike_dequeue,
  QueueLike_head,
  SchedulerTaskLike_continuation,
  SchedulerTaskLike_dueTime,
  SchedulerTaskLike_id,
  SerialDisposableLike_current,
  StackLike_pop,
  StackLike_head,
};

export interface DelegatingLike<T> {
  readonly [DelegatingLike_delegate]: T;
}

export interface SerialDisposableLike<
  TDisposable extends DisposableLike = DisposableLike,
> extends DisposableLike {
  get [SerialDisposableLike_current](): TDisposable;
  set [SerialDisposableLike_current](v: TDisposable);
}

export interface StackLike<T = unknown> extends QueueableLike<T> {
  readonly [StackLike_head]: Optional<T>;
  [StackLike_pop](): Optional<T>;
}

export interface QueueLike<T = unknown> extends QueueableLike<T> {
  readonly [QueueLike_head]: Optional<T>;

  [QueueLike_dequeue](): Optional<T>;
}

export interface QueueCollectionLike<T = unknown>
  extends QueueLike<T>,
    CollectionLike {}

export interface MutableKeyedCollectionLike<TKey = unknown, T = unknown>
  extends KeyedCollectionLike<TKey, T> {
  [MutableKeyedCollectionLike_set](key: TKey, value: T): T;
}

export interface MutableIndexedCollectionLike<T = unknown>
  extends IndexedCollectionLike<T>,
    MutableKeyedCollectionLike<number, T> {}

export interface IndexedQueueLike<T = unknown>
  extends QueueLike<T>,
    MutableIndexedCollectionLike<T>,
    StackLike<T> {}

export interface ContinuationLike
  extends DisposableLike,
    QueueableLike<ContinuationLike>,
    CollectionLike {
  readonly [ContinuationLike_activeChild]: Optional<ContinuationLike>;
  readonly [ContinuationLike_scheduler]: ContinuationSchedulerLike;

  [ContinuationLike_parent]: Optional<ContinuationLike>;

  [ContinuationLike_run](): void;
}

export interface ContinuationSchedulerLike extends SchedulerLike {
  [ContinuationSchedulerLike_schedule](
    continuation: ContinuationLike,
    options?: { readonly delay?: number },
  ): void;
}

export interface SchedulerTaskLike {
  readonly [SchedulerTaskLike_continuation]: ContinuationLike;
  [SchedulerTaskLike_dueTime]: number;
  [SchedulerTaskLike_id]: number;
}
